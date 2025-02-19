/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AddTransactionItemInput = {
  batchNumber?: InputMaybe<Scalars['String']['input']>;
  fromStorageAreaId?: InputMaybe<Scalars['UUID']['input']>;
  itemId: Scalars['UUID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  toStorageAreaId?: InputMaybe<Scalars['UUID']['input']>;
  transactionId: Scalars['UUID']['input'];
};

export type CreateCustomerAccountInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['UUID']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateIntegrationConfigInput = {
  apiKey: Scalars['String']['input'];
  apiSecret: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['UUID']['input'];
  type: Scalars['String']['input'];
};

export type CreateInventoryTransactionInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['UUID']['input'];
  referenceNumber: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateItemCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['UUID']['input'];
  parentCategoryId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CreateItemInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['UUID']['input'];
  costPrice?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  maximumStock?: InputMaybe<Scalars['Float']['input']>;
  minimumStock?: InputMaybe<Scalars['Float']['input']>;
  msrp?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['UUID']['input'];
  quantity: Scalars['Float']['input'];
  reorderPoint?: InputMaybe<Scalars['Float']['input']>;
  sellingPrice?: InputMaybe<Scalars['Int']['input']>;
  sku: Scalars['String']['input'];
  unitOfMeasure: Scalars['String']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateLocationInput = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['UUID']['input'];
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateOrganizationInput = {
  adminEmail: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateStorageAreaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  parentAreaId?: InputMaybe<Scalars['UUID']['input']>;
  position: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateSupplierInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['UUID']['input'];
  paymentTerms?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSupplierItemInput = {
  isPreferred?: InputMaybe<Scalars['Boolean']['input']>;
  itemId: Scalars['UUID']['input'];
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  moq?: InputMaybe<Scalars['Float']['input']>;
  supplierId: Scalars['UUID']['input'];
  supplierSku?: InputMaybe<Scalars['String']['input']>;
  unitCost?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type CustomerAccount = {
  __typename?: 'CustomerAccount';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  status: Scalars['String']['output'];
  taxId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type IntegrationConfig = {
  __typename?: 'IntegrationConfig';
  apiKey: Scalars['String']['output'];
  apiSecret: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  lastSync: Scalars['Time']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type InventoryTransaction = {
  __typename?: 'InventoryTransaction';
  createdAt: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  items: Array<TransactionItem>;
  notes?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  referenceNumber: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Item = {
  __typename?: 'Item';
  barcode?: Maybe<Scalars['String']['output']>;
  category: ItemCategory;
  costPrice?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  maximumStock?: Maybe<Scalars['Float']['output']>;
  minimumStock?: Maybe<Scalars['Float']['output']>;
  msrp?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  organization: Organization;
  quantity: Scalars['Float']['output'];
  reorderPoint?: Maybe<Scalars['Float']['output']>;
  sellingPrice?: Maybe<Scalars['Int']['output']>;
  sku: Scalars['String']['output'];
  unitOfMeasure: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  childCategories: Array<ItemCategory>;
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  items: Array<Item>;
  name: Scalars['String']['output'];
  organization: Organization;
  parentCategory?: Maybe<ItemCategory>;
  updatedAt: Scalars['Time']['output'];
};

export type Location = {
  __typename?: 'Location';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  storageAreas: Array<StorageArea>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTransactionItem: TransactionItem;
  assignRolePermission: RolePermission;
  assignUserRole: UserRole;
  createCustomerAccount: CustomerAccount;
  createIntegrationConfig: IntegrationConfig;
  createInventoryTransaction: InventoryTransaction;
  createItem: Item;
  createItemCategory: ItemCategory;
  createLocation: Location;
  createOrganization: Organization;
  createPermission: Permission;
  createRole: Role;
  createStorageArea: StorageArea;
  createSupplier: Supplier;
  createSupplierItem: SupplierItem;
  createUser: User;
  deleteCustomerAccount: Scalars['Boolean']['output'];
  deleteIntegrationConfig: Scalars['Boolean']['output'];
  deleteInventoryTransaction: Scalars['Boolean']['output'];
  deleteItem: Scalars['Boolean']['output'];
  deleteItemCategory: Scalars['Boolean']['output'];
  deleteLocation: Scalars['Boolean']['output'];
  deleteOrganization: Scalars['Boolean']['output'];
  deletePermission: Scalars['Boolean']['output'];
  deleteRole: Scalars['Boolean']['output'];
  deleteStorageArea: Scalars['Boolean']['output'];
  deleteSupplier: Scalars['Boolean']['output'];
  deleteSupplierItem: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  removeRolePermission: Scalars['Boolean']['output'];
  removeTransactionItem: Scalars['Boolean']['output'];
  removeUserRole: Scalars['Boolean']['output'];
  updateCustomerAccount: CustomerAccount;
  updateIntegrationConfig: IntegrationConfig;
  updateInventoryTransaction: InventoryTransaction;
  updateItem: Item;
  updateItemCategory: ItemCategory;
  updateLocation: Location;
  updateOrganization: Organization;
  updatePermission: Permission;
  updateRole: Role;
  updateStorageArea: StorageArea;
  updateSupplier: Supplier;
  updateSupplierItem: SupplierItem;
  updateTransactionItem: TransactionItem;
  updateUser: User;
};


export type MutationAddTransactionItemArgs = {
  input: AddTransactionItemInput;
};


export type MutationAssignRolePermissionArgs = {
  permissionId: Scalars['UUID']['input'];
  roleId: Scalars['UUID']['input'];
};


export type MutationAssignUserRoleArgs = {
  roleId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationCreateCustomerAccountArgs = {
  input: CreateCustomerAccountInput;
};


export type MutationCreateIntegrationConfigArgs = {
  input: CreateIntegrationConfigInput;
};


export type MutationCreateInventoryTransactionArgs = {
  input: CreateInventoryTransactionInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateItemCategoryArgs = {
  input: CreateItemCategoryInput;
};


export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateStorageAreaArgs = {
  input: CreateStorageAreaInput;
};


export type MutationCreateSupplierArgs = {
  input: CreateSupplierInput;
};


export type MutationCreateSupplierItemArgs = {
  input: CreateSupplierItemInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCustomerAccountArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteIntegrationConfigArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteInventoryTransactionArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteItemCategoryArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteStorageAreaArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteSupplierItemArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationRemoveRolePermissionArgs = {
  permissionId: Scalars['UUID']['input'];
  roleId: Scalars['UUID']['input'];
};


export type MutationRemoveTransactionItemArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationRemoveUserRoleArgs = {
  roleId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationUpdateCustomerAccountArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateCustomerAccountInput;
};


export type MutationUpdateIntegrationConfigArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateIntegrationConfigInput;
};


export type MutationUpdateInventoryTransactionArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateInventoryTransactionInput;
};


export type MutationUpdateItemArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateItemInput;
};


export type MutationUpdateItemCategoryArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateItemCategoryInput;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateLocationInput;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateOrganizationInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['UUID']['input'];
  input: UpdatePermissionInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateRoleInput;
};


export type MutationUpdateStorageAreaArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateStorageAreaInput;
};


export type MutationUpdateSupplierArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateSupplierInput;
};


export type MutationUpdateSupplierItemArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateSupplierItemInput;
};


export type MutationUpdateTransactionItemArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateTransactionItemInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateUserInput;
};

export type Organization = {
  __typename?: 'Organization';
  adminEmail: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  locations: Array<Location>;
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  taxId: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  roles: Array<Role>;
  updatedAt: Scalars['Time']['output'];
};

export type Query = {
  __typename?: 'Query';
  customerAccount?: Maybe<CustomerAccount>;
  customerAccounts: Array<CustomerAccount>;
  integrationConfig?: Maybe<IntegrationConfig>;
  integrationConfigs: Array<IntegrationConfig>;
  inventoryTransaction?: Maybe<InventoryTransaction>;
  inventoryTransactions: Array<InventoryTransaction>;
  item?: Maybe<Item>;
  itemCategories: Array<ItemCategory>;
  itemCategory?: Maybe<ItemCategory>;
  items: Array<Item>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  organization?: Maybe<Organization>;
  organizations: Array<Organization>;
  permission?: Maybe<Permission>;
  permissions: Array<Permission>;
  role?: Maybe<Role>;
  roles: Array<Role>;
  storageArea?: Maybe<StorageArea>;
  storageAreas: Array<StorageArea>;
  supplier?: Maybe<Supplier>;
  supplierItem?: Maybe<SupplierItem>;
  supplierItems: Array<SupplierItem>;
  suppliers: Array<Supplier>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCustomerAccountArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryIntegrationConfigArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryInventoryTransactionArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryItemArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryItemCategoryArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryLocationArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryOrganizationArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPermissionArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryRoleArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryStorageAreaArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySupplierArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySupplierItemArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['UUID']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  updatedAt: Scalars['Time']['output'];
  users: Array<User>;
};

export type RolePermission = {
  __typename?: 'RolePermission';
  createdAt: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  permission: Permission;
  role: Role;
  updatedAt: Scalars['Time']['output'];
};

export type StorageArea = {
  __typename?: 'StorageArea';
  childAreas: Array<StorageArea>;
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  location: Location;
  name: Scalars['String']['output'];
  parentArea?: Maybe<StorageArea>;
  position: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Time']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  items?: Maybe<Array<SupplierItem>>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  paymentTerms?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  taxId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Time']['output'];
};

export type SupplierItem = {
  __typename?: 'SupplierItem';
  id: Scalars['UUID']['output'];
  isPreferred: Scalars['Boolean']['output'];
  item: Item;
  leadTime: Scalars['Int']['output'];
  moq: Scalars['Float']['output'];
  supplier: Supplier;
  supplierSku?: Maybe<Scalars['String']['output']>;
  unitCost: Scalars['Int']['output'];
};

export type TransactionItem = {
  __typename?: 'TransactionItem';
  batchNumber?: Maybe<Scalars['String']['output']>;
  fromStorageArea?: Maybe<StorageArea>;
  id: Scalars['UUID']['output'];
  item: Item;
  notes?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  toStorageArea?: Maybe<StorageArea>;
  transaction: InventoryTransaction;
};

export type UpdateCustomerAccountInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateIntegrationConfigInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiSecret?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryTransactionInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateItemCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentCategoryId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateItemInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  costPrice?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  maximumStock?: InputMaybe<Scalars['Float']['input']>;
  minimumStock?: InputMaybe<Scalars['Float']['input']>;
  msrp?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  reorderPoint?: InputMaybe<Scalars['Float']['input']>;
  sellingPrice?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  unitOfMeasure?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateLocationInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrganizationInput = {
  adminEmail?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStorageAreaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentAreaId?: InputMaybe<Scalars['UUID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSupplierInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentTerms?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSupplierItemInput = {
  isPreferred?: InputMaybe<Scalars['Boolean']['input']>;
  itemId?: InputMaybe<Scalars['UUID']['input']>;
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  moq?: InputMaybe<Scalars['Float']['input']>;
  supplierId?: InputMaybe<Scalars['UUID']['input']>;
  supplierSku?: InputMaybe<Scalars['String']['input']>;
  unitCost?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTransactionItemInput = {
  batchNumber?: InputMaybe<Scalars['String']['input']>;
  fromStorageAreaId?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  toStorageAreaId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  roles: Array<Role>;
  updatedAt: Scalars['Time']['output'];
};

export type UserRole = {
  __typename?: 'UserRole';
  createdAt: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  role: Role;
  updatedAt: Scalars['Time']['output'];
  user: User;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: any, email: string }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;