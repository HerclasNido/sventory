import Link from "next/link";
import { getItems } from "@/server/actions/item/getItems";
import { IconPlus } from "@tabler/icons-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { GetItemsQuery } from "@/server/generated/graphql";

export default async function Items() {
    const data: GetItemsQuery['items'] = await getItems();
    const defaultColumnVisibility = {
        id: false,
        createdAt: false,
        updatedAt: false,
        description: false,
        reorderPoint: false,
        costPrice: false,
        minimumStock: false,
        maximumStock: false,
        sellingPrice: false,
        msrp: false,
        barcode: false,
        image: false,
        weight: false,
        dimensions: false,
    };
    return (
        <main>
            <header className="w-full flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Items</h1>
                <Link href="/items/new">
                    <Button>
                        <IconPlus size={20} />
                        New Item
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
