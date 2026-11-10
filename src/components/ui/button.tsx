import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background shadow-[0_6px_24px_rgb(160_132_255_/_19%)] hover:bg-secondary hover:shadow-[0_8px_30px_rgb(160_132_255_/_27%)]",
        secondary: "border border-border bg-surface-raised text-foreground hover:border-white/15 hover:bg-white/10",
        outline: "border border-white/15 bg-transparent text-foreground hover:border-primary/45 hover:bg-primary/10",
        ghost: "text-muted hover:bg-white/5 hover:text-foreground",
        destructive: "bg-destructive/15 text-rose-100 hover:bg-destructive/25",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-7 text-sm",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
