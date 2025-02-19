package model

import (
	"fmt"
	"strings"
	"sync"

	"gorm.io/gorm"
)

// FieldMapping maps GraphQL fields to database columns
type FieldMapping struct {
	DBColumn string // the database column name
	Type     string // optional: can be used for type checking
}

// ModelFieldMapping stores the field mappings for all models
type ModelFieldMapping struct {
	mu       sync.RWMutex                       // protects the mappings
	mappings map[string]map[string]FieldMapping // model name -> field name -> FieldMapping
}

var (
	globalMapping = &ModelFieldMapping{
		mappings: make(map[string]map[string]FieldMapping),
	}
)

// initializeModelMapping generates field mappings for a given model
func (m *ModelFieldMapping) initializeModelMapping(db *gorm.DB, model interface{}) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	// Get model name
	stmt := &gorm.Statement{DB: db}
	if err := stmt.Parse(model); err != nil {
		return fmt.Errorf("failed to parse model: %w", err)
	}
	modelName := stmt.Schema.Name

	// Check if mapping already exists
	if _, exists := m.mappings[modelName]; exists {
		return nil
	}

	fieldMappings := make(map[string]FieldMapping)

	// Generate mappings for each field
	for _, field := range stmt.Schema.Fields {
		// Create normalized versions of the field name
		dbName := field.DBName
		jsonName := field.Name
		normalizedName := strings.ToLower(strings.ReplaceAll(jsonName, "_", ""))

		// Store all variations of the field name
		fieldMappings[normalizedName] = FieldMapping{
			DBColumn: dbName,
			Type:     string(field.DataType),
		}

		// Also store the original DB name for direct matches
		fieldMappings[strings.ToLower(dbName)] = FieldMapping{
			DBColumn: dbName,
			Type:     string(field.DataType),
		}
	}

	m.mappings[modelName] = fieldMappings
	return nil
}

// GetFieldMapping returns the database column name for a given field
func (m *ModelFieldMapping) GetFieldMapping(modelName string, field string) (FieldMapping, bool) {
	m.mu.RLock()
	defer m.mu.RUnlock()

	modelMappings, exists := m.mappings[modelName]
	if !exists {
		return FieldMapping{}, false
	}

	normalizedField := strings.ToLower(strings.ReplaceAll(field, "_", ""))
	mapping, exists := modelMappings[normalizedField]
	return mapping, exists
}
