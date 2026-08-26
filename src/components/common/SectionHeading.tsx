import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("text-eyebrow", tone === "dark" ? "text-primary-soft" : "text-primary")}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn("text-headline", tone === "dark" && "text-surface-elevated")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "text-lead max-w-2xl",
            tone === "dark" ? "text-primary-soft/80" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
