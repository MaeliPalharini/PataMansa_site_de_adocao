"use client";

import {motion} from "framer-motion";

export default function LoadingSpinner() {
  return (
    <motion.div
      animate={{rotate: 360}}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
      style={{
        border: "4px solid var(--brown)",
        borderTop: "4px solid transparent",
        borderRadius: "50%",
        width: 40,
        height: 40,
      }}
      aria-label="Loading animation"
    />
  );
}
