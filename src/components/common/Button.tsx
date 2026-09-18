import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] border border-transparent font-semibold tracking-[0.075em] uppercase text-sm transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "border-primary bg-primary text-primary-foreground hover:border-silver-100 hover:bg-primary hover:shadow-[0_8px_20px_rgba(0,78,179,0.2)]",
  outline: "border border-primary text-ink hover:border-primary hover:bg-primary-soft",
  ghost: "text-ink-muted hover:text-primary",
  onDark:
    "border-primary bg-primary text-primary-foreground hover:border-silver-100 hover:bg-primary hover:shadow-[0_8px_22px_rgba(0,110,255,0.22)]",
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
