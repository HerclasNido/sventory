package auth

import (
	"context"
	"errors"
	"fmt"

	"sventory/internal/graph/model"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

var (
	ErrUnauthorized = errors.New("unauthorized")
	ErrForbidden    = errors.New("forbidden")
)

// Resource represents a system resource that can be protected
type Resource string

// Action represents operations that can be performed on resources
type Action string

const (
	// Actions
	ActionList   Action = "list"
	ActionCreate Action = "create"
	ActionUpdate Action = "update"
	ActionDelete Action = "delete"

	// Resources
	ResourceUsers                 Resource = "users"
	ResourceRoles                 Resource = "roles"
	ResourcePermissions           Resource = "permissions"
	ResourceOrganizations         Resource = "organizations"
	ResourceLocations             Resource = "locations"
	ResourcePlaces                Resource = "places"
	ResourceItems                 Resource = "items"
	ResourceItemCategories        Resource = "item_categories"
	ResourceInventoryTransactions Resource = "inventory_transactions"
	ResourceTransactionItems      Resource = "transaction_items"
	ResourceIntegrationConfigs    Resource = "integration_configs"
	ResourceSuppliers             Resource = "suppliers"
	ResourceSupplierItems         Resource = "supplier_items"
	ResourceCustomerAccounts      Resource = "customer_accounts"
	ResourceUserRoles             Resource = "user_roles"
	ResourceRolePermissions       Resource = "role_permissions"
	ResourceUserOrganizations     Resource = "user_organizations"
)

// PermissionBuilder helps construct permission strings
type PermissionBuilder struct {
	resource Resource
	action   Action
	scope    string
}

// NewPermission creates a new permission builder
func NewPermission(resource Resource) *PermissionBuilder {
	return &PermissionBuilder{resource: resource}
}

// WithAction adds an action to the permission
func (pb *PermissionBuilder) WithAction(action Action) *PermissionBuilder {
	pb.action = action
	return pb
}

// WithScope adds a scope to the permission
func (pb *PermissionBuilder) WithScope(scope string) *PermissionBuilder {
	pb.scope = scope
	return pb
}

// Build creates the permission string
func (pb *PermissionBuilder) Build() string {
	if pb.scope != "" {
		return fmt.Sprintf("%s:%s:%s", pb.resource, pb.action, pb.scope)
	}
	return fmt.Sprintf("%s:%s", pb.resource, pb.action)
}

// PermissionChecker handles permission verification
type PermissionChecker struct {
	db *gorm.DB
}

func NewPermissionChecker(db *gorm.DB) *PermissionChecker {
	return &PermissionChecker{db: db}
}

// HasPermission checks if the user has the required permission
func (pc *PermissionChecker) HasPermission(ctx context.Context, permission string) error {
	userID := GetUserIDFromContext(ctx)

	// Check if user is SuperAdmin (bypass all checks)
	if pc.isSuperAdmin(userID) {
		return nil
	}

	// Check specific permission
	var count int64
	err := pc.db.Model(&model.Permission{}).
		Joins("JOIN role_permissions ON permissions.id = role_permissions.permission_id").
		Joins("JOIN user_roles ON role_permissions.role_id = user_roles.role_id").
		Where("user_roles.user_id = ? AND permissions.name = ?", userID, permission).
		Count(&count).Error

	if err != nil {
		return err
	}

	if count == 0 {
		return ErrForbidden
	}

	return nil
}

// isSuperAdmin checks if the user has the SuperAdmin role
func (pc *PermissionChecker) isSuperAdmin(userID uuid.UUID) bool {
	var count int64
	pc.db.Model(&model.Role{}).
		Joins("JOIN user_roles ON roles.id = user_roles.role_id").
		Where("user_roles.user_id = ? AND roles.name = ?", userID, "SuperAdmin").
		Count(&count)
	return count > 0
}

// CheckPermission is a helper function that combines permission building and checking
func (pc *PermissionChecker) CheckPermission(ctx context.Context, resource Resource, action Action, scope ...string) error {
	pb := NewPermission(resource).WithAction(action)
	if len(scope) > 0 {
		pb.WithScope(scope[0])
	}
	return pc.HasPermission(ctx, pb.Build())
}

// Common permission check methods
func (pc *PermissionChecker) CanUpdateUser(ctx context.Context, targetUserID uuid.UUID) error {
	userID := GetUserIDFromContext(ctx)

	// Users can modify themselves
	if userID == targetUserID {
		return pc.CheckPermission(ctx, ResourceUsers, ActionUpdate, "self")
	}

	// Check if user has permission to modify other users
	return pc.CheckPermission(ctx, ResourceUsers, ActionUpdate, "others")
}
