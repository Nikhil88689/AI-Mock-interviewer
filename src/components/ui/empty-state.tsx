import type * as React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.ComponentProps<"div"> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action, className, ...props }: EmptyStateProps) {
  return (
    <div className={cn("empty-state flex flex-col items-center justify-center px-6 py-10 text-center", className)} {...props}>
      {icon ? <div className="mb-4 grid size-11 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-secondary">{icon}</div> : null}
      <h3 className="m-0 text-sm font-semibold text-foreground">{title}</h3>
      <p className="mb-0 mt-2 max-w-sm text-xs leading-relaxed text-muted">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
