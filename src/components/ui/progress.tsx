"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export function Progress({ className, indicatorClassName, value, max = 100, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root> & { indicatorClassName?: string }) {
  const progress = value === null || value === undefined ? undefined : Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <ProgressPrimitive.Root data-slot="progress" value={value} max={max} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-white/[.08]", className)} {...props}>
      <ProgressPrimitive.Indicator data-slot="progress-indicator" className={cn("h-full w-full flex-1 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-500 ease-out", indicatorClassName)} style={{ transform: `translateX(-${100 - (progress ?? 0)}%)` }} />
    </ProgressPrimitive.Root>
  );
}

interface StepProgressProps extends React.ComponentProps<"div"> {
  steps: number;
  currentStep: number;
  label?: string;
}

export function StepProgress({ steps, currentStep, label = "Progress", className, ...props }: StepProgressProps) {
  const value = steps > 0 ? (Math.max(0, Math.min(steps, currentStep)) / steps) * 100 : 0;
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <div className="flex items-center justify-between text-[10px] text-muted"><span>{label}</span><span>{Math.max(0, Math.min(steps, currentStep))} of {steps}</span></div>
      <Progress value={value} aria-label={label} />
    </div>
  );
}
