package resolver

import (
	"context"
	"fmt"
	"strings"
	"sventory/internal/graph/generated"
	"sventory/internal/graph/model"
)

// ValidOperators contains all allowed filter operators
var ValidOperators = map[string]bool{
	"eq":    true,
	"neq":   true,
	"gt":    true,
	"lt":    true,
	"gte":   true,
	"lte":   true,
	"like":  true,
	"ilike": true,
	"in":    true,
}

// Operator validates and sets the operator for a filter input
func (r *filterInputResolver) Operator(ctx context.Context, obj *model.FilterInput, data string) error {
	// Convert to lowercase for case-insensitive comparison
	op := strings.ToLower(data)

	// Check if the operator is valid
	if !ValidOperators[op] {
		return fmt.Errorf("invalid operator: %s. Valid operators are: eq, neq, gt, lt, gte, lte, like, ilike, in", data)
	}

	obj.Operator = model.FilterOperator(op)
	return nil
}

// Value validates and sets the value for a filter input
func (r *filterInputResolver) Value(ctx context.Context, obj *model.FilterInput, data string) error {
	// Don't allow empty values unless it's explicitly needed
	if data == "" {
		return fmt.Errorf("filter value cannot be empty")
	}

	// Special handling for 'in' operator
	if obj.Operator == "in" {
		// Split the comma-separated string into a slice
		values := strings.Split(data, ",")
		// Trim whitespace from each value
		for i, v := range values {
			values[i] = strings.TrimSpace(v)
		}
		obj.Value = values
		return nil
	}

	// Handle 'like' and 'ilike' operators
	if obj.Operator == "like" || obj.Operator == "ilike" {
		// Ensure the value doesn't already contain SQL wildcards
		cleanValue := strings.ReplaceAll(data, "%", "")
		cleanValue = strings.ReplaceAll(cleanValue, "_", "")
		obj.Value = cleanValue
		return nil
	}

	// For all other operators, just set the value directly
	obj.Value = data
	return nil
}

// FilterInput returns generated.FilterInputResolver implementation.
func (r *Resolver) FilterInput() generated.FilterInputResolver { return &filterInputResolver{r} }

type filterInputResolver struct{ *Resolver }
