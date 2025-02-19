'use client';

import { EntityForm } from "@/components/EntityForm";
import { createPlace } from "@/server/actions/place/createPlace";
import { updatePlace } from "@/server/actions/place/updatePlace";
import { placeSchema } from "@/lib/zod-schemas";
import { GetPlaceQuery } from "@/server/generated/graphql";

interface PlaceFormProps {
    initialData?: GetPlaceQuery["place"];
}

export function PlaceForm({
    initialData,
}: PlaceFormProps) {
    const fields = [
        {
            name: "name",
            label: "Name",
            type: "text" as const,
            placeholder: "Name",
            required: true,
        },
        {
            name: "type",
            label: "Type",
            type: "text" as const,
            placeholder: "Type",
            required: true,
        },
        {
            name: "addressLine1",
            label: "Address Line 1",
            type: "text" as const,
            placeholder: "Address Line 1",
            required: true,
        },
        {
            name: "addressLine2",
            label: "Address Line 2",
            type: "text" as const,
            placeholder: "Address Line 2",
        },
        {
            name: "city",
            label: "City",
            type: "text" as const,
            placeholder: "City",
            required: true,
        },
        {
            name: "state",
            label: "State",
            type: "text" as const,
            placeholder: "State",
            required: true,
        },
        {
            name: "postalCode",
            label: "Postal Code",
            type: "text" as const,
            placeholder: "Postal Code",
            required: true,
        },
        {
            name: "country",
            label: "Country",
            type: "text" as const,
            placeholder: "Country",
            required: true,
        },
    ];

    return (
        <EntityForm
            initialData={initialData}
            schema={placeSchema}
            fields={fields}
            createAction={createPlace}
            updateAction={updatePlace}
            redirectPath="/places"
            entityName="Place"
        />
    );
}
