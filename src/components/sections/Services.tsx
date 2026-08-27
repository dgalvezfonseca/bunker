import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { featuredServices, secondaryServices } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" className="section-y bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones de seguridad electrónica"
          description="Desde la videovigilancia hasta el mantenimiento, cubrimos el ciclo completo del sistema."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-card bg-surface-elevated shadow-soft">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-52 w-full object-cover sm:h-64"
                  />
                ) : null}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <Icon name={service.icon} className="text-3xl text-primary" />
                  <h3 className="text-title">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <article className="flex h-full flex-col gap-3 rounded-card border border-line/70 bg-surface-elevated p-6 transition-shadow hover:shadow-soft">
                <Icon name={service.icon} className="text-3xl text-primary" />
                <h3 className="text-base font-semibold text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
