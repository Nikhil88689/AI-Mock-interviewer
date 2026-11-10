"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animations/motion";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotionPreference();
  return (
    <motion.div
      className="page-transition"
      variants={pageTransition}
      initial={reduceMotion ? false : "initial"}
      animate={reduceMotion ? { opacity: 1, y: 0, transition: { duration: 0 } } : "animate"}
    >
      {children}
    </motion.div>
  );
}
