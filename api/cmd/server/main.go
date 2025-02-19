package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/extension"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"

	"sventory/internal/auth"
	"sventory/internal/database"
	"sventory/internal/graph/generated"
	"sventory/internal/graph/resolver"
	"sventory/internal/initializer"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run() error {
	// Load environment variables
	if err := loadEnv(); err != nil {
		return fmt.Errorf("loading environment variables: %w", err)
	}

	// Initialize database
	if err := database.InitDB(); err != nil {
		return fmt.Errorf("initializing database: %w", err)
	}
	sqlDB, err := database.DB.DB()
	if err != nil {
		return fmt.Errorf("getting underlying database connection: %w", err)
	}
	defer sqlDB.Close()

	// Initialize auth system
	permChecker, err := initializeAuth()
	if err != nil {
		return fmt.Errorf("initializing auth system: %w", err)
	}

	// First time initialization
	if err := initializer.FirstTimeInitialization(); err != nil {
		return fmt.Errorf("first time initialization failed: %w", err)
	}

	// printSuperAdminJWT()

	// Setup and start server
	if err := startServer(permChecker); err != nil {
		return fmt.Errorf("starting server: %w", err)
	}

	return nil
}

func loadEnv() error {
	if err := godotenv.Load(); err != nil {
		log.Printf("Warning: .env file not found")
	}

	requiredEnvVars := []string{
		"PORT",
		"DB_HOST",
		"DB_USER",
		"DB_NAME",
		"DB_PORT",
		"FRONTEND_URL",
		"JWT_SECRET",
		"ORGANIZATION_NAME",
		"SUPERADMIN_EMAIL",
		"SUPERADMIN_PASSWORD",
	}
	for _, v := range requiredEnvVars {
		if os.Getenv(v) == "" {
			return fmt.Errorf("required environment variable %s not set", v)
		}
	}

	return nil
}

func initializeAuth() (*auth.PermissionChecker, error) {
	// Initialize roles and permissions
	if err := auth.InitializeRolesAndPermissions(database.DB); err != nil {
		return nil, fmt.Errorf("initializing roles and permissions: %w", err)
	}

	// Create permission checker
	permCheck := auth.NewPermissionChecker(database.DB)

	return permCheck, nil
}

// func printSuperAdminJWT() {
// 	superAdmin, err := auth.AuthenticateUser(os.Getenv("SUPERADMIN_EMAIL"), os.Getenv("SUPERADMIN_PASSWORD"))
// 	if err != nil {
// 		log.Fatalf("failed to authenticate superadmin: %v", err)
// 	}
// 	superAdminToken, err := auth.GenerateToken(superAdmin.ID, uuid.New())
// 	if err != nil {
// 		log.Fatalf("failed to generate token for superadmin: %v", err)
// 	}
// 	log.Printf("Superadmin JWT: %s", superAdminToken)
// }

func startServer(permChecker *auth.PermissionChecker) error {
	// Initialize GraphQL server
	srv := handler.New(generated.NewExecutableSchema(generated.Config{
		Resolvers: &resolver.Resolver{
			PermChecker: permChecker,
		},
	}))

	// Configure server
	srv.AddTransport(transport.GET{})
	srv.AddTransport(transport.POST{})
	srv.AddTransport(transport.MultipartForm{
		MaxMemory:     5 << 20, // 5 MB
		MaxUploadSize: 5 << 20, // 5 MB
	})
	srv.Use(extension.Introspection{})

	// Setup routes
	router := http.NewServeMux()
	router.Handle("/", playground.Handler("GraphQL playground", "/graphql"))
	router.Handle("/graphql", enableCORS(auth.Middleware()(srv)))
	router.Handle("/uploads/", enableCORS(
		auth.Middleware()(http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads")))),
	))

	// Get port from environment
	port := os.Getenv("PORT")
	if port == "" {
		port = "7836"
	}

	// Start server
	serverAddr := ":" + port
	log.Printf("Connect to http://localhost%s/ for GraphQL playground", serverAddr)

	server := &http.Server{
		Addr:    serverAddr,
		Handler: router,
	}

	return server.ListenAndServe()
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", os.Getenv("FRONTEND_URL"))
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization, X-CSRF-Token")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}
