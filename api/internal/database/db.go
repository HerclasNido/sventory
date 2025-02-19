package database

import (
	"fmt"
	"log"
	"os"
	"sventory/internal/graph/model"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() error {
	dbURL := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	var err error
	DB, err = gorm.Open(postgres.Open(dbURL), &gorm.Config{})
	if err != nil {
		return fmt.Errorf("failed to connect to database: %v", err)
	}

	/*
		DANGER! THIS WILL DROP THE SELECTED TABLES
		USE IN DEVELOPMENT ENVIRONMENT ONLY
	*/
	DB.Migrator().DropTable(
	// &model.User{},
	// &model.Role{},
	// &model.UserRole{},
	// &model.Permission{},
	// &model.RolePermission{},
	// &model.Organization{},
	// &model.UserOrganization{},
	// &model.Place{},
	// &model.Location{},
	// &model.Item{},
	// &model.ItemCategory{},
	// &model.InventoryTransaction{},
	// &model.TransactionItem{},
	// &model.IntegrationConfig{},
	// &model.Supplier{},
	// &model.SupplierItem{},
	// &model.CustomerAccount{},
	)

	// Auto-migrate models
	err = DB.AutoMigrate(
		&model.User{},
		&model.Role{},
		&model.UserRole{},
		&model.Permission{},
		&model.RolePermission{},
		&model.Organization{},
		&model.UserOrganization{},
		&model.Place{},
		&model.Location{},
		&model.Item{},
		&model.ItemCategory{},
		&model.InventoryTransaction{},
		&model.TransactionItem{},
		&model.IntegrationConfig{},
		&model.Supplier{},
		&model.SupplierItem{},
		&model.CustomerAccount{},
	)
	if err != nil {
		return fmt.Errorf("failed to migrate database: %v", err)
	}

	log.Println("Successfully connected to database and migrated schemas")
	return nil
}
