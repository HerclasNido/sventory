import Link from "next/link";
import { getCategories } from "@/server/actions/category/getCategories";
import { IconPlus } from "@tabler/icons-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { GetItemCategoriesQuery } from "@/server/generated/graphql";

export default async function Categories() {
    const data: GetItemCategoriesQuery['itemCategories'] = await getCategories();
    const defaultColumnVisibility = {
        id: false,
        createdAt: false,
        updatedAt: false,
    };
    return (
        <main>
            <header className="w-full flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Categories</h1>
                <Link href="/categories/new">
                    <Button>
                        <IconPlus size={20} />
                        New Category
                    </Button>
                </Link>
            </header>
            <div className="container mx-auto py-10">
                <DataTable
                    columns={columns}
                    data={data}
                    defaultVisibility={defaultColumnVisibility}
                />
            </div>
        </main>
    );
}
