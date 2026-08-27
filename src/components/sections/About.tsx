import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { differentiators } from "@/data/differentiators";
import { images } from "@/data/images";

export function About() {
  return (
    <section id="nosotros" className="section-y bg-surface-elevated">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Nosotros"
              title="Ingeniería en seguridad, no solo cámaras"
              description="Cada proyecto inicia con una evaluación del sitio para dimensionar la solución correcta: cobertura, almacenamiento, energía de respaldo y protocolos de respuesta."
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <Icon name={item.icon} className="mt-0.5 text-2xl text-primary" />
                  <div>
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="order-1 grid grid-cols-2 gap-4 lg:order-2" delay={120}>
            <img
              src={images.aboutCorporate}
              alt="Técnico revisando una instalación de seguridad en un edificio corporativo"
              loading="lazy"
              className="h-64 w-full rounded-card object-cover shadow-soft sm:h-80"
            />
            <img
              src={images.aboutResidential}
              alt="Cámara de videovigilancia instalada en el acceso de una vivienda"
              loading="lazy"
              className="mt-8 h-64 w-full rounded-card object-cover shadow-soft sm:h-80"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
