"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { cookies } from "next/headers";
import {
    CreatePlaceMutation,
    CreatePlaceInput,
} from "@/server/generated/graphql";
import { placeSchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation CreatePlace($input: CreatePlaceInput!) {
        createPlace(input: $input) {
            id
        }
    }
`;

const failMsg = "Failed to create place";

export async function createPlace(prevState: any, formData: FormData) {
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
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();
        const cookieStore = await cookies();
        const orgID = cookieStore.get("org")?.value;

        const input: CreatePlaceInput = {
            organizationId: orgID,
            name: validatedFields.data.name,
            type: validatedFields.data.type,
            addressLine1: validatedFields.data.addressLine1,
            addressLine2: validatedFields.data.addressLine2,
            city: validatedFields.data.city,
            state: validatedFields.data.state,
            postalCode: validatedFields.data.postalCode,
            country: validatedFields.data.country,
        };

        const { data } = await client.mutate<CreatePlaceMutation>({
            mutation,
            variables: { input },
        });

        if (!data?.createPlace) {
            return {
                error: failMsg,
            };
        }

        return { message: "Place created successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
