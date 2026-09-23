import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  arrow_outward: ArrowUpRight,
  call: Phone,
  chat: MessageCircle,
  close: X,
  expand_more: ChevronDown,
  location_on: MapPin,
  mail: Mail,
  menu: Menu,
};

export function Icon({
  name,
  className,
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  const IconComponent = icons[name] ?? MessageCircle;

  return (
    <IconComponent
      aria-hidden="true"
      className={cn("inline-block size-[1em] shrink-0", className)}
      strokeWidth={filled ? 2.5 : 2}
    />
  );
}
