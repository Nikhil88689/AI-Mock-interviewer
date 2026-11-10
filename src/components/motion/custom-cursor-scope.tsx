"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useState } from "react";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function CustomCursorScope({ children, label = "EXPLORE", className }: { children: ReactNode; label?: string; className?: string }) {
  const reduceMotion = useReducedMotionPreference();
  const [visible, setVisible] = useState(false);
  const cursorEnabled = !reduceMotion;
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 430, damping: 34, mass: 0.22 });
  const springY = useSpring(y, { stiffness: 430, damping: 34, mass: 0.22 });

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!cursorEnabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
    setVisible(true);
  }

  return (
    <div className={`cursor-scope ${className ?? ""}`} data-cursor-active={cursorEnabled && visible} onPointerMove={move} onPointerLeave={() => setVisible(false)}>
      {children}
      {cursorEnabled ? <motion.span className="custom-cursor" style={{ x: springX, y: springY, opacity: visible ? 1 : 0, scale: visible ? 1 : 0.78 }} aria-hidden="true">{label}</motion.span> : null}
    </div>
  );
}
