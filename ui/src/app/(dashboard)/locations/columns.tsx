"use client";

import { ColumnDef } from "@tanstack/react-table";
import { GetLocationsQuery } from "@/server/generated/graphql";
import { deleteLocation } from "@/server/actions/location/deleteLocation";
import {
    createCommonColumns,
    createDateColumns,
    createActionColumn,
} from "@/components/column-factory";

type Category = GetLocationsQuery["locations"][number];

export const columns: ColumnDef<Category>[] = [
    ...createCommonColumns<Category>(),
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "parentLocation",
        header: "Parent Location",
        cell: ({ row }) => row.original.parentLocation?.name ?? "-",
    },
    {
        accessorKey: "place",
        header: "Place",
        cell: ({ row }) => row.original.place.name,
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => row.original.description ?? "-",
    },
    ...createDateColumns<Category>(),
    createActionColumn<Category>({
        entityPathName: "locations",
        idInputName: "locationId",
        deleteAction: deleteLocation,
    }),
];