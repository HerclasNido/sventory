"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { GetActiveUserQuery } from "@/server/generated/graphql";

const query = gql`
    query GetActiveUser {
        activeUser {
            firstName
            lastName
            organizations {
                id
                name
            }
        }
    }
`;

export async function getActiveUser() {
    const client = await createApolloClient();
    try {
        const { data } = await client.query<GetActiveUserQuery>({ query });
        return data.activeUser;
    } catch (error: any) {
        console.error("Error fetching active user:", error);
        return null;
    }
}
