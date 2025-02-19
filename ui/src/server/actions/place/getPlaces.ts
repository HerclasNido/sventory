"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    GetPlacesQuery,
    GetPlacesNameIdQuery,
    QueryOptions,
} from "@/server/generated/graphql";
import { cookies } from "next/headers";

const query = gql`
    query GetPlaces {
        places {
            id
            createdAt
            updatedAt
            name
            type
            addressLine1
            addressLine2
            city
            state
            postalCode
            country
        }
    }
`;

export async function getPlaces() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetPlacesQuery>({
            query,
            variables: { queryOptions },
        });
        return data.places;
    } catch (error: any) {
        console.error("Error fetching places:", error);
        return [];
    }
}

const queryNameID = gql`
    query GetPlacesNameID {
        places {
            id
            name
        }
    }
`;

export async function getPlacesNameID() {
    const client = await createApolloClient();
    const cookiesStore = await cookies();
    const activeOrg = (cookiesStore.get("org") || "").toString();

    const queryOptions: QueryOptions = {
        filters: [
            { field: "OrganizationID", operator: "eq", value: activeOrg },
        ],
    };

    try {
        const { data } = await client.query<GetPlacesNameIdQuery>({
            query: queryNameID,
            variables: { queryOptions },
        });
        return data.places;
    } catch (error: any) {
        console.error("Error fetching places:", error);
        return [];
    }
}
