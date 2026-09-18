import { Link } from "@tanstack/react-router";

import { Container } from "@/components/common/Container";
import { BrandWordmark } from "@/components/common/BrandWordmark";
import { Reveal } from "@/components/common/Reveal";
import { footerNav, legalNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { pageContent } from "@/data/page-content";

export function Footer() {
  return (
    <footer className="border-t border-primary/30 bg-black-950 pt-16 pb-8 text-warm-gray-100">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <Reveal from="left" className="flex flex-col gap-4">
            <BrandWordmark full className="transition-opacity duration-[220ms] hover:opacity-85" />
            <p className="text-sm leading-relaxed text-warm-gray-300">
              {pageContent.footer.description}
            </p>
          </Reveal>

          {footerNav.map((group, index) => (
            <Reveal key={group.title} delay={70 + index * 55}>
              <nav aria-label={group.title} className="flex flex-col gap-3">
                <span className="text-eyebrow text-silver-100">{group.title}</span>
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="footer-link w-fit text-sm text-warm-gray-300 transition-colors duration-[180ms] hover:text-silver-100"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Reveal>
          ))}

          <Reveal delay={180} from="right">
            <nav aria-label="Legal y privacidad" className="flex flex-col gap-3">
              <span className="text-eyebrow text-silver-100">Legal y privacidad</span>
              {legalNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="footer-link w-fit text-sm text-warm-gray-300 transition-colors duration-[180ms] hover:text-silver-100"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
                className="footer-link w-fit text-left text-sm text-warm-gray-300 transition-colors duration-[180ms] hover:text-silver-100"
              >
                Preferencias de cookies
              </button>
            </nav>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-elevated/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-warm-gray-500 md:text-left">
            © 2026 {siteConfig.companyName}. Todos los derechos reservados.
          </p>
          {siteConfig.email ? (
            <p className="text-sm text-warm-gray-500">{siteConfig.email}</p>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
