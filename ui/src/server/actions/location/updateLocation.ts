"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    UpdateLocationMutation,
    UpdateLocationInput,
} from "@/server/generated/graphql";
import { locationSchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation UpdateLocation($id: UUID!, $input: UpdateLocationInput!) {
        updateLocation(id: $id, input: $input) {
            id
        }
    }
`;

const failMsg = "Failed to update location";

export async function updateLocation(
    locationId: string,
    prevState: any,
    formData: FormData
) {
    const parentLocationId =
        formData.get("parentLocationId") === "NULL"
            ? ""
            : formData.get("parentLocationId");

    const validatedFields = locationSchema.safeParse({
        placeId: formData.get("placeId"),
        parentLocationId: parentLocationId,
        name: formData.get("name"),
        type: formData.get("type"),
        description: formData.get("description"),
    });
    if (!validatedFields.success) {
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();

        const input: UpdateLocationInput = {
            placeId: validatedFields.data.placeId,
            parentLocationId: validatedFields.data.parentLocationId,
            name: validatedFields.data.name,
            type: validatedFields.data.type,
            description: validatedFields.data.description,
        };

        const { data } = await client.mutate<UpdateLocationMutation>({
            mutation,
            variables: { id: locationId, input },
        });

        if (!data?.updateLocation) {
            return {
                error: failMsg,
            };
        }

        return { message: "Location updated successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
