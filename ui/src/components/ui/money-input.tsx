import * as React from "react";
import { Input } from "@/components/ui/input";

// Money Input Component
const MoneyInput = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return (
        <div className="relative">
            <div className="absolute left-0 top-0 flex h-full w-8 items-center justify-center bg-accent text-background rounded-[calc(0.5rem-2px)]">
                $
            </div>
            <Input
                {...props}
                ref={ref}
                type="number"
                step="0.01"
                min="0"
                className="pl-10"
                onChange={(e) => {
                    // Ensure two decimal places
                    const value = e.target.value;
                    if (value.includes('.')) {
                        const decimals = value.split('.')[1];
                        if (decimals.length > 2) {
                            e.target.value = Number(value).toFixed(2);
                        }
                    }
                    props.onChange?.(e);
                }}
            />
        </div>
    );
});
MoneyInput.displayName = "MoneyInput";

export { MoneyInput };