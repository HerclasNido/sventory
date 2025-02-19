"use server";

import { createApolloClient } from "@/server/apollo-client";
import { gql } from "@apollo/client";
import { DeleteLocationMutation } from "@/server/generated/graphql";
import { revalidatePath } from "next/cache";

const mutation = gql`
    mutation DeleteLocation($id: UUID!) {
        deleteLocation(id: $id)
    }
`;

const failMsg = "Failed to delete location";

export async function deleteLocation(prevState: any, formData: FormData) {
    const locationId = formData.get("locationId");
    if (!locationId) {
        return { error: failMsg };
    }

    console.log("Deleting location", locationId);

    try {
        const client = await createApolloClient();
        const { data } = await client.mutate<DeleteLocationMutation>({
            mutation,
            variables: { id: locationId },
        });

        if (!data?.deleteLocation) {
            return {
                error: failMsg,
            };
        }
        revalidatePath("/locations");
        return { message: "Location deleted successfully" };
    } catch (error: any) {
        console.error(failMsg, error);
        return {
            error: failMsg,
        };
    }
}
