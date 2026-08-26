import { Container } from "@/components/common/Container";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-primary-dark pt-16 pb-8 text-primary-soft">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-display text-xl font-extrabold tracking-tight text-surface-elevated">
              {siteConfig.shortName}
            </span>
            <p className="text-sm leading-relaxed text-primary-soft/70">
              Diseño, instalación y monitoreo de sistemas de seguridad para hogares, comercios,
              corporativos e industria.
            </p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
              <span className="text-eyebrow text-surface-elevated/90">{group.title}</span>
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-primary-soft/70 transition-colors hover:text-surface-elevated"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-elevated/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-primary-soft/50 md:text-left">
            © {new Date().getFullYear()} {siteConfig.companyName}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-soft/50">{siteConfig.email}</p>
        </div>
      </Container>
    </footer>
  );
}
