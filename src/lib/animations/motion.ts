import type { Variants } from "framer-motion";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE_OUT_EXPO },
  },
};

export const staggerChildren = (delay = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

export const slideIn = (direction: "left" | "right" | "up" | "down" = "up"): Variants => {
  const offset = direction === "left" ? { x: 22 } : direction === "right" ? { x: -22 } : direction === "up" ? { y: 18 } : { y: -18 };
  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.65, ease: EASE_OUT_EXPO } },
  };
};

export const springPop: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 240, damping: 20, mass: 0.8 } },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE_OUT_EXPO } },
  exit: { opacity: 0, y: -5, transition: { duration: 0.18, ease: "easeIn" } },
};
