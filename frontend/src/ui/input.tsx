import {cn} from "@/libs/cn";
import {cva, VariantProps} from "class-variance-authority";
import {motion} from "framer-motion";
import React from "react";

const inputVariants = cva(
  "rounded-full hover:brightness-125 focus:outline-none transition-colors duration-150 ease-in-out min-w-[150px] px-8 py-4",
  {
    variants: {
      intent: {
        first: "focus:bg-[var(--brown)]/75 bg-[var(--brown)]/60",
        second:
          "text-black focus:bg-[var(--light-yellow)]/75 bg-[var(--light-yellow)]/50",
        formulario: "border rounded px-3 py-2",
        auth: " text-black focus:bg-[var(--light-yellow)]/75 bg-[var(--light-yellow)]/50 rounded px-3 py-2",
      },
    },
  }
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, intent, ...props}, ref) => {
    return (
      <motion.input
        ref={ref}
        type={type}
        className={cn(inputVariants({intent}), className)}
        {...(props as React.ComponentProps<typeof motion.input>)}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
