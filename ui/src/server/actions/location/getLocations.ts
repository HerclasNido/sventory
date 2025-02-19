"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    GetLocationsQuery,
    GetLocationsNameIdQuery,
    QueryOptions,
} from "@/server/generated/graphql";
import { cookies } from "next/headers";

const query = gql`
    query GetLocations {
        locations {
            id
            createdAt
            updatedAt
            place {
                id
                name
            }
            parentLocation {
                id
                name
            }
            name
            type
            description
        }
    }
`;

export async function getLocations() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetLocationsQuery>({
            query,
            variables: { queryOptions },
        });
        return data.locations;
    } catch (error: any) {
        console.error("Error fetching locations:", error);
        return [];
    }
}

const queryNameID = gql`
    query GetLocationsNameID {
        locations {
            id
            name
        }
    }
`;

export async function getLocationsNameID() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetLocationsNameIdQuery>({
            query: queryNameID,
            variables: { queryOptions },
        });
        return data.locations;
    } catch (error: any) {
        console.error("Error fetching locations:", error);
        return [];
    }
}
