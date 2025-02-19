'use client';

import { ColumnDef } from "@tanstack/react-table";
import { GetPlacesQuery } from "@/server/generated/graphql";
import { deletePlace } from "@/server/actions/place/deletePlace";
import { 
    createCommonColumns, 
    createDateColumns, 
    createActionColumn 
} from "@/components/column-factory";

type Place = GetPlacesQuery['places'][number];

export const columns: ColumnDef<Place>[] = [
    ...createCommonColumns<Place>(),
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "addressLine1",
        header: "Address Line 1",
    },
    {
        accessorKey: "addressLine2",
        header: "Address Line 2",
    },
    {
        accessorKey: "city",
        header: "City",
    },
    {
        accessorKey: "state",
        header: "State",
    },
    {
        accessorKey: "postalCode",
        header: "Postal Code",
    },
    {
        accessorKey: "country",
        header: "Country",
    },
    ...createDateColumns<Place>(),
    createActionColumn<Place>({
        entityPathName: "places",
        idInputName: "placeID",
        deleteAction: deletePlace
    })
];