"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { PointerEvent, PointerEventHandler, ReactNode } from "react";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "children" | "onPointerMove" | "onPointerLeave"> {
  children: ReactNode;
  strength?: number;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg";
  onPointerMove?: PointerEventHandler<HTMLButtonElement>;
  onPointerLeave?: PointerEventHandler<HTMLButtonElement>;
}

export function MagneticButton({ children, strength = 0.18, variant = "primary", size = "default", className, onPointerMove, onPointerLeave, ...props }: MagneticButtonProps) {
  const reduceMotion = useReducedMotionPreference();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.35 });

  function move(event: PointerEvent<HTMLButtonElement>) {
    onPointerMove?.(event);
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  function reset(event: PointerEvent<HTMLButtonElement>) {
    onPointerLeave?.(event);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      {...props}
      className={cn(buttonVariants({ variant, size }), "will-change-transform", className)}
      style={{ x: reduceMotion ? 0 : springX, y: reduceMotion ? 0 : springY, ...props.style }}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
    </motion.button>
  );
}
