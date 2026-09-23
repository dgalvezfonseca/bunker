import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Bell,
  Building2,
  Check,
  Compass,
  Cpu,
  Layers,
  Map,
  MapPin,
  Route,
  Target,
  Truck,
  Users,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import operationImage from "../../../assets/tecnologia-aplicada.webp";

const trustPoints = [
  "Dispositivos instalados en unidades",
  "Visualización en plataforma",
  "Seguimiento de movimientos",
];

const valueBand = [
  {
    num: "01",
    icon: MapPin,
    title: "Ubicación",
    detail: "Conocer dónde se registra una unidad y dar seguimiento a sus movimientos.",
  },
  {
    num: "02",
    icon: Route,
    title: "Recorrido",
    detail: "Revisar su trayectoria entre los puntos de la operación.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Información",
    detail: "Utilizar los datos disponibles para dar seguimiento a la operación.",
  },
];

const dataFlow = [
  {
    num: "01",
    node: "Ubicación",
    caption: "Dónde se registra la unidad.",
  },
  {
    num: "02",
    node: "Recorrido",
    caption: "Movimiento entre los puntos de la ruta.",
  },
  {
    num: "03",
    node: "Histórico",
    caption: "Recorridos realizados, según la solución.",
  },
  {
    num: "04",
    node: "Contexto",
    caption: "Información para las preguntas de la operación.",
  },
  {
    num: "05",
    node: "Decisión",
    caption: "Apoyo a quienes coordinan.",
  },
];

const operationQuestions = [
  "¿Dónde está?",
  "¿Dónde estuvo?",
  "¿Cuánto duró el recorrido?",
  "¿Qué movimiento merece revisión?",
];

const useCases = [
  {
    icon: Truck,
    title: "Seguimiento de unidades",
    detail: "Dar seguimiento a la ubicación registrada de las unidades de la flotilla.",
  },
  {
    icon: Route,
    title: "Revisión de recorridos",
    detail: "Revisar las trayectorias registradas entre los puntos de la operación.",
  },
  {
    icon: Compass,
    title: "Supervisión de traslados",
    detail: "Apoyar la visibilidad de los movimientos durante un traslado.",
  },
  {
    icon: Users,
    title: "Coordinación logística",
    detail: "Disponer de información para coordinar con los responsables de cada área.",
  },
  {
    icon: Layers,
    title: "Análisis posterior",
    detail: "Observar recorridos realizados como referencia para el análisis logístico.",
  },
  {
    icon: Bell,
    title: "Atención de excepciones",
    detail:
      "Revisar movimientos que merecen atención, según los eventos y la configuración de la plataforma.",
  },
];

const scaleFactors = [
  "Cantidad de unidades",
  "Tipo de vehículos",
  "Recorridos",
  "Información por área",
];

const serviceSteps = [
  {
    num: "01",
    title: "Conocemos la operación",
    detail:
      "Se revisan el tipo de unidades, los recorridos y la información que se necesita visualizar.",
  },
  {
    num: "02",
    title: "Definimos qué ver",
    detail: "Se establece qué movimientos y datos aportan valor al seguimiento.",
  },
  {
    num: "03",
    title: "Se define la configuración",
    detail: "Se selecciona la solución y su configuración según la operación.",
  },
  {
    num: "04",
    title: "Se instalan los dispositivos",
    detail: "Se instalan dispositivos de posicionamiento en las unidades.",
  },
  {
    num: "05",
    title: "Se da seguimiento",
    detail: "La información se consulta y se utiliza para dar seguimiento a la operación.",
  },
];

const complements = [
  {
    slug: "monitoreo",
    label: "Monitoreo",
    detail: "Aporta seguimiento operativo y coordinación según el servicio contratado.",
  },
  {
    slug: "dashcam-ia",
    label: "Dashcam con IA",
    detail: "Aporta contexto visual en ruta, con alcance propio.",
  },
  {
    slug: "custodia",
    label: "Custodia en tránsito",
    detail:
      "Aporta acompañamiento durante el traslado; el rastreo suma visibilidad a la operación.",
  },
];

const bunkerReasons = [
  {
    icon: Building2,
    title: "Empresa mexicana",
    detail: "Enfocada en la prevención y la gestión de riesgos logísticos y patrimoniales.",
  },
  {
    icon: Cpu,
    title: "Tecnología y operación",
    detail: "Integramos recurso humano y tecnología en la supervisión operativa.",
  },
  {
    icon: Target,
    title: "Enfoque a la medida",
    detail: "Nos adaptamos a las características logísticas de cada cliente.",
  },
  {
    icon: Map,
    title: "Atención a nivel nacional",
    detail: "Operación y atención para proyectos a nivel nacional.",
  },
];

const editorialLinks = [
  {
    slug: "que-revisar-antes-contratar-sistema-rastreo-gps",
    title: "¿Qué revisar antes de contratar un sistema de rastreo GPS?",
  },
  {
    slug: "gps-logistica-como-utilizar-informacion-decisiones",
    title: "Cómo convertir datos GPS en decisiones",
  },
];

const faqs = [
  {
    question: "¿Qué información puede aportar un sistema GPS?",
    answer:
      "Ubicación y recorridos de las unidades, según la plataforma, la solución y la configuración contratadas.",
  },
  {
    question: "¿GPS y telemetría son lo mismo?",
    answer:
      "No. El GPS aporta posicionamiento y movimientos. Variables como combustible o RPM requieren sensores o fuentes de datos compatibles, según la solución.",
  },
  {
    question: "¿Se puede consultar el histórico de una unidad?",
    answer:
      "La consulta de recorridos realizados depende de la solución; la ventana de historia disponible se confirma al definir el servicio.",
  },
  {
    question: "¿El servicio incluye monitoreo?",
    answer:
      "No. Rastreo y monitoreo son servicios con alcance propio; pueden contratarse de forma conjunta según el proyecto.",
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

export function GpsRastreoServicePage() {
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
                <span className="text-eyebrow text-primary">Visibilidad logística</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                GPS y rastreo para una operación con mayor visibilidad
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Conozca la ubicación y el recorrido de sus unidades para contar con más información
                sobre la operación y dar seguimiento a sus movimientos.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "270ms" }}
              >
                <ButtonLink href="/contacto" size="lg" className="max-[430px]:w-full">
                  Evaluar mi flotilla
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
                src={operationImage}
                alt="Unidad logística con tecnología aplicada durante la operación"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Ubicación · Recorrido · Seguimiento
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                En operación
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ¿Qué aporta el rastreo? */}
      <section className="border-y border-line bg-surface">
        <Container className="py-10 sm:py-12">
          <ol className="grid gap-8 sm:grid-cols-3 md:gap-10">
            {valueBand.map((item) => (
              <li key={item.num} className="flex items-start gap-4">
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                  {item.num}
                </span>
                <item.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-bold text-ink">{item.title}</p>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-muted">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Del mapa a la operación */}
      <section
        id="servicio"
        className="overflow-hidden bg-black-950 scroll-mt-24 technical-grid section-y"
      >
        <Container>
          <EyebrowRow number="04" label="Información operativa" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Ver la ubicación es sólo el comienzo
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            El valor aumenta cuando la información de ubicación se utiliza para responder preguntas
            sobre la operación, según la solución contratada.
          </p>

          <Reveal className="mt-14">
            <div className="relative mx-auto max-w-6xl">
              <span
                aria-hidden="true"
                className="absolute top-[0.375rem] right-[10%] left-[10%] hidden border-t-2 border-dashed border-primary/50 lg:block"
              />
              <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
                {dataFlow.map((item, i) => (
                  <li key={item.node} className="relative flex flex-col items-center text-center">
                    <Reveal delay={i * 90}>
                      <span
                        aria-hidden="true"
                        className="relative z-10 block size-3 rounded-full border-2 border-primary bg-surface-elevated"
                      />
                      <div className="mt-3 flex items-center gap-2">
                        <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                          {item.num}
                        </span>
                        <span className="font-display text-lg font-extrabold tracking-[0.08em] text-surface-elevated uppercase">
                          {item.node}
                        </span>
                      </div>
                      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-warm-gray-300">
                        {item.caption}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {operationQuestions.map((question) => (
              <p
                key={question}
                className="border border-primary/30 bg-black-900 px-5 py-4 text-sm font-semibold text-silver-100"
              >
                {question}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            Preguntas que la información puede ayudar a responder, según la solución y la
            configuración contratadas.
          </p>
        </Container>
      </section>

      {/* Ahora e histórico */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Ahora e histórico"
            title="Dos momentos de la operación"
            description="La información disponible puede responder preguntas distintas según el momento de la operación."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-2">
            <div className="bg-surface-elevated p-6 md:p-8">
              <p className="text-eyebrow text-primary">Ahora</p>
              <h3 className="mt-3 text-title">¿Dónde está la unidad?</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                Consultar la posición registrada de una unidad apoya el seguimiento de la operación.
              </p>
            </div>
            <div className="bg-surface-elevated p-6 md:p-8">
              <p className="text-eyebrow text-primary">Histórico</p>
              <h3 className="mt-3 text-title">¿Qué recorrido realizó?</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                Revisar los movimientos registrados aporta referencia sobre rutas y tiempos, según
                la información disponible en la solución.
              </p>
            </div>
          </div>
          <div className="mt-6 border border-primary/30 bg-primary-soft p-6 md:p-8">
            <p className="text-eyebrow text-primary">Análisis</p>
            <h3 className="mt-3 text-title">
              ¿Qué podemos aprender al observar varios recorridos?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink">
              La revisión de recorridos realizados puede apoyar el análisis logístico: rutas,
              tiempos y movimientos que merecen atención.
            </p>
          </div>
        </Container>
      </section>

      {/* Casos de uso */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="06"
            eyebrow="En la práctica"
            title="Información útil para distintos momentos de la operación"
            description="Desde el seguimiento diario hasta la revisión posterior, la información de ubicación aporta contexto a cada etapa del ciclo logístico."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="border-t-2 border-primary bg-surface-elevated p-6">
                <item.icon className="size-7 text-primary" aria-hidden="true" strokeWidth={1.8} />
                <h3 className="mt-4 text-title">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Escala */}
      <section className="border-t border-line bg-surface-elevated py-10 sm:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <EyebrowRow number="07" label="Escala" />
              <h2 className="mt-4 max-w-xl text-headline">El valor cambia según la operación</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
                No es lo mismo una unidad aislada que una flotilla con distintos turnos, recorridos
                y responsables. La forma de usar la información se revisa para cada caso.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {scaleFactors.map((factor) => (
                <li
                  key={factor}
                  className="border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink"
                >
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Impacto oscuro */}
      <section className="overflow-hidden bg-black-950 technical-grid section-y">
        <Container>
          <EyebrowRow number="08" label="Gestión con contexto" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Más información para decidir con contexto
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Cuando la ubicación, los recorridos y los eventos disponibles se integran al proceso
            operativo, el rastreo deja de ser sólo un mapa y se convierte en una fuente de
            información para la gestión.
          </p>
          <p
            aria-hidden="true"
            className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-lg font-extrabold tracking-[0.04em] text-primary uppercase"
          >
            <span>Ubicación</span>
            <span className="text-silver-100">+</span>
            <span>Recorrido</span>
            <span className="text-silver-100">+</span>
            <span>Eventos</span>
            <span className="text-silver-100">+</span>
            <span>Gestión</span>
          </p>
          <div className="mt-10">
            <ButtonLink href="/contacto" variant="onDark" size="lg">
              Hablar sobre mi flotilla
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Proceso */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="09"
            eyebrow="Proceso"
            title="Cómo se conecta su operación al rastreo"
            description="Una secuencia que se define según el proyecto, la solución y la configuración contratadas."
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {serviceSteps.map((step) => (
              <div key={step.num} className="border border-line bg-surface-elevated p-6">
                <span className="font-display text-3xl font-extrabold tracking-[-0.04em] text-primary">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
            La instalación de dispositivos de posicionamiento se realiza como parte del servicio
            contratado.
          </p>
        </Container>
      </section>

      {/* Complementos */}
      <section className="section-y bg-black-950">
        <Container>
          <EyebrowRow number="10" label="Complementos" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            El rastreo puede complementarse con otros servicios
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Dependiendo de las necesidades del proyecto, la información de ubicación puede sumar más
            contexto. Cada servicio mantiene su propio alcance.
          </p>
          <div className="mt-10 border-t border-primary">
            {complements.map((item) => (
              <div
                key={item.slug}
                className="flex flex-col gap-2 border-b border-primary py-6 lg:flex-row lg:items-baseline lg:justify-between lg:gap-10"
              >
                <ServiceLink slug={item.slug}>{item.label}</ServiceLink>
                <p className="max-w-xl text-sm leading-relaxed text-warm-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            Ningún servicio se incluye de forma automática; la combinación se evalúa según el
            proyecto.
          </p>
        </Container>
      </section>

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <SectionHeading
              index="11"
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
          <div className="mt-12 divide-y divide-line border-y border-line">
            {bunkerReasons.map((reason) => (
              <div
                key={reason.title}
                className="grid gap-2 py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8"
              >
                <div className="flex items-center gap-3">
                  <reason.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <h3 className="text-title">{reason.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted sm:max-w-2xl">
                  {reason.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enlace editorial al blog */}
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {editorialLinks.map((item) => (
              <div key={item.slug} className="border border-line bg-surface-elevated p-6 md:p-8">
                <p className="text-eyebrow text-primary">Editorial</p>
                <h3 className="mt-2 max-w-md text-title">{item.title}</h3>
                <p className="mt-5">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: item.slug }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Leer la guía <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Preguntas frecuentes */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="12"
            eyebrow="Preguntas frecuentes"
            title="Preguntas para evaluar el servicio"
            description="Respuestas breves y prudentes antes de contratar."
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

      {/* CTA final */}
      <section className="relative overflow-hidden border-y border-primary/35 bg-black-950 py-16 technical-grid sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <EyebrowRow number="13" label="Siguiente paso" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Conozcamos qué necesita ver de su operación
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos cómo está compuesta su flotilla y qué información necesita para dar
                seguimiento a sus unidades. Podemos revisar qué solución se ajusta al escenario.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:justify-end">
              <ButtonLink href="/contacto" variant="onDark" size="lg">
                Evaluar mi flotilla
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
