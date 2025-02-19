package model

import (
	"time"

	"github.com/google/uuid"
)

// Users, Roles and Permissions
type User struct {
	ID            uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
	Email         string `gorm:"uniqueIndex;not null"`
	Password      string `gorm:"not null"`
	FirstName     string `json:"firstName"`
	LastName      string
	Roles         []Role         `gorm:"many2many:user_roles;joinForeignKey:user_id;joinReferences:role_id"`
	Organizations []Organization `gorm:"many2many:user_organizations;joinForeignKey:user_id;joinReferences:organization_id"`
}

type Role struct {
	ID          uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
	Name        string `gorm:"uniqueIndex;not null"`
	Description string
	Users       []User       `gorm:"many2many:user_roles;joinForeignKey:role_id;joinReferences:user_id"`
	Permissions []Permission `gorm:"many2many:role_permissions;joinForeignKey:role_id;joinReferences:permission_id"`
}

type UserRole struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt time.Time
	UpdatedAt time.Time
	UserID    uuid.UUID `gorm:"type:uuid;not null"`
	RoleID    uuid.UUID `gorm:"type:uuid;not null"`
}

type Permission struct {
	ID          uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
	Name        string `gorm:"uniqueIndex;not null"`
	Description string
	Roles       []Role `gorm:"many2many:role_permissions;joinForeignKey:permission_id;joinReferences:role_id"`
}

type RolePermission struct {
	ID           uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt    time.Time
	UpdatedAt    time.Time
	RoleID       uuid.UUID `gorm:"type:uuid;not null"`
	PermissionID uuid.UUID `gorm:"type:uuid;not null"`
}

// Organizations and Places
type Organization struct {
	ID          uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
	Name        string `gorm:"not null"`
	Description string
	AdminEmail  string `gorm:"not null"`
	TaxID       string
	LogoURL     string
	Users       []User `gorm:"many2many:user_organizations;joinForeignKey:organization_id;joinReferences:user_id"`
}

type UserOrganization struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
	UserID         uuid.UUID `gorm:"type:uuid;not null"`
	OrganizationID uuid.UUID `gorm:"type:uuid;not null"`
}

type Place struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
	OrganizationID uuid.UUID `gorm:"type:uuid;not null"`
	Name           string    `gorm:"not null"`
	Type           string    `gorm:"not null"`
	AddressLine1   string    `gorm:"not null"`
	AddressLine2   string
	City           string `gorm:"not null"`
	State          string `gorm:"not null"`
	PostalCode     string `gorm:"not null"`
	Country        string `gorm:"not null"`
}

type Location struct {
	ID               uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt        time.Time
	UpdatedAt        time.Time
	PlaceID          uuid.UUID `gorm:"type:uuid;not null"`
	ParentLocationID uuid.UUID
	Name             string `gorm:"not null"`
	Type             string `gorm:"not null"`
	Description      string
}

// Items
type Item struct {
	ID            uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt     time.Time
	UpdatedAt     time.Time
	CategoryID    uuid.UUID `gorm:"type:uuid;not null"`
	SKU           string    `gorm:"uniqueIndex;not null"`
	Name          string    `gorm:"not null"`
	Description   string
	Quantity      float64 `gorm:"not null"`
	UnitOfMeasure string  `gorm:"not null"`
	MinimumStock  float64
	MaximumStock  float64
	ReorderPoint  float64
	CostPrice     int
	SellingPrice  int
	MSRP          int
	Barcode       string
	ImageURL      string
	Weight        float64
	Dimensions    string
}

type ItemCategory struct {
	ID               uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt        time.Time
	UpdatedAt        time.Time
	OrganizationID   uuid.UUID `gorm:"type:uuid;not null"`
	ParentCategoryID uuid.UUID
	Name             string `gorm:"uniqueIndex;not null"`
	Description      string
}

// Transactions
type InventoryTransaction struct {
	ID              uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt       time.Time
	UpdatedAt       time.Time
	OrganizationID  uuid.UUID `gorm:"type:uuid;not null"`
	Type            string    `gorm:"not null"`
	ReferenceNumber string    `gorm:"not null"`
	Notes           string
}

type TransactionItem struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	TransactionID  uuid.UUID `gorm:"type:uuid;not null"`
	ItemID         uuid.UUID `gorm:"type:uuid;not null"`
	FromLocationID uuid.UUID
	ToLocationID   uuid.UUID
	Quantity       float64
	BatchNumber    string
	Reason         string
	Notes          string
}

// Integrations
type IntegrationConfig struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
	OrganizationID uuid.UUID `gorm:"type:uuid;not null"`
	Name           string    `gorm:"not null"`
	Type           string    `gorm:"not null"`
	APIKey         string    `gorm:"not null"`
	APISecret      string    `gorm:"not null"`
	Status         string    `gorm:"not null"`
	LastSync       time.Time `gorm:"not null"`
}

// Suppliers
type Supplier struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
	OrganizationID uuid.UUID `gorm:"type:uuid;not null"`
	Name           string    `gorm:"not null"`
	ContactName    string
	Email          string
	Phone          string
	AddressLine1   string
	AddressLine2   string
	City           string
	State          string
	PostalCode     string
	Country        string
	PaymentTerms   string
	TaxID          string
	Notes          string
	Status         string `gorm:"not null"`
}

type SupplierItem struct {
	ID          uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	SupplierID  uuid.UUID `gorm:"type:uuid;not null"`
	ItemID      uuid.UUID `gorm:"type:uuid;not null"`
	SupplierSKU string
	UnitCost    int
	MOQ         float64
	LeadTime    int
	IsPreferred bool
}

type CustomerAccount struct {
	ID             uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
	OrganizationID uuid.UUID `gorm:"type:uuid;not null"`
	Name           string    `gorm:"not null"`
	Email          string    `gorm:"not null"`
	Password       string    `gorm:"not null"`
	Phone          string
	AddressLine1   string `gorm:"not null"`
	AddressLine2   string
	City           string `gorm:"not null"`
	State          string `gorm:"not null"`
	PostalCode     string `gorm:"not null"`
	Country        string `gorm:"not null"`
	TaxID          string
	Notes          string
	Status         string `gorm:"not null"`
}
