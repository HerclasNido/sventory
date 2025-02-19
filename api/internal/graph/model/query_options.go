package model

import (
	"fmt"
	"strings"

	"gorm.io/gorm"
)

// FilterOperator represents available filter operations
type FilterOperator string

const (
	Eq    FilterOperator = "eq"    // Equal
	Neq   FilterOperator = "neq"   // Not equal
	Gt    FilterOperator = "gt"    // Greater than
	Lt    FilterOperator = "lt"    // Less than
	Gte   FilterOperator = "gte"   // Greater than or equal
	Lte   FilterOperator = "lte"   // Less than or equal
	Like  FilterOperator = "like"  // SQL LIKE
	Ilike FilterOperator = "ilike" // Case-insensitive SQL LIKE
	In    FilterOperator = "in"    // SQL IN
)

// FilterInput represents a single filter condition
type FilterInput struct {
	Field    string         `json:"field"`
	Operator FilterOperator `json:"operator"`
	Value    interface{}    `json:"value"`
}

// SortInput represents sorting parameters
type SortInput struct {
	Field     string `json:"field"`
	Direction string `json:"direction"` // "asc" or "desc"
}

// PaginationInput represents pagination parameters
type PaginationInput struct {
	Skip *int `json:"skip"`
	Take *int `json:"take"`
}

// QueryOptions combines all query modification options
type QueryOptions struct {
	Filters    []FilterInput    `json:"filters"`
	Sort       []SortInput      `json:"sort"`
	Pagination *PaginationInput `json:"pagination"`
}

// ApplyQueryOptions updates to use the new mapping system
func ApplyQueryOptions(db *gorm.DB, opts QueryOptions, model interface{}) (*gorm.DB, error) {
	// Initialize mappings for the model if not already done
	if err := globalMapping.initializeModelMapping(db, model); err != nil {
		return db, err
	}

	stmt := &gorm.Statement{DB: db}
	if err := stmt.Parse(model); err != nil {
		return db, err
	}
	modelName := stmt.Schema.Name

	query := db

	// Apply filters
	for _, filter := range opts.Filters {
		mapping, exists := globalMapping.GetFieldMapping(modelName, filter.Field)
		if !exists {
			return db, fmt.Errorf("invalid field name: %s", filter.Field)
		}

		dbField := mapping.DBColumn
		switch filter.Operator {
		case Eq:
			query = query.Where(fmt.Sprintf("%s = ?", dbField), filter.Value)
		case Neq:
			query = query.Where(fmt.Sprintf("%s != ?", dbField), filter.Value)
		case Gt:
			query = query.Where(fmt.Sprintf("%s > ?", dbField), filter.Value)
		case Lt:
			query = query.Where(fmt.Sprintf("%s < ?", dbField), filter.Value)
		case Gte:
			query = query.Where(fmt.Sprintf("%s >= ?", dbField), filter.Value)
		case Lte:
			query = query.Where(fmt.Sprintf("%s <= ?", dbField), filter.Value)
		case Like:
			query = query.Where(fmt.Sprintf("%s LIKE ?", dbField), fmt.Sprintf("%%%v%%", filter.Value))
		case Ilike:
			query = query.Where(fmt.Sprintf("LOWER(%s) LIKE LOWER(?)", dbField), fmt.Sprintf("%%%v%%", filter.Value))
		case In:
			query = query.Where(fmt.Sprintf("%s IN (?)", dbField), filter.Value)
		}
	}

	// Apply sorting
	for _, sort := range opts.Sort {
		mapping, exists := globalMapping.GetFieldMapping(modelName, sort.Field)
		if !exists {
			return db, fmt.Errorf("invalid sort field: %s", sort.Field)
		}

		direction := strings.ToUpper(sort.Direction)
		if direction != "DESC" {
			direction = "ASC"
		}
		query = query.Order(fmt.Sprintf("%s %s", mapping.DBColumn, direction))
	}

	// Apply pagination
	if opts.Pagination != nil {
		if opts.Pagination.Skip != nil {
			query = query.Offset(*opts.Pagination.Skip)
		}
		if opts.Pagination.Take != nil {
			query = query.Limit(*opts.Pagination.Take)
		}
	}

	return query, nil
}
