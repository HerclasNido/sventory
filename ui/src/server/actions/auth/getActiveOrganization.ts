"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { GetActiveOrganizationQuery } from "@/server/generated/graphql";

const query = gql`
    query GetActiveOrganization {
        activeOrganization {
            name
        }
    }
`;

export async function getActiveOrganization() {
    const client = await createApolloClient();
    try {
        const { data } = await client.query<GetActiveOrganizationQuery>({
            query,
        });
        return data.activeOrganization;
    } catch (error: any) {
        console.error("Error fetching active organization:", error);
        return null;
    }
}
