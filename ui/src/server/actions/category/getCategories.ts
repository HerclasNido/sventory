"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    GetItemCategoriesQuery,
    GetItemCategoriesNameIdQuery,
    QueryOptions,
} from "@/server/generated/graphql";
import { cookies } from "next/headers";

const query = gql`
    query GetItemCategories {
        itemCategories {
            id
            createdAt
            updatedAt
            name
            description
            parentCategory {
                id
                name
            }
        }
    }
`;

export async function getCategories(): Promise<
    GetItemCategoriesQuery["itemCategories"]
> {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetItemCategoriesQuery>({
            query,
            variables: {
                queryOptions,
            },
        });
        return data.itemCategories;
    } catch (error: any) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

const queryNameID = gql`
    query GetItemCategoriesNameId {
        itemCategories {
            id
            name
        }
    }
`;

export async function getCategoriesNameID() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetItemCategoriesNameIdQuery>({
            query: queryNameID,
            variables: {
                queryOptions,
            },
        });
        return data.itemCategories;
    } catch (error: any) {
        console.error("Error fetching categories:", error);
        return [];
    }
}
