'use client';

import { EntityForm } from "@/components/EntityForm";
import { createLocation } from "@/server/actions/location/createLocation";
import { updateLocation } from "@/server/actions/location/updateLocation";
import { locationSchema } from "@/lib/zod-schemas";
import { GetLocationQuery } from "@/server/generated/graphql";

interface LocationFormProps {
    initialData?: GetLocationQuery["location"];
    locations: { id: any; name: string }[];
    places: { id: any; name: string }[];
}

export function LocationForm({
    initialData,
    locations,
    places,
}: LocationFormProps) {
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
            name: "placeId",
            label: "Place",
            type: "select" as const,
            placeholder: "Select a place",
            options: places,
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "text" as const,
            placeholder: "Description",
        },
        {
            name: "parentLocationId",
            label: "Parent Location",
            type: "select" as const,
            placeholder: "Select a parent location",
            options: locations.filter(loc => loc.id !== initialData?.id),
            isParentSelector: true,
        },
    ];

    return (
        <EntityForm
            initialData={initialData}
            schema={locationSchema}
            fields={fields}
            createAction={createLocation}
            updateAction={updateLocation}
            redirectPath="/locations"
            entityName="Location"
        />
    );
}
