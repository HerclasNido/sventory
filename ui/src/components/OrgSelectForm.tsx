export function OrgSelectForm() {
    const user = await getActiveUser();
        const organizations = user?.organizations;
    return (
        <form
            action={setActiveOrganization}
            className="w-full max-w-md space-y-4 p-8"
        >
            <h1 className="text-2xl font-bold mb-6">Select Organization</h1>

            <Select name="organizationID">
                <SelectTrigger>
                    <SelectValue placeholder="Select an organization" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {organizations?.map((org) => (
                            <SelectItem key={org.id} value={org.id}>
                                {org.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button type="submit">Enter</Button>
        </form>
    );
}
