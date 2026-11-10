"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger data-slot="select-trigger" className={cn("flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-input bg-black/15 px-3.5 text-sm text-foreground shadow-sm outline-none transition-[border-color,box-shadow] hover:border-white/15 focus-visible:border-primary/65 focus-visible:ring-2 focus-visible:ring-primary/20 data-[placeholder]:text-muted [&_svg]:size-4 [&_svg]:text-muted", className)} {...props}>
      {children}<SelectPrimitive.Icon asChild><ChevronDown /></SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return <SelectPrimitive.ScrollUpButton className={cn("flex cursor-default items-center justify-center py-1 text-muted", className)} {...props}><ChevronUp size={15} /></SelectPrimitive.ScrollUpButton>;
}

export function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <SelectPrimitive.ScrollDownButton className={cn("flex cursor-default items-center justify-center py-1 text-muted", className)} {...props}><ChevronDown size={15} /></SelectPrimitive.ScrollDownButton>;
}

export function SelectContent({ className, children, position = "popper", ...props }: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content data-slot="select-content" position={position} className={cn("relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-white/10 bg-surface-raised text-foreground shadow-[0_16px_48px_rgb(0_0_0_/_45%)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1", className)} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1.5">{children}</SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <SelectPrimitive.Label className={cn("px-2.5 py-2 text-[9px] font-semibold tracking-[.13em] text-muted", className)} {...props} />;
}

export function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item data-slot="select-item" className={cn("relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2.5 text-xs outline-none focus:bg-white/[.07] focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40", className)} {...props}>
      <span className="absolute left-2.5 flex size-3.5 items-center justify-center"><SelectPrimitive.ItemIndicator><Check size={13} /></SelectPrimitive.ItemIndicator></span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator className={cn("-mx-1.5 my-1 h-px bg-white/[.07]", className)} {...props} />;
}
