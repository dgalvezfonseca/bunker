import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Camera,
  CarFront,
  Check,
  Clock,
  DoorOpen,
  Eye,
  Focus,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Map,
  MapPin,
  MonitorPlay,
  Radar,
  Target,
  Truck,
  UserCheck,
  Users,
  Video,
  Warehouse,
  Wrench,
} from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import accessImage from "../../../assets/proteccion.webp";
import patioImage from "../../../assets/monitoreo.webp";

const trustPoints = [
  "Evaluación de cada instalación",
  "Equipos de grabación",
  "Visualización local o remota",
];

const valueBand = [
  {
    num: "01",
    icon: Focus,
    title: "Cobertura",
    detail: "Observar las zonas que la operación define como prioritarias.",
  },
  {
    num: "02",
    icon: Eye,
    title: "Contexto",
    detail: "Contar con registro visual para revisar lo ocurrido.",
  },
  {
    num: "03",
    icon: Video,
    title: "Supervisión",
    detail: "Apoyar la operación con información visual, según el alcance del proyecto.",
  },
];

const observationFactors = [
  "Área",
  "Distancia",
  "Acceso",
  "Movimiento",
  "Iluminación",
  "Objetivo de observación",
  "Punto de observación",
];

const zoneExamples = [
  {
    icon: DoorOpen,
    title: "Accesos peatonales",
    detail: "Supervisión de entradas y salidas de personal y visitantes.",
  },
  {
    icon: CarFront,
    title: "Accesos vehiculares",
    detail: "Registro visual de los movimientos de vehículos en el ingreso.",
  },
  {
    icon: Users,
    title: "Recepción",
    detail: "Contexto visual de áreas de atención y relación con visitantes.",
  },
  {
    icon: Boxes,
    title: "Almacenes",
    detail: "Observación de zonas de resguardo y movimiento de materiales.",
  },
  {
    icon: Warehouse,
    title: "Patios y estacionamientos",
    detail: "Visibilidad sobre áreas comunes de circulación y estancia.",
  },
  {
    icon: Truck,
    title: "Carga y descarga",
    detail: "Contexto visual del proceso de arribo, carga y salida.",
  },
];

const interpretation = [
  {
    icon: Video,
    title: "Qué ocurrió",
    detail: "El desarrollo de la escena registrada.",
  },
  {
    icon: Clock,
    title: "Cuándo",
    detail: "El momento dentro de la operación.",
  },
  {
    icon: MapPin,
    title: "Dónde",
    detail: "La zona de la instalación involucrada.",
  },
  {
    icon: Layers,
    title: "En qué contexto",
    detail: "Las condiciones alrededor del evento.",
  },
];

const recordingBenefits = [
  "Registro de actividades operativas.",
  "Herramienta para la revisión de procesos.",
  "Equipos compatibles con diversas plataformas.",
];

const projectDecisions = [
  {
    icon: HardDrive,
    title: "Almacenamiento y retención",
    detail:
      "El tiempo durante el cual se conserva el video se define según la capacidad y la configuración del proyecto.",
  },
  {
    icon: Lock,
    title: "Privacidad",
    detail:
      "Conviene definir quién puede acceder a las imágenes, para qué se utilizan y cómo se conserva la información.",
    link: { href: "/aviso-de-privacidad", label: "Ver aviso de privacidad" },
  },
  {
    icon: KeyRound,
    title: "Acceso y resguardo",
    detail:
      "Credenciales, permisos, red y actualizaciones forman parte de una implementación responsable.",
  },
];

const complements = [
  {
    slug: "monitoreo",
    icon: MonitorPlay,
    label: "Monitoreo",
    detail: "Aporta seguimiento y coordinación de la información, según el servicio contratado.",
    note: "No se incluye de forma automática.",
  },
  {
    slug: "vigilancia",
    icon: UserCheck,
    label: "Vigilancia",
    detail: "Personal e imagen aportan mayor contexto operativo en la instalación.",
    note: "Servicios independientes; el video no sustituye al personal.",
  },
  {
    slug: "tecnologia-perimetral",
    icon: Radar,
    label: "Tecnología perimetral",
    detail:
      "Un evento de otro sistema puede complementarse con contexto visual cuando existe una integración compatible.",
    note: "La integración se valida en cada proyecto.",
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
      "Instalaciones físicas con orden y conectividad, más soporte para revisar la operatividad de los sistemas.",
  },
  {
    icon: Map,
    title: "Proyectos a nivel nacional",
    detail: "Operación y atención para proyectos a nivel nacional.",
  },
];

const editorialLinks = [
  {
    slug: "videovigilancia-que-considerar-antes-instalar-camaras",
    title: "¿Qué revisar antes de instalar cámaras?",
  },
  {
    slug: "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
    title: "Cómo integrar videovigilancia, GPS y monitoreo",
  },
];

const faqs = [
  {
    question: "¿Qué áreas conviene cubrir con videovigilancia?",
    answer:
      "Depende de cada operación: accesos, interiores, almacenes y patios son ejemplos comunes. El punto de partida es la evaluación de la instalación.",
  },
  {
    question: "¿Más cámaras significa mejor cobertura?",
    answer:
      "No necesariamente. La utilidad de una cámara depende de que responda a un objetivo de observación y esté bien ubicada.",
  },
  {
    question: "¿La resolución más alta siempre es mejor?",
    answer:
      "No. La resolución debe elegirse según lo que se necesita observar y la distancia de la escena.",
  },
  {
    question: "¿La videovigilancia sustituye al personal?",
    answer:
      "No. Videovigilancia y vigilancia física son servicios con alcance propio; pueden complementarse según el proyecto.",
  },
  {
    question: "¿Puede combinarse con monitoreo?",
    answer:
      "Sí, dentro de un proyecto. El alcance de cada servicio y la coordinación se definen según lo contratado.",
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

function ViewfinderCorners() {
  const corner = "absolute z-10 h-5 w-5 border-primary/60";
  return (
    <>
      <span aria-hidden="true" className={`${corner} left-3 top-3 border-l-2 border-t-2`} />
      <span aria-hidden="true" className={`${corner} right-3 top-3 border-r-2 border-t-2`} />
      <span aria-hidden="true" className={`${corner} bottom-3 left-3 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${corner} bottom-3 right-3 border-b-2 border-r-2`} />
    </>
  );
}

export function VideovigilanciaServicePage() {
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
                <span className="text-eyebrow text-primary">Registro visual</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
              </div>
              <h1
                className="hero-enter mt-6 max-w-2xl text-display text-primary-dark"
                style={{ animationDelay: "110ms" }}
              >
                Videovigilancia diseñada para ver lo que realmente importa
              </h1>
              <p
                className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
                style={{ animationDelay: "190ms" }}
              >
                Diseñamos soluciones de videovigilancia para apoyar la supervisión de accesos, áreas
                prioritarias y operaciones dentro de instalaciones empresariales.
              </p>
              <div
                className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
                style={{ animationDelay: "270ms" }}
              >
                <ButtonLink href="/contacto" size="lg" className="max-[430px]:w-full">
                  Solicitar evaluación
                </ButtonLink>
                <ButtonLink
                  href="#cobertura"
                  variant="outline"
                  size="lg"
                  className="max-[430px]:w-full"
                >
                  Conocer la solución
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
                src={accessImage}
                alt="Cámara de videovigilancia integrada en un acceso corporativo"
                className="absolute inset-0 h-full w-full rounded-card object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
                <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                  Un objetivo · Un campo visual · Una imagen útil
                </p>
              </div>
              <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
                Observación
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ¿Qué aporta la videovigilancia? */}
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

      {/* Antes de elegir la cámara */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <EyebrowRow number="04" label="El punto de partida es la observación" />
              <h2 className="mt-6 max-w-2xl text-headline">
                Antes de elegir la cámara, hay que definir qué necesita ver
              </h2>
              <p className="text-lead mt-5 max-w-2xl text-ink-muted">
                Se evalúan las instalaciones para determinar el tipo de cámara adecuado. Las
                condiciones de cada área definen qué equipo y qué ubicación responden al escenario.
              </p>
              <ul className="mt-8 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
                {observationFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-3">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-ink">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div
                aria-hidden="true"
                className="relative aspect-square overflow-hidden rounded-card border border-line bg-surface-elevated"
              >
                <ViewfinderCorners />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="absolute size-44 rounded-full border border-primary/25" />
                  <span className="absolute size-32 rounded-full border border-primary/35" />
                  <span className="absolute size-20 rounded-full border border-primary/50" />
                  <span className="size-4 rounded-full bg-primary" />
                </span>
                <p className="absolute bottom-6 left-6 font-display text-xs font-bold tracking-[0.16em] text-primary uppercase">
                  Encuadre de la escena
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cobertura útil */}
      <section id="cobertura" className="section-y section-rule scroll-mt-24 bg-surface-elevated">
        <Container>
          <EyebrowRow number="05" label="Cobertura útil" />
          <h2 className="mt-6 max-w-3xl text-headline">
            No se trata de instalar más cámaras. Se trata de obtener la visibilidad correcta.
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-ink-muted">
            Una imagen es útil cuando responde a un objetivo concreto de observación.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="border border-line bg-surface p-6 md:p-8">
              <p className="text-eyebrow text-primary">Acercamiento incompleto</p>
              <h3 className="mt-3 text-title">Más cámaras, sin un objetivo claro</h3>
              <ol className="mt-6 grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="flex flex-col items-center gap-2 border border-line bg-surface-elevated px-4 py-5"
                  >
                    <Camera
                      className="size-6 text-ink-muted"
                      aria-hidden="true"
                      strokeWidth={1.6}
                    />
                    <span className="text-[10px] font-bold tracking-[0.14em] text-ink-muted uppercase">
                      Cámara
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted">
                Imágenes dispersas no siempre aportan la información que la operación necesita.
              </p>
            </div>

            <div className="border-2 border-primary bg-surface-elevated p-6 md:p-8">
              <p className="text-eyebrow text-primary">Cobertura útil</p>
              <h3 className="mt-3 text-title">Cada imagen responde a un objetivo</h3>
              <div
                aria-hidden="true"
                className="relative mt-6 h-36 w-full overflow-hidden rounded-md border border-primary/25 bg-surface"
              >
                <span className="absolute top-1/2 left-4 z-10 grid -translate-y-1/2 size-12 place-items-center rounded-lg border border-primary/40 bg-black-950 text-surface-elevated shadow-raised">
                  <Camera className="size-6" strokeWidth={1.6} />
                </span>
                <span
                  className="absolute top-0 bottom-0 left-[14%] w-[86%]"
                  style={{
                    clipPath: "polygon(0 50%, 100% 6%, 100% 94%)",
                    background:
                      "linear-gradient(95deg, rgba(0,114,206,0.08), rgba(0,114,206,0.30))",
                  }}
                />
                <span className="absolute top-1/2 right-[10%] grid h-16 w-24 -translate-y-1/2 place-items-center border-2 border-dashed border-primary/70 bg-surface-elevated/60">
                  <span className="text-[10px] font-bold tracking-[0.14em] text-primary uppercase">
                    Área prioritaria
                  </span>
                </span>
              </div>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink">
                La cámara, su campo visual y el área que se observa deben verse como un mismo
                diseño.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2 font-display text-sm font-extrabold tracking-[0.08em] text-primary uppercase">
            {["Cámara", "Campo visual", "Área prioritaria", "Imagen útil"].map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 && <ArrowRight className="size-4 text-ink-muted" aria-hidden="true" />}
                {step}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
            No prometemos cobertura total de un inmueble: el diseño se enfoca en las áreas que cada
            operación define como prioritarias. La utilidad se revisa en campo durante la
            evaluación.
          </p>
        </Container>
      </section>

      {/* Visibilidad por área */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="06"
            eyebrow="Áreas de aplicación"
            title="Visibilidad para distintas áreas de la operación"
            description="Ejemplos de zonas donde el registro visual apoya la supervisión. El diseño parte de la evaluación de cada instalación."
            className="max-w-3xl"
          />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {zoneExamples.map((zone) => (
              <div
                key={zone.title}
                className="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-8"
              >
                <div className="flex items-center gap-3">
                  <zone.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <h3 className="text-title">{zone.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">{zone.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Son sólo ejemplos: no todas las áreas requieren cámara. Qué zonas se cubren y con qué
            enfoque se define junto con cada operación.
          </p>
        </Container>
      </section>

      {/* Ver y entender */}
      <section className="overflow-hidden bg-black-950 technical-grid section-y">
        <Container>
          <EyebrowRow number="07" label="Ver y entender" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Una imagen tiene valor cuando aporta contexto
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Una cámara registra una escena. La operación necesita interpretarla y ponerla en
            contexto.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interpretation.map((item) => (
              <div key={item.title} className="border border-primary/30 bg-black-900 px-5 py-4">
                <item.icon className="size-6 text-primary" aria-hidden="true" strokeWidth={1.7} />
                <h3 className="mt-3 font-display text-base font-bold text-surface-elevated">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 max-w-3xl border-l-2 border-primary pl-6">
            <p className="font-display text-xl font-bold text-surface-elevated sm:text-2xl">
              La tecnología genera datos, pero el análisis humano define la acción coordinada.
            </p>
            <footer className="mt-3 text-xs font-semibold tracking-[0.14em] text-silver-100 uppercase">
              Principio BÚNKER
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* Campo de visión */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-5">
              <EyebrowRow number="08" label="Campo de visión" />
              <h2 className="mt-6 text-headline">Ubicación y cobertura no son lo mismo</h2>
              <p className="text-lead mt-5 text-ink-muted">
                La posición física de la cámara define qué parte de la escena alcanza su campo
                visual. Evaluamos cada punto antes de fijar un equipo.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div
                  aria-hidden="true"
                  className="relative h-56 w-full overflow-hidden rounded-card border border-line bg-surface lg:h-64"
                >
                  <ViewfinderCorners />
                  <span className="absolute top-1/2 left-6 z-10 flex -translate-y-1/2 flex-col items-center gap-2">
                    <span className="grid size-14 place-items-center rounded-xl border border-primary/40 bg-black-950 text-surface-elevated shadow-raised">
                      <Camera className="size-7" strokeWidth={1.6} />
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.14em] text-primary uppercase">
                      Cámara
                    </span>
                  </span>
                  <span
                    className="absolute top-0 bottom-0 left-[9%] w-[92%]"
                    style={{
                      clipPath: "polygon(0 50%, 100% 3%, 100% 97%)",
                      background:
                        "linear-gradient(95deg, rgba(0,114,206,0.06), rgba(0,114,206,0.28))",
                    }}
                  />
                  <span className="absolute top-1/2 right-[6%] grid h-20 w-[26%] -translate-y-1/2 place-items-center border-2 border-dashed border-primary/70 bg-surface-elevated/60">
                    <span className="text-[10px] font-bold tracking-[0.14em] text-primary uppercase">
                      Área prioritaria
                    </span>
                  </span>
                  <span className="absolute top-2 right-3 text-[10px] font-bold tracking-[0.14em] text-ink-muted uppercase">
                    Fuera del campo visual
                  </span>
                </div>
              </Reveal>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                Lo que la cámara observa depende de su ubicación y del entorno. Por eso el diseño
                comienza por el objetivo de observación, no por el equipo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Grabación y consulta */}
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="09"
            eyebrow="Grabación y consulta"
            title="El registro, la visualización y las decisiones de resguardo"
            description="Se definen según la configuración y la capacidad del proyecto."
            className="max-w-3xl"
          />

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card">
              <img
                src={patioImage}
                alt="Supervisión operativa en un patio logístico"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Las imágenes se canalizan a equipos de grabación y pueden visualizarse de forma
                local o remota, según la infraestructura de red.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {recordingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-ink">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {projectDecisions.map((decision) => (
              <div key={decision.title} className="border border-line bg-surface-elevated p-6">
                <decision.icon
                  className="size-6 text-primary"
                  aria-hidden="true"
                  strokeWidth={1.7}
                />
                <h3 className="mt-3 text-lg font-semibold text-ink">{decision.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{decision.detail}</p>
                {decision.link ? (
                  <p className="mt-4">
                    <Link
                      to={decision.link.href as unknown as "/aviso-de-privacidad"}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      {decision.link.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contexto de una alerta */}
      <section className="overflow-hidden bg-black-950 technical-grid section-y">
        <Container>
          <EyebrowRow number="10" label="Contexto operativo" tone="dark" />
          <h2 className="mt-6 max-w-3xl text-headline text-surface-elevated">
            Una alerta sin contexto deja preguntas. El video puede aportar respuestas.
          </h2>
          <p className="text-lead mt-5 max-w-2xl text-warm-gray-300">
            Cuando videovigilancia y otros sistemas trabajan de forma coordinada, la imagen puede
            aportar contexto para revisar un evento.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray-300">
            No todas las alertas cuentan con video asociado: la información disponible se define en
            cada proyecto.
          </p>
          <div className="mt-10">
            <ButtonLink href="/contacto" variant="onDark" size="lg">
              Evaluar mi instalación
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Soluciones que se complementan */}
      <section className="section-y section-rule bg-surface-elevated">
        <Container>
          <SectionHeading
            index="11"
            eyebrow="Soluciones que se complementan"
            title="El contexto visual convive con otros servicios"
            description="Cada servicio es independiente; la combinación se evalúa según el proyecto."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {complements.map((item) => (
              <div key={item.slug} className="border-t-2 border-primary bg-surface p-6">
                <item.icon className="size-7 text-primary" aria-hidden="true" strokeWidth={1.8} />
                <div className="mt-4">
                  <ServiceLink slug={item.slug}>{item.label}</ServiceLink>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                <p className="mt-4 border-t border-line pt-3 text-xs font-semibold text-ink-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Por qué BÚNKER */}
      <section className="section-y section-rule bg-surface">
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
          <p className="mt-8 max-w-3xl border border-line bg-surface-elevated px-5 py-4 text-sm leading-relaxed text-ink-muted">
            Como integradores, trabajamos con plataformas de Hikvision, Dahua, Uniview, Tiandy, TVT
            Digital, Imou, TP-Link y ZKTeco.
          </p>
        </Container>
      </section>

      {/* Franja editorial */}
      <section className="bg-surface-elevated py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {editorialLinks.map((item) => (
              <div key={item.slug} className="border border-line bg-surface p-6 md:p-8">
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
      <section className="section-y section-rule bg-surface">
        <Container>
          <SectionHeading
            index="13"
            eyebrow="Preguntas frecuentes"
            title="Preguntas para evaluar la solución"
            description="Respuestas breves y prudentes antes de definir el proyecto."
            className="max-w-3xl"
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {faqs.map((item, i) => (
              <article
                key={item.question}
                className={`bg-surface p-6 md:p-8 ${i === faqs.length - 1 ? "sm:col-span-2" : ""}`}
              >
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
                Diseñemos la cobertura que necesita su instalación
              </h2>
              <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">
                Cuéntenos qué áreas necesita supervisar y qué información visual requiere su
                operación. Podemos revisar el escenario y definir una solución adecuada.
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
