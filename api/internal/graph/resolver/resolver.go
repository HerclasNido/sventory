package resolver

//go:generate go run github.com/99designs/gqlgen generate

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import (
	"sventory/internal/auth"
	"sventory/internal/graph/generated"
	"sventory/internal/graph/model"

	"github.com/99designs/gqlgen/graphql"
)

type Resolver struct {
	users                 []*model.User
	roles                 []*model.Role
	userRoles             []*model.UserRole
	permissions           []*model.Permission
	rolePermissions       []*model.RolePermission
	organizations         []*model.Organization
	userOrganization      []*model.UserOrganization
	places                []*model.Place
	locations             []*model.Location
	items                 []*model.Item
	itemCategory          []*model.ItemCategory
	inventoryTransactions []*model.InventoryTransaction
	transactionItems      []*model.TransactionItem
	integrationConfigs    []*model.IntegrationConfig
	suppliers             []*model.Supplier
	supplierItems         []*model.SupplierItem
	customerAccounts      []*model.CustomerAccount

	// PermissionChecker *auth.PermissionChecker
	PermChecker *auth.PermissionChecker
}

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Configure the Upload scalar to accept file uploads
func (r *Resolver) Upload() graphql.Upload { return graphql.Upload{} }
