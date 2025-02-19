"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { DeletePlaceMutation } from "@/server/generated/graphql";
import { revalidatePath } from "next/cache";

const mutation = gql`
    mutation DeletePlace($id: UUID!) {
        deletePlace(id: $id)
    }
`;

const failMsg = "Failed to delete place";

export async function deletePlace(prevState: any, formData: FormData) {
    const placeID = formData.get("placeID");
    if (!placeID) {
        return { error: failMsg };
    }

    try {
        const client = await createApolloClient();
        const { data } = await client.mutate<DeletePlaceMutation>({
            mutation,
            variables: { id: placeID },
        });

        if (!data?.deletePlace) {
            return {
                error: failMsg,
            };
        }
        revalidatePath("/places");
        return { message: "Place deleted successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
