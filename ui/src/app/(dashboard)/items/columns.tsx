"use client";

import { ColumnDef } from "@tanstack/react-table";
import { GetItemsQuery } from "@/server/generated/graphql";
import { deleteItem } from "@/server/actions/item/deleteItem";
import {
    createCommonColumns,
    createDateColumns,
    createActionColumn,
} from "@/components/column-factory";

type Item = GetItemsQuery["items"][number];

export const columns: ColumnDef<Item>[] = [
    ...createCommonColumns<Item>(),
    {
        accessorKey: "Image",
        header: "Image",
        cell: ({ row }) => (
            <a
                href={
                    row.original.imageUrl
                        ? row.original.imageUrl
                        : "/image-placeholder.jpg"
                }
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={
                        row.original.imageUrl
                            ? row.original.imageUrl
                            : "/image-placeholder.jpg"
                    }
                    alt={row.original.name ? row.original.name : "placeholder"}
                    className="w-16 h-16 object-cover rounded-md"
                />
            </a>
        ),
    },
    {
        accessorKey: "sku",
        header: "SKU",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => row.original.category.name,
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => row.original.description ?? "-",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "unitOfMeasure",
        header: "Unit",
    },
    {
        accessorKey: "minimumStock",
        header: "Minimum Stock",
        cell: ({ row }) => row.original.minimumStock ?? "-",
    },
    {
        accessorKey: "maximumStock",
        header: "Maximum Stock",
        cell: ({ row }) => row.original.maximumStock ?? "-",
    },
    {
        accessorKey: "reorderPoint",
        header: "Reorder Point",
        cell: ({ row }) => row.original.reorderPoint ?? "-",
    },
    {
        accessorKey: "costPrice",
        header: "Cost Price",
        cell: ({ row }) => row.original.costPrice ? `$ ${row.original.costPrice / 100}` : "-",
    },
    {
        accessorKey: "sellingPrice",
        header: "Selling Price",
        cell: ({ row }) => row.original.sellingPrice ? `$ ${row.original.sellingPrice / 100}` : "-",
    },
    {
        accessorKey: "msrp",
        header: "MSRP",
        cell: ({ row }) => row.original.msrp ? `$ ${row.original.msrp / 100}` : "-",
    },
    {
        accessorKey: "barcode",
        header: "Barcode",
        cell: ({ row }) => row.original.barcode ?? "-",
    },
    {
        accessorKey: "weight",
        header: "Weight",
        cell: ({ row }) => row.original.weight ?? "-",
    },
    {
        accessorKey: "dimensions",
        header: "Dimensions",
        cell: ({ row }) => row.original.dimensions ?? "-",
    },
    ...createDateColumns<Item>(),
    createActionColumn<Item>({
        entityPathName: "items",
        idInputName: "itemId",
        deleteAction: deleteItem,
    }),
];
