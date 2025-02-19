"use server";

import { gql } from "@apollo/client";
import { createApolloClient } from "@/server/apollo-client";
import { LoginMutation } from "@/server/generated/graphql";
import { permanentRedirect } from "next/navigation";
import { cookies } from "next/headers";
import { loginSchema } from "@/lib/zod-schemas";

const mutation = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export async function login(prevState: any, formData: FormData) {
    const validatedFields = loginSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    try {
        const client = await createApolloClient();
        const { data } = await client.mutate<LoginMutation>({
            mutation,
            variables: {
                email: validatedFields.data.email,
                password: validatedFields.data.password,
            },
        });
        const token = data?.login?.token;
        const cookieStore = await cookies();
        if (token) {
            cookieStore.set("session", token);
        }
    } catch (error: any) {
        console.error("Login Mutation Failed: ", error);
        return {
            error: "Invalid email or password",
        };
    }
    permanentRedirect("/select-org");
}
