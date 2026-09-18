import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import { ButtonLink } from "./Button";
import { hasWhatsapp, whatsappUrl } from "@/config/site";

/** Enlace de WhatsApp reutilizable (hero, CTA, etc.). */
export function WhatsAppLink({
  children = "Hablar por WhatsApp",
  message,
  variant = "outline",
  size = "lg",
  className,
}: {
  children?: React.ReactNode;
  message?: string;
  variant?: "primary" | "outline" | "onDark";
  size?: "md" | "lg";
  className?: string;
}) {
  if (!hasWhatsapp) return null;

  const href = whatsappUrl(message);
  if (!href) return null;

  return (
    <ButtonLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
    >
      <Icon name="chat" className="text-lg" />
      {children}
    </ButtonLink>
  );
}

/** Botón flotante discreto. */
export function WhatsAppFloating({ className }: { className?: string }) {
  if (!hasWhatsapp) return null;

  const href = whatsappUrl();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={cn(
        "fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-raised transition-transform hover:scale-105 sm:right-6 sm:bottom-6",
        className,
      )}
    >
      <Icon name="chat" className="text-2xl" filled />
    </a>
  );
}
