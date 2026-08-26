import { cn } from "@/lib/utils";
import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { ButtonLink } from "@/components/common/Button";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export function Header() {
  const scrolled = useScrollHeader();
  const { open, toggle, close } = useMobileMenu();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-surface-elevated/90 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-soft",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <a
            href="#inicio"
            className="min-w-0 truncate font-display text-lg font-extrabold tracking-tight text-primary-dark sm:text-xl"
          >
            {siteConfig.shortName}
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-6">
              {mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-ink-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ButtonLink href="#contacto" className="hidden lg:inline-flex">
              Solicitar cotización
            </ButtonLink>

            <button
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid h-11 w-11 place-items-center rounded-lg text-primary-dark transition-colors hover:bg-primary-soft xl:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="text-2xl" />
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line/60 bg-surface-elevated transition-[max-height,opacity] duration-300 xl:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container>
          <nav aria-label="Navegación móvil" className="flex flex-col py-3">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="min-h-12 border-b border-line/50 py-3 text-base font-semibold text-ink transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#contacto" onClick={close} className="mt-4 mb-4 w-full" size="lg">
              Solicitar cotización
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}
