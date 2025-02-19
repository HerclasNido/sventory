package initializer

import (
	"errors"
	"fmt"
	"os"
	"sventory/internal/database"
	"sventory/internal/graph/model"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func FirstTimeInitialization() error {
	organizationID, err := existingOrganization()
	if err != nil {
		return fmt.Errorf("checking organization existence: %w", err)
	}

	if organizationID == uuid.Nil {
		if organizationID, err = createOrganization(); err != nil {
			return fmt.Errorf("creating organization: %w", err)
		}
	}

	superAdmin, err := SuperAdminExists()
	if err != nil {
		return fmt.Errorf("checking super admin existence: %w", err)
	}
	if !superAdmin {
		if err := CreateSuperAdmin(organizationID); err != nil {
			return fmt.Errorf("creating super admin: %w", err)
		}
	}

	return nil
}

func existingOrganization() (uuid.UUID, error) {
	var organizationCount int64
	err := database.DB.Model(&model.Organization{}).Count(&organizationCount).Error
	if err != nil {
		return uuid.Nil, err
	}

	if organizationCount > 0 {
		var organization model.Organization
		err := database.DB.First(&organization).Error
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return uuid.Nil, nil
		}
		if err != nil {
			return uuid.Nil, err
		}
		return organization.ID, nil
	}
	return uuid.Nil, nil
}

func createOrganization() (uuid.UUID, error) {
	organizationName := os.Getenv("ORGANIZATION_NAME")
	if organizationName == "" {
		return uuid.Nil, fmt.Errorf("ORGANIZATION_NAME environment variable is not set")
	}

	superadminEmail := os.Getenv("SUPERADMIN_EMAIL")
	if superadminEmail == "" {
		return uuid.Nil, fmt.Errorf("SUPERADMIN_EMAIL environment variable is not set")
	}

	organization := model.Organization{
		Name:       organizationName,
		AdminEmail: superadminEmail,
	}
	if err := database.DB.Create(&organization).Error; err != nil {
		return uuid.Nil, fmt.Errorf("creating organization: %w", err)
	}

	// Get the newly created organization
	var newOrganization model.Organization
	if err := database.DB.First(&newOrganization, "id = ?", organization.ID).Error; err != nil {
		return uuid.Nil, fmt.Errorf("finding organization: %w", err)
	}

	return newOrganization.ID, nil
}

func SuperAdminExists() (bool, error) {
	superAdminEmail := os.Getenv("SUPERADMIN_EMAIL")
	if superAdminEmail == "" {
		return false, fmt.Errorf("SUPERADMIN_EMAIL environment variable is not set")
	}

	var superAdminCount int64
	err := database.DB.Model(&model.User{}).Where("email = ?", superAdminEmail).Count(&superAdminCount).Error
	if err != nil {
		return false, fmt.Errorf("checking super admin existence: %w", err)
	}

	return superAdminCount > 0, nil
}

func CreateSuperAdmin(organizationID uuid.UUID) error {
	superAdminEmail := os.Getenv("SUPERADMIN_EMAIL")
	if superAdminEmail == "" {
		return fmt.Errorf("SUPERADMIN_EMAIL environment variable is not set")
	}

	superAdminPassword := os.Getenv("SUPERADMIN_PASSWORD")
	if superAdminPassword == "" {
		return fmt.Errorf("SUPERADMIN_PASSWORD environment variable is not set")
	}

	// Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(superAdminPassword), bcrypt.DefaultCost)
	if err != nil {
		return fmt.Errorf("hashing password: %w", err)
	}

	// Create super admin
	superAdmin := model.User{
		Email:     superAdminEmail,
		Password:  string(hashedPassword),
		FirstName: "Super",
		LastName:  "Admin",
	}
	if err := database.DB.Create(&superAdmin).Error; err != nil {
		return fmt.Errorf("creating super admin: %w", err)
	}

	// Assign organization
	var organization model.Organization
	if err := database.DB.First(&organization, "id = ?", organizationID).Error; err != nil {
		return fmt.Errorf("finding organization: %w", err)
	}
	if err := database.DB.Model(&superAdmin).Association("Organizations").Append(&organization); err != nil {
		return fmt.Errorf("assigning organization: %w", err)
	}

	// Assign super admin role
	var superAdminRole model.Role
	if err := database.DB.Where("name = ?", "SuperAdmin").First(&superAdminRole).Error; err != nil {
		return fmt.Errorf("finding super admin role: %w", err)
	}
	if err := database.DB.Model(&superAdmin).Association("Roles").Append(&superAdminRole); err != nil {
		return fmt.Errorf("assigning super admin role: %w", err)
	}

	return nil
}
