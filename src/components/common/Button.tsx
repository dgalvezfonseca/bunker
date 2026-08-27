import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide uppercase text-sm transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft",
  outline: "border border-primary text-primary hover:bg-primary-soft",
  ghost: "text-ink-muted hover:text-primary",
  onDark: "bg-surface-elevated text-primary-dark hover:bg-primary-soft",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-3",
  lg: "min-h-13 px-7 py-4",
};

type CommonProps = {
  variant?: Variant | undefined;
  size?: Size | undefined;
  children: ReactNode;
  className?: string | undefined;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
