import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Ban,
  Boxes,
  Building2,
  CarFront,
  Check,
  ClipboardList,
  Crosshair,
  Eye,
  Flag,
  Gauge,
  Landmark,
  Layers,
  Link2,
  MapPin,
  MonitorPlay,
  Ruler,
  ScanLine,
  Search,
  Settings,
  Shield,
  Sun,
  Target,
  UserCheck,
  Video,
  Warehouse,
  Wrench,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import perimeterImage from "../../../assets/proteccion.webp";

const trustPoints = [
  "Evaluación del sitio",
  "Cámaras y sensores",
  "Avisos según equipos y plataformas",
];

const valueBand = [
  {
    num: "01",
    icon: Ruler,
    title: "Perímetro",
    detail: "Definir dónde comienza la zona que necesita protección.",
  },
  {
    num: "02",
    icon: ScanLine,
    title: "Detección",
    detail:
      "Registrar actividad cercana a los límites y generar avisos según la tecnología utilizada.",
  },
  {
    num: "03",
    icon: Link2,
    title: "Coordinación",
    detail:
      "Enlazar la información con procedimientos y responsables, según el servicio contratado.",
  },
];

const perimeterSites = [
  "Bardas",
  "Patios",
  "Estacionamientos",
  "Accesos vehiculares",
  "Zonas de carga",
  "Áreas exteriores",
  "Espacios de transición",
];

const layers = [
  {
    cap: "CAPA 1",
    title: "Límite",
    detail: "Dónde termina el sitio y empieza el exterior.",
  },
  {
    cap: "CAPA 2",
    title: "Detección",
    detail: "Condiciones que requieren atención, según la tecnología instalada.",
  },
  {
    cap: "CAPA 3",
    title: "Validación",
    detail: "Revisar el aviso con la información disponible.",
  },
  {
    cap: "CAPA 4",
    title: "Contexto",
    detail: "Video u otros datos que aportan elementos al revisar.",
  },
  {
    cap: "CAPA 5",
    title: "Respuesta",
    detail: "El procedimiento y el responsable definidos en el proyecto.",
  },
];

const boundaryStatements = [
  {
    icon: Ruler,
    title: "Una barda define un límite.",
    detail: "Marca hasta dónde llega su instalación y qué zonas quedan en el exterior.",
  },
  {
    icon: ScanLine,
    title: "La tecnología puede aportar información sobre ese límite.",
    detail: "Registro de actividad y avisos de acuerdo con los equipos y plataformas utilizados.",
  },
  {
    icon: ClipboardList,
    title: "Los procedimientos definen qué hacer.",
    detail: "Responsable, revisión y escalamiento acordados en el diseño del proyecto.",
  },
];

const signalChain = [
  {
    icon: Flag,
    title: "Aviso",
    detail: "Se registra y genera según los equipos y plataformas utilizados.",
  },
  {
    icon: Layers,
    title: "Contexto",
    detail: "Información adicional disponible para revisar el aviso.",
  },
  {
    icon: ClipboardList,
    title: "Procedimiento",
    detail: "Responsable y pasos definidos en el proyecto.",
  },
];

const entornoFactors = [
  "Vegetación",
  "Iluminación",
  "Tránsito",
  "Clima",
  "Animales",
  "Actividad normal",
  "Accesos",
  "Horarios",
];

const zones = [
  {
    icon: CarFront,
    title: "Accesos vehiculares",
  },
  {
    icon: MapPin,
    title: "Estacionamientos",
  },
  {
    icon: Warehouse,
    title: "Patios logísticos",
  },
  {
    icon: Sun,
    title: "Zonas exteriores",
  },
  {
    icon: Landmark,
    title: "Muros y bardas",
  },
  {
    icon: Boxes,
    title: "Áreas de carga y descarga",
  },
  {
    icon: Ban,
    title: "Límites entre zonas públicas y restringidas",
  },
  {
    icon: Building2,
    title: "Perímetros industriales y bodegas",
  },
];

const scenarioFactors = [
  "Tamaño",
  "Entorno",
  "Iluminación",
  "Circulación",
  "Accesos",
  "Zonas restringidas",
  "Infraestructura existente",
];

const complements = [
  {
    slug: "videovigilancia",
    icon: Video,
    label: "Videovigilancia",
    detail:
      "Una señal perimetral puede complementarse con contexto visual cuando existe una integración compatible.",
    note: "No significa que cada aviso abra automáticamente una cámara.",
  },
  {
    slug: "monitoreo",
    icon: MonitorPlay,
    label: "Monitoreo",
    detail:
      "La detección cobra más valor cuando existen procedimientos para recibir, revisar, escalar y registrar, según el servicio contratado.",
    note: "No implica monitoreo 24/7.",
  },
  {
    slug: "vigilancia",
    icon: UserCheck,
    label: "Vigilancia",
    detail:
      "La tecnología puede aportar señales; el personal puede validar y aplicar procedimientos.",
    note: "Uno no sustituye al otro.",
  },
  {
    slug: "instalacion-soporte",
    icon: Wrench,
    label: "Instalación y soporte técnico",
    detail:
      "La solución perimetral requiere una instalación ordenada y soporte posterior para conservar su operatividad.",
    note: "Instalaciones con orden, conectividad y soporte para revisar la operatividad.",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Revisamos el perímetro",
    detail: "Se observan límites, accesos y zonas exteriores del sitio.",
  },
  {
    num: "02",
    icon: Crosshair,
    title: "Identificamos zonas prioritarias",
    detail: "Se definen los puntos sensibles del proyecto.",
  },
  {
    num: "03",
    icon: Eye,
    title: "Definimos qué supervisar",
    detail: "Actividad a registrar y tipo de avisos según el alcance.",
  },
  {
    num: "04",
    icon: Settings,
    title: "Seleccionamos la solución",
    detail: "Cámaras y sensores adecuados al escenario, según la evaluación del sitio.",
  },
  {
    num: "05",
    icon: Wrench,
    title: "Instalación y soporte",
    detail: "Instalación ordenada y soporte para revisar la operatividad de los sistemas.",
  },
];

const protectList = [
  "Límites físicos",
  "Zonas restringidas",
  "Accesos",
  "Activos",
  "Horarios",
  "Flujo de personas",
  "Flujo de vehículos",
  "Procedimientos actuales",
  "Sistemas ya instalados",
];

const bunkerReasons = [
  {
    icon: Building2,
    title: "Empresa mexicana",
    detail: "Concebida para integrar recurso humano y tecnología en la supervisión operativa.",
  },
  {
    icon: Target,
    title: "Enfoque a la medida",
    detail: "Nos adaptamos a las características logísticas de cada cliente.",
  },
  {
    icon: Wrench,
    title: "Instalación y soporte",
    detail:
      "Instalaciones con orden y conectividad, más soporte para revisar la operatividad de los sistemas.",
  },
  {
    icon: Shield,
    title: "Prevención y gestión de riesgos",
    detail: "Enfocada en la prevención y gestión de riesgos logísticos y patrimoniales.",
  },
];

const editorialLinks = [
  {
    slug: "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
    title: "Integrar videovigilancia, GPS y monitoreo: qué aporta",
  },
  {
    slug: "como-se-coordina-respuesta-alerta-seguridad-monitoreo",
    title: "¿Cómo se coordina la respuesta ante una alerta de seguridad?",
  },
];

const faqs = [
  {
    question: "¿Qué es tecnología perimetral?",
    answer:
      "Soluciones de cámaras y sensores orientadas a los límites y zonas exteriores de una instalación, definidas según la evaluación del sitio.",
  },
  {
    question: "¿Todas las instalaciones necesitan la misma solución?",
    answer:
      "No. Tamaño, entorno, accesos y zonas sensibles varían en cada sitio; el diseño parte de la evaluación.",
  },
  {
    question: "¿Puede combinarse con videovigilancia?",
    answer:
      "Sí, cuando existe una integración compatible; el alcance se valida según los equipos y plataformas utilizados.",
  },
  {
    question: "¿La tecnología perimetral sustituye a la vigilancia?",
    answer:
      "No. La tecnología aporta señales; el personal puede validar y aplicar procedimientos. Son complementarias.",
  },
  {
    question: "¿Qué se necesita evaluar antes de implementar?",
    answer:
      "Límites físicos, accesos, zonas restringidas, actividad del entorno y la infraestructura existente.",
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
      className="group inline-flex items-center gap-1.5 font-display text-xl font-bold text-ink underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
    >
      {children}
      <ArrowUpRight
        className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function TecnologiaPerimetralServicePage() {
  return (
    <article>
      {/* Hero comercial */}
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
                <span className="text-eyebrow text-primary">Detección exterior</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Tecnología perimetral para reforzar zonas sensibles
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Soluciones orientadas a reforzar perímetros, accesos y zonas exteriores de acuerdo
                con las características de cada <span className="text-ink">instalación</span>.
              </p>
              <p
                className="hero-enter mt-4 max-w-xl text-sm leading-relaxed text-ink-muted"
                style={{ animationDelay: "230ms" }}
              >
                Según la evaluación del sitio, se integran cámaras y sensores que registran
                actividad perimetral y generan avisos de acuerdo con los equipos y plataformas
                utilizados.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "300ms" }}
              >
                <ButtonLink href="/contacto" size="lg" className="max-[430px]:w-full">
                  Solicitar evaluación
                </ButtonLink>
                <ButtonLink
                  href="#solucion"
                  variant="outline"
                  size="lg"
                  className="max-[430px]:w-full"
                >
                  Conocer la solución
                </ButtonLink>
              </div>

              <ul
                className="hero-enter mt-10 flex flex-col gap-3 border border-line bg-surface-elevated/90 px-5 py-4 text-sm font-semibold text-ink sm:flex-row sm:items-center sm:gap-6 sm:px-6"
                style={{ animationDelay: "380ms" }}
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
                src={perimeterImage}
                alt="Acceso exterior corporativo con tecnología instalada en el perímetro"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Límite · Zona · Aviso
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                Exterior
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Franja de valor */}
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

      {/* Antes del punto crítico */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <EyebrowRow number="02" label="Límites y zonas exteriores" />
              <h2 className="mt-6 text-headline">
                La protección puede empezar antes del acceso principal
              </h2>
              <p className="text-lead mt-5 max-w-2xl text-ink-muted">
                Una instalación puede tener bardas, patios, estacionamientos, accesos vehiculares,
                zonas de carga, áreas exteriores y espacios de transición. La tecnología perimetral
                busca reforzar esos límites y puntos sensibles según la necesidad del proyecto.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Reveal className="h-full">
                <div className="h-full border border-line bg-surface-elevated p-6 md:p-8">
                  <p className="text-eyebrow text-primary">Elementos del sitio</p>
                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {perimeterSites.map((site) => (
                      <li
                        key={site}
                        className="flex items-center gap-3 border border-line bg-surface px-4 py-3"
                      >
                        <span aria-hidden="true" className="size-2 shrink-0 bg-primary/80" />
                        <span className="text-sm font-semibold text-ink">{site}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual de capas */}
      <section id="solucion" className="section-y section-rule scroll-mt-24 bg-surface-elevated">
        <Container>
          <EyebrowRow number="03" label="Modelo de diseño" />
          <h2 className="mt-6 max-w-3xl text-headline">
            La protección se ordena en capas, desde el límite hasta la respuesta
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Es un modelo conceptual de diseño: ayuda a ubicar dónde aporta cada tecnología y qué
            procedimiento le sigue. No es una metodología oficial.
          </p>

          <Reveal className="mt-12">
            <div className="mx-auto max-w-4xl space-y-3">
              {layers.map((layer, i) => (
                <div
                  key={layer.cap}
                  className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,360px)_1fr]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                      {layer.cap}
                    </span>
                    <div>
                      <p className="text-title">{layer.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{layer.detail}</p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="block h-10 border border-primary/50 bg-primary/5"
                    style={{ marginLeft: `${Math.min(i * 6, 24)}%` }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Barrera física ≠ sistema completo */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="04" label="Claridad de alcance" />
          <h2 className="mt-6 max-w-3xl text-headline">Una barda no es un sistema completo</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            La tecnología perimetral se diseña como parte de un esquema más amplio de protección.
          </p>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
            {boundaryStatements.map((item) => (
              <article key={item.title} className="bg-surface-elevated p-6 md:p-8">
                <item.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-title">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Señal sin contexto */}
      <section className="relative overflow-hidden bg-black-950 py-16 technical-grid sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <EyebrowRow number="05" label="Señal y contexto" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Una señal sin contexto no basta
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Detectar una condición es sólo el primer paso. La utilidad del sistema depende de
                cómo se valida la información y qué procedimiento sigue después.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-warm-gray-400">
                Todo sistema de detección debe configurarse y evaluarse según su entorno para
                reducir eventos no útiles. No prometemos detección sin eventos no útiles.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[431px]:flex-row">
                <ButtonLink href="/contacto" variant="onDark" size="lg">
                  Evaluar mi instalación
                </ButtonLink>
                <WhatsAppLink
                  variant="outline"
                  className="border-primary text-surface-elevated hover:bg-black-850"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <ol className="border border-primary/35 bg-black-900">
                  {signalChain.map((item, i) => (
                    <li
                      key={item.title}
                      className={`flex items-start gap-4 p-6 md:p-7 ${i > 0 ? "border-t border-primary/20" : ""}`}
                    >
                      <item.icon
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-display text-sm font-bold tracking-wide text-surface-elevated uppercase">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-warm-gray-300">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Entorno */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="06"
            eyebrow="Factores del sitio"
            title="El entorno condiciona el diseño"
            description="Vegetación, iluminación, tránsito, clima, animales y la actividad normal de la zona pueden influir sobre cómo se prescribe una solución. Se revisan durante la evaluación del sitio."
            className="max-w-3xl"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {entornoFactors.map((factor) => (
              <span
                key={factor}
                className="max-w-full break-words border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink"
              >
                {factor}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Zonas de aplicación */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="07"
            eyebrow="Escenarios de aplicación"
            title="Dónde puede tener sentido reforzar el perímetro"
            description="Escenarios frecuentes en instalaciones empresariales. No todos requieren el mismo sistema: depende de las características de cada sitio."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((zone) => (
              <article key={zone.title} className="bg-surface-elevated p-6">
                <zone.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-bold text-ink">{zone.title}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Tecnología según el escenario */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <EyebrowRow number="08" label="Diseño por escenario" />
              <h2 className="mt-6 text-headline">
                No existe una única tecnología perimetral para todos los sitios
              </h2>
              <p className="text-lead mt-5 max-w-xl text-ink-muted">
                La selección parte de la evaluación del sitio, no de un catálogo único de equipos.
                Se definen las variables del proyecto y se integran las cámaras y sensores
                adecuados.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Reveal className="h-full">
                <div className="grid h-full grid-cols-2 gap-px border border-line bg-line">
                  {scenarioFactors.map((factor) => (
                    <div key={factor} className="bg-surface p-5">
                      <span aria-hidden="true" className="mb-3 block h-px w-8 bg-primary/50" />
                      <p className="text-sm font-bold text-ink">{factor}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Complementos */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="09"
            eyebrow="Servicios que se complementan"
            title="Tecnología perimetral, con más contexto"
            description="Cada servicio mantiene su propio alcance; la combinación se evalúa según el proyecto."
            className="max-w-3xl"
          />
          <div className="mt-10 border-t border-line">
            {complements.map((item, i) => (
              <div
                key={item.slug}
                className="grid gap-3 border-b border-line py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <item.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <ServiceLink slug={item.slug}>{item.label}</ServiceLink>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {item.detail}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-ink-muted">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Proceso */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="10"
            eyebrow="Cómo se define el proyecto"
            title="Del perímetro a la operación"
            description="Un proceso basado en la evaluación del sitio en cada etapa del proyecto."
            className="max-w-3xl"
          />
          <div className="mt-12 gap-px border border-line bg-line sm:grid sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.num} className="bg-surface p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                    {step.num}
                  </span>
                  <step.icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-title">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Qué necesita proteger */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <EyebrowRow number="11" label="Antes de definir la solución" />
              <h2 className="mt-6 text-headline">Qué necesita proteger su instalación</h2>
              <p className="text-lead mt-5 max-w-2xl text-ink-muted">
                Antes de definir una solución conviene entender cómo está configurado el sitio hoy y
                qué zonas requieren mayor supervisión.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Reveal className="h-full">
                <ul className="grid h-full grid-cols-1 gap-px border border-line bg-line min-[480px]:grid-cols-3">
                  {protectList.map((item) => (
                    <li key={item} className="flex items-center gap-3 bg-surface-elevated p-5">
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="12"
            eyebrow="Confianza empresarial"
            title="Por qué BÚNKER"
            description="Una empresa mexicana concebida para integrar recurso humano y tecnología en la supervisión operativa."
            className="lg:max-w-3xl"
          />
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

      {/* Franja editorial */}
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
            index="13"
            eyebrow="Preguntas frecuentes"
            title="Preguntas para evaluar la solución"
            description="Respuestas breves y prudentes antes de definir el proyecto."
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
              <EyebrowRow number="14" label="Siguiente paso" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Refuerce los puntos sensibles de su instalación
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos cómo está configurado su perímetro y qué zonas requieren mayor
                supervisión. Podemos evaluar el escenario y definir una solución adecuada.
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
