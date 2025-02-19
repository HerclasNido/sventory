'use client';

import { EntityForm } from "@/components/EntityForm";
import { createCategory } from "@/server/actions/category/createCategory";
import { updateCategory } from "@/server/actions/category/updateCategory";
import { categorySchema } from "@/lib/zod-schemas";
import { GetItemCategoryQuery } from "@/server/generated/graphql";

interface CategoryFormProps {
    initialData?: GetItemCategoryQuery["itemCategory"];
    categories: { id: any; name: string }[];
}

export function CategoryForm({
    initialData,
    categories,
}: CategoryFormProps) {
    const fields = [
        {
            name: "name",
            label: "Name",
            type: "text" as const,
            placeholder: "Name",
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "text" as const,
            placeholder: "Description",
        },
        {
            name: "parentCategoryId",
            label: "Parent Category",
            type: "select" as const,
            placeholder: "Select a parent category",
            options: categories.filter(category => category.id !== initialData?.id),
            isParentSelector: true,
        },
    ];

    return (
        <EntityForm
            initialData={initialData}
            schema={categorySchema}
            fields={fields}
            createAction={createCategory}
            updateAction={updateCategory}
            redirectPath="/categories"
            entityName="Category"
        />
    );
}
