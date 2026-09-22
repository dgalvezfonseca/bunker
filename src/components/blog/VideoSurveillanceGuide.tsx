import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["respuesta-directa", "Qué definir primero"],
  ["proceso", "De objetivo a evidencia"],
  ["detalle-util", "Detalle útil y PPM"],
  ["escena", "Escena e iluminación"],
  ["tipos", "Tipos de cámara"],
  ["red", "Red, PoE y grabación"],
  ["almacenamiento", "Almacenamiento"],
  ["ciberseguridad", "Ciberseguridad"],
  ["privacidad", "Privacidad y audio"],
  ["continuidad", "Continuidad y mantenimiento"],
  ["escenarios", "Escenarios hipotéticos"],
  ["checklist", "Checklist"],
  ["preguntas", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const steps = [
  "Objetivo",
  "Escena",
  "Detalle necesario",
  "Campo de visión",
  "Cámara",
  "Red y energía",
  "Grabación",
  "Almacenamiento",
  "Acceso",
  "Información útil",
] as const;

const checklist = [
  "¿Qué necesito observar en cada zona?",
  "¿Necesito contexto general o mayor detalle?",
  "¿Qué cambia entre el día y la noche?",
  "¿Hay contraluz, reflejos u obstrucciones?",
  "¿La zona es interior o exterior?",
  "¿Qué puntos ciegos se deben revisar?",
  "¿Existe infraestructura de red y alimentación adecuada?",
  "¿Qué consumo, potencia por puerto y presupuesto PoE requiere el conjunto?",
  "¿Cuánto tiempo se necesita conservar las grabaciones?",
  "¿Quién tendrá acceso a qué información?",
  "¿Se requiere acceso remoto y bajo qué controles?",
  "¿Qué ocurre si falla la alimentación, conectividad o grabación?",
  "¿La captura de audio es necesaria y está justificada?",
  "¿Se requieren reglas de analítica o lectura de placas?",
  "¿Cómo se protegerán cámaras, NVR/VMS y credenciales?",
  "¿Cómo se verificará y mantendrá el sistema?",
] as const;

const faqs = [
  [
    "¿Cuántas cámaras necesita una empresa?",
    "Depende de las zonas, objetivos, puntos ciegos, condiciones de luz y del detalle que se necesita revisar. Conviene partir de una escena y una pregunta operativa, no de una cantidad predeterminada de cámaras.",
  ],
  [
    "¿Más megapíxeles significan mejor videovigilancia?",
    "No automáticamente. La resolución total es solo una parte de la escena. Óptica, campo de visión, distancia, iluminación, movimiento, exposición y compresión también influyen en el detalle disponible.",
  ],
  [
    "¿Cuánto almacenamiento necesita un sistema?",
    "Depende del número de flujos, bitrate, tiempo de conservación, resolución, tasa de fotogramas, códec, actividad de la escena y configuración de grabación. El dimensionamiento debe revisarse para la arquitectura concreta.",
  ],
  [
    "¿Qué diferencia existe entre NVR y VMS?",
    "Un NVR suele ser un grabador de video en red; un VMS es software para administrar video. El alcance de cada alternativa depende de la arquitectura, número de sitios, flujos, acceso y necesidades de operación.",
  ],
  [
    "¿Qué debe revisarse para instalar cámaras en exterior?",
    "Revise la escena de día y noche, iluminación, obstrucciones, cableado, alimentación y condiciones ambientales. Clasificaciones como IP e IK pueden servir para evaluar protección frente al entorno, pero deben corresponder a las condiciones reales de la instalación.",
  ],
  [
    "¿Es recomendable conectar cámaras directamente a Internet?",
    "Evite exponer directamente cámaras o grabadores a Internet salvo que exista una arquitectura y controles de seguridad específicamente diseñados para ello. Revise cuentas, permisos, firmware, servicios habilitados y acceso remoto.",
  ],
  [
    "¿Qué cambia entre grabar video y grabar audio?",
    "Que un equipo cuente con micrófono no implica que deba habilitarse. La captación de audio introduce consideraciones adicionales de privacidad y debe evaluarse de forma específica antes de utilizarse.",
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

export function VideoSurveillanceGuide({ post }: { post: BlogPost }) {
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
                Videovigilancia
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">
                Videovigilancia empresarial: qué considerar antes de instalar cámaras
              </h1>
              <p className="mt-6 max-w-3xl text-lead text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 14 min
              <br />
              <span className="font-normal text-ink-muted">
                Guía para definir el proyecto antes de elegir equipos.
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
                width={1505}
                height={941}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: post.cover.objectPosition }}
              />
            ) : null}
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              La imagen acompaña esta guía; el diseño técnico debe validarse para cada instalación y
              condición de operación.
            </p>

            <section id="respuesta-directa" className="mt-14 scroll-mt-28">
              <SectionTitle id="respuesta-directa" number="01">
                Antes de elegir cámaras, defina qué necesita ver
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                Una instalación de videovigilancia empieza por definir qué necesita observar la
                organización y para qué se utilizará la imagen. Después se evalúan escena, detalle,
                cámara, red, grabación, almacenamiento y acceso.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                No es lo mismo buscar contexto general de un patio que revisar un acceso específico.
                Esa diferencia orienta el campo de visión, la óptica, la iluminación y la
                infraestructura necesaria. Conozca el servicio de{" "}
                <InternalLink to="/servicios/videovigilancia">
                  videovigilancia para instalaciones
                </InternalLink>{" "}
                si está evaluando un proyecto.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2"
                aria-label="Resumen de factores de evaluación"
              >
                {[
                  "Defina el objetivo antes de comparar especificaciones.",
                  "Revise la escena durante las condiciones reales de operación.",
                  "El detalle útil depende de más factores que los megapíxeles.",
                  "Red, energía y almacenamiento forman parte del sistema.",
                  "El acceso a imágenes y equipos requiere controles definidos.",
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

            <section id="proceso" className="mt-16 scroll-mt-28">
              <SectionTitle id="proceso" number="02">
                De objetivo a información útil
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Este es un modelo editorial para ordenar el proyecto, no un estándar oficial. Cada
                paso ayuda a convertir una necesidad de operación en criterios que se puedan revisar
                con un proveedor.
              </p>
              <ol
                className="mt-8 grid overflow-hidden border border-line bg-surface-elevated sm:grid-cols-2 lg:grid-cols-5"
                aria-label="Proceso editorial para diseñar videovigilancia"
              >
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className="relative grid min-h-28 place-items-center border-b border-r border-line px-3 py-4 text-center text-sm font-semibold leading-6 text-ink last:border-b-0 lg:[&:nth-child(n+6)]:border-b-0"
                  >
                    <span>{step}</span>
                    {index < steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-5 left-1/2 z-10 grid size-9 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary sm:hidden"
                      >
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>

            <section id="detalle-util" className="mt-16 scroll-mt-28">
              <SectionTitle id="detalle-util" number="03">
                Ver algo no es lo mismo que obtener detalle útil
              </SectionTitle>
              <div className="grid gap-4 border-y border-line py-6 sm:grid-cols-3">
                {[
                  "Ver una escena",
                  "Entender qué ocurre",
                  "Contar con detalle para una revisión posterior",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink">
                    <span className="text-primary">0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-[65ch] text-base leading-8 text-ink-muted">
                Más megapíxeles no equivalen automáticamente a una imagen más útil. La óptica, el
                campo de visión, la distancia, iluminación, movimiento, exposición, compresión y
                condiciones ambientales también afectan el resultado.
              </p>
              <div
                className="mt-8 grid border border-line bg-surface-alt p-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center sm:p-7"
                aria-label="Relación conceptual entre resolución, escena y detalle útil"
              >
                <p className="text-center text-sm font-semibold text-ink">Resolución total</p>
                <span aria-hidden="true" className="hidden text-center text-primary sm:block">
                  +
                </span>
                <p className="text-center text-sm font-semibold text-ink">
                  Campo de visión, distancia e iluminación
                </p>
                <span aria-hidden="true" className="hidden text-center text-primary sm:block">
                  =
                </span>
                <p className="text-center text-sm font-semibold text-primary">
                  Detalle útil para la escena
                </p>
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                <strong className="text-ink">¿Qué es PPM?</strong> Píxeles por metro es una forma de
                pensar cuánto detalle de imagen existe sobre un objetivo. Debe analizarse junto con
                óptica, distancia, iluminación, movimiento, exposición, compresión y condiciones
                reales; no es una garantía de identidad, lectura de placas o valor pericial.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                El campo de visión, la perspectiva, el ángulo, altura, lente fijo o varifocal y
                posibles obstrucciones deben revisarse en sitio. La referencia{" "}
                <a
                  href="https://webstore.iec.ch/en/publication/83425"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  IEC 62676-4:2025
                </a>{" "}
                ofrece directrices de aplicación para sistemas de videovigilancia; en esta guía se
                usa solo como contexto técnico, sin trasladar umbrales numéricos a reglas
                universales.
              </p>
            </section>

            <section id="escena" className="mt-16 scroll-mt-28">
              <SectionTitle id="escena" number="04">
                La iluminación es parte de la escena
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Una cámara con buena resolución puede producir una imagen poco útil si la escena
                está mal iluminada. Revise variaciones de día y noche, ventanas, contraluz, faros,
                reflejos, lluvia, polvo, insectos y otras condiciones que cambian la exposición.
              </p>
              <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
                <div className="bg-surface-elevated p-6">
                  <p className="text-eyebrow text-primary">WDR</p>
                  <h3 className="mt-3 text-title">Qué problema busca resolver</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    WDR busca ayudar cuando una misma escena combina zonas muy claras y oscuras,
                    como un acceso con interior y exterior. Las especificaciones deben evaluarse
                    junto con pruebas en la escena real.
                  </p>
                </div>
                <div className="bg-surface-elevated p-6">
                  <p className="text-eyebrow text-primary">Infrarrojo</p>
                  <h3 className="mt-3 text-title">
                    Alcance anunciado no equivale a detalle garantizado
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    Paredes, techos, lluvia, polvo, insectos y superficies reflectantes pueden
                    afectar la imagen. Conviene revisar la operación nocturna y posibles reflejos
                    antes de decidir.
                  </p>
                </div>
              </div>
            </section>

            <section id="tipos" className="mt-16 scroll-mt-28">
              <SectionTitle id="tipos" number="05">
                La forma de la cámara no sustituye el diseño de la escena
              </SectionTitle>
              <div className="overflow-x-auto border border-line">
                <table className="min-w-[720px] w-full border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">Tipos de cámara y criterios de evaluación</caption>
                  <thead className="bg-surface-alt text-ink">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">
                        Tipo
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Qué puede aportar
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Qué revisar
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Dónde puede tener sentido
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    {[
                      [
                        "Dome",
                        "Formato compacto para distintas escenas.",
                        "Óptica, iluminación, montaje y cubierta.",
                        "Interiores o zonas donde el formato sea pertinente.",
                      ],
                      [
                        "Turret",
                        "Configuración de lente y orientación según el modelo.",
                        "Exposición física, luz y condiciones ambientales.",
                        "Escenas donde su montaje responda al objetivo.",
                      ],
                      [
                        "Bullet",
                        "Formato que puede facilitar una orientación visible de la escena.",
                        "Campo de visión, montaje, cableado y entorno.",
                        "Perímetros o patios cuando el diseño lo justifique.",
                      ],
                      [
                        "PTZ",
                        "Movimiento y acercamiento según el equipo y configuración.",
                        "Cobertura de la escena, recorridos y puntos ciegos.",
                        "Áreas amplias donde esa capacidad aporte valor.",
                      ],
                    ].map(([type, contribution, review, context]) => (
                      <tr key={type} className="border-t border-line">
                        <th scope="row" className="p-4 font-semibold text-ink">
                          {type}
                        </th>
                        <td className="p-4">{contribution}</td>
                        <td className="p-4">{review}</td>
                        <td className="p-4">{context}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Las clasificaciones IP e IK son referencias normalizadas para revisar protección
                frente al ingreso de sólidos o líquidos y resistencia a impactos. La selección debe
                responder al entorno y a la documentación del equipo propuesto.
              </p>
            </section>

            <section id="red" className="mt-16 scroll-mt-28">
              <SectionTitle id="red" number="06">
                Videovigilancia IP también es un proyecto de red
              </SectionTitle>
              <div
                className="grid overflow-hidden border border-line bg-surface-elevated"
                aria-label="Arquitectura conceptual de videovigilancia IP"
              >
                {[
                  "Cámara IP",
                  "PoE / cableado",
                  "Switch",
                  "NVR / VMS",
                  "Almacenamiento",
                  "Usuario autorizado",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="relative grid min-h-18 place-items-center border-b border-line px-4 py-4 text-center text-sm font-semibold text-ink last:border-b-0"
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
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-[65ch] text-base leading-8 text-ink-muted">
                PoE puede transportar datos y energía por el cableado Ethernet. IEEE 802.3af,
                802.3at y 802.3bt son referencias de PoE que se pueden evaluar; no basta contar
                puertos. Revise el consumo de cada dispositivo, potencia disponible por puerto,
                presupuesto total y capacidad del switch.
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Ciberseguridad desde el diseño</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  Una cámara IP también es un dispositivo conectado a la red.
                </p>
              </aside>
            </section>

            <section id="almacenamiento" className="mt-16 scroll-mt-28">
              <SectionTitle id="almacenamiento" number="07">
                El almacenamiento se dimensiona con la configuración real
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                No existe una cantidad universal de almacenamiento por cámara. El cálculo parte de
                los flujos y sus condiciones de grabación.
              </p>
              <div className="mt-8 grid gap-3 border-y border-line py-6 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                <span className="font-semibold text-ink">Bitrate</span>
                <span aria-hidden="true" className="text-primary">
                  ×
                </span>
                <span className="font-semibold text-ink">Tiempo</span>
                <span aria-hidden="true" className="text-primary">
                  ×
                </span>
                <span className="font-semibold text-ink">Número de flujos</span>
                <span aria-hidden="true" className="text-primary">
                  ≈
                </span>
                <span className="font-semibold text-primary">Capacidad de almacenamiento</span>
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                También influyen resolución, tasa de fotogramas, códec, complejidad de la escena,
                VBR o CBR, grabación continua o por eventos y tiempo de conservación. H.264 y H.265
                pueden cambiar bitrate, almacenamiento, compatibilidad y recursos de procesamiento;
                verifique la capacidad de decodificación del NVR/VMS antes de definir parámetros.
              </p>
            </section>

            <section id="ciberseguridad" className="mt-16 scroll-mt-28">
              <SectionTitle id="ciberseguridad" number="08">
                Proteja los equipos como parte de su infraestructura
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Las cámaras, grabadores y sus cuentas deben formar parte de la operación de
                seguridad de TI. Como criterios prácticos, revise credenciales predeterminadas,
                contraseñas únicas, firmware, cuentas y permisos, segmentación, acceso remoto,
                servicios innecesarios y mantenimiento.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Evite exponer directamente cámaras o grabadores a Internet salvo que exista una
                arquitectura y controles de seguridad específicamente diseñados para ello. La guía
                de{" "}
                <a
                  href="https://www.cisa.gov/news-events/news/take-first-steps-towards-better-cybersecurity-these-four-goals"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  CISA sobre cambio de credenciales predeterminadas
                </a>{" "}
                respalda este criterio general.
              </p>
            </section>

            <section id="privacidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="privacidad" number="09">
                Privacidad, retención y audio requieren una revisión propia
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando las imágenes permiten identificar directa o indirectamente a una persona, su
                tratamiento puede quedar sujeto a obligaciones de protección de datos personales
                según el contexto y la finalidad. Conviene revisar el aviso de privacidad,
                finalidades, acceso y conservación con el área jurídica de la organización.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                La organización debe definir cuánto tiempo conservar las grabaciones de acuerdo con
                sus finalidades, obligaciones aplicables, necesidades operativas y políticas
                internas. Esto no constituye asesoría jurídica; consulte el texto vigente de la{" "}
                <a
                  href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  LFPDPPP
                </a>
                .
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">¿La cámara tiene micrófono?</p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  Que el equipo pueda grabar audio no significa que necesariamente deba habilitarse.
                  La captación de audio introduce consideraciones adicionales de privacidad y debe
                  evaluarse específicamente antes de utilizarse.
                </p>
              </aside>
            </section>

            <section id="continuidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="continuidad" number="10">
                Revise continuidad, fecha/hora y mantenimiento
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Defina qué ocurre si falla la alimentación, switch, NVR, almacenamiento o
                conectividad. Un UPS puede formar parte de una estrategia de continuidad, pero su
                dimensionamiento depende de la arquitectura y equipos concretos.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Una fecha y hora coherentes entre cámaras, grabadores y otros sistemas facilitan
                correlacionar eventos durante una revisión posterior; NTP puede utilizarse para esa
                sincronización. El mantenimiento puede incluir limpieza, ópticas, obstrucciones,
                salud de discos, firmware, fecha/hora, conectividad, revisión nocturna y
                verificación de grabación, sin asumir una periodicidad universal.
              </p>
            </section>

            <section id="escenarios" className="mt-16 scroll-mt-28">
              <SectionTitle id="escenarios" number="11">
                Tres escenarios hipotéticos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Acceso peatonal",
                    "Obtener mayor detalle de quienes ingresan.",
                    "Revise ángulo, iluminación, campo de visión y ubicación.",
                  ],
                  [
                    "Patio o centro logístico",
                    "Obtener contexto general de movimientos.",
                    "Revise cobertura, puntos ciegos, iluminación y operación nocturna.",
                  ],
                  [
                    "Acceso vehicular",
                    "Observar tránsito de vehículos.",
                    "Si se requiere lectura de placas, puede ser necesaria una escena y equipo específicamente diseñados.",
                  ],
                ].map(([title, objective, review]) => (
                  <section key={title} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">Ejemplo hipotético</p>
                    <h3 className="mt-3 text-title">{title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-ink">
                      Objetivo: {objective}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{review}</p>
                  </section>
                ))}
              </div>
            </section>

            <section className="mt-16" aria-labelledby="errores">
              <SectionTitle id="errores" number="12">
                Errores que conviene evitar
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Comprar solo por megapíxeles.",
                  "Instalar antes de definir el objetivo.",
                  "Intentar cubrir demasiado con una cámara.",
                  "Ignorar iluminación y escena nocturna.",
                  "No calcular almacenamiento o presupuesto PoE.",
                  "No considerar ciberseguridad y acceso remoto.",
                  "No sincronizar fecha y hora.",
                  "No planear verificación y mantenimiento.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="checklist" className="mt-16 scroll-mt-28">
              <SectionTitle id="checklist" number="13">
                Checklist antes de solicitar una propuesta
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

            <section id="preguntas" className="mt-16 scroll-mt-28">
              <SectionTitle id="preguntas" number="14">
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
                Defina primero qué necesita observar su operación
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                Antes de seleccionar cámaras, conviene revisar las escenas, condiciones de operación
                e infraestructura del proyecto. BÚNKER puede ayudarle a evaluar ese escenario.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                También puede conocer los servicios de{" "}
                <InternalLink to="/servicios/tecnologia-perimetral">
                  tecnología perimetral
                </InternalLink>
                , <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink> e{" "}
                <InternalLink to="/servicios/instalacion-soporte">
                  instalación y soporte técnico
                </InternalLink>
                .
              </p>
            </section>

            <section className="mt-16" aria-labelledby="relacionados">
              <SectionTitle id="relacionados" number="15">
                Continúe explorando
              </SectionTitle>
              <div className="grid gap-4 sm:grid-cols-3">
                {(
                  [
                    [
                      "Video, GPS y monitoreo",
                      "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
                    ],
                    [
                      "Dashcam y operación logística",
                      "que-aporta-dashcam-con-ia-operacion-logistica",
                    ],
                    [
                      "Coordinación de alertas de seguridad",
                      "como-se-coordina-respuesta-alerta-seguridad-monitoreo",
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
              <SectionTitle id="fuentes" number="16">
                Fuentes y referencias
              </SectionTitle>
              <ul className="space-y-3 text-sm leading-6 text-ink-muted">
                <li>
                  <a
                    href="https://webstore.iec.ch/en/publication/83425"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    IEC — IEC 62676-4:2025, Application guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="https://technav.ieee.org/topic/802-standards/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    IEEE — Estándares 802 y Power over Ethernet
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
                    href="https://www.cisa.gov/news-events/news/take-first-steps-towards-better-cybersecurity-these-four-goals"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    CISA — Cambio de credenciales predeterminadas
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-sm leading-6 text-ink-muted">
                Contenido informativo. Las capacidades, compatibilidades y resultados pueden variar
                según escena, equipo, configuración, infraestructura y condiciones de operación.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
