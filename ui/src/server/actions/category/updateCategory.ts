"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    UpdateItemCategoryMutation,
    UpdateItemCategoryInput,
} from "@/server/generated/graphql";
import { categorySchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation UpdateItemCategory($id: UUID!, $input: UpdateItemCategoryInput!) {
        updateItemCategory(id: $id, input: $input) {
            id
        }
    }
`;

export async function updateCategory(
    categoryId: string,
    prevState: any,
    formData: FormData
) {
    const parentCategoryId =
        formData.get("parentCategoryId") === "NULL"
            ? ""
            : formData.get("parentCategoryId");

    const validatedFields = categorySchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        parentCategoryId: parentCategoryId,
    });
    if (!validatedFields.success) {
        return { error: "Failed to update category." };
    }

    try {
        const client = await createApolloClient();

        const input: UpdateItemCategoryInput = {
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            parentCategoryId: validatedFields.data.parentCategoryId,
        };

        const { data } = await client.mutate<UpdateItemCategoryMutation>({
            mutation,
            variables: { id: categoryId, input },
        });

        if (!data?.updateItemCategory) {
            return {
                error: "Failed to update category",
            };
        }

        return { message: "Category updated successfully" };
    } catch (error: any) {
        console.error("Error updating category:", error);
        return {
            error: "Failed to update category",
        };
    }
}
