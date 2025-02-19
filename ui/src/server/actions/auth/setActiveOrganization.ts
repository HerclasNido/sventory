"use server";

import { gql } from "@apollo/client";
import { SetActiveOrganizationMutation } from "@/server/generated/graphql";
import { createApolloClient } from "@/server/apollo-client";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { activeOrgSchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation SetActiveOrganization($organizationID: String!) {
        setActiveOrganization(organizationID: $organizationID) {
            token
        }
    }
`;

export async function setActiveOrganization(
    prevState: any,
    formData: FormData
) {
    const validatedFields = activeOrgSchema.safeParse({
        organizationID: formData.get("organizationID"),
    });
    console.log(JSON.stringify(validatedFields));
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }
    const organizationID = validatedFields.data.organizationID;
    const client = await createApolloClient();
    try {
        const { data } = await client.mutate<SetActiveOrganizationMutation>({
            mutation,
            variables: { organizationID },
        });
        if (data?.setActiveOrganization) {
            const { token } = data?.setActiveOrganization;
            const cookieStore = await cookies();
            cookieStore.set("session", token);
            cookieStore.set("org", organizationID);
        }
    } catch (error: any) {
        console.error("Error selecting organization:", error);
        return { error: "Please select an organization" };
    }
    permanentRedirect("/");
}
