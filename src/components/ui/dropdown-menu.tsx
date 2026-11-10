"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export function DropdownMenuContent({ className, sideOffset = 7, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content data-slot="dropdown-menu-content" sideOffset={sideOffset} className={cn("z-50 min-w-40 overflow-hidden rounded-xl border border-white/10 bg-surface-raised p-1.5 text-foreground shadow-[0_16px_48px_rgb(0_0_0_/_44%)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1", className)} {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuItem({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.Item data-slot="dropdown-menu-item" className={cn("relative flex cursor-default select-none items-center gap-2 rounded-lg px-2.5 py-2 text-xs outline-none transition-colors focus:bg-white/[.07] focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-45 [&_svg]:size-3.5", inset && "pl-8", className)} {...props} />;
}

export function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem checked={checked} className={cn("relative flex cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2.5 text-xs outline-none focus:bg-white/[.07] data-[disabled]:pointer-events-none data-[disabled]:opacity-45", className)} {...props}>
      <span className="absolute left-2.5 flex size-3.5 items-center justify-center"><DropdownMenuPrimitive.ItemIndicator><Check size={13} /></DropdownMenuPrimitive.ItemIndicator></span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem className={cn("relative flex cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2.5 text-xs outline-none focus:bg-white/[.07] data-[disabled]:pointer-events-none data-[disabled]:opacity-45", className)} {...props}>
      <span className="absolute left-2.5 flex size-3.5 items-center justify-center"><DropdownMenuPrimitive.ItemIndicator><Circle size={7} fill="currentColor" /></DropdownMenuPrimitive.ItemIndicator></span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.Label className={cn("px-2.5 py-2 text-[9px] font-semibold tracking-[.13em] text-muted", inset && "pl-8", className)} {...props} />;
}

export function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return <DropdownMenuPrimitive.Separator className={cn("-mx-1.5 my-1 h-px bg-white/[.07]", className)} {...props} />;
}

export function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("ml-auto text-[10px] tracking-widest text-muted", className)} {...props} />;
}

export function DropdownMenuSubTrigger({ className, children, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.SubTrigger className={cn("flex cursor-default select-none items-center rounded-lg px-2.5 py-2 text-xs outline-none focus:bg-white/[.07] data-[state=open]:bg-white/[.07]", inset && "pl-8", className)} {...props}>{children}<ChevronRight className="ml-auto size-3.5" /></DropdownMenuPrimitive.SubTrigger>;
}

export function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return <DropdownMenuPrimitive.SubContent className={cn("z-50 min-w-36 overflow-hidden rounded-xl border border-white/10 bg-surface-raised p-1.5 text-foreground shadow-xl", className)} {...props} />;
}
