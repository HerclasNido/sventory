"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { GetItemQuery } from "@/server/generated/graphql";

const query = gql`
    query GetItem($id: UUID!) {
        item(id: $id) {
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

export async function getItemByID(id: string) {
    const client = await createApolloClient();
    try {
        const { data } = await client.query<GetItemQuery>({
            query,
            variables: { id },
        });
        return data.item;
    } catch (error: any) {
        console.error("Error fetching item:", error);
        return null;
    }
}
