import Link from "next/link";
import { getPlaces } from "@/server/actions/place/getPlaces";
import { IconPlus } from "@tabler/icons-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { GetPlacesQuery } from "@/server/generated/graphql";

export default async function Places() {
    const data: GetPlacesQuery['places'] = await getPlaces();
    const defaultColumnVisibility = {
        id: false,
        addressLine2: false,
        createdAt: false,
        updatedAt: false,
    };
    return (
        <main>
            <header className="w-full flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Places</h1>
                <Link href="/places/new">
                    <Button>
                        <IconPlus size={20} />
                        New Place
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
