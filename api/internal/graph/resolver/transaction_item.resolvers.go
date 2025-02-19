package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.63

import (
	"context"
	"sventory/internal/database"
	"sventory/internal/graph/generated"
	"sventory/internal/graph/model"

	"github.com/google/uuid"
)

// AddTransactionItem is the resolver for the addTransactionItem field.
func (r *mutationResolver) AddTransactionItem(ctx context.Context, input model.AddTransactionItemInput) (*model.TransactionItem, error) {
	transactionID, err := parseUUID(input.TransactionID)
	if err != nil {
		return nil, err
	}

	itemID, err := parseUUID(input.ItemID)
	if err != nil {
		return nil, err
	}

	transactionItem := &model.TransactionItem{
		TransactionID: transactionID,
		ItemID:        itemID,
		Quantity:      input.Quantity,
		BatchNumber:   *input.BatchNumber,
		Reason:        *input.Reason,
		Notes:         *input.Notes,
	}

	if input.FromLocationID != nil {
		fromLocationID, err := parseUUID(getStringValue(input.FromLocationID))
		if err != nil {
			return nil, err
		}
		transactionItem.FromLocationID = fromLocationID
	}

	if input.ToLocationID != nil {
		toLocationID, err := parseUUID(getStringValue(input.ToLocationID))
		if err != nil {
			return nil, err
		}
		transactionItem.ToLocationID = toLocationID
	}

	if err := database.DB.Create(transactionItem).Error; err != nil {
		return nil, err
	}

	return transactionItem, nil
}

// UpdateTransactionItem is the resolver for the updateTransactionItem field.
func (r *mutationResolver) UpdateTransactionItem(ctx context.Context, id string, input model.UpdateTransactionItemInput) (*model.TransactionItem, error) {
	entityID, err := parseUUID(id)
	if err != nil {
		return nil, err
	}
	var transactionItem model.TransactionItem

	if err := database.DB.First(&transactionItem, "id = ?", entityID).Error; err != nil {
		return nil, err
	}

	if input.FromLocationID != nil {
		fromLocationID, err := parseUUID(getStringValue(input.FromLocationID))
		if err != nil {
			return nil, err
		}
		transactionItem.FromLocationID = fromLocationID
	}

	if input.ToLocationID != nil {
		toLocationID, err := parseUUID(getStringValue(input.ToLocationID))
		if err != nil {
			return nil, err
		}
		transactionItem.ToLocationID = toLocationID
	}

	if input.Quantity != nil {
		transactionItem.Quantity = *input.Quantity
	}

	if input.BatchNumber != nil {
		transactionItem.BatchNumber = *input.BatchNumber
	}

	if input.Reason != nil {
		transactionItem.Reason = *input.Reason
	}

	if input.Notes != nil {
		transactionItem.Notes = *input.Notes
	}

	if err := database.DB.Save(&transactionItem).Error; err != nil {
		return nil, err
	}

	return &transactionItem, nil
}

// RemoveTransactionItem is the resolver for the removeTransactionItem field.
func (r *mutationResolver) RemoveTransactionItem(ctx context.Context, id string) (bool, error) {
	entityID, err := parseUUID(id)
	if err != nil {
		return false, err
	}
	if err := database.DB.Delete(&model.TransactionItem{}, "id = ?", entityID).Error; err != nil {
		return false, err
	}

	return true, nil
}

// ID is the resolver for the id field.
func (r *transactionItemResolver) ID(ctx context.Context, obj *model.TransactionItem) (string, error) {
	return obj.ID.String(), nil
}

// Transaction is the resolver for the transaction field.
func (r *transactionItemResolver) Transaction(ctx context.Context, obj *model.TransactionItem) (*model.InventoryTransaction, error) {
	var transaction model.InventoryTransaction

	if err := database.DB.First(&transaction, "id = ?", obj.TransactionID).Error; err != nil {
		return nil, err
	}

	return &transaction, nil
}

// Item is the resolver for the item field.
func (r *transactionItemResolver) Item(ctx context.Context, obj *model.TransactionItem) (*model.Item, error) {
	var item model.Item

	if err := database.DB.First(&item, "id = ?", obj.ItemID).Error; err != nil {
		return nil, err
	}

	return &item, nil
}

// FromLocation is the resolver for the fromLocation field.
func (r *transactionItemResolver) FromLocation(ctx context.Context, obj *model.TransactionItem) (*model.Location, error) {
	var storageArea model.Location

	if obj.FromLocationID == uuid.Nil {
		return nil, nil
	}

	if err := database.DB.First(&storageArea, "id = ?", obj.FromLocationID).Error; err != nil {
		return nil, err
	}

	return &storageArea, nil
}

// ToLocation is the resolver for the toLocation field.
func (r *transactionItemResolver) ToLocation(ctx context.Context, obj *model.TransactionItem) (*model.Location, error) {
	var storageArea model.Location

	if obj.ToLocationID == uuid.Nil {
		return nil, nil
	}

	if err := database.DB.First(&storageArea, "id = ?", obj.ToLocationID).Error; err != nil {
		return nil, err
	}

	return &storageArea, nil
}

// TransactionItem returns generated.TransactionItemResolver implementation.
func (r *Resolver) TransactionItem() generated.TransactionItemResolver {
	return &transactionItemResolver{r}
}

type transactionItemResolver struct{ *Resolver }
