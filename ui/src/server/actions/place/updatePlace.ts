"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    UpdatePlaceMutation,
    UpdatePlaceInput,
} from "@/server/generated/graphql";
import { placeSchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation UpdatePlace($id: UUID!, $input: UpdatePlaceInput!) {
        updatePlace(id: $id, input: $input) {
            id
        }
    }
`;

export async function updatePlace(
    placeId: string,
    prevState: any,
    formData: FormData
) {
    const validatedFields = placeSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
        addressLine1: formData.get("addressLine1"),
        addressLine2: formData.get("addressLine2"),
        city: formData.get("city"),
        state: formData.get("state"),
        postalCode: formData.get("postalCode"),
        country: formData.get("country"),
    });
    if (!validatedFields.success) {
        return { error: "Failed to update place." };
    }

    try {
        const client = await createApolloClient();

        const input: UpdatePlaceInput = {
            name: validatedFields.data.name,
            type: validatedFields.data.type,
            addressLine1: validatedFields.data.addressLine1,
            addressLine2: validatedFields.data.addressLine2,
            city: validatedFields.data.city,
            state: validatedFields.data.state,
            postalCode: validatedFields.data.postalCode,
            country: validatedFields.data.country,
        };

        const { data } = await client.mutate<UpdatePlaceMutation>({
            mutation,
            variables: { id: placeId, input },
        });

        if (!data?.updatePlace) {
            return {
                error: "Failed to update place",
            };
        }

        return { message: "Place updated successfully" };
    } catch (error: any) {
        console.error("Error updating place:", error);
        return {
            error: "Failed to update place",
        };
    }
}
