'use client';

import { EntityForm } from "@/components/EntityForm";
import { createItem } from "@/server/actions/item/createItem";
import { updateItem } from "@/server/actions/item/updateItem";
import { itemSchema } from "@/lib/zod-schemas";
import { GetItemQuery } from "@/server/generated/graphql";
import { unitsOfMeasure } from "@/lib/units-of-measure";

interface ItemFormProps {
    initialData?: GetItemQuery["item"];
    categories: { id: any; name: string }[];
}

export function ItemForm({
    initialData,
    categories,
}: ItemFormProps) {
    const fields = [
        {
            name: "name",
            label: "Name",
            type: "text" as const,
            placeholder: "Name",
            required: true,
        },
        {
            name: "sku",
            label: "SKU",
            type: "text" as const,
            placeholder: "SKU",
            required: true,
        },
        {
            name: "quantity",
            label: "Quantity",
            type: "number" as const,
            placeholder: "Quantity",
            required: true,
        },
        {
            name: "unitOfMeasure",
            label: "Unit of Measure",
            type: "select" as const,
            placeholder: "Unit of Measure",
            options: unitsOfMeasure,
            required: true,
        },
        {
            name: "categoryId",
            label: "Category",
            type: "select" as const,
            placeholder: "Select an item category",
            options: categories.filter(category => category.id !== initialData?.id),
            isParentSelector: true,
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "text" as const,
            placeholder: "Description",
        },
        {
            name: "minimumStock",
            label: "Minimum Stock",
            type: "number" as const,
            placeholder: "Minimum Stock",
        },
        {
            name: "maximumStock",
            label: "Maximum Stock",
            type: "number" as const,
            placeholder: "Maximum Stock",
        },
        {
            name: "reorderPoint",
            label: "Reorder Point",
            type: "number" as const,
            placeholder: "Reorder Point",
        },
        {
            name: "costPrice",
            label: "Cost Price",
            type: "money" as const,
            placeholder: "Cost Price",
        },
        {
            name: "sellingPrice",
            label: "Selling Price",
            type: "money" as const,
            placeholder: "Selling Price",
        },
        {
            name: "msrp",
            label: "MSRP",
            type: "money" as const,
            placeholder: "MSRP",
        },
        {
            name: "barcode",
            label: "Barcode",
            type: "text" as const,
            placeholder: "Barcode",
        },
        {
            name: "weight",
            label: "Weight",
            type: "text" as const,
            placeholder: "Weight",
        },
        {
            name: "dimensions",
            label: "Dimensions",
            type: "text" as const,
            placeholder: "Dimensions",
        },
        {
            name: "image",
            label: "Image",
            type: "image" as const,
            placeholder: "Image",
            previewUrl: initialData?.imageUrl,
        },
    ];

    return (
        <EntityForm
            initialData={initialData}
            schema={itemSchema}
            fields={fields}
            createAction={createItem}
            updateAction={updateItem}
            redirectPath="/items"
            entityName="Item"
        />
    );
}
