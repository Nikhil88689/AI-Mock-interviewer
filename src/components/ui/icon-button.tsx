import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

type IconButtonProps = Omit<ButtonProps, "children" | "size"> & {
  label: string;
  icon: React.ReactNode;
  size?: "sm" | "default" | "lg";
};

export function IconButton({ label, icon, size = "default", className, ...props }: IconButtonProps) {
  const dimensions = { sm: "size-8", default: "size-10", lg: "size-12" }[size];
  return (
    <Button
      {...props}
      aria-label={label}
      title={label}
      size="icon"
      variant="outline"
      className={`${dimensions} ${className ?? ""}`}
    >
      {icon}
    </Button>
  );
}
