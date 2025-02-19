"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    GetItemsQuery,
    GetItemsNameIdQuery,
    QueryOptions,
} from "@/server/generated/graphql";
import { cookies } from "next/headers";

const query = gql`
    query GetItems {
        items {
            id
            createdAt
            updatedAt
            category {
                id
                name
            }
            sku
            name
            description
            quantity
            unitOfMeasure
            minimumStock
            maximumStock
            reorderPoint
            costPrice
            sellingPrice
            msrp
            barcode
            imageUrl
            weight
            dimensions
            description
        }
    }
`;

export async function getItems() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetItemsQuery>({
            query,
            variables: { queryOptions },
        });
        return data.items;
    } catch (error: any) {
        console.error("Error fetching items:", error);
        return [];
    }
}

const queryNameID = gql`
    query GetItemsNameID {
        items {
            id
            name
        }
    }
`;

export async function getItemsNameID() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetItemsNameIdQuery>({
            query: queryNameID,
            variables: {
                queryOptions,
            },
        });
        return data.items;
    } catch (error: any) {
        console.error("Error fetching items:", error);
        return [];
    }
}
