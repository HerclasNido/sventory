package main

import (
	"fmt"
	"log"

	"sventory/internal/database"
	"sventory/internal/initializer"
	"sventory/internal/server"
)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run() error {
	// Load environment variables
	if err := initializer.LoadEnv(); err != nil {
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
	permChecker, err := initializer.InitializeAuth()
	if err != nil {
		return fmt.Errorf("initializing auth system: %w", err)
	}

	// First time initialization
	if err := initializer.FirstTimeInitialization(); err != nil {
		return fmt.Errorf("first time initialization failed: %w", err)
	}

	// Print super admin JWT for testing
	// initializer.PrintSuperAdminJWT()

	// Setup and start server
	if err := server.StartServer(permChecker); err != nil {
		return fmt.Errorf("starting server: %w", err)
	}

	return nil
}
