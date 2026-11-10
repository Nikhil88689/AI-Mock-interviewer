"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider delayDuration={350} skipDelayDuration={180}>
        {children}
        <Toaster />
      </TooltipProvider>
    </MotionConfig>
  );
}
