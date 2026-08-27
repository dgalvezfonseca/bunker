import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ButtonLink } from "@/components/common/Button";
import { images } from "@/data/images";

const features = [
  { icon: "monitor_heart", label: "Verificación de eventos en video" },
  { icon: "notifications_active", label: "Protocolos de alerta y escalamiento" },
  { icon: "history", label: "Bitácora de incidencias" },
  { icon: "phone_in_talk", label: "Contacto con responsables del sitio" },
];

export function Monitoring() {
  return (
    <section id="monitoreo" className="section-y bg-primary-dark">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.monitoring}
              alt="Operadores atendiendo pantallas en un centro de monitoreo 24/7"
              loading="lazy"
              className="h-72 w-full rounded-card object-cover shadow-raised sm:h-96"
            />
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              tone="dark"
              eyebrow="Centro de monitoreo"
              title="Vigilancia activa 24/7"
              description="Nuestro centro de monitoreo da seguimiento a las alertas de su sistema y activa el protocolo acordado con usted."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <Icon name={f.icon} className="text-2xl text-primary-soft" />
                  <span className="text-sm font-medium text-primary-soft/90">{f.label}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="#contacto" variant="onDark" size="lg" className="mt-8">
              Conocer el servicio
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
