/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query GetActiveOrganization {\n        activeOrganization {\n            name\n        }\n    }\n": typeof types.GetActiveOrganizationDocument,
    "\n    query GetActiveUser {\n        activeUser {\n            firstName\n            lastName\n            organizations {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetActiveUserDocument,
    "\n    mutation Login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n        }\n    }\n": typeof types.LoginDocument,
    "\n    mutation SetActiveOrganization($organizationID: String!) {\n        setActiveOrganization(organizationID: $organizationID) {\n            token\n        }\n    }\n": typeof types.SetActiveOrganizationDocument,
    "\n    mutation CreateItemCategory($input: CreateItemCategoryInput!) {\n        createItemCategory(input: $input) {\n            id\n        }\n    }\n": typeof types.CreateItemCategoryDocument,
    "\n    mutation DeleteItemCategory($id: UUID!) {\n        deleteItemCategory(id: $id)\n    }\n": typeof types.DeleteItemCategoryDocument,
    "\n    query GetItemCategories {\n        itemCategories {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetItemCategoriesDocument,
    "\n    query GetItemCategoriesNameId {\n        itemCategories {\n            id\n            name\n        }\n    }\n": typeof types.GetItemCategoriesNameIdDocument,
    "\n    query GetItemCategory($id: UUID!) {\n        itemCategory(id: $id) {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetItemCategoryDocument,
    "\n    mutation UpdateItemCategory($id: UUID!, $input: UpdateItemCategoryInput!) {\n        updateItemCategory(id: $id, input: $input) {\n            id\n        }\n    }\n": typeof types.UpdateItemCategoryDocument,
    "\n    mutation CreateItem($input: CreateItemInput!) {\n        createItem(input: $input) {\n            id\n        }\n    }\n": typeof types.CreateItemDocument,
    "\n    mutation DeleteItem($id: UUID!) {\n        deleteItem(id: $id)\n    }\n": typeof types.DeleteItemDocument,
    "\n    query GetItem($id: UUID!) {\n        item(id: $id) {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n": typeof types.GetItemDocument,
    "\n    query GetItems {\n        items {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n": typeof types.GetItemsDocument,
    "\n    query GetItemsNameID {\n        items {\n            id\n            name\n        }\n    }\n": typeof types.GetItemsNameIdDocument,
    "\n    mutation UpdateItem($id: UUID!, $input: UpdateItemInput!) {\n        updateItem(id: $id, input: $input) {\n            id\n        }\n    }\n": typeof types.UpdateItemDocument,
    "\n    mutation CreateLocation($input: CreateLocationInput!) {\n        createLocation(input: $input) {\n            id\n        }\n    }\n": typeof types.CreateLocationDocument,
    "\n    mutation DeleteLocation($id: UUID!) {\n        deleteLocation(id: $id)\n    }\n": typeof types.DeleteLocationDocument,
    "\n    query GetLocation($id: UUID!) {\n        location(id: $id) {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n": typeof types.GetLocationDocument,
    "\n    query GetLocations {\n        locations {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n": typeof types.GetLocationsDocument,
    "\n    query GetLocationsNameID {\n        locations {\n            id\n            name\n        }\n    }\n": typeof types.GetLocationsNameIdDocument,
    "\n    mutation UpdateLocation($id: UUID!, $input: UpdateLocationInput!) {\n        updateLocation(id: $id, input: $input) {\n            id\n        }\n    }\n": typeof types.UpdateLocationDocument,
    "\n    mutation CreatePlace($input: CreatePlaceInput!) {\n        createPlace(input: $input) {\n            id\n        }\n    }\n": typeof types.CreatePlaceDocument,
    "\n    mutation DeletePlace($id: UUID!) {\n        deletePlace(id: $id)\n    }\n": typeof types.DeletePlaceDocument,
    "\n    query GetPlace($id: UUID!) {\n        place(id: $id) {\n            id\n            createdAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n": typeof types.GetPlaceDocument,
    "\n    query GetPlaces {\n        places {\n            id\n            createdAt\n            updatedAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n": typeof types.GetPlacesDocument,
    "\n    query GetPlacesNameID {\n        places {\n            id\n            name\n        }\n    }\n": typeof types.GetPlacesNameIdDocument,
    "\n    mutation UpdatePlace($id: UUID!, $input: UpdatePlaceInput!) {\n        updatePlace(id: $id, input: $input) {\n            id\n        }\n    }\n": typeof types.UpdatePlaceDocument,
};
const documents: Documents = {
    "\n    query GetActiveOrganization {\n        activeOrganization {\n            name\n        }\n    }\n": types.GetActiveOrganizationDocument,
    "\n    query GetActiveUser {\n        activeUser {\n            firstName\n            lastName\n            organizations {\n                id\n                name\n            }\n        }\n    }\n": types.GetActiveUserDocument,
    "\n    mutation Login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n        }\n    }\n": types.LoginDocument,
    "\n    mutation SetActiveOrganization($organizationID: String!) {\n        setActiveOrganization(organizationID: $organizationID) {\n            token\n        }\n    }\n": types.SetActiveOrganizationDocument,
    "\n    mutation CreateItemCategory($input: CreateItemCategoryInput!) {\n        createItemCategory(input: $input) {\n            id\n        }\n    }\n": types.CreateItemCategoryDocument,
    "\n    mutation DeleteItemCategory($id: UUID!) {\n        deleteItemCategory(id: $id)\n    }\n": types.DeleteItemCategoryDocument,
    "\n    query GetItemCategories {\n        itemCategories {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n": types.GetItemCategoriesDocument,
    "\n    query GetItemCategoriesNameId {\n        itemCategories {\n            id\n            name\n        }\n    }\n": types.GetItemCategoriesNameIdDocument,
    "\n    query GetItemCategory($id: UUID!) {\n        itemCategory(id: $id) {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n": types.GetItemCategoryDocument,
    "\n    mutation UpdateItemCategory($id: UUID!, $input: UpdateItemCategoryInput!) {\n        updateItemCategory(id: $id, input: $input) {\n            id\n        }\n    }\n": types.UpdateItemCategoryDocument,
    "\n    mutation CreateItem($input: CreateItemInput!) {\n        createItem(input: $input) {\n            id\n        }\n    }\n": types.CreateItemDocument,
    "\n    mutation DeleteItem($id: UUID!) {\n        deleteItem(id: $id)\n    }\n": types.DeleteItemDocument,
    "\n    query GetItem($id: UUID!) {\n        item(id: $id) {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n": types.GetItemDocument,
    "\n    query GetItems {\n        items {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n": types.GetItemsDocument,
    "\n    query GetItemsNameID {\n        items {\n            id\n            name\n        }\n    }\n": types.GetItemsNameIdDocument,
    "\n    mutation UpdateItem($id: UUID!, $input: UpdateItemInput!) {\n        updateItem(id: $id, input: $input) {\n            id\n        }\n    }\n": types.UpdateItemDocument,
    "\n    mutation CreateLocation($input: CreateLocationInput!) {\n        createLocation(input: $input) {\n            id\n        }\n    }\n": types.CreateLocationDocument,
    "\n    mutation DeleteLocation($id: UUID!) {\n        deleteLocation(id: $id)\n    }\n": types.DeleteLocationDocument,
    "\n    query GetLocation($id: UUID!) {\n        location(id: $id) {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n": types.GetLocationDocument,
    "\n    query GetLocations {\n        locations {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n": types.GetLocationsDocument,
    "\n    query GetLocationsNameID {\n        locations {\n            id\n            name\n        }\n    }\n": types.GetLocationsNameIdDocument,
    "\n    mutation UpdateLocation($id: UUID!, $input: UpdateLocationInput!) {\n        updateLocation(id: $id, input: $input) {\n            id\n        }\n    }\n": types.UpdateLocationDocument,
    "\n    mutation CreatePlace($input: CreatePlaceInput!) {\n        createPlace(input: $input) {\n            id\n        }\n    }\n": types.CreatePlaceDocument,
    "\n    mutation DeletePlace($id: UUID!) {\n        deletePlace(id: $id)\n    }\n": types.DeletePlaceDocument,
    "\n    query GetPlace($id: UUID!) {\n        place(id: $id) {\n            id\n            createdAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n": types.GetPlaceDocument,
    "\n    query GetPlaces {\n        places {\n            id\n            createdAt\n            updatedAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n": types.GetPlacesDocument,
    "\n    query GetPlacesNameID {\n        places {\n            id\n            name\n        }\n    }\n": types.GetPlacesNameIdDocument,
    "\n    mutation UpdatePlace($id: UUID!, $input: UpdatePlaceInput!) {\n        updatePlace(id: $id, input: $input) {\n            id\n        }\n    }\n": types.UpdatePlaceDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetActiveOrganization {\n        activeOrganization {\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetActiveOrganization {\n        activeOrganization {\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetActiveUser {\n        activeUser {\n            firstName\n            lastName\n            organizations {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetActiveUser {\n        activeUser {\n            firstName\n            lastName\n            organizations {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation Login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SetActiveOrganization($organizationID: String!) {\n        setActiveOrganization(organizationID: $organizationID) {\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation SetActiveOrganization($organizationID: String!) {\n        setActiveOrganization(organizationID: $organizationID) {\n            token\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateItemCategory($input: CreateItemCategoryInput!) {\n        createItemCategory(input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateItemCategory($input: CreateItemCategoryInput!) {\n        createItemCategory(input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteItemCategory($id: UUID!) {\n        deleteItemCategory(id: $id)\n    }\n"): (typeof documents)["\n    mutation DeleteItemCategory($id: UUID!) {\n        deleteItemCategory(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetItemCategories {\n        itemCategories {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetItemCategories {\n        itemCategories {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetItemCategoriesNameId {\n        itemCategories {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetItemCategoriesNameId {\n        itemCategories {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetItemCategory($id: UUID!) {\n        itemCategory(id: $id) {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetItemCategory($id: UUID!) {\n        itemCategory(id: $id) {\n            id\n            createdAt\n            updatedAt\n            name\n            description\n            parentCategory {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateItemCategory($id: UUID!, $input: UpdateItemCategoryInput!) {\n        updateItemCategory(id: $id, input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateItemCategory($id: UUID!, $input: UpdateItemCategoryInput!) {\n        updateItemCategory(id: $id, input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateItem($input: CreateItemInput!) {\n        createItem(input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateItem($input: CreateItemInput!) {\n        createItem(input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteItem($id: UUID!) {\n        deleteItem(id: $id)\n    }\n"): (typeof documents)["\n    mutation DeleteItem($id: UUID!) {\n        deleteItem(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetItem($id: UUID!) {\n        item(id: $id) {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n"): (typeof documents)["\n    query GetItem($id: UUID!) {\n        item(id: $id) {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetItems {\n        items {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n"): (typeof documents)["\n    query GetItems {\n        items {\n            id\n            createdAt\n            updatedAt\n            category {\n                id\n                name\n            }\n            sku\n            name\n            description\n            quantity\n            unitOfMeasure\n            minimumStock\n            maximumStock\n            reorderPoint\n            costPrice\n            sellingPrice\n            msrp\n            barcode\n            imageUrl\n            weight\n            dimensions\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetItemsNameID {\n        items {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetItemsNameID {\n        items {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateItem($id: UUID!, $input: UpdateItemInput!) {\n        updateItem(id: $id, input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateItem($id: UUID!, $input: UpdateItemInput!) {\n        updateItem(id: $id, input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateLocation($input: CreateLocationInput!) {\n        createLocation(input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateLocation($input: CreateLocationInput!) {\n        createLocation(input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteLocation($id: UUID!) {\n        deleteLocation(id: $id)\n    }\n"): (typeof documents)["\n    mutation DeleteLocation($id: UUID!) {\n        deleteLocation(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetLocation($id: UUID!) {\n        location(id: $id) {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n"): (typeof documents)["\n    query GetLocation($id: UUID!) {\n        location(id: $id) {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetLocations {\n        locations {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n"): (typeof documents)["\n    query GetLocations {\n        locations {\n            id\n            createdAt\n            updatedAt\n            place {\n                id\n                name\n            }\n            parentLocation {\n                id\n                name\n            }\n            name\n            type\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetLocationsNameID {\n        locations {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetLocationsNameID {\n        locations {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateLocation($id: UUID!, $input: UpdateLocationInput!) {\n        updateLocation(id: $id, input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateLocation($id: UUID!, $input: UpdateLocationInput!) {\n        updateLocation(id: $id, input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreatePlace($input: CreatePlaceInput!) {\n        createPlace(input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreatePlace($input: CreatePlaceInput!) {\n        createPlace(input: $input) {\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeletePlace($id: UUID!) {\n        deletePlace(id: $id)\n    }\n"): (typeof documents)["\n    mutation DeletePlace($id: UUID!) {\n        deletePlace(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlace($id: UUID!) {\n        place(id: $id) {\n            id\n            createdAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n"): (typeof documents)["\n    query GetPlace($id: UUID!) {\n        place(id: $id) {\n            id\n            createdAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlaces {\n        places {\n            id\n            createdAt\n            updatedAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n"): (typeof documents)["\n    query GetPlaces {\n        places {\n            id\n            createdAt\n            updatedAt\n            name\n            type\n            addressLine1\n            addressLine2\n            city\n            state\n            postalCode\n            country\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPlacesNameID {\n        places {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query GetPlacesNameID {\n        places {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdatePlace($id: UUID!, $input: UpdatePlaceInput!) {\n        updatePlace(id: $id, input: $input) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation UpdatePlace($id: UUID!, $input: UpdatePlaceInput!) {\n        updatePlace(id: $id, input: $input) {\n            id\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;