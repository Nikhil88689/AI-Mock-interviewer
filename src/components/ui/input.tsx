import type * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn("h-10 w-full min-w-0 rounded-xl border border-input bg-black/15 px-3.5 text-sm text-foreground shadow-sm outline-none transition-[border-color,box-shadow,background-color] placeholder:text-muted/75 hover:border-white/15 focus-visible:border-primary/65 focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive/60 aria-invalid:ring-2 aria-invalid:ring-destructive/15", className)}
      {...props}
    />
  );
}
