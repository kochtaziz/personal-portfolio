import type * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950/70",
        className,
      )}
      {...props}
    />
  );
}
