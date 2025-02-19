'use client';

import { ColumnDef } from "@tanstack/react-table";
import { GetItemCategoriesQuery } from "@/server/generated/graphql";
import { deleteCategory } from "@/server/actions/category/deleteCategory";
import { 
    createCommonColumns, 
    createDateColumns, 
    createActionColumn 
} from "@/components/column-factory";

type Category = GetItemCategoriesQuery['itemCategories'][number];

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
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => row.original.description ?? "-",
    },
    {
        accessorKey: "parentCategory",
        header: "Parent Category",
        cell: ({ row }) => row.original.parentCategory?.name ?? "-",
    },
    ...createDateColumns<Category>(),
    createActionColumn<Category>({
        entityPathName: "categories",
        idInputName: "categoryID",
        deleteAction: deleteCategory
    })
];