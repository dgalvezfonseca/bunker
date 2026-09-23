import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  CarFront,
  Check,
  Factory,
  Footprints,
  Warehouse,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import accessControlImage from "../../../assets/nosotros-bunker.png";
import vigilanciaImage from "../../../assets/vigilancia.webp";

const presenceChecks = [
  ["Rondines", "Recorridos de revisión en las zonas definidas de la instalación."],
  ["Verificación de identidades", "Confirmación de cada persona y visitante antes del acceso."],
  ["Supervisión de entradas", "Control y registro de los ingresos a la instalación."],
  ["Supervisión de salidas", "Control y registro de los egresos."],
  [
    "Seguimiento de reglamentos internos",
    "Supervisión del cumplimiento de las políticas del cliente.",
  ],
] as const;

const applicationAreas = [
  {
    icon: Building2,
    title: "Corporativos y oficinas",
    detail: "Recepción, accesos y áreas de trabajo.",
  },
  {
    icon: Factory,
    title: "Instalaciones industriales",
    detail: "Patios, naves y zonas de proceso.",
  },
  {
    icon: Warehouse,
    title: "Bodegas",
    detail: "Almacenamiento y zonas internas.",
  },
  {
    icon: Boxes,
    title: "Centros de distribución",
    detail: "Recibo, despacho y patios de maniobras.",
  },
  {
    icon: Footprints,
    title: "Accesos peatonales",
    detail: "Control de ingresos de personal y visitantes.",
  },
  {
    icon: CarFront,
    title: "Accesos vehiculares",
    detail: "Supervisión de entradas y salidas de unidades.",
  },
];

const serviceSteps = [
  {
    step: "01",
    title: "Conocemos la instalación",
    description: "Revisamos accesos, horarios, flujos y zonas prioritarias del sitio.",
  },
  {
    step: "02",
    title: "Se definen consignas",
    description: "Establecemos las indicaciones que el personal debe cumplir y supervisar.",
  },
  {
    step: "03",
    title: "Se asigna el esquema",
    description: "Definimos presencia, horarios y puntos de control según el sitio.",
  },
  {
    step: "04",
    title: "Se ejecuta la operación",
    description: "Rondines, verificación de identidades y supervisión de ingresos y salidas.",
  },
  {
    step: "05",
    title: "Se da seguimiento",
    description: "Revisamos el cumplimiento y ajustamos la operación a la realidad del sitio.",
  },
];

const bunkerReasons = [
  {
    number: "01",
    title: "Integración operativa",
    description:
      "Combinamos recurso humano y tecnología para una supervisión adaptada a cada operación.",
  },
  {
    number: "02",
    title: "Enfoque a la medida",
    description:
      "Nos adaptamos a las características logísticas de cada cliente y cada instalación.",
  },
  {
    number: "03",
    title: "Método y seriedad",
    description: "Trabajamos con seriedad procedimental y análisis humano para decidir la acción.",
  },
  {
    number: "04",
    title: "Cobertura nacional",
    description: "Operación y atención para proyectos a nivel nacional.",
  },
];

const trustPoints = [
  "Empresa mexicana",
  "Integración de personal y tecnología",
  "Atención a nivel nacional",
];

function EyeRow({
  number,
  label,
  tone = "light",
  className,
}: {
  number: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={className}>
      <span aria-hidden="true" className="flex items-center gap-3">
        <span
          className={`font-display text-xs font-extrabold tracking-[0.14em] ${tone === "dark" ? "text-silver-100" : "text-primary"}`}
        >
          {number}
        </span>
        <span className={`text-eyebrow ${tone === "dark" ? "text-silver-100" : "text-primary"}`}>
          {label}
        </span>
        <span
          aria-hidden="true"
          className={`h-px flex-1 ${tone === "dark" ? "bg-primary/45" : "bg-primary/30"}`}
        />
      </span>
    </div>
  );
}

function ServiceLink({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link
      to="/servicios/$slug"
      params={{ slug }}
      className="group inline-flex items-center gap-1.5 font-display text-xl font-bold text-surface-elevated underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
    >
      {children}
      <ArrowUpRight
        className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function VigilanciaServicePage() {
  return (
    <article>
      {/* Hero comercial 55/45 */}
      <section className="technical-grid overflow-hidden bg-surface-elevated">
        <Container className="pt-28 pb-16 sm:pt-36 sm:pb-18 lg:pt-40 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="lg:col-span-6">
              <div
                className="hero-enter flex items-center gap-3"
                style={{ animationDelay: "40ms" }}
              >
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                  01
                </span>
                <span className="text-eyebrow text-primary">Presencia y control</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Vigilancia profesional para instalaciones empresariales
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Personal presencial para apoyar el control de accesos, la supervisión y el
                cumplimiento de consignas en corporativos, instalaciones industriales y centros de
                distribución.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "270ms" }}
              >
                <ButtonLink href="/contacto" size="lg" className="max-[430px]:w-full">
                  Solicitar evaluación
                </ButtonLink>
                <ButtonLink
                  href="#proceso"
                  variant="outline"
                  size="lg"
                  className="max-[430px]:w-full"
                >
                  Conocer el servicio
                </ButtonLink>
              </div>

              <ul
                className="hero-enter mt-10 flex flex-col gap-3 border border-line bg-surface-elevated/90 px-5 py-4 text-sm font-semibold text-ink sm:flex-row sm:items-center sm:gap-6 sm:px-6"
                style={{ animationDelay: "350ms" }}
              >
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-media-enter relative aspect-[4/5] min-h-96 sm:aspect-[4/3] lg:col-span-6 lg:aspect-auto lg:min-h-[42rem]">
              <div
                aria-hidden="true"
                className="hero-line-enter absolute -top-4 right-0 h-px w-40 bg-primary lg:-right-4"
              />
              <img
                src={accessControlImage}
                alt="Personal ingresando por un sistema de control de acceso"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Presencia · Control · Seguimiento
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                Trabajo en sitio
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Franja de valor */}
      <section className="border-y border-primary/35 bg-black-950">
        <Container className="py-10 sm:py-12">
          <ol className="divide-y divide-surface-elevated/10 md:grid md:grid-cols-3 md:divide-y-0 md:divide-x">
            <li className="py-6 md:px-7 md:py-2 md:first:pl-0 lg:px-10">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                  01
                </span>
                <p className="text-eyebrow text-silver-100">Presencia en sitio</p>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/45" />
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-gray-300">
                Personal asignado a la operación y supervisión de su instalación.
              </p>
            </li>
            <li className="py-6 md:px-7 md:py-2 lg:px-10">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                  02
                </span>
                <p className="text-eyebrow text-silver-100">Control</p>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/45" />
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-gray-300">
                Aplicación de consignas y supervisión de accesos en la instalación.
              </p>
            </li>
            <li className="py-6 md:px-7 md:py-2 lg:px-10">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                  03
                </span>
                <p className="text-eyebrow text-silver-100">Seguimiento</p>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/45" />
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-gray-300">
                Registro y atención de situaciones según los procedimientos definidos.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      {/* Más que presencia física */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-16">
            <Reveal from="left" className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-card">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 z-10 bg-black-950 px-4 py-3 text-xs font-semibold tracking-[0.14em] text-silver-100 uppercase"
                >
                  Operación guiada por consignas
                </span>
                <img
                  src={vigilanciaImage}
                  alt="Personal de vigilancia revisando la operación de una instalación"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-[72%_center] transition-transform duration-[600ms] ease-out motion-safe:group-hover:scale-[1.012]"
                />
              </div>
            </Reveal>

            <Reveal from="right" delay={120} className="lg:col-span-6">
              <EyeRow number="02" label="El valor del servicio" />
              <h2 className="mt-5 max-w-xl text-headline">Más que presencia física</h2>
              <p className="text-lead mt-5 max-w-xl text-ink-muted">
                El valor está en que el personal trabaja bajo consignas definidas para la
                instalación: sabe qué supervisar, en qué priorizar y cómo proceder en cada acceso.
              </p>
              <ul className="mt-8 grid gap-4">
                {presenceChecks.map(([title, detail]) => (
                  <li key={title} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-sm leading-6 text-ink">
                      <strong className="font-semibold">{title}.</strong>{" "}
                      <span className="text-ink-muted">{detail}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Solicitar evaluación del sitio{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Aplicaciones */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Dónde aplica"
            title="Vigilancia adaptada al entorno de su operación"
            description="El esquema de vigilancia se define según el tipo de instalación, sus accesos y los flujos que deben controlarse."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {applicationAreas.map((area) => (
              <div key={area.title} className="bg-surface-elevated p-6 md:p-8">
                <area.icon className="size-8 text-primary" aria-hidden="true" strokeWidth={1.8} />
                <h3 className="mt-5 text-title">{area.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impacto visual */}
      <section className="technical-grid section-y overflow-hidden bg-black-950">
        <Container>
          <EyeRow number="04" label="Alcance del servicio" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Cada instalación requiere consignas distintas.
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Un corporativo, una bodega y un centro de distribución no tienen el mismo flujo de
            personas, vehículos ni áreas prioritarias. Por eso el servicio parte del contexto
            operativo de cada instalación.
          </p>
          <p
            aria-hidden="true"
            className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-lg font-extrabold tracking-[0.04em] text-primary uppercase"
          >
            <span>Corporativo</span>
            <span className="text-silver-100">+</span>
            <span>Bodega</span>
            <span className="text-silver-100">+</span>
            <span>Centro de distribución</span>
          </p>
          <div className="mt-10">
            <ButtonLink href="/contacto" variant="onDark" size="lg">
              Solicitar evaluación
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Cómo se estructura el servicio */}
      <section id="proceso" className="section-y section-rule scroll-mt-24 bg-surface">
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Proceso"
            title="Cómo se estructura el servicio"
            description="Una secuencia clara desde la evaluación del sitio hasta la operación en campo."
            className="max-w-2xl"
          />
          <Reveal className="relative mt-14">
            <span aria-hidden="true" className="timeline-line" />
            <ol className="relative grid gap-0 pl-7 xl:grid-cols-5 xl:pt-10 xl:pl-0">
              {serviceSteps.map((item, i) => (
                <li
                  key={item.step}
                  className="relative pb-10 last:pb-0 xl:px-4 xl:pb-0 first:xl:pl-0 last:xl:pr-0"
                >
                  <span
                    aria-hidden="true"
                    className="timeline-dot absolute top-2 -left-[2.05rem] h-3 w-3 rounded-full border-2 border-primary bg-black-950 xl:-top-[2.7rem] xl:left-4 first:xl:left-0"
                    style={{ "--motion-delay": `${120 + i * 65}ms` } as CSSProperties}
                  />
                  <Reveal delay={160 + i * 65}>
                    <span className="font-display text-5xl font-extrabold tracking-[-0.04em] text-primary xl:text-6xl">
                      {item.step}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Personas y tecnología */}
      <section className="section-y bg-black-950">
        <Container>
          <EyeRow number="06" label="Tecnología como complemento" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Personas y tecnología pueden complementarse
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            La vigilancia presencial puede complementarse con otras capas de seguridad según las
            necesidades de la instalación. La combinación se define para cada proyecto.
          </p>
          <div className="mt-10 flex flex-col items-start gap-x-4 gap-y-3 border-t border-primary pt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="font-display text-xl font-bold text-surface-elevated">Vigilancia</span>
            <span aria-hidden="true" className="font-display text-xl font-bold text-primary">
              +
            </span>
            <ServiceLink slug="videovigilancia">Videovigilancia</ServiceLink>
            <span aria-hidden="true" className="font-display text-xl font-bold text-primary">
              +
            </span>
            <ServiceLink slug="monitoreo">Monitoreo</ServiceLink>
            <span aria-hidden="true" className="font-display text-xl font-bold text-primary">
              +
            </span>
            <ServiceLink slug="tecnologia-perimetral">Tecnología perimetral</ServiceLink>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            Cada servicio mantiene su propio alcance. La integración entre personas y tecnología se
            evalúa de forma conjunta según la infraestructura y los procedimientos del cliente.
          </p>
        </Container>
      </section>

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <SectionHeading
              index="07"
              eyebrow="Confianza empresarial"
              title="Por qué BÚNKER"
              description="Una empresa mexicana enfocada en la prevención y la gestión de riesgos logísticos y patrimoniales."
              className="lg:col-span-8"
            />
            <p className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Conocer más sobre BÚNKER <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
          <div className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {bunkerReasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 45}>
                <article className="min-h-44 border-b border-line py-6 pr-6 md:px-6 md:first:pl-0 lg:border-r lg:last:border-r-0">
                  <span className="font-display text-sm font-bold text-primary">
                    {reason.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="technical-grid relative overflow-hidden border-y border-primary/35 bg-black-950 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <EyeRow number="08" label="Siguiente paso" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Conversemos sobre la seguridad de su instalación
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos cómo opera su instalación y qué necesita supervisar. Podemos revisar el
                escenario y definir el alcance adecuado del servicio.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:justify-end">
              <ButtonLink href="/contacto" variant="onDark" size="lg">
                Solicitar evaluación
              </ButtonLink>
              <WhatsAppLink
                variant="outline"
                className="border-primary text-surface-elevated hover:bg-black-850"
              />
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
