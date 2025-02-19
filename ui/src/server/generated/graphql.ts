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
  Upload: { input: any; output: any; }
};

export type AddTransactionItemInput = {
  batchNumber?: InputMaybe<Scalars['String']['input']>;
  fromLocationId?: InputMaybe<Scalars['UUID']['input']>;
  itemId: Scalars['UUID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  toLocationId?: InputMaybe<Scalars['UUID']['input']>;
  transactionId: Scalars['UUID']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
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
  image?: InputMaybe<Scalars['Upload']['input']>;
  maximumStock?: InputMaybe<Scalars['Float']['input']>;
  minimumStock?: InputMaybe<Scalars['Float']['input']>;
  msrp?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  reorderPoint?: InputMaybe<Scalars['Float']['input']>;
  sellingPrice?: InputMaybe<Scalars['Int']['input']>;
  sku: Scalars['String']['input'];
  unitOfMeasure: Scalars['String']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateLocationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentLocationId?: InputMaybe<Scalars['UUID']['input']>;
  placeId: Scalars['UUID']['input'];
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

export type CreatePlaceInput = {
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

export type CreateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
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

export type FilterInput = {
  field: Scalars['String']['input'];
  operator: Scalars['String']['input'];
  value: Scalars['String']['input'];
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
  childLocations?: Maybe<Array<Location>>;
  createdAt: Scalars['Time']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  parentLocation?: Maybe<Location>;
  place: Place;
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
  createPlace: Place;
  createRole: Role;
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
  deletePlace: Scalars['Boolean']['output'];
  deleteRole: Scalars['Boolean']['output'];
  deleteSupplier: Scalars['Boolean']['output'];
  deleteSupplierItem: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  login: AuthPayload;
  removeRolePermission: Scalars['Boolean']['output'];
  removeTransactionItem: Scalars['Boolean']['output'];
  removeUserRole: Scalars['Boolean']['output'];
  setActiveOrganization: AuthPayload;
  updateCustomerAccount: CustomerAccount;
  updateIntegrationConfig: IntegrationConfig;
  updateInventoryTransaction: InventoryTransaction;
  updateItem: Item;
  updateItemCategory: ItemCategory;
  updateLocation: Location;
  updateOrganization: Organization;
  updatePermission: Permission;
  updatePlace: Place;
  updateRole: Role;
  updateSupplier: Supplier;
  updateSupplierItem: SupplierItem;
  updateTransactionItem: TransactionItem;
  updateUser: User;
  uploadItemImage: Scalars['String']['output'];
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


export type MutationCreatePlaceArgs = {
  input: CreatePlaceInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
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


export type MutationDeletePlaceArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteRoleArgs = {
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


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
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


export type MutationSetActiveOrganizationArgs = {
  organizationID: Scalars['String']['input'];
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


export type MutationUpdatePlaceArgs = {
  id: Scalars['UUID']['input'];
  input: UpdatePlaceInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateRoleInput;
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


export type MutationUploadItemImageArgs = {
  input: UploadItemImageInput;
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
  users: Array<User>;
};

export type PaginationInput = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
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

export type Place = {
  __typename?: 'Place';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  id: Scalars['UUID']['output'];
  locations?: Maybe<Array<Location>>;
  name: Scalars['String']['output'];
  organization: Organization;
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type Query = {
  __typename?: 'Query';
  activeOrganization?: Maybe<Organization>;
  activeUser?: Maybe<User>;
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
  place?: Maybe<Place>;
  places: Array<Place>;
  role?: Maybe<Role>;
  roles: Array<Role>;
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


export type QueryCustomerAccountsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryIntegrationConfigArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryIntegrationConfigsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryInventoryTransactionArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryInventoryTransactionsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryItemArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryItemCategoriesArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryItemCategoryArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryItemsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryLocationArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryLocationsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryOrganizationArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryOrganizationsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryPermissionArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPermissionsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryPlaceArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPlacesArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryRoleArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryRolesArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QuerySupplierArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySupplierItemArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySupplierItemsArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QuerySuppliersArgs = {
  options?: InputMaybe<QueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryUsersArgs = {
  options?: InputMaybe<QueryOptions>;
};

export type QueryOptions = {
  filters?: InputMaybe<Array<FilterInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Array<SortInput>>;
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

export type SortInput = {
  direction: Scalars['String']['input'];
  field: Scalars['String']['input'];
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
  fromLocation?: Maybe<Location>;
  id: Scalars['UUID']['output'];
  item: Item;
  notes?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Float']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  toLocation?: Maybe<Location>;
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
  image?: InputMaybe<Scalars['Upload']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentLocationId?: InputMaybe<Scalars['UUID']['input']>;
  placeId?: InputMaybe<Scalars['UUID']['input']>;
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

export type UpdatePlaceInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  fromLocationId?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  toLocationId?: InputMaybe<Scalars['UUID']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UploadItemImageInput = {
  image: Scalars['Upload']['input'];
  itemID: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  organizations: Array<Organization>;
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

export type GetActiveOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveOrganizationQuery = { __typename?: 'Query', activeOrganization?: { __typename?: 'Organization', name: string } | null };

export type GetActiveUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveUserQuery = { __typename?: 'Query', activeUser?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, organizations: Array<{ __typename?: 'Organization', id: any, name: string }> } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string } };

export type SetActiveOrganizationMutationVariables = Exact<{
  organizationID: Scalars['String']['input'];
}>;


export type SetActiveOrganizationMutation = { __typename?: 'Mutation', setActiveOrganization: { __typename?: 'AuthPayload', token: string } };

export type CreateItemCategoryMutationVariables = Exact<{
  input: CreateItemCategoryInput;
}>;


export type CreateItemCategoryMutation = { __typename?: 'Mutation', createItemCategory: { __typename?: 'ItemCategory', id: any } };

export type DeleteItemCategoryMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteItemCategoryMutation = { __typename?: 'Mutation', deleteItemCategory: boolean };

export type GetItemCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemCategoriesQuery = { __typename?: 'Query', itemCategories: Array<{ __typename?: 'ItemCategory', id: any, createdAt: any, updatedAt: any, name: string, description?: string | null, parentCategory?: { __typename?: 'ItemCategory', id: any, name: string } | null }> };

export type GetItemCategoriesNameIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemCategoriesNameIdQuery = { __typename?: 'Query', itemCategories: Array<{ __typename?: 'ItemCategory', id: any, name: string }> };

export type GetItemCategoryQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetItemCategoryQuery = { __typename?: 'Query', itemCategory?: { __typename?: 'ItemCategory', id: any, createdAt: any, updatedAt: any, name: string, description?: string | null, parentCategory?: { __typename?: 'ItemCategory', id: any, name: string } | null } | null };

export type UpdateItemCategoryMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  input: UpdateItemCategoryInput;
}>;


export type UpdateItemCategoryMutation = { __typename?: 'Mutation', updateItemCategory: { __typename?: 'ItemCategory', id: any } };

export type CreateItemMutationVariables = Exact<{
  input: CreateItemInput;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', id: any } };

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem: boolean };

export type GetItemQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetItemQuery = { __typename?: 'Query', item?: { __typename?: 'Item', id: any, createdAt: any, updatedAt: any, sku: string, name: string, description?: string | null, quantity: number, unitOfMeasure: string, minimumStock?: number | null, maximumStock?: number | null, reorderPoint?: number | null, costPrice?: number | null, sellingPrice?: number | null, msrp?: number | null, barcode?: string | null, imageUrl?: string | null, weight?: number | null, dimensions?: string | null, category: { __typename?: 'ItemCategory', id: any, name: string } } | null };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: any, createdAt: any, updatedAt: any, sku: string, name: string, description?: string | null, quantity: number, unitOfMeasure: string, minimumStock?: number | null, maximumStock?: number | null, reorderPoint?: number | null, costPrice?: number | null, sellingPrice?: number | null, msrp?: number | null, barcode?: string | null, imageUrl?: string | null, weight?: number | null, dimensions?: string | null, category: { __typename?: 'ItemCategory', id: any, name: string } }> };

export type GetItemsNameIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsNameIdQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: any, name: string }> };

export type UpdateItemMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  input: UpdateItemInput;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', id: any } };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'Location', id: any } };

export type DeleteLocationMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation: boolean };

export type GetLocationQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id: any, createdAt: any, updatedAt: any, name: string, type: string, description?: string | null, place: { __typename?: 'Place', id: any, name: string }, parentLocation?: { __typename?: 'Location', id: any, name: string } | null } | null };

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: any, createdAt: any, updatedAt: any, name: string, type: string, description?: string | null, place: { __typename?: 'Place', id: any, name: string }, parentLocation?: { __typename?: 'Location', id: any, name: string } | null }> };

export type GetLocationsNameIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsNameIdQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: any, name: string }> };

export type UpdateLocationMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  input: UpdateLocationInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation: { __typename?: 'Location', id: any } };

export type CreatePlaceMutationVariables = Exact<{
  input: CreatePlaceInput;
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', createPlace: { __typename?: 'Place', id: any } };

export type DeletePlaceMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeletePlaceMutation = { __typename?: 'Mutation', deletePlace: boolean };

export type GetPlaceQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place?: { __typename?: 'Place', id: any, createdAt: any, name: string, type: string, addressLine1: string, addressLine2?: string | null, city: string, state: string, postalCode: string, country: string } | null };

export type GetPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlacesQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', id: any, createdAt: any, updatedAt: any, name: string, type: string, addressLine1: string, addressLine2?: string | null, city: string, state: string, postalCode: string, country: string }> };

export type GetPlacesNameIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlacesNameIdQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', id: any, name: string }> };

export type UpdatePlaceMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  input: UpdatePlaceInput;
}>;


export type UpdatePlaceMutation = { __typename?: 'Mutation', updatePlace: { __typename?: 'Place', id: any } };


export const GetActiveOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetActiveOrganizationQuery, GetActiveOrganizationQueryVariables>;
export const GetActiveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetActiveUserQuery, GetActiveUserQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SetActiveOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetActiveOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setActiveOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SetActiveOrganizationMutation, SetActiveOrganizationMutationVariables>;
export const CreateItemCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateItemCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateItemCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createItemCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateItemCategoryMutation, CreateItemCategoryMutationVariables>;
export const DeleteItemCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteItemCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteItemCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteItemCategoryMutation, DeleteItemCategoryMutationVariables>;
export const GetItemCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parentCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemCategoriesQuery, GetItemCategoriesQueryVariables>;
export const GetItemCategoriesNameIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemCategoriesNameId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetItemCategoriesNameIdQuery, GetItemCategoriesNameIdQueryVariables>;
export const GetItemCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parentCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetItemCategoryQuery, GetItemCategoryQueryVariables>;
export const UpdateItemCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateItemCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateItemCategoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateItemCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateItemCategoryMutation, UpdateItemCategoryMutationVariables>;
export const CreateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateItemMutation, CreateItemMutationVariables>;
export const DeleteItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteItemMutation, DeleteItemMutationVariables>;
export const GetItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasure"}},{"kind":"Field","name":{"kind":"Name","value":"minimumStock"}},{"kind":"Field","name":{"kind":"Name","value":"maximumStock"}},{"kind":"Field","name":{"kind":"Name","value":"reorderPoint"}},{"kind":"Field","name":{"kind":"Name","value":"costPrice"}},{"kind":"Field","name":{"kind":"Name","value":"sellingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetItemQuery, GetItemQueryVariables>;
export const GetItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"unitOfMeasure"}},{"kind":"Field","name":{"kind":"Name","value":"minimumStock"}},{"kind":"Field","name":{"kind":"Name","value":"maximumStock"}},{"kind":"Field","name":{"kind":"Name","value":"reorderPoint"}},{"kind":"Field","name":{"kind":"Name","value":"costPrice"}},{"kind":"Field","name":{"kind":"Name","value":"sellingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetItemsQuery, GetItemsQueryVariables>;
export const GetItemsNameIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetItemsNameID"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetItemsNameIdQuery, GetItemsNameIdQueryVariables>;
export const UpdateItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateItemMutation, UpdateItemMutationVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const DeleteLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteLocationMutation, DeleteLocationMutationVariables>;
export const GetLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
export const GetLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"place"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parentLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetLocationsNameIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationsNameID"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLocationsNameIdQuery, GetLocationsNameIdQueryVariables>;
export const UpdateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLocationMutation, UpdateLocationMutationVariables>;
export const CreatePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const DeletePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePlaceMutation, DeletePlaceMutationVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<GetPlacesQuery, GetPlacesQueryVariables>;
export const GetPlacesNameIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlacesNameID"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetPlacesNameIdQuery, GetPlacesNameIdQueryVariables>;
export const UpdatePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePlaceMutation, UpdatePlaceMutationVariables>;