import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["respuesta", "Qué es una dashcam con IA"],
  ["contexto", "GPS, video y eventos"],
  ["dms-adas", "Dashcam, DMS y ADAS"],
  ["eventos", "Eventos y analítica"],
  ["proceso", "De alerta a acción"],
  ["limites", "Limitaciones"],
  ["privacidad", "Privacidad"],
  ["ciberseguridad", "Ciberseguridad"],
  ["escenarios", "Escenarios"],
  ["comparativa", "Comparativa"],
  ["checklist", "Checklist"],
  ["preguntas", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const checklist = [
  "¿Qué cámaras incluye el dispositivo propuesto?",
  "¿Graba carretera, cabina o ambas escenas?",
  "¿Qué eventos puede detectar realmente esta combinación de hardware y plataforma?",
  "¿Qué funciones son DMS y cuáles son ADAS?",
  "¿Qué funciones dependen de analítica o IA?",
  "¿Qué sucede si no hay cobertura celular?",
  "¿Existe almacenamiento local y cómo se recuperan los videos?",
  "¿Qué información se transmite y quién puede acceder?",
  "¿Existen perfiles, permisos y opción para deshabilitar audio?",
  "¿Cuál es la política de retención y cómo se actualiza el firmware?",
  "¿Qué ocurre si el dispositivo falla?",
  "¿Puede integrarse con GPS o telemetría y existe una API?",
  "¿Qué capacidades requieren hardware adicional?",
] as const;

const faqs = [
  [
    "¿Una dashcam con IA evita accidentes?",
    "No debe presentarse como garantía. Dependiendo del sistema, puede generar advertencias o aportar información sobre determinados eventos, pero la responsabilidad de conducción y el proceso operativo siguen siendo humanos.",
  ],
  [
    "¿Todas las dashcams con IA detectan somnolencia?",
    "No. Depende del hardware, software y funciones específicas. Las señales que un sistema puede analizar no equivalen a un diagnóstico médico.",
  ],
  [
    "¿Qué diferencia hay entre ADAS y DMS?",
    "ADAS agrupa tecnologías de asistencia relacionadas con la tarea de conducción. DMS se refiere al monitoreo de variables relacionadas con la atención o comportamiento del conductor. Pueden coexistir, pero no son lo mismo.",
  ],
  [
    "¿Una dashcam sustituye al GPS?",
    "No. El GPS puede aportar ubicación y recorrido; el video puede aportar contexto de lo que estaba dentro del campo de visión. Pueden complementarse cuando la solución y el proceso lo permitan.",
  ],
  [
    "¿Puede grabarse al conductor?",
    "Una cámara orientada a cabina puede captar información de una persona identificable. Su uso debe evaluarse según finalidad, necesidad, proporcionalidad, acceso, conservación y seguridad de la información.",
  ],
  [
    "¿Necesita Internet para grabar?",
    "Depende de la arquitectura. Algunas soluciones pueden almacenar localmente y otras transmitir datos o clips; debe verificarse por producto qué ocurre sin cobertura, qué se conserva y cómo se consulta después.",
  ],
] as const;

function SectionTitle({ id, number, children }: { id: string; number: string; children: string }) {
  return (
    <div className="mb-6 section-rule pt-4">
      <p className="text-eyebrow text-primary">{number}</p>
      <h2 id={id} className="mt-2 text-headline scroll-mt-28">
        {children}
      </h2>
    </div>
  );
}

function InternalLink({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to} className="font-semibold text-primary underline underline-offset-4">
      {children}
    </Link>
  );
}

export function DashcamAiGuide({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="technical-grid border-b border-line bg-surface-elevated pb-12 pt-28 sm:pb-16 sm:pt-36">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link to="/" className="underline underline-offset-4">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="underline underline-offset-4">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Dashcam con IA
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">
                ¿Qué aporta una dashcam con IA a una operación logística?
              </h1>
              <p className="mt-6 max-w-3xl text-lead text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 12 min
              <br />
              <span className="font-normal text-ink-muted">
                Guía para evaluar contexto visual y funciones opcionales.
              </span>
            </p>
          </div>
        </Container>
      </header>
      <Container className="section-y">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] xl:grid-cols-[minmax(0,1fr)_17rem]">
          <aside className="lg:order-2">
            <nav
              aria-label="Índice de contenidos"
              className="hidden border-l border-line pl-5 lg:sticky lg:top-28 lg:block"
            >
              <p className="text-eyebrow text-primary">Índice</p>
              <ol className="mt-4 grid gap-3 text-sm leading-5 text-ink-muted">
                {chapters.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="hover:text-primary focus:text-primary">
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <details className="group border border-line bg-surface-elevated lg:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                Índice de contenidos{" "}
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 transition-transform group-open:rotate-180"
                />
              </summary>
              <ol className="grid gap-3 border-t border-line px-4 py-4 text-sm text-ink-muted">
                {chapters.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="underline underline-offset-4">
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </aside>
          <div className="min-w-0">
            {post.cover ? (
              <img
                src={post.cover.src}
                alt={post.cover.alt}
                width={1672}
                height={941}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: post.cover.objectPosition }}
              />
            ) : null}
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              La imagen acompaña esta guía; las capacidades y configuraciones deben confirmarse para
              el equipo propuesto.
            </p>
            <section id="respuesta" className="mt-14 scroll-mt-28">
              <SectionTitle id="respuesta" number="01">
                Una dashcam con IA no describe una sola capacidad
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                “Dashcam con IA” es un término amplio. Según el hardware y software, una solución
                puede ir desde grabación de video hasta combinaciones de sensores, analítica,
                monitoreo del conductor, advertencias y conectividad.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                La palabra IA no garantiza un desempeño específico. Antes de elegir un equipo,
                conviene definir qué eventos necesita revisar la operación, qué contexto necesita
                conservar y cómo se integrará esa información al proceso.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2"
                aria-label="Resumen de criterios"
              >
                {[
                  "El GPS puede aportar ubicación y recorrido.",
                  "El video puede aportar contexto visual.",
                  "Eventos o analítica pueden dirigir la atención.",
                  "El proceso operativo define qué se hace con la información.",
                  "Las capacidades reales dependen de modelo, configuración y plataforma.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 bg-surface-elevated px-4 py-4 text-sm font-semibold leading-6 text-ink"
                  >
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </section>
            <section id="contexto" className="mt-16 scroll-mt-28">
              <SectionTitle id="contexto" number="02">
                GPS, video y eventos responden preguntas distintas
              </SectionTitle>
              <div className="grid gap-px border border-line bg-line md:grid-cols-3">
                {[
                  [
                    "GPS",
                    "¿Dónde estaba la unidad?",
                    "Puede aportar ubicación y recorrido según la solución de rastreo.",
                  ],
                  [
                    "Video",
                    "¿Qué se veía?",
                    "Puede añadir contexto de lo que estaba dentro del campo de visión.",
                  ],
                  [
                    "Evento",
                    "¿Qué llamó la atención?",
                    "Puede señalar una condición definida por sensores, reglas o analítica.",
                  ],
                ].map(([label, title, text]) => (
                  <div key={label} className="bg-surface-elevated p-6">
                    <p className="text-eyebrow text-primary">{label}</p>
                    <h3 className="mt-3 text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-8 grid overflow-hidden border border-line bg-surface-elevated"
                aria-label="Flujo de contexto operativo"
              >
                {[
                  "Unidad en ruta",
                  "Datos / evento",
                  "Contexto visual",
                  "Revisión operativa",
                  "Acción / seguimiento",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="relative grid min-h-18 place-items-center border-b border-line px-4 py-4 text-center text-sm font-semibold text-ink last:border-b-0"
                  >
                    <span>{step}</span>
                    {index < 4 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-4 left-1/2 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary"
                      >
                        ↓
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Si también está evaluando localización, consulte la{" "}
                <InternalLink to="/blog/que-revisar-antes-contratar-sistema-rastreo-gps">
                  guía para contratar rastreo GPS
                </InternalLink>
                . Para ordenar señales y responsables dentro de la operación, revise la{" "}
                <InternalLink to="/blog/como-mejorar-visibilidad-flotilla-logistica">
                  guía de visibilidad operativa de flotilla
                </InternalLink>
                .
              </p>
            </section>
            <section id="dms-adas" className="mt-16 scroll-mt-28">
              <SectionTitle id="dms-adas" number="03">
                Dashcam, DMS y ADAS no son sinónimos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Dashcam",
                    "Captura de video",
                    "Su función principal es registrar una o más escenas.",
                  ],
                  [
                    "DMS",
                    "Monitoreo del conductor",
                    "Puede usar cámaras o sensores para analizar variables relacionadas con atención o comportamiento, según el sistema.",
                  ],
                  [
                    "ADAS",
                    "Asistencia a la conducción",
                    "Agrupa tecnologías de advertencia o asistencia relacionadas con la tarea de conducción.",
                  ],
                ].map(([label, title, text]) => (
                  <section key={label} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{label}</p>
                    <h3 className="mt-3 text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{text}</p>
                  </section>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                No toda dashcam con IA incluye DMS o ADAS. Cuando existan funciones de advertencia,
                no sustituyen la responsabilidad del conductor. NHTSA explica que advertencias como
                colisión frontal o salida de carril alertan al conductor; no significan que el
                sistema conduzca el vehículo.
              </p>
            </section>
            <section id="eventos" className="mt-16 scroll-mt-28">
              <SectionTitle id="eventos" number="04">
                Del video continuo a la revisión de eventos
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Algunas soluciones permiten consultar grabaciones; otras pueden priorizar eventos
                asociados con sensores o analítica. Las funciones disponibles, cómo se marca un
                evento y si existe un clip asociado dependen del producto y su configuración.
              </p>
              <div className="mt-8 grid gap-3 border-y border-line py-6 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                <span className="font-semibold text-ink">Evento</span>
                <span aria-hidden="true" className="text-primary">
                  →
                </span>
                <span className="font-semibold text-ink">Marca temporal</span>
                <span aria-hidden="true" className="text-primary">
                  →
                </span>
                <span className="font-semibold text-ink">Clip asociado</span>
                <span aria-hidden="true" className="text-primary">
                  →
                </span>
                <span className="font-semibold text-primary">Revisión</span>
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Algunos sistemas de monitoreo del conductor emplean cámaras o sensores para estimar
                variables como dirección de la mirada, postura de la cabeza o señales asociadas con
                falta de atención. La investigación de FMCSA muestra que estas tecnologías existen,
                pero esas señales dependen del sistema y no constituyen un diagnóstico médico.
              </p>
            </section>
            <section id="proceso" className="mt-16 scroll-mt-28">
              <SectionTitle id="proceso" number="05">
                De alerta a acción
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La tecnología por sí sola no crea un proceso de seguridad. Este es un modelo
                práctico editorial, no un estándar oficial.
              </p>
              <ol
                className="mt-8 grid overflow-hidden border border-line bg-surface-elevated"
                aria-label="Proceso de alerta a acción"
              >
                {["Alerta", "Validación", "Contexto", "Responsable", "Acción", "Seguimiento"].map(
                  (step, index) => (
                    <li
                      key={step}
                      className="relative grid min-h-16 place-items-center border-b border-line px-4 py-4 text-center text-sm font-semibold text-ink last:border-b-0"
                    >
                      <span>{step}</span>
                      {index < 5 ? (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-4 left-1/2 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary"
                        >
                          ↓
                        </span>
                      ) : null}
                    </li>
                  ),
                )}
              </ol>
              <ol className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Definir qué eventos importan.",
                  "Determinar qué información se necesita.",
                  "Configurar criterios cuando la tecnología lo permita.",
                  "Asignar responsables.",
                  "Revisar y documentar eventos relevantes.",
                  "Analizar tendencias y ajustar criterios.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3 border-t border-line pt-4">
                    <span className="text-eyebrow text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>
            <section id="limites" className="mt-16 scroll-mt-28">
              <SectionTitle id="limites" number="06">
                Lo que una dashcam con IA no debe prometer
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                El desempeño puede depender de iluminación, posición, obstrucciones, lente,
                configuración, comportamiento del conductor, hardware, software, conectividad,
                condiciones ambientales y modelo analítico. Una alerta puede requerir revisión
                humana; no debe asumirse precisión perfecta.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "No sustituye la conducción responsable.",
                  "No convierte una señal en diagnóstico médico.",
                  "No determina por sí sola responsabilidad en un incidente.",
                  "No reemplaza GPS ni otros registros operativos.",
                  "No implica que cada función exista en todos los equipos.",
                  "No hace innecesario definir privacidad y ciberseguridad.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section id="privacidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="privacidad" number="07">
                Video de cabina, privacidad y conservación
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando el video permite identificar directa o indirectamente al conductor u otras
                personas, su tratamiento puede quedar sujeto a obligaciones aplicables en materia de
                protección de datos personales. Una cámara orientada a cabina no es un requisito
                universal: evalúe finalidad, necesidad, proporcionalidad, acceso, conservación y
                seguridad de la información con el área jurídica o de privacidad.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                La organización debe definir cuánto tiempo conservar el video de acuerdo con la
                finalidad del tratamiento, obligaciones aplicables y necesidades operativas,
                evitando conservar información indefinidamente sin una razón justificada. Consulte
                la{" "}
                <a
                  href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  LFPDPPP vigente
                </a>
                .
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">¿La cámara incorpora micrófono?</p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  Que una cámara incorpore micrófono no significa que grabar audio sea necesario
                  para la finalidad del proyecto. Su uso introduce consideraciones adicionales que
                  deben evaluarse antes de activarlo.
                </p>
              </aside>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Detectar un rostro no es lo mismo que identificar biométricamente a una persona.
                Cualquier uso biométrico requiere evaluación técnica y jurídica específica.
              </p>
            </section>
            <section id="ciberseguridad" className="mt-16 scroll-mt-28">
              <SectionTitle id="ciberseguridad" number="08">
                Conectividad y ciberseguridad se evalúan juntas
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Una dashcam conectada también es un dispositivo IoT. Dependiendo del producto, puede
                almacenar localmente, transmitir determinados datos, utilizar conectividad celular o
                cloud. Antes de contratar, pregunte qué se almacena, qué se transmite, qué ocurre
                sin cobertura, qué datos consume, quién accede y cómo se obtiene un clip después de
                un evento.
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio de evaluación</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  Una dashcam conectada también es un dispositivo IoT.
                </p>
              </aside>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Revise credenciales únicas, autenticación, firmware soportado, actualizaciones,
                usuarios, permisos, acceso remoto, exposición a Internet y ciclo de vida del
                dispositivo. NIST describe capacidades básicas de ciberseguridad para dispositivos
                IoT; no existe una única arquitectura válida para todos los proyectos.
              </p>
            </section>
            <section id="escenarios" className="mt-16 scroll-mt-28">
              <SectionTitle id="escenarios" number="09">
                Tres escenarios hipotéticos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Evento de conducción",
                    "Una plataforma detecta un evento determinado. Si existe video asociado, el responsable puede revisar el contexto antes de clasificarlo o darle seguimiento.",
                  ],
                  [
                    "Incidente vial",
                    "El GPS puede aportar ubicación y hora; el video disponible puede ayudar a reconstruir visualmente parte del contexto.",
                  ],
                  [
                    "Revisión operativa",
                    "Una organización revisa eventos recurrentes para identificar situaciones que requieren capacitación, cambios de proceso o una revisión más profunda.",
                  ],
                ].map(([title, detail]) => (
                  <section key={title} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">Ejemplo hipotético</p>
                    <h3 className="mt-3 text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </section>
                ))}
              </div>
            </section>
            <section id="comparativa" className="mt-16 scroll-mt-28">
              <SectionTitle id="comparativa" number="10">
                Qué puede responder cada señal
              </SectionTitle>
              <div className="overflow-x-auto border border-line">
                <table className="min-w-[680px] w-full border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">
                    Información, pregunta que puede responder y limitación
                  </caption>
                  <thead className="bg-surface-alt text-ink">
                    <tr>
                      <th scope="col" className="p-4">
                        Información
                      </th>
                      <th scope="col" className="p-4">
                        Qué puede responder
                      </th>
                      <th scope="col" className="p-4">
                        Limitación
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    {[
                      [
                        "GPS",
                        "¿Dónde estaba la unidad?",
                        "No explica por sí solo qué ocurría visualmente.",
                      ],
                      [
                        "Video",
                        "¿Qué estaba dentro del campo de visión?",
                        "Solo muestra lo captado por la cámara.",
                      ],
                      [
                        "Evento",
                        "¿Qué condición llamó la atención del sistema?",
                        "Depende de configuración y tecnología.",
                      ],
                      [
                        "DMS",
                        "¿Qué variables relacionadas con el conductor analiza el sistema?",
                        "Depende del producto y no equivale a diagnóstico médico.",
                      ],
                      [
                        "ADAS",
                        "¿Qué condición relacionada con la conducción generó una advertencia?",
                        "Es asistencia; el conductor continúa siendo responsable.",
                      ],
                    ].map(([item, answer, limit]) => (
                      <tr key={item} className="border-t border-line">
                        <th scope="row" className="p-4 font-semibold text-ink">
                          {item}
                        </th>
                        <td className="p-4">{answer}</td>
                        <td className="p-4">{limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section id="checklist" className="mt-16 scroll-mt-28">
              <SectionTitle id="checklist" number="11">
                Qué preguntar antes de incorporar dashcams a una flotilla
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-line bg-surface-elevated px-4 py-4 text-sm leading-6 text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 border border-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="mt-16" aria-labelledby="errores">
              <SectionTitle id="errores" number="12">
                Errores conceptuales que conviene evitar
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Asumir que IA comprende cualquier situación.",
                  "Comprar por número de funciones sin definir el objetivo.",
                  "Generar demasiadas alertas o no asignar responsables.",
                  "Guardar video sin una política clara.",
                  "No considerar privacidad y ciberseguridad.",
                  "Asumir que video reemplaza GPS o viceversa.",
                  "Confundir una advertencia con conducción autónoma.",
                  "Esperar precisión perfecta.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section id="preguntas" className="mt-16 scroll-mt-28">
              <SectionTitle id="preguntas" number="13">
                Preguntas frecuentes
              </SectionTitle>
              <div className="divide-y divide-line border-y border-line">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      {question}
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 shrink-0 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-muted">{answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <section
              className="mt-16 border-y border-line bg-surface-alt px-6 py-10 sm:px-9"
              aria-labelledby="cta"
            >
              <p className="text-eyebrow text-primary">Siguiente paso</p>
              <h2 id="cta" className="mt-3 text-headline">
                ¿Está evaluando incorporar video a su operación de flotilla?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                Antes de seleccionar un equipo, defina qué eventos necesita revisar, qué contexto
                necesita conservar y cómo se integrará esa información al proceso operativo. BÚNKER
                puede ayudarle a evaluar ese escenario.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                Conozca los servicios de{" "}
                <InternalLink to="/servicios/dashcam-ia">dashcam con IA</InternalLink>,{" "}
                <InternalLink to="/servicios/gps-rastreo">GPS y rastreo</InternalLink> y{" "}
                <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink>.
              </p>
            </section>
            <section className="mt-16" aria-labelledby="relacionados">
              <SectionTitle id="relacionados" number="14">
                Continúe explorando
              </SectionTitle>
              <div className="grid gap-4 sm:grid-cols-3">
                {(
                  [
                    [
                      "Cómo evaluar un sistema GPS",
                      "que-revisar-antes-contratar-sistema-rastreo-gps",
                    ],
                    [
                      "Visibilidad operativa de flotilla",
                      "como-mejorar-visibilidad-flotilla-logistica",
                    ],
                    [
                      "Video, GPS y monitoreo",
                      "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
                    ],
                  ] as const
                ).map(([label, slug]) => (
                  <Link
                    key={slug}
                    to="/blog/$slug"
                    params={{ slug }}
                    className="border border-line p-5 text-sm font-semibold leading-6 text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {label} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </section>
            <section id="fuentes" className="mt-16 scroll-mt-28 border-t border-line pt-5">
              <SectionTitle id="fuentes" number="15">
                Fuentes y referencias
              </SectionTitle>
              <ul className="space-y-3 text-sm leading-6 text-ink-muted">
                <li>
                  <a
                    href="https://www.nhtsa.gov/vehicle-safety/driver-assistance-technologies"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    NHTSA — Driver Assistance Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fmcsa.dot.gov/safety/research-and-analysis/driver-fatigue-and-distraction-monitoring-and-warning-system"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    FMCSA — Investigación sobre monitoreo de fatiga y distracción
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fmcsa.dot.gov/research-and-analysis/research/onboard-monitoring-system-field-operational-test"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    FMCSA — Onboard Monitoring System Field Operational Test
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Cámara de Diputados — LFPDPPP, texto vigente
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nist.gov/publications/referencia-basica-de-las-capacidades-de-ciberseguridad-de-los-dispositivos-de-iot"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    NIST — Capacidades de ciberseguridad de dispositivos IoT
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-sm leading-6 text-ink-muted">
                Contenido informativo. Las capacidades, compatibilidades y resultados pueden variar
                según equipo, configuración, plataforma y condiciones de operación.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
