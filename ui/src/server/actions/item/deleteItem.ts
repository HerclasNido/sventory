"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { DeleteItemMutation } from "@/server/generated/graphql";
import { revalidatePath } from "next/cache";

const mutation = gql`
    mutation DeleteItem($id: UUID!) {
        deleteItem(id: $id)
    }
`;

const failMsg = "Failed to delete item";

export async function deleteItem(prevState: any, formData: FormData) {
    const itemId = formData.get("itemId");
    if (!itemId) {
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();
        const { data } = await client.mutate<DeleteItemMutation>({
            mutation,
            variables: { id: itemId },
        });

        if (!data?.deleteItem) {
            return {
                error: failMsg,
            };
        }
        revalidatePath("/items");
        return { message: "Item deleted successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
