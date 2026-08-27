import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { ButtonLink } from "@/components/common/Button";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import { heroHighlights } from "@/data/differentiators";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-primary-dark">
      <img
        src={images.hero}
        alt="Centro de monitoreo de seguridad con múltiples pantallas de videovigilancia"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/90 to-primary-dark/60"
      />

      <Container className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl">
          <span className="text-eyebrow text-primary-soft/80">Seguridad electrónica integral</span>
          <h1 className="mt-4 text-display text-surface-elevated">
            Protegemos lo que más importa con tecnología de vigilancia profesional
          </h1>
          <p className="text-lead mt-6 max-w-2xl text-primary-soft/80">
            Diseñamos, instalamos y monitoreamos sistemas de videovigilancia, control de acceso y
            alarmas para residencias, comercios, corporativos e industria.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contacto" size="lg" variant="onDark">
              Solicitar cotización
            </ButtonLink>
            <WhatsAppLink
              variant="onDark"
              className="bg-transparent text-surface-elevated ring-1 ring-surface-elevated/40 hover:bg-surface-elevated/10"
            />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-surface-elevated/15 bg-surface-elevated/5 px-4 py-3 backdrop-blur-sm"
              >
                <Icon name={item.icon} className="text-2xl text-primary-soft" />
                <span className="text-sm font-semibold text-surface-elevated">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
