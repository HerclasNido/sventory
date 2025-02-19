"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { GetItemCategoryQuery } from "@/server/generated/graphql";

const query = gql`
    query GetItemCategory($id: UUID!) {
        itemCategory(id: $id) {
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

export async function getCategoryByID(id: string) {
    const client = await createApolloClient();
    try {
        const { data } = await client.query<GetItemCategoryQuery>({
            query,
            variables: { id },
        });
        return data.itemCategory;
    } catch (error: any) {
        console.error("Error fetching category:", error);
        return null;
    }
}
