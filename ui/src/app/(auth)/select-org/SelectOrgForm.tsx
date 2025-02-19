"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { setActiveOrganization } from "@/server/actions/auth/setActiveOrganization";
import { activeOrgSchema } from "@/lib/zod-schemas";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface SelectOrgFormProps {
    organizations:
        | { __typename?: "Organization" | undefined; id: any; name: string }[]
        | undefined;
}

export function SelectOrgForm({ organizations }: SelectOrgFormProps) {
    const [state, formAction, isPending] = useActionState(
        setActiveOrganization,
        undefined
    );

    const form = useForm<z.infer<typeof activeOrgSchema>>({
        resolver: zodResolver(activeOrgSchema),
        defaultValues: {
            organizationID: organizations?.[0]?.id || "",
        },
        mode: "onBlur",
    });

    useEffect(() => {
        console.log("state", state);
    }, [state]);

    return (
        <Form {...form} control={form.control}>
            <form action={formAction} className="w-full max-w-xs space-y-8">
                {state?.error && (
                    <div className="p-3 my-3 text-sm text-red-500 border border-red-500 rounded">
                        {state.error}
                    </div>
                )}
                <FormField
                    control={form.control}
                    name="organizationID"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization *</FormLabel>
                            <FormControl>
                                <Select 
                                    name="organizationID"
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an organization" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {organizations?.map((org) => (
                                                <SelectItem
                                                    key={org.id}
                                                    value={org.id}
                                                >
                                                    {org.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Entering..." : "Enter"}
                </Button>
            </form>
        </Form>
    );
}
