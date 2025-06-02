"use client";

import {toast as sonnerToast, Toaster} from "sonner";
import {cva, type VariantProps} from "class-variance-authority";
import React, {useEffect, useState} from "react";

const toastVariants = cva(
  "rounded-xl border px-6 py-4 shadow-lg text-sm font-medium relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-white border-zinc-700",
        success: "bg-green-900 text-green-200 border-green-600",
        error: "bg-red-900 text-red-300 border-red-600",
        warning: "bg-yellow-900 text-yellow-200 border-yellow-600",
        info: "bg-blue-900 text-blue-200 border-blue-600",
      },
    },
    defaultVariants: {variant: "default"},
  }
);

type ToastVariant = VariantProps<typeof toastVariants>["variant"];

const ProgressBar = () => {
  const [width, setWidth] = useState("w-full");

  useEffect(() => {
    setTimeout(() => setWidth("w-0"), 10);
  }, []);

  return (
    <div
      className={`
        absolute bottom-0 left-0 h-1 bg-white/70 rounded-b-xl pointer-events-none
        transition-[width] duration-[4000ms] ease-linear
        ${width}
      `}
    />
  );
};

export const CustomToaster = () => (
  <Toaster position="top-right" richColors={false} />
);

function makeToastFunction(variant: ToastVariant) {
  return (message: React.ReactNode) => {
    sonnerToast.custom(() => (
      <div className={toastVariants({variant})}>
        {message}
        <ProgressBar />
      </div>
    ));
  };
}

export const toast = {
  default: makeToastFunction("default"),
  success: makeToastFunction("success"),
  error: makeToastFunction("error"),
  warning: makeToastFunction("warning"),
  info: makeToastFunction("info"),
};
