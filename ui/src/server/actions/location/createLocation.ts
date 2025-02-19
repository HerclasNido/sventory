"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import {
    CreateLocationMutation,
    CreateLocationInput,
} from "@/server/generated/graphql";
import { locationSchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation CreateLocation($input: CreateLocationInput!) {
        createLocation(input: $input) {
            id
        }
    }
`;

const failMsg = "Failed to create location";

export async function createLocation(prevState: any, formData: FormData) {
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

        const input: CreateLocationInput = {
            placeId: validatedFields.data.placeId,
            name: validatedFields.data.name,
            type: validatedFields.data.type,
            description: validatedFields.data.description,
        };

        if (validatedFields.data.parentLocationId) {
            input.parentLocationId = validatedFields.data.parentLocationId;
        }

        const { data } = await client.mutate<CreateLocationMutation>({
            mutation,
            variables: { input },
        });

        if (!data?.createLocation) {
            return {
                error: failMsg,
            };
        }
        return { message: "Location created successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
