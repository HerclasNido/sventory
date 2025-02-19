"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { GetLocationQuery } from "@/server/generated/graphql";

const query = gql`
    query GetLocation($id: UUID!) {
        location(id: $id) {
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

export async function getLocationByID(id: string) {
    const client = await createApolloClient();
    try {
        const { data } = await client.query<GetLocationQuery>({
            query,
            variables: { id },
        });
        return data.location;
    } catch (error: any) {
        console.error("Error fetching location:", error);
        return null;
    }
}
