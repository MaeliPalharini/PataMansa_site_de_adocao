import {cn} from "@/libs/cn";
import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const checkboxVariants = cva(
  "w-5 h-5 rounded border-2  bg-transparent flex items-center justify-center transition-colors",
  {
    variants: {
      intent: {
        first:
          'peer-checked:bg-[var(--yellow)] peer-checked:after:content-["✓"] peer-checked:after:text-[var(--brown)] peer-checked:after:text-sm peer-checked:after:font-bold peer-checked:after:leading-none border-[var(--yellow)]',
        formulario:
          'peer-checked:bg-[var(--yellow)] peer-checked:after:content-["✓"] peer-checked:after:text-[var(--brown)] peer-checked:after:text-sm peer-checked:after:font-bold peer-checked:after:leading-none border-[var(--brown)]',
      },
    },
  }
);

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof checkboxVariants> & {
    displayName?: string;
    displayclassName?: string;
  };

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({className, displayclassName, intent, displayName, ...props}, ref) => {
    return (
      <label className="flex items-center justify-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          ref={ref}
          className={cn("peer hidden", className)}
          {...props}
        />
        <span className={cn(checkboxVariants({intent}))} />
        {displayName && (
          <span className={`select-none ${displayclassName}`}>
            {displayName}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
