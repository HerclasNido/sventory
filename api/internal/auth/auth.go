package auth

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"strings"
	"sventory/internal/database"
	"sventory/internal/graph/model"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type Claims struct {
	UserID uuid.UUID `json:"user_id"`
	OrgID  uuid.UUID `json:"org_id"`
	jwt.RegisteredClaims
}

func AuthenticateUser(email string, password string) (*model.User, error) {
	var user model.User
	if err := database.DB.Where("email = ?", email).Preload("Organizations").First(&user).Error; err != nil {
		return nil, fmt.Errorf("finding user: %w", err)
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, fmt.Errorf("invalid password")
	}

	return &user, nil
}

func GenerateToken(userID uuid.UUID, orgID uuid.UUID) (string, error) {
	claims := Claims{
		UserID: userID,
		OrgID:  orgID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(os.Getenv("JWT_SECRET")))
}

func ValidateToken(tokenString string) (*Claims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("JWT_SECRET")), nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims, nil
	}

	return nil, fmt.Errorf("invalid token")
}

func Middleware() func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

			// Log request
			fmt.Printf("Received %s request to %s from %s\n", r.Method, r.URL.Path, r.RemoteAddr)

			// Used to allow full access to the playground
			origin := r.Header.Get("Origin")
			if origin == "http://localhost:7836" {
				ctx := context.WithValue(r.Context(), IsPlaygroundKey, true)
				next.ServeHTTP(w, r.WithContext(ctx))
				return
			}

			// Allow authenticated access to certain routes (ex. login)
			header := r.Header.Get("Authorization")
			if header == "" {
				// For requests without a token, set default values.
				ctx := context.WithValue(r.Context(), isUnauthenticated, true)
				next.ServeHTTP(w, r.WithContext(ctx))
				return
			}

			tokenString := strings.Replace(header, "Bearer ", "", 1)
			claims, err := ValidateToken(tokenString)
			if err != nil {
				http.Error(w, "Invalid token", http.StatusUnauthorized)
				return
			}

			ctx := CreateContext(r, claims)

			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}
