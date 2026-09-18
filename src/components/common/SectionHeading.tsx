import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  index,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  index?: string;
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
      {eyebrow || index ? (
        <div className="mb-2 flex w-full items-center gap-3">
          {index ? (
            <span
              className={cn(
                "font-display text-xs font-extrabold tracking-[0.14em]",
                tone === "dark" ? "text-silver-100" : "text-primary",
              )}
            >
              {index}
            </span>
          ) : null}
          {eyebrow ? (
            <span
              className={cn("text-eyebrow", tone === "dark" ? "text-silver-100" : "text-primary")}
            >
              {eyebrow}
            </span>
          ) : null}
          <span
            aria-hidden="true"
            className={cn("h-px flex-1", tone === "dark" ? "bg-primary/45" : "bg-primary/30")}
          />
        </div>
      ) : null}
      <h2 className={cn("text-headline", tone === "dark" && "text-surface-elevated")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "text-lead max-w-2xl",
            tone === "dark" ? "text-warm-gray-300" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
