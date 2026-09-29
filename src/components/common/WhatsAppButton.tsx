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
      title="Escríbenos por WhatsApp"
      className={cn(
        "fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-raised transition-[background-color,transform] hover:scale-105 hover:bg-[#1da851] sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
        className,
      )}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7 fill-current">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.47 0 .13 5.34.13 11.91c0 2.1.55 4.14 1.59 5.93L0 24l6.35-1.66a11.88 11.88 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.16-3.43-8.4ZM12.04 21.78a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.77.99 1-3.68-.24-.38a9.87 9.87 0 0 1-1.51-5.22c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
