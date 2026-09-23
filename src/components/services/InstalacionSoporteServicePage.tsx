import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cable,
  Camera,
  Check,
  ClipboardList,
  DoorOpen,
  LifeBuoy,
  Map,
  MapPin,
  MonitorPlay,
  Power,
  Radio,
  ScanLine,
  Search,
  Settings,
  Shield,
  Target,
  TriangleAlert,
  UserCheck,
  Video,
  Wrench,
  Zap,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import technicalImage from "../../../assets/caseta-bunker.jpeg";

const trustPoints = [
  "Orden, conectividad y requerimientos del fabricante",
  "Soporte para revisar la operatividad",
  "Redes locales y tecnología aplicada",
];

const valueBand = [
  {
    num: "01",
    icon: Wrench,
    title: "Instalación",
    detail: "Montaje y conexión según el alcance del proyecto.",
  },
  {
    num: "02",
    icon: BadgeCheck,
    title: "Validación",
    detail: "Revisión de operatividad antes de la puesta en servicio.",
  },
  {
    num: "03",
    icon: LifeBuoy,
    title: "Soporte",
    detail: "Atención posterior según las condiciones contratadas.",
  },
];

const implementationFactors = [
  "Ubicación",
  "Energía",
  "Conectividad",
  "Montaje",
  "Configuración",
  "Comunicación",
  "Funcionamiento",
  "Acceso para mantenimiento",
];

const deliveryFlow = [
  {
    num: "01",
    icon: Building2,
    title: "Sitio",
    detail: "Se revisan las condiciones del lugar donde se implementará.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Preparación",
    detail: "Se coordinan requerimientos y accesos antes de la instalación.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Instalación",
    detail: "Se ejecuta el montaje con orden y conectividad.",
  },
  {
    num: "04",
    icon: Settings,
    title: "Configuración",
    detail: "Se ajustan parámetros según la solución y el fabricante.",
  },
  {
    num: "05",
    icon: Search,
    title: "Prueba",
    detail: "Se revisa el funcionamiento básico de lo instalado.",
  },
  {
    num: "06",
    icon: Power,
    title: "Operación",
    detail: "El sistema queda listo para usarse según el alcance.",
  },
];

const beforeSite = [
  "Alcance",
  "Equipos",
  "Ubicación",
  "Requerimientos de conectividad",
  "Alimentación",
  "Accesos",
  "Horarios de trabajo",
  "Responsables del cliente",
];

const duringInstall = [
  "Montaje limpio",
  "Identificación",
  "Conexiones ordenadas",
  "Configuración",
  "Pruebas",
  "Respeto a la operación del cliente",
];

const validateList = [
  "Energía",
  "Conectividad",
  "Comunicación",
  "Visualización",
  "Funcionamiento",
  "Acceso",
  "Operación básica",
];

const phases = [
  {
    icon: ClipboardList,
    phase: "Antes",
    word: "Preparar.",
    detail: "Alcance, sitio y requerimientos coordinados.",
  },
  {
    icon: Wrench,
    phase: "Durante",
    word: "Implementar.",
    detail: "Instalación con orden y configuración.",
  },
  {
    icon: BadgeCheck,
    phase: "Después",
    word: "Validar.",
    detail: "Revisión de operatividad antes de entregar.",
  },
];

const poweredChecks = [
  "Comunica correctamente.",
  "Genera la información esperada.",
  "Puede consultarse.",
  "Está correctamente orientado.",
  "Forma parte del flujo definido.",
];

const solutionRelations = [
  {
    slug: "videovigilancia",
    icon: Camera,
    label: "Videovigilancia",
    detail:
      "Una cámara necesita ubicación, montaje, conectividad, configuración y validación de imagen según el proyecto.",
    note: "El alcance técnico se define por solución.",
  },
  {
    slug: "gps-rastreo",
    icon: MapPin,
    label: "GPS y Rastreo",
    detail:
      "Un dispositivo de rastreo se instala con alimentación y comunicación, validando posición y datos según equipo y solución.",
    note: "La validación depende del dispositivo y la plataforma.",
  },
  {
    slug: "dashcam-ia",
    icon: Video,
    label: "Dashcam con IA",
    detail:
      "La posición del dispositivo y su validación influyen en el contexto visual que puede aportar.",
    note: "La instalación vehicular se define según el proyecto.",
  },
  {
    slug: "tecnologia-perimetral",
    icon: ScanLine,
    label: "Tecnología perimetral",
    detail:
      "Los equipos exteriores se instalan considerando sitio, ubicación, alimentación, conectividad y condiciones ambientales.",
    note: "Se evalúa según el proyecto.",
  },
  {
    slug: "monitoreo",
    icon: MonitorPlay,
    label: "Monitoreo",
    detail:
      "Una solución que necesita reportar información depende también de la conectividad y de una configuración compatible.",
    note: "No implica integración automática.",
  },
];

const siteResponsibilities = [
  "Energía disponible",
  "Conectividad",
  "Acceso",
  "Infraestructura",
  "Permisos",
  "Coordinación con responsables",
  "Condiciones físicas",
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Revisamos el proyecto",
    detail: "Se define alcance, equipos y condiciones del sitio.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Preparamos el sitio y requerimientos",
    detail: "Coordinación previa de accesos, alimentación y conectividad.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Ejecutamos la instalación",
    detail: "Instalación física con orden y respeto a los requerimientos del fabricante.",
  },
  {
    num: "04",
    icon: Settings,
    title: "Configuramos y validamos",
    detail: "Se revisa comunicación, funcionamiento y operación básica.",
  },
  {
    num: "05",
    icon: Power,
    title: "Entregamos el sistema para operación",
    detail: "Puesta en marcha de acuerdo con el alcance definido.",
  },
  {
    num: "06",
    icon: LifeBuoy,
    title: "Damos soporte según el alcance",
    detail: "Soporte para revisar y mantener la operatividad de los sistemas.",
  },
];

const validationPoints = [
  { icon: Zap, label: "Energía" },
  { icon: Cable, label: "Conectividad" },
  { icon: Power, label: "Operación" },
];

const bunkerReasons = [
  {
    icon: Building2,
    title: "Empresa mexicana",
    detail: "Concebida para integrar recurso humano y tecnología en la supervisión operativa.",
  },
  {
    icon: UserCheck,
    title: "Recurso humano y tecnología",
    detail:
      "La operación combina personal y tecnología según las características de cada proyecto.",
  },
  {
    icon: Target,
    title: "Enfoque a la medida",
    detail: "Nos adaptamos a las características logísticas de cada cliente.",
  },
  {
    icon: Map,
    title: "Cobertura a nivel nacional",
    detail:
      "Operamos y coordinamos servicios logísticos, técnicos y de custodia con cobertura a nivel nacional.",
  },
];

const editorialLinks = [
  {
    slug: "videovigilancia-que-considerar-antes-instalar-camaras",
    title: "Videovigilancia empresarial: qué considerar antes de instalar cámaras",
  },
  {
    slug: "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
    title: "Integrar videovigilancia, GPS y monitoreo: qué aporta",
  },
];

const faqs = [
  {
    question: "¿Qué incluye una instalación?",
    answer:
      "Instalación física con orden y conectividad, respetando los requerimientos del fabricante; el alcance específico se define en cada proyecto.",
  },
  {
    question: "¿Pueden instalar equipos ya existentes?",
    answer:
      "Es posible realizar una visita técnica para revisar equipos e infraestructura; la propuesta depende de su compatibilidad y condiciones operativas.",
  },
  {
    question: "¿La instalación incluye conectividad?",
    answer:
      "La conectividad es un punto de enfoque de las instalaciones; los requerimientos de cada sitio se evalúan en el proyecto.",
  },
  {
    question: "¿Qué sucede después de la puesta en marcha?",
    answer:
      "Se brinda soporte para revisar y mantener la operatividad de los sistemas, según las condiciones contratadas.",
  },
  {
    question: "¿El soporte tiene un horario definido?",
    answer:
      "Los alcances y horarios de soporte se definen en la evaluación de cada proyecto; no asumimos cobertura continua ni 24/7.",
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

export function InstalacionSoporteServicePage() {
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
                <span className="text-eyebrow text-primary">Infraestructura</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Instalación y soporte para soluciones que deben seguir operando
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Una implementación ordenada ayuda a que cámaras, sistemas de rastreo, sensores y
                otras soluciones funcionen de acuerdo con el alcance definido para cada{" "}
                <span className="text-ink">proyecto</span>.
              </p>
              <p
                className="hero-enter mt-4 max-w-xl text-sm leading-relaxed text-ink-muted"
                style={{ animationDelay: "230ms" }}
              >
                Realizamos instalaciones físicas buscando orden, conectividad y respeto por los
                requerimientos del fabricante, y brindamos soporte para revisar la operatividad de
                los sistemas.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "300ms" }}
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
                  Conocer el proceso
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
                src={technicalImage}
                alt="Personal de BÚNKER revisando tecnología junto a una unidad logística"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Planeación · Instalación · Validación
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                Operativo
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

      {/* Instalar no es sólo colocar */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <EyebrowRow number="02" label="Implementación" />
              <h2 className="mt-6 text-headline">Instalar no es solamente colocar un equipo</h2>
              <p className="text-lead mt-5 max-w-2xl text-ink-muted">
                Una implementación puede requerir revisar ubicación, energía, conectividad, montaje,
                configuración, comunicación, funcionamiento y acceso para mantenimiento. Son
                factores generales que se consideran según el tipo de solución.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Reveal className="h-full">
                <div className="grid h-full grid-cols-2 gap-px border border-line bg-line">
                  {implementationFactors.map((factor) => (
                    <div key={factor} className="bg-surface-elevated p-5">
                      <Check className="size-4 text-primary" aria-hidden="true" />
                      <p className="mt-3 text-sm font-bold text-ink">{factor}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Antes / Durante / Después */}
      <section className="border-y border-line bg-surface">
        <Container className="py-10 sm:py-12">
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {phases.map((phase) => (
              <li key={phase.phase} className="bg-surface-elevated p-6 md:p-8">
                <phase.icon className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-5 text-eyebrow text-primary">{phase.phase}</p>
                <p className="mt-1 text-title">{phase.word}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{phase.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Secuencia de entrega */}
      <section id="proceso" className="section-y section-rule scroll-mt-24 bg-surface-elevated">
        <Container>
          <EyebrowRow number="03" label="Secuencia de entrega" />
          <h2 className="mt-6 max-w-3xl text-headline">
            Del sitio a la operación, etapa por etapa
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Una secuencia conceptual de entrega; el detalle se ajusta según el proyecto y el tipo de
            solución.
          </p>

          <Reveal className="mt-12">
            <ol className="flex flex-col gap-3 lg:flex-row">
              {deliveryFlow.map((step, i) => (
                <li key={step.num} className="flex flex-1 flex-col gap-3">
                  <div className="flex-1 border border-line bg-surface p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                        {step.num}
                      </span>
                      <step.icon className="size-5 text-primary" aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-title">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
                  </div>
                  {i < deliveryFlow.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="hidden text-center font-display text-xl font-extrabold text-primary lg:block"
                    >
                      +
                    </span>
                  ) : (
                    <span aria-hidden="true" className="hidden h-[1.75rem] lg:block" />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Encendido ≠ operativo */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="04" label="Validación de la solución" />
          <h2 className="mt-6 max-w-3xl text-headline">
            Que se encienda no significa que esté validado
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Que un dispositivo tenga energía no significa necesariamente que comunique
            correctamente, genere la información esperada, pueda consultarse, esté correctamente
            orientado o forme parte del flujo definido.
          </p>

          <Reveal className="mt-12">
            <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
              <div className="border border-line bg-surface-elevated p-6 md:p-8">
                <Power className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-4 font-display text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  Equipo encendido
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Tiene energía y enciende.
                </p>
              </div>
              <div className="grid place-items-center">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-extrabold text-primary"
                >
                  ≠
                </span>
              </div>
              <div className="border border-line bg-surface-elevated p-6 md:p-8">
                <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-4 font-display text-xs font-bold tracking-[0.14em] text-ink uppercase">
                  Solución validada
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Revisada en su comunicación, funcionamiento y operación básica.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {poweredChecks.map((check) => (
              <div key={check} className="flex items-start gap-3 bg-surface-elevated p-5">
                <TriangleAlert className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-ink">{check}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Antes de llegar al sitio */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Coordinación previa"
            title="Antes de llegar al sitio"
            description="La coordinación previa define qué preparar en cada lugar antes de la instalación."
            className="max-w-3xl"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {beforeSite.map((item) => (
              <span
                key={item}
                className="border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Orden durante la implementación */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="06" label="En el sitio" />
          <h2 className="mt-6 max-w-3xl text-headline">Orden durante la implementación</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            La instalación se ejecuta buscando orden, conectividad y respeto por los requerimientos
            del fabricante.
          </p>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {duringInstall.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-surface-elevated p-6">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Validar antes de entregar */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <EyebrowRow number="07" label="Puesta en marcha" />
          <h2 className="mt-6 max-w-3xl text-headline">Validar antes de entregar</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Según el tipo de solución, la validación puede contemplar energía, conectividad,
            comunicación, visualización, funcionamiento, acceso y operación básica.
          </p>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {validateList.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-surface p-6">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dark: la instalación termina cuando puede validarse */}
      <section className="relative overflow-hidden bg-black-950 py-16 technical-grid sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <EyebrowRow number="08" label="Entrega del sistema" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                La instalación termina cuando la solución puede validarse
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                La puesta en marcha requiere revisar que los elementos instalados funcionen de
                acuerdo con el alcance definido para el proyecto.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[431px]:flex-row">
                <ButtonLink href="/contacto" variant="onDark" size="lg">
                  Evaluar una implementación
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
                  {validationPoints.map((point, i) => (
                    <li
                      key={point.label}
                      className={`flex items-center gap-4 px-6 py-5 ${i > 0 ? "border-t border-primary/20" : ""}`}
                    >
                      <point.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm font-bold text-surface-elevated uppercase">
                        {point.label}
                      </span>
                      <span aria-hidden="true" className="h-px flex-1 bg-primary/25" />
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Soluciones que se implementan */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="09"
            eyebrow="Soluciones que se implementan"
            title="Instalación y soporte complementan las soluciones tecnológicas"
            description="La instalación y el soporte acompañan a las soluciones; cada servicio mantiene su propio alcance."
            className="max-w-3xl"
          />
          <div className="mt-10 border-t border-line">
            {solutionRelations.map((item, i) => (
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

      {/* Proyecto nuevo vs infraestructura existente */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <EyebrowRow number="10" label="Tipo de proyecto" />
          <h2 className="mt-6 max-w-3xl text-headline">
            Proyectos nuevos e infraestructura existente
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            En proyectos nuevos la instalación se define desde cero. En sitios existentes se revisa
            qué puede reutilizarse o debe ajustarse; la compatibilidad se evalúa por proyecto.
          </p>
          <Reveal className="mt-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <div className="border border-line bg-surface p-6 md:p-8">
                <p className="font-display text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  Proyecto nuevo
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Se define la instalación desde cero según el alcance.
                </p>
              </div>
              <div className="grid place-items-center">
                <span
                  aria-hidden="true"
                  className="border border-line bg-surface-elevated px-4 py-2 font-display text-sm font-extrabold tracking-[0.14em] text-primary uppercase"
                >
                  vs
                </span>
              </div>
              <div className="border border-line bg-surface p-6 md:p-8">
                <p className="font-display text-xs font-bold tracking-[0.14em] text-ink uppercase">
                  Infraestructura existente
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Se revisa qué puede reutilizarse o debe ajustarse; se evalúa compatibilidad.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Compatibilidad */}
      <section className="border-y border-line bg-surface">
        <Container className="py-12 sm:py-14">
          <div className="flex items-start gap-4">
            <TriangleAlert className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="text-title">La compatibilidad se valida por proyecto</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                No todos los equipos, plataformas o generaciones de tecnología son necesariamente
                compatibles entre sí. Por eso se evalúa la compatibilidad antes de definir el
                alcance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Soporte después de la instalación */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="11"
            eyebrow="Soporte"
            title="Después de la instalación"
            description="El soporte se enfoca en revisar y mantener la operatividad de los sistemas instalados, según las condiciones contratadas."
            className="max-w-3xl"
          />
          <div className="mt-10 border border-line bg-surface p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <LifeBuoy className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  Puede implicar revisión de operatividad, diagnóstico sobre lo instalado y
                  coordinación técnica para ajustes. Cuando es posible realizar una visita técnica,
                  se revisan equipos e infraestructura ya instalados; si son compatibles y se
                  encuentran en condiciones operativas, se puede ofrecer una propuesta de
                  mantenimiento técnico.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-line bg-surface p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <TriangleAlert className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-title">Soporte no es garantía de cero fallas</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                  El soporte ayuda a revisar y atender incidencias, y a mantener la operatividad de
                  los sistemas. No significa que un sistema sea inmune a fallas de energía,
                  conectividad, hardware o terceros.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Una implementación también depende del sitio */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="12" label="Coordinación en sitio" />
          <h2 className="mt-6 max-w-3xl text-headline">
            Una implementación también depende del sitio
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            La energía, la conectividad, el acceso y la coordinación con responsables del lugar
            forman parte de la preparación previa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {siteResponsibilities.map((item) => (
              <span
                key={item}
                className="max-w-full break-words border border-line bg-surface-elevated px-4 py-2 text-sm font-semibold text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Se presenta como coordinación previa entre ambas partes, no como una transferencia de
            responsabilidad al cliente.
          </p>
        </Container>
      </section>

      {/* Proceso comercial */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="13"
            eyebrow="Cómo se define el proyecto"
            title="Una secuencia de entrega ordenada"
            description="Cada etapa se ajusta según el tipo de solución y las condiciones del sitio."
            className="max-w-3xl"
          />
          <div className="mt-12 gap-px border border-line bg-line sm:grid sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="14"
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
      <section className="border-y border-line bg-surface py-12 sm:py-16">
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
            index="15"
            eyebrow="Preguntas frecuentes"
            title="Preguntas para evaluar la implementación"
            description="Respuestas breves y prudentes según el alcance del servicio."
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
              <EyebrowRow number="16" label="Siguiente paso" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Hagamos que la tecnología quede lista para operar
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos qué solución necesita implementar, qué infraestructura ya existe y en qué
                condiciones opera el sitio. Podemos revisar el escenario y definir el alcance de
                instalación y soporte.
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
