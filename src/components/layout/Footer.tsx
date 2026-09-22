import { Link } from "@tanstack/react-router";

import { Container } from "@/components/common/Container";
import { BrandWordmark } from "@/components/common/BrandWordmark";
import { Reveal } from "@/components/common/Reveal";
import { footerNav, legalNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/base-path";
import { pageContent } from "@/data/page-content";

export function Footer() {
  return (
    <footer className="border-t border-primary/30 bg-black-950 pt-12 pb-5 text-warm-gray-100">
      <Container>
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr_1fr]">
          <Reveal from="left" className="flex flex-col gap-3">
            <BrandWordmark
              full
              className="h-[4.5rem] transition-opacity duration-[220ms] hover:opacity-85"
            />
            <p className="max-w-[19rem] text-[0.8125rem] leading-5 text-warm-gray-300">
              {pageContent.footer.description}
            </p>
            <address className="mt-1 not-italic text-[0.8125rem] leading-5 text-warm-gray-300">
              <strong className="block font-semibold text-silver-100">
                {siteConfig.companyName}
              </strong>
              <span className="mt-1 block">{siteConfig.address.line1}</span>
              <span className="block">{siteConfig.address.line2}</span>
              <span className="mt-1 flex flex-wrap gap-x-3">
                <a href={siteConfig.phoneHref} className="footer-link">
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="footer-link">
                  {siteConfig.email}
                </a>
              </span>
            </address>
          </Reveal>

          {footerNav.map((group, index) => (
            <Reveal key={group.title} delay={70 + index * 55}>
              <nav aria-label={group.title} className="flex flex-col gap-2">
                <span className="text-[0.6875rem] font-semibold tracking-[0.1em] text-silver-100 uppercase">
                  {group.title}
                </span>
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={withBasePath(item.href)}
                    className="footer-link w-fit text-[0.8125rem] leading-5 text-warm-gray-300 transition-colors duration-[180ms] hover:text-silver-100"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Reveal>
          ))}

          <Reveal delay={180} from="right">
            <nav aria-label="Legal y privacidad" className="flex flex-col gap-2">
              <span className="text-[0.6875rem] font-semibold tracking-[0.1em] text-silver-100 uppercase">
                Legal y privacidad
              </span>
              {legalNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="footer-link w-fit text-[0.8125rem] leading-5 text-warm-gray-300 transition-colors duration-[180ms] hover:text-silver-100"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
                className="footer-link w-fit text-left text-[0.8125rem] leading-5 text-warm-gray-300 transition-colors duration-[180ms] hover:text-silver-100"
              >
                Preferencias de cookies
              </button>
            </nav>
          </Reveal>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-2 border-t border-surface-elevated/10 pt-5 md:flex-row">
          <p className="text-center text-xs leading-5 text-warm-gray-500 md:text-left">
            © 2026 {siteConfig.companyName}. Todos los derechos reservados.
          </p>
          {siteConfig.email ? (
            <p className="text-xs leading-5 text-warm-gray-500">{siteConfig.email}</p>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
