import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

export function BrandWordmark({ full = false, className }: { full?: boolean; className?: string }) {
  return (
    <img
      src={withBasePath("/images/logo.png")}
      alt={full ? siteConfig.companyName : siteConfig.shortName}
      width="157"
      height="97"
      loading={full ? "lazy" : "eager"}
      className={cn(
        "shrink-0 object-contain object-left",
        full ? "h-24 w-auto" : "h-14 w-auto",
        className,
      )}
    />
  );
}
