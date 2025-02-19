"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { DeleteItemCategoryMutation } from "@/server/generated/graphql";
import { revalidatePath } from "next/cache";

const mutation = gql`
    mutation DeleteItemCategory($id: UUID!) {
        deleteItemCategory(id: $id)
    }
`;

const failMsg = "Failed to delete category";

export async function deleteCategory(prevState: any, formData: FormData) {
    const categoryID = formData.get("categoryID");
    if (!categoryID) {
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();
        const { data } = await client.mutate<DeleteItemCategoryMutation>({
            mutation,
            variables: { id: categoryID }
        });

        if (!data?.deleteItemCategory) {
            return {
                error: failMsg,
            };
        }
        revalidatePath("/categorys");
        return { message: "Category deleted successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
