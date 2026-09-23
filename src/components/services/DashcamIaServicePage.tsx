import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  Compass,
  DoorOpen,
  Eye,
  FileText,
  Flag,
  Gauge,
  HardDrive,
  Layers,
  Lock,
  Map,
  MapPin,
  MonitorPlay,
  Pause,
  Route,
  Search,
  Settings,
  Target,
  TriangleAlert,
  Truck,
  UserCheck,
  Video,
  Wifi,
  Wrench,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import fleetImage from "../../../assets/monitoreo.webp";

const trustPoints = [
  "Cámaras instaladas en la unidad",
  "Registro de video",
  "Revisión de eventos en ruta",
];

const valueBand = [
  {
    num: "01",
    icon: Video,
    title: "Video",
    detail: "Contexto visual del recorrido.",
  },
  {
    num: "02",
    icon: Flag,
    title: "Eventos",
    detail: "Momentos que pueden requerir revisión.",
  },
  {
    num: "03",
    icon: Search,
    title: "Análisis",
    detail: "Más elementos para entender lo ocurrido.",
  },
];

const compareItems = [
  {
    icon: MapPin,
    title: "GPS",
    question: "¿Dónde ocurrió?",
  },
  {
    icon: Video,
    title: "Video",
    question: "¿Qué se observaba?",
  },
  {
    icon: Flag,
    title: "Evento",
    question: "¿Qué momento requiere revisión?",
  },
  {
    icon: Layers,
    title: "Contexto",
    question: "¿Qué información adicional existe?",
  },
];

const flowSteps = [
  {
    num: "01",
    icon: Truck,
    title: "Unidad en ruta",
    detail: "Las cámaras se instalan en la unidad para registrar video.",
  },
  {
    num: "02",
    icon: Flag,
    title: "Evento",
    detail: "Un momento que puede requerir revisión.",
  },
  {
    num: "03",
    icon: MonitorPlay,
    title: "Video asociado",
    detail: "Contexto visual alrededor del evento.",
  },
  {
    num: "04",
    icon: Search,
    title: "Revisión",
    detail: "Se revisa con la información disponible.",
  },
  {
    num: "05",
    icon: Check,
    title: "Decisión",
    detail: "Acción según el contexto y el protocolo.",
  },
];

const contexts = [
  {
    icon: Route,
    title: "Camino",
    detail: "Contexto exterior: lo que se observa frente a la unidad y durante el recorrido.",
  },
  {
    icon: Gauge,
    title: "Cabina",
    detail: "Contexto interior: actividades en cabina que el proyecto define revisar.",
  },
];

const reviewScenarios = [
  {
    icon: TriangleAlert,
    title: "Incidente vial",
    detail: "El video puede aportar contexto sobre lo que se observaba.",
  },
  {
    icon: Compass,
    title: "Maniobra",
    detail: "Referencia visual sobre una maniobra puntual.",
  },
  {
    icon: Pause,
    title: "Parada",
    detail: "Contexto del momento y de su entorno.",
  },
  {
    icon: DoorOpen,
    title: "Llegada y salida",
    detail: "Registro del contexto al iniciar o cerrar un recorrido.",
  },
  {
    icon: FileText,
    title: "Reclamación",
    detail: "Apoyo documental para procesos de revisión interna.",
  },
  {
    icon: Search,
    title: "Revisión posterior",
    detail: "Ayuda a entender la dinámica de lo ocurrido.",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Entendemos la operación",
    detail: "Se revisan rutas, unidades y las situaciones que requieren contexto visual.",
  },
  {
    num: "02",
    icon: Eye,
    title: "Definimos el contexto visual",
    detail: "Se define qué momentos y qué tipo de información aportan valor.",
  },
  {
    num: "03",
    icon: Settings,
    title: "Seleccionamos el alcance",
    detail: "Equipo, configuración y forma de revisión según el proyecto.",
  },
  {
    num: "04",
    icon: Camera,
    title: "Se instalan las cámaras",
    detail: "Se instalan cámaras en las unidades para registrar video.",
  },
  {
    num: "05",
    icon: Wrench,
    title: "Soporte y operatividad",
    detail: "Se brinda soporte para revisar la operatividad de los sistemas instalados.",
  },
];

const scopeDecisions = [
  "Tipo de unidades",
  "Cantidad de vehículos",
  "Tipo de operación",
  "Situaciones que se quieren revisar",
  "Quién accederá al video",
  "Cuánto contexto se necesita",
  "Privacidad",
  "Almacenamiento y conectividad",
];

const scopeCallouts = [
  {
    icon: HardDrive,
    title: "Almacenamiento",
    detail: "La forma y el periodo de almacenamiento dependen del equipo y la configuración.",
  },
  {
    icon: Wifi,
    title: "Disponibilidad remota",
    detail:
      "Depende de las capacidades del equipo, de la conectividad y de la plataforma utilizada.",
  },
];

const complements = [
  {
    slug: "gps-rastreo",
    icon: MapPin,
    label: "GPS y Rastreo",
    detail:
      "El GPS aporta ubicación; la dashcam aporta contexto visual. Pueden aportar distinta información cuando existe una solución compatible.",
    note: "No se asume una integración automática.",
  },
  {
    slug: "monitoreo",
    icon: MonitorPlay,
    label: "Monitoreo",
    detail:
      "Una plataforma o servicio de monitoreo puede dar seguimiento a los eventos según el alcance contratado.",
    note: "No implica video en vivo garantizado.",
  },
  {
    slug: "custodia",
    icon: UserCheck,
    label: "Custodia en tránsito",
    detail:
      "La custodia aporta acompañamiento durante el traslado; la dashcam puede aportar contexto visual en ruta.",
    note: "Servicios independientes.",
  },
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
    icon: Map,
    title: "Proyectos a nivel nacional",
    detail: "Operación y atención para proyectos a nivel nacional.",
  },
];

const editorialLinks = [
  {
    slug: "que-aporta-dashcam-con-ia-operacion-logistica",
    title: "¿Qué aporta una dashcam con IA a una operación logística?",
  },
  {
    slug: "gps-logistica-como-utilizar-informacion-decisiones",
    title: "GPS en logística: cómo utilizar la información",
  },
];

const faqs = [
  {
    question: "¿Qué aporta una dashcam a una flotilla?",
    answer:
      "Registro de video en la unidad y apoyo para la revisión de actividades en cabina y de eventos en la vía.",
  },
  {
    question: "¿Qué significa “con IA”?",
    answer:
      "Refleja que algunas soluciones integran capacidades de análisis; su alcance depende del hardware y la plataforma seleccionados.",
  },
  {
    question: "¿Dashcam y GPS hacen lo mismo?",
    answer:
      "No. El GPS aporta ubicación; la dashcam aporta contexto visual. Pueden complementarse según el proyecto.",
  },
  {
    question: "¿Se puede consultar video a distancia?",
    answer:
      "Depende del equipo, de la conectividad y de la plataforma de la solución seleccionada.",
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

export function DashcamIaServicePage() {
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
                <span className="text-eyebrow text-primary">Video en ruta</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Dashcam con IA para aportar contexto a la operación en ruta
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Video e información asociada a la operación pueden ayudar a revisar eventos,
                entender situaciones en ruta y contar con más elementos para la toma de{" "}
                <span className="text-ink">decisiones</span>.
              </p>
              <p
                className="hero-enter mt-4 max-w-xl text-sm leading-relaxed text-ink-muted"
                style={{ animationDelay: "230ms" }}
              >
                Se instalan cámaras en las unidades para registrar video. Lo que la imagen registra
                y las capacidades de análisis dependen del hardware y la plataforma seleccionados.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "300ms" }}
              >
                <ButtonLink href="/contacto" size="lg" className="max-[430px]:w-full">
                  Evaluar mi flotilla
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
                src={fleetImage}
                alt="Unidad logística de una flotilla en operación"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Camino · Cabina · Revisión
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                En ruta
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

      {/* Cuándo el mapa no es suficiente */}
      <section id="solucion" className="section-y section-rule scroll-mt-24 bg-surface-elevated">
        <Container>
          <EyebrowRow number="04" label="Ubicación y video" />
          <h2 className="mt-6 max-w-3xl text-headline">Cuando el mapa no es suficiente</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            La ubicación dice dónde. El video puede aportar contexto sobre qué se observaba. Son
            preguntas distintas, y las dos importan.
          </p>

          <Reveal className="mt-12">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute top-[0.375rem] right-[10%] left-[10%] hidden border-t-2 border-dashed border-primary/40 lg:block"
              />
              <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
                {compareItems.map((item, i) => (
                  <li key={item.title} className="relative flex flex-col items-center text-center">
                    <Reveal delay={i * 90}>
                      <span
                        aria-hidden="true"
                        className="relative z-10 block size-3 rounded-full border-2 border-primary bg-surface-elevated"
                      />
                      <item.icon
                        className="mx-auto mt-4 size-6 text-primary"
                        aria-hidden="true"
                        strokeWidth={1.7}
                      />
                      <span className="mt-3 block font-display text-lg font-extrabold tracking-[0.08em] text-ink uppercase">
                        {item.title}
                      </span>
                      <p className="mt-2 max-w-[16rem] text-base font-semibold text-ink-muted">
                        {item.question}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">
            La correlación entre un evento y su video depende del equipo, de la plataforma y de la
            configuración del proyecto.
          </p>
        </Container>
      </section>

      {/* De la ruta a la revisión */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Cómo se usa"
            title="De la ruta a la revisión"
            description="Un recorrido puede convertirse en contexto útil cuando hay video disponible y alguien lo revisa con la información del proyecto."
            className="max-w-3xl"
          />
          <div className="relative mt-12">
            <span
              aria-hidden="true"
              className="absolute top-6 right-[8%] left-[8%] hidden border-t-2 border-dashed border-primary/35 lg:block"
            />
            <ol className="grid gap-4 lg:grid-cols-5">
              {flowSteps.map((step, i) => (
                <li key={step.num} className="relative">
                  <Reveal delay={i * 80}>
                    <div className="relative z-10 border border-line bg-surface-elevated p-6">
                      <span className="font-display text-3xl font-extrabold tracking-[-0.04em] text-primary">
                        {step.num}
                      </span>
                      <step.icon
                        className="mt-4 size-6 text-primary"
                        aria-hidden="true"
                        strokeWidth={1.7}
                      />
                      <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
            La relación entre un evento y un video depende del equipo, de la plataforma y de la
            configuración del proyecto.
          </p>
        </Container>
      </section>

      {/* Camino y cabina */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <EyebrowRow number="06" label="Dos contextos" />
          <h2 className="mt-6 max-w-3xl text-headline">
            Camino y cabina: dos contextos que conviene observar
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Dependiendo del modelo instalado y la configuración del proyecto, la solución puede
            aportar contexto del exterior y del interior de la unidad.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {contexts.map((ctx) => (
              <div key={ctx.title} className="border-l-2 border-primary bg-surface p-6 md:p-8">
                <ctx.icon className="size-7 text-primary" aria-hidden="true" strokeWidth={1.8} />
                <h3 className="mt-4 text-title">{ctx.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">{ctx.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
            El tipo de vista disponible se confirma según el modelo del equipo y el alcance del
            proyecto.
          </p>
        </Container>
      </section>

      {/* IA como apoyo a la revisión */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <EyebrowRow number="07" label="IA como apoyo" />
              <h2 className="mt-6 max-w-3xl text-headline">
                La IA puede ayudar a señalar momentos. La revisión aporta el contexto.
              </h2>
              <p className="text-lead mt-5 max-w-2xl text-ink-muted">
                Las capacidades de análisis dependen del hardware y la plataforma seleccionados. La
                IA es una herramienta que puede ayudar a enfocar la revisión, no una conclusión
                sobre lo ocurrido.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="border border-line bg-surface-elevated p-6">
                <p className="text-eyebrow text-primary">Cómo se interpreta</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  El video y el contexto operativo ayudan a interpretar lo que la herramienta
                  señala. La persona y el proceso definen la acción.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Un evento con contexto */}
      <section className="overflow-hidden bg-black-950 technical-grid section-y">
        <Container>
          <EyebrowRow number="08" label="Contexto de eventos" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Un evento con contexto aporta más que una alerta aislada
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Cuando existe video disponible alrededor de un evento, los responsables pueden revisar
            más elementos antes de tomar una decisión.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <p className="border border-primary/40 bg-black-900 px-5 py-4 text-center font-display text-sm font-extrabold tracking-[0.1em] text-silver-100 uppercase">
              Evento detectado
            </p>
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full border border-primary/50 font-display text-xl font-extrabold text-primary"
            >
              ≠
            </span>
            <p className="border-2 border-primary bg-primary px-5 py-4 text-center font-display text-sm font-extrabold tracking-[0.1em] text-white uppercase">
              Incidente confirmado
            </p>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            Un evento señala un momento que puede requerir revisión. El video y el contexto
            operativo ayudan a interpretarlo; no concluyen por sí solos.
          </p>
          <div className="mt-10">
            <ButtonLink href="/contacto" variant="onDark" size="lg">
              Conocer una solución para mi flotilla
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Momentos de revisión */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="09"
            eyebrow="Escenarios"
            title="Situaciones donde el video puede aportar contexto"
            description="Ejemplos prudentes de momentos que una operación puede querer revisar con ayuda del registro visual."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewScenarios.map((item) => (
              <div key={item.title} className="border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <item.icon
                    className="size-6 shrink-0 text-primary"
                    aria-hidden="true"
                    strokeWidth={1.7}
                  />
                  <h3 className="text-title">{item.title}</h3>
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Son escenarios de revisión, no funciones automáticas de detección.
          </p>
        </Container>
      </section>

      {/* Proceso */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="10"
            eyebrow="Proceso"
            title="Cómo se integra a su operación"
            description="Una secuencia que se define según el proyecto y el alcance contratado."
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.num} className="border border-line bg-surface-elevated p-6">
                <span className="font-display text-3xl font-extrabold tracking-[-0.04em] text-primary">
                  {step.num}
                </span>
                <step.icon
                  className="mt-4 size-5 text-primary"
                  aria-hidden="true"
                  strokeWidth={1.7}
                />
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* El alcance se define con el proyecto */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <EyebrowRow number="11" label="Decisiones previas" />
              <h2 className="mt-6 text-headline">Antes de elegir una solución conviene definir</h2>
              <p className="text-lead mt-5 text-ink-muted">
                El contexto visual útil se construye: se empieza por entender la operación y se
                define qué se quiere poder revisar.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-2 sm:grid-cols-2">
                {scopeDecisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex items-center gap-3 border border-line bg-surface px-4 py-3"
                  >
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-ink">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-line pt-10 lg:grid-cols-3">
            {scopeCallouts.map((callout) => (
              <div key={callout.title} className="border border-line bg-surface p-6">
                <callout.icon
                  className="size-6 text-primary"
                  aria-hidden="true"
                  strokeWidth={1.7}
                />
                <h3 className="mt-3 text-lg font-semibold text-ink">{callout.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{callout.detail}</p>
              </div>
            ))}
            <div className="border border-line bg-surface p-6">
              <Lock className="size-6 text-primary" aria-hidden="true" strokeWidth={1.7} />
              <h3 className="mt-3 text-lg font-semibold text-ink">Privacidad</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Si el registro incluye al conductor u otras personas, conviene definir finalidad,
                acceso, conservación y proporcionalidad del tratamiento.
              </p>
              <p className="mt-4">
                <Link
                  to="/aviso-de-privacidad"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Ver aviso de privacidad
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Complementos */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="12" label="Complementos" />
          <h2 className="mt-6 max-w-3xl text-headline">
            La dashcam se relaciona con otros servicios
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Cada servicio mantiene su propio alcance; la combinación se evalúa según el proyecto.
          </p>
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

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="13"
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
            index="14"
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
              <EyebrowRow number="15" label="Siguiente paso" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Agregue contexto visual a su operación en ruta
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos cómo opera su flotilla y qué situaciones necesita revisar. Podemos evaluar
                qué solución de video se ajusta al escenario.
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
