import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium leading-none tracking-[.02em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary/10 text-secondary",
        secondary: "border-white/10 bg-white/[.06] text-foreground/80",
        accent: "border-accent/20 bg-accent/10 text-accent",
        success: "border-emerald-300/20 bg-emerald-300/[.08] text-emerald-200",
        warning: "border-amber-300/20 bg-amber-300/[.08] text-amber-200",
        destructive: "border-destructive/25 bg-destructive/10 text-rose-200",
        outline: "border-white/15 bg-transparent text-muted",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}
