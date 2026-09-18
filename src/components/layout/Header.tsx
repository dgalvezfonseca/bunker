import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { ButtonLink } from "@/components/common/Button";
import { BrandWordmark } from "@/components/common/BrandWordmark";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export function Header() {
  const scrolled = useScrollHeader();
  const { open, toggle, close } = useMobileMenu();
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-surface-elevated/15 bg-primary-dark/95 text-surface-elevated backdrop-blur-md transition-[background-color,box-shadow] duration-[220ms] ease-out",
        scrolled && "bg-black-950/98 shadow-[0_12px_34px_rgba(0,0,0,0.18)]",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-[height] duration-[220ms] ease-out",
            scrolled ? "h-[4.5rem]" : "h-20",
          )}
        >
          <a href="/#inicio" aria-label={`${siteConfig.companyName} — Inicio`} className="min-w-0">
            <BrandWordmark
              className={cn(
                "transition-[transform,opacity] duration-[220ms] ease-out hover:opacity-90",
                scrolled ? "scale-[0.92]" : "scale-100",
              )}
            />
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <nav aria-label="Navegación principal" className="hidden xl:flex items-center gap-1">
              {mainNav.map((item) => {
                const active =
                  pathname === item.href ||
                  Boolean(item.children?.some((child) => pathname === child.href.split("#")[0]));
                const expanded = openDropdown === item.label;
                return (
                  <div key={item.href} className="relative">
                    {item.children ? (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-haspopup="menu"
                        onClick={() => setOpenDropdown(expanded ? null : item.label)}
                        className={cn(
                          "flex min-h-11 items-center gap-1.5 px-3 text-sm font-semibold transition-colors duration-200 hover:text-surface-elevated",
                          active ? "text-surface-elevated" : "text-warm-gray-300",
                        )}
                      >
                        {item.label}
                        <Icon
                          name="expand_more"
                          className={cn(
                            "text-base transition-transform duration-200",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-11 items-center px-3 text-sm font-semibold transition-colors duration-200 hover:text-surface-elevated",
                          active ? "text-surface-elevated" : "text-warm-gray-300",
                        )}
                      >
                        {item.label}
                      </a>
                    )}
                    {item.children ? (
                      <div
                        role="menu"
                        aria-label={item.label}
                        className={cn(
                          "absolute top-full left-0 w-72 origin-top-left border border-line/70 bg-surface p-2 text-ink shadow-soft transition-[opacity,transform,visibility] duration-[180ms] ease-out",
                          expanded
                            ? "visible translate-y-2 opacity-100"
                            : "invisible translate-y-1 opacity-0",
                        )}
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                            className="group flex min-h-11 items-center justify-between gap-4 px-4 py-2.5 text-sm font-semibold text-ink transition-[background-color,color] duration-200 hover:bg-primary-soft hover:text-primary focus:bg-primary-soft focus:text-primary"
                          >
                            {child.label}
                            <Icon
                              name="arrow_outward"
                              className="text-base text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                            />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <ButtonLink href="/contacto" className="hidden lg:inline-flex">
              Solicitar información
            </ButtonLink>

            <button
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid h-11 w-11 place-items-center rounded-[2px] text-silver-100 transition-[background-color,color] duration-200 hover:bg-black-850 xl:hidden"
            >
              <Icon
                name={open ? "close" : "menu"}
                className={cn(
                  "text-2xl transition-transform duration-[220ms] ease-out",
                  open && "rotate-90",
                )}
              />
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "overflow-hidden border-t border-surface-elevated/15 bg-primary-dark transition-[max-height,opacity,transform] duration-[260ms] ease-out xl:hidden",
          open ? "max-h-[46rem] translate-y-0 opacity-100" : "max-h-0 -translate-y-1.5 opacity-0",
        )}
      >
        <Container>
          <nav aria-label="Navegación móvil" className="flex flex-col py-3">
            {mainNav.map((item, index) => {
              const active =
                pathname === item.href ||
                Boolean(item.children?.some((child) => pathname === child.href.split("#")[0]));
              const baseClass = cn(
                "min-h-12 border-b border-surface-elevated/10 py-3 text-base font-semibold text-warm-gray-300 transition-[color,opacity,transform] duration-200 ease-out hover:text-surface-elevated",
                open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                active && "text-surface-elevated",
              );
              return item.children ? (
                <details key={item.href} className="group border-b border-surface-elevated/10">
                  <summary
                    className={cn(
                      baseClass,
                      "flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden",
                    )}
                    style={{ transitionDelay: open ? `${55 + index * 28}ms` : "0ms" }}
                  >
                    {item.label}
                    <Icon
                      name="expand_more"
                      className="text-xl transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="border-t border-surface-elevated/10 pb-2 pl-4">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={close}
                        className="flex min-h-11 items-center border-b border-surface-elevated/10 text-sm font-medium text-warm-gray-300 hover:text-surface-elevated"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={baseClass}
                  style={{ transitionDelay: open ? `${55 + index * 28}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              );
            })}
            <ButtonLink href="/contacto" onClick={close} className="mt-4 mb-4 w-full" size="lg">
              Solicitar información
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}
