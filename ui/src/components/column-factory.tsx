'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IconDots, IconArrowsUpDown } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useActionState, useEffect } from "react";
import { EntityDeleteButton } from "@/components/EntityDeleteButton";

// Base interface that all entities should implement
interface BaseEntity {
    id: string;
    createdAt: string;
    updatedAt: string;
}

interface DeleteActionResponse {
    error?: string;
    message?: string;
}

// Configuration for the action menu
interface ActionMenuConfig<T extends BaseEntity> {
    entityPathName: string; // e.g., 'items', 'categories'
    idInputName: string; // e.g., 'itemID', 'categoryID'
    deleteAction: (preState: any, formData: FormData) => Promise<DeleteActionResponse>;
    extraMenuItems?: (entity: T) => React.ReactNode;
}

// Create common columns that can be reused
export function createCommonColumns<T extends BaseEntity>(): ColumnDef<T>[] {
    return [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: "ID",
            cell: ({ row }) => {
                const { toast } = useToast();
                const handleCopy = () => {
                    navigator.clipboard.writeText(row.original.id);
                    toast({ title: "Copied ID" });
                };

                return (
                    <TooltipProvider>
                        <Tooltip delayDuration={200}>
                            <TooltipTrigger asChild>
                                <span
                                    onClick={handleCopy}
                                    className="cursor-pointer"
                                >
                                    {row.original.id}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent>Copy ID</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            },
        },
    ];
}

// Create date columns (createdAt, updatedAt)
export function createDateColumns<T extends BaseEntity>(): ColumnDef<T>[] {
    return [
        {
            accessorKey: "createdAt",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Created At
                    <IconArrowsUpDown />
                </Button>
            ),
            cell: ({ row }) =>
                new Date(row.original.createdAt).toLocaleString(),
        },
        {
            accessorKey: "updatedAt",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Updated At
                    <IconArrowsUpDown />
                </Button>
            ),
            cell: ({ row }) =>
                new Date(row.original.updatedAt).toLocaleString(),
        },
    ];
}

// Create action column
export function createActionColumn<T extends BaseEntity>(
    config: ActionMenuConfig<T>
): ColumnDef<T> {
    return {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const entity = row.original;
            const { toast } = useToast();
            const [state, deleteAction, isPending] = useActionState(
                config.deleteAction,
                undefined
            );

            useEffect(() => {
                if (state?.message) {
                    toast({ title: state.message, variant: "success" });
                }
            }, [state?.message]);

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <span className="sr-only">Open menu</span>
                            <IconDots />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link href={`/${config.entityPathName}/${entity.id}`}>
                            <DropdownMenuItem className="cursor-pointer">
                                Edit
                            </DropdownMenuItem>
                        </Link>
                        {config.extraMenuItems?.(entity)}
                        <EntityDeleteButton
                            state={state}
                            formAction={deleteAction}
                            idInputName={config.idInputName}
                            entityID={entity.id}
                            isPending={isPending}
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    };
}
