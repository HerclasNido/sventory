"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    UpdateItemMutation,
    UpdateItemInput,
} from "@/server/generated/graphql";
import { itemSchema } from "@/lib/zod-schemas";

const updateItemMutation = gql`
    mutation UpdateItem($id: UUID!, $input: UpdateItemInput!) {
        updateItem(id: $id, input: $input) {
            id
        }
    }
`;

const failMsg = "Failed to update item";

export async function updateItem(
    itemId: string,
    prevState: any,
    formData: FormData
) {
    const formImage = formData.get("image");
    const image =
        formImage instanceof File && formImage.size > 0 ? formImage : null;

    const validatedFields = itemSchema.safeParse({
        categoryId: formData.get("categoryId"),
        sku: formData.get("sku"),
        name: formData.get("name"),
        description: formData.get("description"),
        quantity: formData.get("quantity"),
        unitOfMeasure: formData.get("unitOfMeasure"),
        minimumStock: formData.get("minimumStock"),
        maximumStock: formData.get("maximumStock"),
        reorderPoint: formData.get("reorderPoint"),
        costPrice: formData.get("costPrice"),
        sellingPrice: formData.get("sellingPrice"),
        msrp: formData.get("msrp"),
        barcode: formData.get("barcode"),
        weight: formData.get("weight"),
        dimensions: formData.get("dimensions"),
        image: image,
    });
    if (!validatedFields.success) {
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();

        const input: UpdateItemInput = {
            categoryId: validatedFields.data.categoryId,
            sku: validatedFields.data.sku,
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            quantity: parseFloat(validatedFields.data.quantity),
            unitOfMeasure: validatedFields.data.unitOfMeasure,
            minimumStock: parseFloat(validatedFields.data.minimumStock || "0"),
            maximumStock: parseFloat(validatedFields.data.maximumStock || "0"),
            reorderPoint: parseFloat(validatedFields.data.reorderPoint || "0"),
            costPrice: Math.round(parseFloat(validatedFields.data.costPrice || "0") * 100),
            sellingPrice: Math.round(parseFloat(validatedFields.data.sellingPrice || "0") * 100),
            msrp: Math.round(parseFloat(validatedFields.data.msrp || "0") * 100),
            barcode: validatedFields.data.barcode,
            weight: parseFloat(validatedFields.data.weight || "0"),
            dimensions: validatedFields.data.dimensions,
            image: validatedFields.data.image,
        };

        console.log("input", input);

        const { data } = await client.mutate<UpdateItemMutation>({
            mutation: updateItemMutation,
            variables: { id: itemId, input }
        });

        if (!data?.updateItem) {
            return {
                error: failMsg,
            };
        }

        return { message: "Item updated successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
