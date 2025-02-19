"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { cookies } from "next/headers";
import {
    CreateItemCategoryMutation,
    CreateItemCategoryInput,
} from "@/server/generated/graphql";
import { categorySchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation CreateItemCategory($input: CreateItemCategoryInput!) {
        createItemCategory(input: $input) {
            id
        }
    }
`;

const failMsg = "Failed to create category";

export async function createCategory(prevState: any, formData: FormData) {
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
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();
        const cookieStore = await cookies();
        const orgID = cookieStore.get("org")?.value;

        const input: CreateItemCategoryInput = {
            organizationId: orgID,
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            parentCategoryId: validatedFields.data.parentCategoryId,
        };

        const { data } = await client.mutate<CreateItemCategoryMutation>({
            mutation,
            variables: { input },
        });

        if (!data?.createItemCategory) {
            return {
                error: failMsg,
            };
        }

        return { message: "Category created successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
