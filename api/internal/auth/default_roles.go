package auth

import (
	"sventory/internal/graph/model"

	"gorm.io/gorm"
)

type PredefinedRole struct {
	Name        string
	Permissions []string
}

var (
	SuperAdminRole = PredefinedRole{
		Name:        "SuperAdmin",
		Permissions: []string{"*"},
	}

	UserRole = PredefinedRole{
		Name: "User",
		Permissions: []string{
			"users:list:self",
			"users:update:self",
		},
	}
)

func InitializeRolesAndPermissions(db *gorm.DB) error {
	// Create permissions
	for _, role := range []PredefinedRole{SuperAdminRole, UserRole} {
		dbRole := &model.Role{
			Name: role.Name,
		}

		if err := db.FirstOrCreate(dbRole, model.Role{Name: role.Name}).Error; err != nil {
			return err
		}

		// Create permissions
		for _, permName := range role.Permissions {
			perm := &model.Permission{
				Name: permName,
			}
			if err := db.FirstOrCreate(perm, model.Permission{Name: permName}).Error; err != nil {
				return err
			}

			// Associate permission with role
			rolePerm := &model.RolePermission{
				RoleID:       dbRole.ID,
				PermissionID: perm.ID,
			}
			if err := db.FirstOrCreate(rolePerm, model.RolePermission{
				RoleID:       dbRole.ID,
				PermissionID: perm.ID,
			}).Error; err != nil {
				return err
			}
		}
	}

	return nil
}
