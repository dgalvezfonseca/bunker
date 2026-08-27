import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ButtonLink } from "@/components/common/Button";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import { mailtoUrl, siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contacto" className="section-y bg-surface-elevated">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Contacto"
              title="Solicita una evaluación de tu sitio"
              description="Cuéntanos qué necesitas proteger y te proponemos la solución adecuada, sin compromiso."
            />

            <ul className="mt-8 flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Icon name="call" className="mt-0.5 text-2xl text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Teléfono</p>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-sm text-ink-muted transition-colors hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 text-2xl text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Correo</p>
                  <a
                    href={mailtoUrl()}
                    className="text-sm text-ink-muted transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="location_on" className="mt-0.5 text-2xl text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Oficina</p>
                  <p className="text-sm text-ink-muted">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="schedule" className="mt-0.5 text-2xl text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Horario</p>
                  <p className="text-sm text-ink-muted">
                    Atención comercial de lunes a viernes. Monitoreo 24/7.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center gap-6 rounded-card bg-primary-dark p-8 sm:p-10">
              <h3 className="text-title text-surface-elevated">Hablemos de tu proyecto</h3>
              <p className="text-sm leading-relaxed text-primary-soft/80">
                Escríbenos por WhatsApp o correo y agendamos una visita técnica para evaluar el
                sitio.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppLink variant="onDark" />
                <ButtonLink
                  href={mailtoUrl()}
                  size="lg"
                  variant="onDark"
                  className="bg-transparent text-surface-elevated ring-1 ring-surface-elevated/40 hover:bg-surface-elevated/10"
                >
                  <Icon name="mail" className="text-lg" />
                  Enviar correo
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
