"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface EntityDeleteButtonProps {
    state: any;
    formAction: (payload: FormData) => void;
    idInputName: string;
    entityID: string;
    isPending: boolean;
}

export function EntityDeleteButton({
    state,
    formAction,
    idInputName,
    entityID,
    isPending,
}: EntityDeleteButtonProps) {
    const { toast } = useToast();

    useEffect(() => {
        if (state?.error) {
            toast({ title: state.error, variant: "destructive" });
        }
    }, [state?.error]);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem
                    className="bg-destructive text-destructive-foreground cursor-pointer"
                    onSelect={(e) => {
                        e.preventDefault();
                    }}
                >
                    Delete
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the selected entity.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form action={formAction}>
                        <input
                            type="hidden"
                            name={idInputName}
                            value={entityID}
                        />
                        <AlertDialogAction
                            type="submit"
                            className="bg-destructive text-destructive-foreground hover:bg-accent"
                            disabled={isPending}
                        >
                            Delete
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
