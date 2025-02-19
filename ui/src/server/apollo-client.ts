import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { cookies } from "next/headers";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const endpoint =
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:7836/graphql";

export async function createApolloClient(): Promise<ApolloClient<any>> {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;
    const headers: Record<string, string> = {};

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const uploadLink = createUploadLink({
        uri: endpoint,
        headers,
    });

    const apolloClient = new ApolloClient({
        link: uploadLink,
        cache: new InMemoryCache(),
        ssrMode: true,
    });

    return apolloClient;
}
