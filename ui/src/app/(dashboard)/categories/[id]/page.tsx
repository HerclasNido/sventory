import { CategoryForm } from "./CategoryForm";
import { getCategoryByID } from "@/server/actions/category/getCategoryByID";
import { getCategoriesNameID } from "@/server/actions/category/getCategories";

async function getCategory(id: string) {
    const category = await getCategoryByID(id);
    if (!category) return null;
    return category;
}

export default async function CategoryPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const category = id === "new" ? null : await getCategory(id);
    const categories = await getCategoriesNameID();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                {category ? "Edit Category" : "New Category"}
            </h1>

            <CategoryForm initialData={category} categories={categories} />
        </div>
    );
}
