import Link from "next/link";
import { getLocations } from "@/server/actions/location/getLocations";
import { IconPlus } from "@tabler/icons-react";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { GetLocationsQuery } from "@/server/generated/graphql";

export default async function Locations() {
    const data: GetLocationsQuery['locations'] = await getLocations();
    const defaultColumnVisibility = {
        id: false,
        createdAt: false,
        updatedAt: false,
    };
    return (
        <main>
            <header className="w-full flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">Locations</h1>
                <Link href="/locations/new">
                    <Button>
                        <IconPlus size={20} />
                        New Location
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
