"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, blurReveal, slideIn, softScale, staggerChildren } from "@/lib/animations/motion";

const revealVariants = {
  fadeUp,
  blur: blurReveal,
  scale: softScale,
  slideLeft: slideIn("left"),
  slideRight: slideIn("right"),
};

type RevealVariant = keyof typeof revealVariants;

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  variant?: RevealVariant;
  once?: boolean;
  amount?: number;
}

export function Reveal({ variant = "fadeUp", once = true, amount = 0.18, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={revealVariants[variant]}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, delay = 0.1, className, ...props }: HTMLMotionProps<"div"> & { delay?: number; children: ReactNode }) {
  return <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerChildren(delay)} {...props}>{children}</motion.div>;
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return <motion.div className={className} variants={fadeUp} {...props}>{children}</motion.div>;
}
