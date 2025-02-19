"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoneyInput } from "@/components/ui/money-input";
import { ImageInput } from "@/components/ui/image-input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Field {
    name: string;
    label: string;
    type: "text" | "select" | "number" | "money" | "image";
    placeholder?: string;
    options?: { id: any; name: string }[];
    isParentSelector?: boolean;
    required?: boolean;
    previewUrl?: string | null | undefined;
}

interface EntityFormProps {
    initialData?: any;
    schema: z.ZodSchema;
    fields: Field[];
    createAction: (
        prevState: any,
        formData: FormData
    ) => Promise<
        | { error: string; message?: undefined }
        | { message: string; error?: undefined }
    >;
    updateAction: (
        locationId: string,
        prevState: any,
        formData: FormData
    ) => Promise<
        | { error: string; message?: undefined }
        | { message: string; error?: undefined }
    >;
    redirectPath: string;
    entityName: string;
}

export function EntityForm({
    initialData,
    schema,
    fields,
    createAction,
    updateAction,
    redirectPath,
    entityName,
}: EntityFormProps) {
    const router = useRouter();
    const { toast } = useToast();

    const actionFunction = !initialData
        ? createAction
        : updateAction.bind(null, initialData?.id);

    const [state, formAction, isPending] = useActionState(
        actionFunction,
        undefined
    );

    const defaultValues = fields.reduce((acc, field) => {
        if (field.isParentSelector) {
            acc[field.name] =
                initialData?.[field.name.replace("Id", "")]?.id ?? "NULL";
        } else if (field.type === "money") {
            // Format money values to always have 2 decimal places
            acc[field.name] = initialData?.[field.name] 
                ? Number(initialData[field.name] / 100).toFixed(2) 
                : "";
        } else {
            acc[field.name] = initialData?.[field.name] ?? "";
        }
        return acc;
    }, {} as Record<string, any>);

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues,
        mode: "onBlur",
    });

    useEffect(() => {
        if (state?.message) {
            toast({ title: state.message, variant: "success" });
            router.push(redirectPath);
        }
    }, [state?.message, redirectPath]);

    const renderField = (field: Field) => (
        <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
                <FormItem>
                    <FormLabel>
                        {field.label}
                        {field.required ? " *" : " (optional)"}
                    </FormLabel>
                    <FormControl>
                        {field.type === "select" ? (
                            <Select
                                name={field.name}
                                value={formField.value}
                                onValueChange={formField.onChange}
                            >
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder={field.placeholder}
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {field.isParentSelector && (
                                            <SelectItem key="NULL" value="NULL">
                                                No {field.label.toLowerCase()}
                                            </SelectItem>
                                        )}
                                        {field.options?.map((option) => (
                                            <SelectItem
                                                key={option.id}
                                                value={option.id}
                                            >
                                                {option.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ) : field.type === "money" ? (
                            <MoneyInput
                                placeholder={field.placeholder}
                                {...formField}
                            />
                        ) : field.type === "image" ? (
                            <ImageInput
                                placeholder={field.placeholder}
                                previewUrl={field.previewUrl || ""}
                                {...formField}
                            />
                        ) : (
                            <Input
                                placeholder={field.placeholder}
                                type={field.type}
                                {...formField}
                            />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );

    return (
        <>
            {state?.error && (
                <div className="p-3 my-3 text-sm text-red-500 border border-red-500 rounded">
                    {state.error}
                </div>
            )}
            <Form {...form}>
                <form action={formAction}>
                    <div className="form-grid">{fields.map(renderField)}</div>

                    <div className="flex gap-4 mt-4">
                        <Button disabled={isPending}>
                            {isPending
                                ? "Saving..."
                                : initialData
                                ? `Update ${entityName}`
                                : `Create ${entityName}`}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => router.push(redirectPath)}
                            disabled={isPending}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
}
