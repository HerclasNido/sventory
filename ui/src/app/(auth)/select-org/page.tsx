import { getActiveUser } from "@/server/actions/auth/getActiveUser";
import { SelectOrgForm } from "./SelectOrgForm";

export default async function SelectOrg() {
    const user = await getActiveUser();
    const organizations = user?.organizations;
    return (
        <div className="w-full flex items-center justify-center pt-20">
            <SelectOrgForm organizations={organizations} />
        </div>
    );
}
