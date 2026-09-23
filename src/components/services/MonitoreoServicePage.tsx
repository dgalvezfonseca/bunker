import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  ClipboardList,
  Crosshair,
  DoorOpen,
  FileText,
  Flag,
  Inbox,
  Layers,
  MapPin,
  Radio,
  ScanLine,
  Search,
  Settings,
  Shield,
  Target,
  Truck,
  UserCheck,
  Users,
  Video,
  Warehouse,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import monitoringImage from "../../../assets/bunker-monitores.jpeg";

const trustPoints = [
  "Distintos sistemas en un solo punto",
  "Revisión antes de reportes operativos",
  "Coordinación según procedimientos acordados",
];

const valueBand = [
  {
    num: "01",
    icon: Inbox,
    title: "Recepción",
    detail: "La información llega desde los sistemas definidos para el proyecto.",
  },
  {
    num: "02",
    icon: Search,
    title: "Revisión",
    detail: "Se analiza el evento con la información disponible.",
  },
  {
    num: "03",
    icon: ClipboardList,
    title: "Seguimiento",
    detail: "Se ejecutan o escalan acciones según el procedimiento acordado.",
  },
];

const flowSteps = [
  {
    num: "01",
    icon: Radio,
    title: "Señal",
    detail: "Un aviso o evento llega a revisión.",
  },
  {
    num: "02",
    icon: Inbox,
    title: "Recepción",
    detail: "La tecnología de la empresa se enlaza a plataformas de seguimiento.",
  },
  {
    num: "03",
    icon: Search,
    title: "Validación",
    detail: "Se verifican los datos con la información disponible.",
  },
  {
    num: "04",
    icon: Layers,
    title: "Contexto",
    detail: "Se añaden elementos para entender el evento.",
  },
  {
    num: "05",
    icon: Users,
    title: "Escalamiento",
    detail: "Se informa a los responsables según el procedimiento.",
  },
  {
    num: "06",
    icon: ClipboardList,
    title: "Seguimiento",
    detail: "Se registra y da trazabilidad hasta el cierre.",
  },
];

const contextSources = [
  {
    icon: MapPin,
    title: "GPS",
    detail: "Ubicación y movimientos, cuando la solución es compatible.",
  },
  {
    icon: Video,
    title: "Video",
    detail: "Contexto visual desde los sistemas disponibles.",
  },
  {
    icon: ScanLine,
    title: "Sensores perimetrales",
    detail: "Señales de los límites de la instalación.",
  },
  {
    icon: Camera,
    title: "Dashcam",
    detail: "Contexto de eventos registrados en ruta.",
  },
  {
    icon: ClipboardList,
    title: "Reportes de personal",
    detail: "Información que el equipo puede aportar.",
  },
  {
    icon: Flag,
    title: "Eventos operativos",
    detail: "Situaciones de la operación que requieren revisión.",
  },
];

const complements = [
  {
    slug: "gps-rastreo",
    icon: MapPin,
    label: "GPS y Rastreo",
    detail:
      "El GPS aporta ubicación y movimientos; el monitoreo puede dar seguimiento operativo a la información disponible.",
    note: "No implica geocercas ni alertas automáticas.",
  },
  {
    slug: "videovigilancia",
    icon: Video,
    label: "Videovigilancia",
    detail:
      "El video aporta contexto visual; el monitoreo aporta revisión y seguimiento según el alcance contratado.",
    note: "No cada alerta abre automáticamente una cámara.",
  },
  {
    slug: "tecnologia-perimetral",
    icon: ScanLine,
    label: "Tecnología perimetral",
    detail:
      "Una señal perimetral puede aportar un evento; el monitoreo puede formar parte del proceso de revisión y escalamiento.",
    note: "No se asume una integración universal.",
  },
  {
    slug: "dashcam-ia",
    icon: Camera,
    label: "Dashcam con IA",
    detail:
      "Un evento en ruta puede requerir revisión; el video disponible puede aportar contexto.",
    note: "No implica streaming ni alertas instantáneas.",
  },
  {
    slug: "vigilancia",
    icon: UserCheck,
    label: "Vigilancia",
    detail:
      "El monitoreo puede aportar información; el personal puede aplicar procedimientos en sitio.",
    note: "No implica reacción física por parte de BÚNKER.",
  },
];

const contextQuestions = [
  "¿Qué ocurrió?",
  "¿Dónde?",
  "¿Cuándo?",
  "¿Qué información adicional existe?",
  "¿Quién debe ser informado?",
  "¿Qué procedimiento aplica?",
];

const priorityLevels = ["Informativo", "Atención", "Escalamiento"];

const boardStates = [
  { label: "Eventos", state: "Por revisar" },
  { label: "Señales", state: "Por revisar" },
  { label: "Estados", state: "Según procedimiento" },
];

const procedureChain = ["Evento", "Responsable", "Acción", "Escalamiento", "Cierre"];

const escalationPoints = [
  "Quién recibe la información.",
  "Qué responsables participan.",
  "Qué situaciones requieren atención adicional.",
  "Cómo se registra el seguimiento.",
];

const scenarios = [
  {
    icon: Truck,
    title: "Flotillas",
  },
  {
    icon: Building2,
    title: "Instalaciones",
  },
  {
    icon: DoorOpen,
    title: "Accesos",
  },
  {
    icon: ScanLine,
    title: "Perímetros",
  },
  {
    icon: Video,
    title: "Eventos de video",
  },
  {
    icon: Warehouse,
    title: "Operaciones logísticas",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Identificamos qué información necesita seguimiento",
    detail:
      "Se revisan los sistemas de la empresa que pueden enlazarse a plataformas de seguimiento.",
  },
  {
    num: "02",
    icon: Crosshair,
    title: "Definimos qué eventos importan",
    detail: "Se acuerda qué señales requieren revisión y con qué información se validan.",
  },
  {
    num: "03",
    icon: Users,
    title: "Establecemos responsables y escalamiento",
    detail: "Se definen las matrices de comunicación con los enlaces del cliente.",
  },
  {
    num: "04",
    icon: Settings,
    title: "Configuramos el alcance del servicio",
    detail: "Se definen alcances, horarios y criterios de acuerdo con el proyecto.",
  },
  {
    num: "05",
    icon: ClipboardList,
    title: "Damos seguimiento según el procedimiento",
    detail: "Se registra la información y se coordina la comunicación acordada.",
  },
];

const responsibleRoles = ["Seguridad", "Operaciones", "Logística", "Mantenimiento", "Dirección"];

const bunkerReasons = [
  {
    icon: Building2,
    title: "Empresa mexicana",
    detail: "Concebida para integrar recurso humano y tecnología en la supervisión operativa.",
  },
  {
    icon: UserCheck,
    title: "Analistas y tecnología",
    detail:
      "Los analistas revisan la información y verifican eventos tecnológicos antes de coordinar la comunicación.",
  },
  {
    icon: Target,
    title: "Enfoque a la medida",
    detail: "Nos adaptamos a las características logísticas de cada cliente.",
  },
  {
    icon: Shield,
    title: "Prevención y gestión de riesgos",
    detail: "Enfocada en la prevención y gestión de riesgos logísticos y patrimoniales.",
  },
];

const editorialLinks = [
  {
    slug: "como-se-coordina-respuesta-alerta-seguridad-monitoreo",
    title: "¿Cómo se coordina la respuesta ante una alerta?",
  },
  {
    slug: "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
    title: "Integrar videovigilancia, GPS y monitoreo: qué aporta",
  },
];

const faqs = [
  {
    question: "¿Qué significa monitorear un evento?",
    answer:
      "Recibir la información, revisarla con lo disponible y dar seguimiento a las acciones definidas para cada operación.",
  },
  {
    question: "¿Monitoreo y videovigilancia son lo mismo?",
    answer:
      "No. La videovigilancia aporta imágenes; el monitoreo aporta revisión, contexto y seguimiento según el alcance contratado.",
  },
  {
    question: "¿El monitoreo incluye respuesta física?",
    answer:
      "No. El monitoreo se enfoca en la recepción, revisión y seguimiento de información; los procedimientos en sitio corresponden a otros servicios acordados.",
  },
  {
    question: "¿Puede combinarse con GPS?",
    answer:
      "Sí, cuando existe una solución compatible: el GPS aporta ubicación y el monitoreo puede dar seguimiento a la información disponible.",
  },
  {
    question: "¿El monitoreo opera de manera continua?",
    answer:
      "Los alcances y horarios se definen en la evaluación de cada proyecto; no asumimos cobertura continua ni 24/7.",
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

export function MonitoreoServicePage() {
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
                <span className="text-eyebrow text-primary">Coordinación</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Monitoreo para dar seguimiento a eventos con mayor contexto
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Un servicio de monitoreo ayuda a recibir información, revisar eventos y dar
                seguimiento a las acciones definidas para cada{" "}
                <span className="text-ink">operación</span>.
              </p>
              <p
                className="hero-enter mt-4 max-w-xl text-sm leading-relaxed text-ink-muted"
                style={{ animationDelay: "230ms" }}
              >
                La tecnología de la empresa se enlaza a plataformas de seguimiento. Los analistas
                observan los datos, verifican eventos tecnológicos y aplican protocolos de
                comunicación previamente acordados.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "300ms" }}
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
                src={monitoringImage}
                alt="Puesto de supervisión con pantallas empresariales"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Señal · Contexto · Seguimiento
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                Operación
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

      {/* Del evento al seguimiento */}
      <section id="servicio" className="section-y section-rule scroll-mt-24 bg-surface-elevated">
        <Container>
          <EyebrowRow number="02" label="Flujo del servicio" />
          <h2 className="mt-6 max-w-3xl text-headline">Del evento al seguimiento</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            El servicio se apoya en un centro de monitoreo que centraliza la recepción de alertas
            tecnológicas, aplica procesos de verificación y ejecuta matrices de comunicación con los
            enlaces del cliente.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Flujo conceptual: el esquema real se define según el proyecto, los sistemas disponibles
            y los procedimientos acordados.
          </p>

          <Reveal className="mt-12">
            <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-primary/30">
              {flowSteps.map((step) => (
                <li
                  key={step.num}
                  className="relative grid gap-3 pl-16 sm:grid-cols-[180px_1fr] sm:items-start sm:gap-8"
                >
                  <span className="absolute top-0 left-0 grid size-10 place-items-center border border-primary/60 bg-surface-elevated text-primary">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="sm:pt-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                        {step.num}
                      </span>
                      <h3 className="text-title">{step.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* Señal ≠ incidente confirmado */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="03" label="Claridad de la señal" />
          <h2 className="mt-6 max-w-3xl text-headline">Una señal no confirma un incidente</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Una señal indica que algo requiere revisión. La información disponible, el contexto y el
            procedimiento ayudan a decidir qué hacer después.
          </p>

          <Reveal className="mt-12">
            <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
              <div className="border border-line bg-surface-elevated p-6 md:p-8">
                <p className="font-display text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  Señal
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Indica que algo requiere atención y merece ser revisado.
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
                <p className="font-display text-xs font-bold tracking-[0.14em] text-ink uppercase">
                  Incidente confirmado
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Se valida con información, contexto y el procedimiento correspondiente.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Distintas fuentes de contexto */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="04"
            eyebrow="Fuentes de información"
            title="Distintas fuentes pueden aportar contexto"
            description="Según la operación, distintas fuentes pueden aportar información cuando existe una solución compatible. No todos los sistemas están integrados en todos los proyectos."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {contextSources.map((source) => (
              <article key={source.title} className="bg-surface p-6 md:p-7">
                <source.icon className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold text-ink">{source.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{source.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Servicios que se relacionan */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="05"
            eyebrow="Servicios que se relacionan"
            title="Monitoreo con más contexto"
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

      {/* Contexto antes de escalar */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <EyebrowRow number="06" label="Revisión del evento" />
          <h2 className="mt-6 max-w-3xl text-headline">Más contexto antes de tomar una decisión</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Antes de escalar un evento conviene responder algunas preguntas.
          </p>
          <Reveal className="mt-10">
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {contextQuestions.map((question) => (
                <div key={question} className="flex items-start gap-3 bg-surface p-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm font-bold text-ink">{question}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Prioridad de eventos */}
      <section className="border-y border-line bg-surface">
        <Container className="py-12 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-headline">No todos los eventos requieren la misma atención</h2>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {priorityLevels.map((level) => (
                  <span
                    key={level}
                    className="border border-line bg-surface-elevated px-4 py-2 text-sm font-semibold text-ink"
                  >
                    {level}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold text-ink-muted lg:text-right">
                Esquema conceptual; los criterios y niveles se definen por proyecto. No asumimos
                tiempos de atención.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Señal sin procedimiento */}
      <section className="relative overflow-hidden bg-black-950 py-16 technical-grid sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <EyebrowRow number="07" label="Procedimiento y orden" tone="dark" />
              <h2 className="mt-5 text-headline text-surface-elevated">
                Una señal sin procedimiento se convierte en ruido
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                El valor del monitoreo está en saber qué revisar, quién debe enterarse y qué paso
                sigue después.
              </p>
              <div className="mt-8 flex flex-col gap-3 min-[431px]:flex-row">
                <ButtonLink href="/contacto" variant="onDark" size="lg">
                  Definir mi esquema de monitoreo
                </ButtonLink>
                <WhatsAppLink
                  variant="outline"
                  className="border-primary text-surface-elevated hover:bg-black-850"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <div className="border border-primary/35 bg-black-900">
                  <div className="border-b border-primary/20 px-6 py-4">
                    <p className="text-eyebrow text-primary">Vista operativa</p>
                  </div>
                  {boardStates.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-6 border-b border-primary/20 px-6 py-5 last:border-b-0"
                    >
                      <span className="text-sm font-bold text-surface-elevated uppercase">
                        {row.label}
                      </span>
                      <span aria-hidden="true" className="block h-px flex-1 bg-primary/25" />
                      <span className="text-sm font-semibold text-warm-gray-300">{row.state}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Cada evento necesita un procedimiento */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="08"
            eyebrow="Procedimiento"
            title="Cada evento necesita un procedimiento"
            description="El procedimiento define quién revisa, qué se hace y cuándo se cierra. Se acuerda con el cliente según la operación."
            className="max-w-3xl"
          />
          <Reveal className="mt-10">
            <ol className="flex flex-wrap items-center gap-3">
              {procedureChain.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="border border-line bg-surface px-4 py-2.5 text-sm font-bold text-ink">
                    {step}
                  </span>
                  {i < procedureChain.length - 1 ? (
                    <span className="hidden text-primary sm:inline" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>
          <p className="mt-8 max-w-2xl text-xs font-semibold text-ink-muted">
            Esquema conceptual del flujo. No asumimos procedimientos certificados ni tiempos de
            respuesta.
          </p>
        </Container>
      </section>

      {/* Escalamiento */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <EyebrowRow number="09" label="Escalamiento" />
              <h2 className="mt-6 text-headline">Escalar con criterio</h2>
              <p className="text-lead mt-5 max-w-2xl text-ink-muted">
                El escalamiento define cómo se reparte la información y quién participa en el
                seguimiento.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                El esquema se define por proyecto. No asumimos contacto con autoridades ni reacción
                a cargo del servicio.
              </p>
            </div>
            <div className="lg:col-span-6">
              <Reveal className="h-full">
                <ul className="grid h-full gap-px border border-line bg-line sm:grid-cols-2">
                  {escalationPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 bg-surface-elevated p-6">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm font-semibold text-ink">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Registro y trazabilidad */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <div className="flex flex-col gap-6 border border-line bg-surface p-6 sm:flex-row sm:items-start md:p-8">
            <FileText className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="text-title">Registro y trazabilidad</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
                El seguimiento ayuda a mantener una trazabilidad de lo ocurrido: la información se
                revisa antes de generar reportes operativos y la documentación depende del
                procedimiento y la plataforma utilizados.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Escenarios de aplicación */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="10"
            eyebrow="Escenarios de aplicación"
            title="Monitoreo aplicado a distintos contextos"
            description="Escenarios de aplicación frecuentes. No todos forman parte de una única plataforma."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="flex items-center gap-4 bg-surface-elevated p-6"
              >
                <scenario.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <h3 className="text-sm font-bold text-ink">{scenario.title}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Proceso comercial */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="11"
            eyebrow="Cómo se define el proyecto"
            title="Un proceso construido con el cliente"
            description="Cada etapa se ajusta según los sistemas disponibles y el procedimiento acordado."
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

      {/* Quién necesita saber qué */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <EyebrowRow number="12" label="Responsables y contactos" />
          <h2 className="mt-6 max-w-3xl text-headline">Quién necesita saber qué</h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Diferentes eventos pueden requerir informar a distintas áreas según la organización.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {responsibleRoles.map((role) => (
              <span
                key={role}
                className="max-w-full break-words border border-line bg-surface-elevated px-4 py-2 text-sm font-semibold text-ink"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Los canales de comunicación y los responsables se acuerdan en el proyecto; no asumimos
            medios específicos (SMS, WhatsApp, email o llamadas) sin confirmar.
          </p>
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
            title="Preguntas para evaluar el servicio"
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
                Defina qué debe pasar después de cada alerta
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos qué sistemas utiliza, qué eventos necesita revisar y quién debe participar
                en el seguimiento. Podemos evaluar el escenario y definir un esquema adecuado.
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
