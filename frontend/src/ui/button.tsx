import {cn} from "@/libs/cn";
import {cva, VariantProps} from "class-variance-authority";
import {motion} from "framer-motion";
import React from "react";

const buttonVariants = cva(
  "uppercase py-2 px-8 flex justify-center transition-colors duration-200 ease-in-out items-center w-auto cursor-pointer hover:brightness-150",
  {
    variants: {
      intent: {
        first: "bg-[var(--yellow)] text-[var(--brown)]",
        second: "bg-[var(--brown)] text-[var(--yellow)]",
        third: "bg-[var(--light-yellow)] text-black",
        fourth: "bg-[var(--dark-yellow)]  hover:brightness-110 text-white",
        secondVar: "bg-[var(--brown)] text-white]",
        formulario:
          "mt-4 bg-[var(--brown)] text-white py-2 px-4 rounded hover:opacity-90",
      },
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, intent, children, ...props}, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({intent}), className)}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
