import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema:
        process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
        "http://localhost:7836/graphql",
    documents: "src/**/*.ts",
    generates: {
        "src/server/generated/": {
            preset: "client",
            plugins: [],
        },
    },
};

export default config;
