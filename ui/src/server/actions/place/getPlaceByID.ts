"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { GetPlaceQuery } from "@/server/generated/graphql";

const query = gql`
    query GetPlace($id: UUID!) {
        place(id: $id) {
            id
            createdAt
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

export async function getPlaceByID(id: string) {
    const client = await createApolloClient();
    try {
        const { data } = await client.query<GetPlaceQuery>({
            query,
            variables: { id },
        });
        return data.place;
    } catch (error: any) {
        console.error("Error fetching place:", error);
        return null;
    }
}
