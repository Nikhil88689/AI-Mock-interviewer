import type * as React from "react";
import { cn } from "@/lib/utils";

export function GlassPanel({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="glass-panel" className={cn("glass-panel rounded-2xl", className)} {...props} />;
}

export function AnimatedBorderCard({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="animated-border-card" className={cn("animated-border-card rounded-2xl", className)} {...props} />;
}
