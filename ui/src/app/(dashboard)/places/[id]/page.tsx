import { PlaceForm } from "./PlaceForm";
import { getPlaceByID } from "@/server/actions/place/getPlaceByID";

async function getPlace(id: string) {
    const place = await getPlaceByID(id);
    if (!place) {
        return null;
    }
    return place;
}

export default async function PlacePage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const place = id === "new" ? null : await getPlace(id);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                {place ? "Edit Place" : "New Place"}
            </h1>

            <PlaceForm initialData={place} />
        </div>
    );
}
