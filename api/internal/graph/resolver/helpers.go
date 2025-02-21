package resolver

import (
	"context"
	"fmt"
	"sventory/internal/auth"

	"golang.org/x/crypto/bcrypt"
)

// CheckPermission checks if the current user has the given permission.
// It returns an error if the user is not authorized.  It handles
// unauthorized and forbidden errors specifically.
func CheckPermission(ctx context.Context, permCheck *auth.PermissionChecker, permissionName string) error {
	// Allow playground to bypass permission checks
	if auth.GetIsPlaygroundFromContext(ctx) {
		return nil
	}

	if err := permCheck.HasPermission(ctx, permissionName); err != nil {
		if err == auth.ErrUnauthorized {
			return fmt.Errorf("unauthorized")
		}
		if err == auth.ErrForbidden {
			return fmt.Errorf("forbidden")
		}
		return fmt.Errorf("error checking permissions: %w", err)
	}
	return nil
}

func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

func getStringValue(value *string) string {
	if value == nil {
		return ""
	}
	return *value
}

func getIntValue(value *int) int {
	if value == nil {
		return 0
	}
	return *value
}

func getFloatValue(value *float64) float64 {
	if value == nil {
		return 0
	}
	return *value
}

func getBoolValue(value *bool) bool {
	if value == nil {
		return false
	}
	return *value
}
