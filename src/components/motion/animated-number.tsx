"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedNumber({ value, duration = 1.2, suffix = "", prefix = "", decimals = 0, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotionPreference();
  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      count.set(value);
      return;
    }

    const animation = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => animation.stop();
  }, [count, duration, inView, reduceMotion, value]);

  return <motion.span ref={ref} className={className}>{formatted}</motion.span>;
}
