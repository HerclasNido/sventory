import { LocationForm } from "./LocationForm";
import { getLocationByID } from "@/server/actions/location/getLocationByID";
import { getPlacesNameID } from "@/server/actions/place/getPlaces";
import { getLocationsNameID } from "@/server/actions/location/getLocations";

async function getLocation(id: string) {
    const location = await getLocationByID(id);
    if (!location) {
        return null;
    }
    return location;
}

export default async function LocationPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const location = id === "new" ? null : await getLocation(id);
    const places = await getPlacesNameID();
    const locations = await getLocationsNameID();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                {location ? "Edit Location" : "New Location"}
            </h1>

            <LocationForm
                initialData={location}
                locations={locations}
                places={places}
            />
        </div>
    );
}
