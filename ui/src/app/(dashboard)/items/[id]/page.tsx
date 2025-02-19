import { ItemForm } from "./ItemForm";
import { getItemByID } from "@/server/actions/item/getItemByID";
import { getCategoriesNameID } from "@/server/actions/category/getCategories";

async function getItem(id: string) {
    const item = await getItemByID(id);
    if (!item) return null;
    return item;
}

export default async function ItemPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const item = id === "new" ? null : await getItem(id);
    const categories = await getCategoriesNameID();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                {item ? "Edit Item" : "New Item"}
            </h1>

            <ItemForm initialData={item} categories={categories} />
        </div>
    );
}
