import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Check,
  Clock,
  Layers,
  Map,
  Route,
  Target,
  Warehouse,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import custodioImage from "../../../assets/custodio.webp";
import operationImage from "../../../assets/proteccion-flotilla.webp";

const trustPoints = [
  "Caja blanca o rotulada",
  "Reporte a enlaces designados",
  "Atención a nivel nacional",
];

const valueBand = [
  {
    num: "01",
    title: "Acompañamiento",
    detail: "Presencia junto a la unidad de carga durante el recorrido.",
  },
  {
    num: "02",
    title: "Coordinación",
    detail: "Reporte de avances, paradas y eventualidades a los enlaces designados.",
  },
  {
    num: "03",
    title: "Seguimiento",
    detail: "Seguimiento de protocolos operativos definidos con el cliente.",
  },
];

const contextFactors = [
  "Origen",
  "Destino",
  "Ruta prevista",
  "Horarios",
  "Puntos de carga y descarga",
  "Características de la mercancía",
];

const routeNodes = [
  { node: "Origen", role: "Planificación" },
  { node: "Traslado", role: "Acompañamiento" },
  { node: "Seguimiento", role: "Coordinación" },
  { node: "Destino", role: "Cierre" },
];

const custodyValue = [
  {
    num: "01",
    title: "Coordinación previa",
    detail: "La operación se define con los enlaces del cliente antes del recorrido.",
  },
  {
    num: "02",
    title: "Responsabilidades claras",
    detail: "Cada parte sabe qué observar, reportar y atender durante el trayecto.",
  },
  {
    num: "03",
    title: "Seguimiento en ruta",
    detail: "Se reportan avances, paradas y eventualidades a los enlaces designados.",
  },
  {
    num: "04",
    title: "Cierre del traslado",
    detail:
      "La coordinación concluye al confirmarse la llegada a destino, según el alcance contratado.",
  },
];

const operationScenarios = [
  {
    icon: Building2,
    title: "Traslados entre instalaciones",
    detail: "Movimientos entre plantas, bodegas u oficinas de la empresa.",
  },
  {
    icon: Route,
    title: "Rutas logísticas",
    detail: "Recorridos entre un origen y un destino definidos por la operación.",
  },
  {
    icon: Warehouse,
    title: "Centros de distribución",
    detail: "Traslados desde y hacia puntos de consolidación de carga.",
  },
  {
    icon: Clock,
    title: "Ventanas de entrega",
    detail: "Operaciones con horarios de llegada comprometidos.",
  },
  {
    icon: Boxes,
    title: "Mercancía con impacto operativo",
    detail: "Cargas cuya interrupción afecta la continuidad del negocio.",
  },
  {
    icon: ArrowLeftRight,
    title: "Movimientos definidos",
    detail: "Traslados puntuales entre puntos acordados con el cliente.",
  },
];

const bunkerReasons = [
  {
    icon: Building2,
    title: "Empresa mexicana",
    description: "Enfocada en la prevención y la gestión de riesgos logísticos y patrimoniales.",
  },
  {
    icon: Layers,
    title: "Personal y tecnología",
    description: "Integramos recurso humano y tecnología en la supervisión operativa.",
  },
  {
    icon: Target,
    title: "Enfoque a la medida",
    description: "Nos adaptamos a las características logísticas de cada cliente.",
  },
  {
    icon: Map,
    title: "Atención a nivel nacional",
    description: "Operación y atención para proyectos a nivel nacional.",
  },
];

const faqs = [
  {
    question: "¿Toda carga necesita custodia?",
    answer:
      "No. Se contrata cuando la operación requiere confirmación física y seguimiento durante el recorrido. La decisión parte de las características de cada traslado.",
  },
  {
    question: "¿Qué información se necesita para evaluar un traslado?",
    answer:
      "Origen, destino, ruta prevista, horarios, puntos de carga y descarga y las características generales de la mercancía.",
  },
  {
    question: "¿La custodia puede complementarse con GPS y monitoreo?",
    answer:
      "Sí. Puede evaluarse una combinación según las necesidades del proyecto; cada servicio mantiene su propio alcance y se define de forma conjunta.",
  },
  {
    question: "¿El servicio garantiza que no ocurra un incidente?",
    answer:
      "Ningún servicio de seguridad ofrece garantías absolutas. El objetivo es acompañar, supervisar y reportar según los procedimientos definidos con el cliente.",
  },
];

function EyebrowRow({
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

export function CustodiaServicePage() {
  return (
    <article>
      {/* Hero comercial 55/45 */}
      <section className="overflow-hidden bg-surface-elevated technical-grid">
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
                <span className="text-eyebrow text-primary">Acompañamiento logístico</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Custodia en tránsito para operaciones logísticas
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Servicio de custodia para acompañar y supervisar traslados de carga de acuerdo con
                las características de cada operación.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "270ms" }}
              >
                <ButtonLink href="/contacto" size="lg" className="max-[430px]:w-full">
                  Solicitar evaluación
                </ButtonLink>
                <ButtonLink
                  href="#servicio"
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

            <div className="hero-media-enter relative aspect-[16/10] sm:aspect-[4/3] lg:col-span-6 lg:aspect-[4/3]">
              <div
                aria-hidden="true"
                className="hero-line-enter absolute -top-4 right-0 h-px w-40 bg-primary lg:-right-4"
              />
              <img
                src={custodioImage}
                alt="Camión de carga acompañado por vehículos en carretera"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Acompañamiento · Coordinación · Seguimiento
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                En tránsito
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Franja de valor */}
      <section className="border-y border-primary/35 bg-black-950">
        <Container className="py-10 sm:py-12">
          <ol className="divide-y divide-surface-elevated/10 md:grid md:grid-cols-3 md:divide-y-0 md:divide-x">
            {valueBand.map((item) => (
              <li key={item.num} className="py-6 md:px-7 md:py-2 md:first:pl-0 lg:px-10">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                    {item.num}
                  </span>
                  <p className="text-eyebrow text-silver-100">{item.title}</p>
                  <span aria-hidden="true" className="h-px flex-1 bg-primary/45" />
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-gray-300">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* El traslado es el contexto */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-16">
            <Reveal from="left" className="lg:col-span-6">
              <EyebrowRow number="02" label="El traslado es el contexto" />
              <h2 className="mt-5 max-w-xl text-headline">
                Cada traslado tiene condiciones distintas
              </h2>
              <p className="text-lead mt-5 max-w-xl text-ink-muted">
                La custodia se define alrededor del traslado y no como una fórmula fija: origen,
                destino, ruta, horarios y puntos de carga o descarga cambian de una operación a
                otra.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-ink">
                Son factores que conviene considerar al definir el alcance del servicio, junto con
                las características de la mercancía.
              </p>
              <ul
                aria-label="Factores que cambian según cada traslado"
                className="mt-8 flex flex-wrap gap-2"
              >
                {contextFactors.map((factor) => (
                  <li
                    key={factor}
                    className="border border-line bg-surface-elevated px-3 py-1.5 text-sm font-semibold text-ink"
                  >
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Evaluar mi traslado <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </p>
            </Reveal>

            <Reveal from="right" delay={120} className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-card">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 z-10 bg-black-950 px-4 py-3 text-xs font-semibold tracking-[0.14em] text-silver-100 uppercase"
                >
                  Contexto de cada recorrido
                </span>
                <img
                  src={operationImage}
                  alt="Unidad logística de carga en operación"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-center transition-transform duration-[600ms] ease-out motion-safe:group-hover:scale-[1.012]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Modelo visual: Origen → Destino */}
      <section id="servicio" className="section-y section-rule scroll-mt-24 bg-surface-elevated">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Sentido del servicio"
            title="De origen a destino, el servicio acompaña el traslado"
            description="El servicio se mantiene presente en cada etapa del recorrido, del punto de partida a la confirmación de llegada."
            className="max-w-3xl"
          />
          <Reveal className="mt-14">
            <div className="relative mx-auto max-w-5xl px-2">
              <span
                aria-hidden="true"
                className="absolute top-[0.375rem] right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-primary/45 lg:block"
              />
              <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {routeNodes.map((item, i) => (
                  <li key={item.node} className="relative flex flex-col items-center text-center">
                    <Reveal delay={i * 90}>
                      <span
                        aria-hidden="true"
                        className="relative z-10 block size-3 rounded-full border-2 border-primary bg-surface-elevated"
                      />
                      <span className="mt-3 block font-display text-lg font-extrabold tracking-[0.08em] text-ink uppercase">
                        {item.node}
                      </span>
                      <p className="text-eyebrow mt-2 text-primary">{item.role}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">
            La participación en cada etapa se define con el cliente según el alcance contratado.
          </p>
        </Container>
      </section>

      {/* Impacto oscuro */}
      <section className="overflow-hidden bg-black-950 technical-grid section-y">
        <Container>
          <EyebrowRow number="04" label="Coordinación previa" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Una operación segura empieza antes de que la unidad salga.
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            La coordinación entre origen, recorrido, responsables y destino permite definir con
            mayor claridad cómo se acompañará el traslado.
          </p>
          <p
            aria-hidden="true"
            className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-lg font-extrabold tracking-[0.04em] text-primary uppercase"
          >
            <span>Origen</span>
            <span className="text-silver-100">+</span>
            <span>Recorrido</span>
            <span className="text-silver-100">+</span>
            <span>Enlaces</span>
            <span className="text-silver-100">+</span>
            <span>Destino</span>
          </p>
          <div className="mt-10">
            <ButtonLink href="/contacto" variant="onDark" size="lg">
              Evaluar un traslado
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Custodiar no es solo seguir una unidad */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="05" label="Valor del servicio" />
          <h2 className="mt-5 max-w-3xl text-headline">
            Custodiar no es simplemente seguir una unidad
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            El valor está en la coordinación, las responsabilidades y el seguimiento que se definen
            alrededor del recorrido, según el alcance contratado.
          </p>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {custodyValue.map((item) => (
              <div key={item.num} className="bg-surface-elevated p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                    {item.num}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
                </div>
                <h3 className="mt-5 text-title">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
            El alcance de cada punto se define con el cliente antes de la operación.
          </p>
        </Container>
      </section>

      {/* Escenarios de operación */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="06"
            eyebrow="Tipos de operación"
            title="Custodia adaptada al tipo de operación"
            description="La forma de acompañar cada traslado se revisa según la operación, su contexto y los puntos definidos."
            className="max-w-3xl"
          />
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {operationScenarios.map((item, i) => (
              <li
                key={item.title}
                className="grid gap-2 py-6 md:grid-cols-[3rem_1fr_2fr] md:items-baseline md:gap-6"
              >
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex items-center gap-3 text-title">
                  <item.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted md:max-w-md">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Tecnología como complemento */}
      <section className="section-y bg-black-950">
        <Container>
          <EyebrowRow number="07" label="Tecnología como complemento" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            La custodia puede complementarse con tecnología
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Según las necesidades del proyecto, el acompañamiento en ruta puede sumar más contexto
            operativo. Cada servicio mantiene su propio alcance.
          </p>
          <div className="mt-10 border-y border-primary py-8">
            <p
              aria-label="Fórmula del servicio complementario"
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-display text-xl font-bold text-surface-elevated sm:text-2xl"
            >
              <span>Custodia</span>
              <span aria-hidden="true" className="text-primary">
                +
              </span>
              <ServiceLink slug="gps-rastreo">Rastreo</ServiceLink>
              <span aria-hidden="true" className="text-primary">
                +
              </span>
              <ServiceLink slug="monitoreo">Monitoreo</ServiceLink>
              <span aria-hidden="true" className="text-primary">
                =
              </span>
              <span className="text-primary">Mayor contexto operativo</span>
            </p>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            También puede sumarse{" "}
            <Link
              to="/servicios/$slug"
              params={{ slug: "dashcam-ia" }}
              className="font-semibold text-primary underline decoration-primary decoration-2 underline-offset-4 hover:text-silver-100"
            >
              Dashcam con IA
            </Link>{" "}
            con su propio alcance.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            La custodia no incluye estos servicios de forma automática; la combinación se evalúa
            según el proyecto y se define de forma conjunta.
          </p>
        </Container>
      </section>

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <SectionHeading
              index="08"
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
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {bunkerReasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 45}>
                <article className="flex h-full flex-col gap-4 bg-surface p-6 md:p-8">
                  <reason.icon
                    className="size-8 text-primary"
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />
                  <h3 className="text-title">{reason.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Preguntas frecuentes */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="09"
            eyebrow="Preguntas frecuentes"
            title="Preguntas útiles para evaluar el servicio"
            description="Respuestas breves a las dudas más comunes antes de definir un traslado."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className="bg-surface p-6 md:p-8">
                <h3 className="text-title">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Enlace editorial al blog */}
      <section className="section-rule bg-surface py-12 sm:py-16">
        <Container>
          <div className="border border-line bg-surface-elevated px-6 py-6 md:flex md:items-center md:justify-between md:gap-8 md:px-8">
            <div>
              <p className="text-eyebrow text-primary">Editorial</p>
              <h3 className="mt-2 max-w-xl text-title">
                ¿Qué factores conviene evaluar antes de contratar custodia?
              </h3>
            </div>
            <p className="mt-4 md:mt-0">
              <Link
                to="/blog/$slug"
                params={{ slug: "custodia-en-transito-factores-evaluar-seguridad-carga" }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Leer la guía <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden border-y border-primary/35 bg-black-950 py-16 technical-grid sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <EyebrowRow number="10" label="Siguiente paso" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Definamos el alcance de su próximo traslado
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Compártanos el origen, destino y características generales de la operación y
                revisemos qué servicio puede ajustarse a sus necesidades.
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
