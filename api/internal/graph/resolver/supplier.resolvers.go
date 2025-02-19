package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.63

import (
	"context"
	"sventory/internal/database"
	"sventory/internal/graph/generated"
	"sventory/internal/graph/model"
)

// CreateSupplier is the resolver for the createSupplier field.
func (r *mutationResolver) CreateSupplier(ctx context.Context, input model.CreateSupplierInput) (*model.Supplier, error) {
	organizationID, err := parseUUID(input.OrganizationID)
	if err != nil {
		return nil, err
	}

	supplier := model.Supplier{
		OrganizationID: organizationID,
		Name:           input.Name,
		Email:          getStringValue(input.Email),
		Phone:          getStringValue(input.Phone),
		AddressLine1:   getStringValue(input.AddressLine1),
		AddressLine2:   getStringValue(input.AddressLine2),
		City:           getStringValue(input.City),
		State:          getStringValue(input.State),
		PostalCode:     getStringValue(input.PostalCode),
		Country:        getStringValue(input.Country),
		PaymentTerms:   getStringValue(input.PaymentTerms),
		TaxID:          getStringValue(input.TaxID),
		Notes:          getStringValue(input.Notes),
		Status:         input.Status,
	}

	if err := database.DB.Create(&supplier).Error; err != nil {
		return nil, err
	}

	return &supplier, nil
}

// UpdateSupplier is the resolver for the updateSupplier field.
func (r *mutationResolver) UpdateSupplier(ctx context.Context, id string, input model.UpdateSupplierInput) (*model.Supplier, error) {
	entityID, err := parseUUID(id)
	if err != nil {
		return nil, err
	}
	var supplier model.Supplier

	if err := database.DB.First(&supplier, "id = ?", entityID).Error; err != nil {
		return nil, err
	}

	if input.Name != nil {
		supplier.Name = *input.Name
	}

	if input.Email != nil {
		supplier.Email = *input.Email
	}

	if input.Phone != nil {
		supplier.Phone = *input.Phone
	}

	if input.AddressLine1 != nil {
		supplier.AddressLine1 = *input.AddressLine1
	}

	if input.AddressLine2 != nil {
		supplier.AddressLine2 = *input.AddressLine2
	}

	if input.City != nil {
		supplier.City = *input.City
	}

	if input.State != nil {
		supplier.State = *input.State
	}

	if input.PostalCode != nil {
		supplier.PostalCode = *input.PostalCode
	}

	if input.Country != nil {
		supplier.Country = *input.Country
	}

	if input.PaymentTerms != nil {
		supplier.PaymentTerms = *input.PaymentTerms
	}

	if input.TaxID != nil {
		supplier.TaxID = *input.TaxID
	}

	if input.Notes != nil {
		supplier.Notes = *input.Notes
	}

	if input.Status != nil {
		supplier.Status = *input.Status
	}

	if err := database.DB.Save(&supplier).Error; err != nil {
		return nil, err
	}

	return &supplier, nil
}

// DeleteSupplier is the resolver for the deleteSupplier field.
func (r *mutationResolver) DeleteSupplier(ctx context.Context, id string) (bool, error) {
	entityID, err := parseUUID(id)
	if err != nil {
		return false, err
	}
	if err := database.DB.Delete(&model.Supplier{}, "id = ?", entityID).Error; err != nil {
		return false, err
	}
	return true, nil
}

// Suppliers is the resolver for the suppliers field.
func (r *queryResolver) Suppliers(ctx context.Context, options *model.QueryOptions) ([]*model.Supplier, error) {
	var suppliers []*model.Supplier

	query := database.DB.Model(&model.Supplier{})

	if options != nil {
		var err error
		query, err = model.ApplyQueryOptions(query, *options, &model.Supplier{})
		if err != nil {
			return nil, err
		}
	}

	if err := query.Find(&suppliers).Error; err != nil {
		return nil, err
	}
	return suppliers, nil
}

// Supplier is the resolver for the supplier field.
func (r *queryResolver) Supplier(ctx context.Context, id string) (*model.Supplier, error) {
	entityID, err := parseUUID(id)
	if err != nil {
		return nil, err
	}
	var supplier model.Supplier
	if err := database.DB.First(&supplier, "id = ?", entityID).Error; err != nil {
		return nil, err
	}

	return &supplier, nil
}

// ID is the resolver for the id field.
func (r *supplierResolver) ID(ctx context.Context, obj *model.Supplier) (string, error) {
	return obj.ID.String(), nil
}

// Organization is the resolver for the organization field.
func (r *supplierResolver) Organization(ctx context.Context, obj *model.Supplier) (*model.Organization, error) {
	var organization model.Organization
	if err := database.DB.First(&organization, "id = ?", obj.OrganizationID).Error; err != nil {
		return nil, err
	}
	return &organization, nil
}

// Items is the resolver for the items field.
func (r *supplierResolver) Items(ctx context.Context, obj *model.Supplier) ([]*model.SupplierItem, error) {
	var items []*model.SupplierItem
	if err := database.DB.Model(obj).Association("Items").Find(&items); err != nil {
		return nil, err
	}
	return items, nil
}

// Supplier returns generated.SupplierResolver implementation.
func (r *Resolver) Supplier() generated.SupplierResolver { return &supplierResolver{r} }

type supplierResolver struct{ *Resolver }
