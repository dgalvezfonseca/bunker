import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["integrar", "Integrar no es verlo todo en una pantalla"],
  ["modelo", "Señal + contexto + ubicación + responsable"],
  ["capas", "Videovigilancia, GPS y monitoreo"],
  ["onvif", "La base técnica: ONVIF"],
  ["perfiles", "Perfiles S, C y M"],
  ["compatibilidad", "Compatibilidad real, no garantizada"],
  ["video-contexto", "Video, accesos y alarmas"],
  ["preguntas", "GPS, video y monitoreo: preguntas distintas"],
  ["correlacion", "Correlacionar datos amplía el contexto"],
  ["timestamp", "La hora importa"],
  ["evento-incidente", "Evento, alerta e incidente"],
  ["automatizacion", "Integrar no es automatizar todo"],
  ["personas", "Tecnología, personas y procedimientos"],
  ["regulacion", "Qué dice la LFSP sobre monitoreo"],
  ["fallas", "Qué ocurre cuando un sistema falla"],
  ["ciberseguridad", "Más superficie que administrar"],
  ["privacidad", "Privacidad y datos personales"],
  ["causalidad", "Correlación no es causalidad"],
  ["arquitectura", "De la señal a la acción"],
  ["aportes", "Qué aporta cada sistema"],
  ["beneficios", "Beneficios potenciales, sin promesas"],
  ["errores", "Errores que conviene evitar"],
  ["checklist", "Checklist para integrar"],
  ["escenarios", "Tres escenarios hipotéticos"],
  ["preguntas-frecuentes", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const faqs = [
  [
    "¿Qué significa integrar sistemas de seguridad?",
    "Que distintos sistemas pueden aportar contexto complementario para detectar, validar, correlacionar, escalar y revisar una situación. No exige ver todo en una sola pantalla.",
  ],
  [
    "¿Se puede integrar GPS con videovigilancia?",
    "Depende de plataformas, interfaces y compatibilidad disponibles. Antes de integrar, conviene verificar perfiles, funciones soportadas y compatibilidad real entre cliente y dispositivo.",
  ],
  [
    "¿GPS y videovigilancia hacen lo mismo?",
    "No. El GPS aporta ubicación, recorrido y tiempos; el video aporta contexto visual dentro del campo de visión de una cámara. Responden preguntas distintas.",
  ],
  [
    "¿ONVIF significa que cualquier cámara funciona con cualquier VMS?",
    "No. ONVIF define especificaciones e interfaces, pero la compatibilidad real depende del perfil, la versión, la implementación, las funciones obligatorias o condicionales y cada fabricante.",
  ],
  [
    "¿Integrar sistemas elimina falsos positivos?",
    "No. Integrar agrega contexto, pero no garantiza eliminar señales falsas. La validación sigue siendo necesaria antes de tratar un evento como incidente.",
  ],
  [
    "¿Una alarma puede abrir automáticamente un video?",
    "Algunas arquitecturas lo permiten, dependiendo de la integración y las capacidades. No es una capacidad universal ni una promesa de un proveedor específico.",
  ],
  [
    "¿La integración reemplaza al operador?",
    "No. La tecnología aporta señales; las personas validan y deciden conforme a procedimientos. Automatizar una notificación no equivale a automatizar toda la decisión.",
  ],
  [
    "¿Es necesario usar un solo proveedor?",
    "No necesariamente. Depende de interoperabilidad y soporte entre los equipos, los perfiles que soportan y las plataformas que se vayan a relacionar.",
  ],
] as const;

const checklist = [
  "¿Qué problema queremos resolver?",
  "¿Qué sistema genera el evento?",
  "¿Qué datos necesitamos correlacionar?",
  "¿Qué protocolo o interfaz existe?",
  "¿Qué perfiles ONVIF soportan realmente los equipos?",
  "¿Quién es la fuente de verdad?",
  "¿Cómo se sincroniza la hora?",
  "¿Quién recibe la alerta?",
  "¿Quién valida?",
  "¿Quién escala?",
  "¿Qué ocurre si un sistema falla?",
  "¿Qué pasa si se pierde Internet?",
  "¿Cómo se controlan usuarios y permisos?",
  "¿Qué datos personales se combinan?",
  "¿Cuánto tiempo se conservan?",
  "¿Cómo se documentan cambios?",
  "¿Cómo se prueba la integración?",
] as const;

const errores = [
  "Integrar sin un objetivo definido.",
  "Intentar conectar todo sin prioridad.",
  "Asumir que ONVIF es sinónimo de compatibilidad total.",
  "No sincronizar la hora entre sistemas.",
  "No definir responsables de cada etapa.",
  "Crear demasiadas alertas.",
  "No definir qué sistema es la fuente de verdad.",
  "No considerar permisos y roles.",
  "No planear qué ocurre cuando algo falla.",
  "No documentar las integraciones.",
  "Automatizar decisiones sensibles sin validación.",
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

function FlowSteps({
  steps,
  label,
}: {
  steps: readonly (readonly [string, string])[];
  label: string;
}) {
  return (
    <ol
      className="mt-8 grid overflow-hidden border border-line bg-surface-elevated"
      aria-label={label}
    >
      {steps.map(([title, detail], index) => (
        <li
          key={title}
          className="relative grid border-b border-line px-4 py-5 text-center last:border-b-0"
        >
          <span className="text-eyebrow text-primary">{title}</span>
          <span className="mt-2 text-sm leading-6 text-ink">{detail}</span>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-1/2 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary"
            >
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function FormulaBand({ steps, result }: { steps: string[]; result: string }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border border-line bg-surface-alt px-5 py-6 sm:px-7">
      {steps.map((step, index) => (
        <span key={step} className="contents">
          {index > 0 ? (
            <span aria-hidden="true" className="text-sm font-semibold text-primary">
              +
            </span>
          ) : null}
          <span className="text-center text-sm font-semibold leading-6 text-ink">{step}</span>
        </span>
      ))}
      <span aria-hidden="true" className="text-sm font-semibold text-primary">
        =
      </span>
      <span className="text-center text-sm font-semibold leading-6 text-primary">{result}</span>
    </div>
  );
}

export function IntegrarSeguridadGuide({ post }: { post: BlogPost }) {
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
                Integrar videovigilancia, GPS y monitoreo
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">
                ¿Qué aporta integrar videovigilancia, GPS y monitoreo?
              </h1>
              <p className="mt-6 max-w-3xl text-lead text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 14 min
              <br />
              <span className="font-normal text-ink-muted">
                Guía editorial para evaluar integraciones, no promesas de plataforma unificada.
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
                width={1024}
                height={683}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: post.cover.objectPosition }}
              />
            ) : null}
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Imagen editorial de tecnología aplicada. No acredita plataforma unificada, integración
              específica ni capacidades propias de BÚNKER.
            </p>

            <section id="integrar" className="mt-14 scroll-mt-28">
              <SectionTitle id="integrar" number="01">
                Integrar no significa ver todo en una sola pantalla
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                Cuando en una organización coexisten cámaras, sistemas de rastreo, sensores y
                procesos de monitoreo, suele asumirse que “integrar” equivale a reunir toda la
                información en un único lugar. Eso es sólo una manera de verlo.
              </p>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Integrar significa, sobre todo, que distintos sistemas pueden aportar contexto
                complementario para:
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Detectar", "Que un sistema registre una condición según sus capacidades."],
                  ["Validar", "Relacionar señales con contexto para revisar qué ocurrió."],
                  [
                    "Correlacionar",
                    "Combinar hora, ubicación, video y eventos en una misma revisión.",
                  ],
                  ["Escalar", "Notificar al responsable correspondiente según el procedimiento."],
                  [
                    "Revisar",
                    "Dejar evidencia para análisis posterior, cuando la plataforma lo permita.",
                  ],
                ].map(([title, detail]) => (
                  <div key={title} className="border-l-2 border-primary pl-4">
                    <h3 className="text-title">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Hablar de integración no exige una plataforma unificada, ni significa que todos los
                datos deban concentrarse en un solo operador. Cada capa aporta según lo que la
                solución y el servicio realmente ofrecen.
              </p>
            </section>

            <section id="modelo" className="mt-16 scroll-mt-28">
              <SectionTitle id="modelo" number="02">
                Señal + contexto + ubicación + responsable
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Para organizar esta idea, el artículo propone un modelo editorial sencillo: una
                señal cobra sentido cuando se relaciona con contexto, ubicación y un responsable.
              </p>
              <FormulaBand
                steps={["Señal", "Contexto", "Ubicación", "Responsable"]}
                result="Mejor capacidad de interpretación"
              />
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Es un modelo de lectura del artículo, no un estándar técnico ni un requisito de
                producto. Sirve para plantear preguntas antes de conectar sistemas: qué se detecta,
                qué otra información ayuda a interpretarlo, dónde ocurrió y quién debe actuar.
              </p>
            </section>

            <section id="capas" className="mt-16 scroll-mt-28">
              <SectionTitle id="capas" number="03">
                Videovigilancia, GPS y monitoreo: tres capas de información
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cada sistema aporta un tipo distinto de referencia, y cada aporte depende de la
                solución, el servicio y el procedimiento. No son intercambiables: se complementan.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Tres capas: videovigilancia, GPS y monitoreo"
              >
                {[
                  [
                    "Videovigilancia",
                    "Puede aportar imagen, video, contexto visual y eventos de video, dependiendo de la solución instalada.",
                  ],
                  [
                    "GPS",
                    "Puede aportar ubicación, recorrido, timestamp y movimiento, dependiendo del sistema y del dispositivo.",
                  ],
                  [
                    "Monitoreo",
                    "Puede aportar recepción, clasificación, seguimiento, administración de señales y escalamiento, dependiendo del servicio y el procedimiento.",
                  ],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Que una organización cuente con videovigilancia, rastreo y monitoreo no significa
                que una sola empresa los integre automáticamente. Para profundizar en cada capa,
                puede revisar la{" "}
                <InternalLink to="/blog/videovigilancia-que-considerar-antes-instalar-camaras">
                  guía de videovigilancia empresarial
                </InternalLink>
                , la{" "}
                <InternalLink to="/blog/gps-logistica-como-utilizar-informacion-decisiones">
                  guía para usar los datos GPS en decisiones
                </InternalLink>
                , la{" "}
                <InternalLink to="/blog/como-se-coordina-respuesta-alerta-seguridad-monitoreo">
                  guía de coordinación de respuesta ante alertas
                </InternalLink>
                , y si planea sumar rastreo a sus unidades, la{" "}
                <InternalLink to="/blog/que-revisar-antes-contratar-sistema-rastreo-gps">
                  guía para revisar antes de contratar un sistema de rastreo GPS
                </InternalLink>
                .
              </p>
            </section>

            <section id="onvif" className="mt-16 scroll-mt-28">
              <SectionTitle id="onvif" number="04">
                La base técnica: ONVIF
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                ONVIF define especificaciones e interfaces orientadas a la interoperabilidad de
                productos de seguridad física IP. Sus especificaciones contemplan servicios para
                video, eventos, analítica, control de acceso, grabación, media y door control, entre
                otros.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Tener una especificación común es útil como punto de partida, pero no resuelve la
                configuración: clientes y dispositivos deben soportar el mismo perfil y compatible
                con las funciones que cada uno declara.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Áreas que ONVIF contempla"
              >
                {[
                  ["Video y media", "Transmisión e imágenes de cámaras de red."],
                  ["Control de acceso", "Puertas, eventos y gestión de credenciales."],
                  ["Analítica y eventos", "Metadatos, reglas y notificaciones de video."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="perfiles" className="mt-16 scroll-mt-28">
              <SectionTitle id="perfiles" number="05">
                ONVIF Profile S, C y M, en pocas palabras
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                ONVIF organiza las funciones en perfiles. Mencionamos tres porque respaldan que la
                interoperabilidad de video, eventos y control de acceso es técnicamente real; no se
                intenta aquí explicar la familia completa de perfiles.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Profile S",
                    "Cubre funciones básicas de video IP: streaming, ajustes de imagen y metadatos básicos de cámara.",
                  ],
                  [
                    "Profile C",
                    "Cubre control de puertas y gestión de eventos y alarmas de acceso.",
                  ],
                  ["Profile M", "Cubre metadatos y eventos de analítica de video."],
                ].map(([title, detail]) => (
                  <div key={title} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                La existencia de un perfil no garantiza que dos productos funcionen juntos sin
                configuración: también intervienen la versión, la implementación, las funciones
                obligatorias o condicionales y las decisiones de cada fabricante.
              </p>
            </section>

            <section id="compatibilidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="compatibilidad" number="06">
                Compatibilidad real, no garantizada
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Un error frecuente es tratar ONVIF como sinónimo de que “todo funciona con todo”. La
                compatibilidad se verifica caso por caso y depende de más variables que el logo.
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio práctico</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  Antes de integrar dispositivos de distintos fabricantes, conviene verificar
                  perfiles, funciones soportadas y compatibilidad real entre cliente y dispositivo.
                </p>
              </aside>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Perfil declarado por cada producto.",
                  "Versión de la especificación.",
                  "Implementación de cada fabricante.",
                  "Funciones obligatorias y condicionales.",
                  "Marca y modelo del cliente.",
                  "Marca y modelo del dispositivo.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="video-contexto" className="mt-16 scroll-mt-28">
              <SectionTitle id="video-contexto" number="07">
                Video añade contexto: accesos y alarmas
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando existe integración, el video puede complementar señales que por sí solas no
                tienen significado visual. Dos ejemplos de uso común sirven para explicarlo.
              </p>
              <h3 className="mt-8 text-title">Control de acceso + video</h3>
              <p className="mt-3 max-w-[65ch] text-base leading-8 text-ink-muted">
                Una puerta registra un evento (por ejemplo, una apertura sin credencial válida). El
                sistema de video puede permitir revisar visualmente qué ocurrió alrededor de ese
                momento, cuando exista integración.
              </p>
              <FormulaBand
                steps={["Evento de acceso", "Video"]}
                result="Más contexto para revisión"
              />
              <h3 className="mt-10 text-title">Alarmas + video</h3>
              <p className="mt-3 max-w-[65ch] text-base leading-8 text-ink-muted">
                La guía de integración de seguridad física de CISA documenta arquitecturas donde
                sistemas de detección de intrusión, alarmas, video y monitoreo pueden operar de
                forma integrada. Se usa aquí sólo como referencia conceptual.
              </p>
              <ol
                className="mt-8 grid gap-3 border border-line bg-surface-alt p-5 text-center text-sm font-semibold text-ink sm:grid-cols-5"
                aria-label="Flujo conceptual de alarma con video"
              >
                {["Sensor / Alarma", "Evento", "Video asociado", "Validación", "Respuesta"].map(
                  (item, index) => (
                    <li key={item}>
                      {item}
                      {index < 4 ? (
                        <span aria-hidden="true" className="ml-3 text-primary">
                          →
                        </span>
                      ) : null}
                    </li>
                  ),
                )}
              </ol>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Esta guía no es una obligación mexicana, ni implica que BÚNKER implemente
                exactamente esa arquitectura. La transición de alarma a video se da cuando la
                plataforma y los procedimientos lo permiten.
              </p>
            </section>

            <section id="preguntas" className="mt-16 scroll-mt-28">
              <SectionTitle id="preguntas" number="08">
                GPS, video y monitoreo responden preguntas distintas
              </SectionTitle>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Preguntas que responde cada sistema"
              >
                {[
                  ["GPS", "¿Dónde estaba?", "Ubicación, recorrido y horas junto a un timestamp."],
                  [
                    "Video",
                    "¿Qué estaba dentro del campo de visión?",
                    "Contexto visual que la posición por sí sola no muestra.",
                  ],
                  [
                    "Monitoreo",
                    "¿Qué evento requiere seguimiento y quién debe actuar?",
                    "Coordinación de revisión y escalamiento según procedimiento.",
                  ],
                ].map(([title, question, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-title leading-6">{question}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Que el GPS marque una posición y una cámara tenga imagen no convierte
                automáticamente el resultado en una conclusión. El video aporta lo que muestra
                dentro de su campo de visión, y el monitoreo ayuda a decidir qué merece seguimiento.
                Consulte también la{" "}
                <InternalLink to="/blog/como-mejorar-visibilidad-flotilla-logistica">
                  guía de visibilidad operativa de flotillas
                </InternalLink>
                .
              </p>
            </section>

            <section id="correlacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="correlacion" number="09">
                Correlacionar datos amplía el contexto
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Un evento aislado tiene menos contexto que varios datos correlacionados. Esto no
                significa que más datos confirmen automáticamente lo ocurrido; significa que la
                revisión puede disponer de más referencias.
              </p>
              <FormulaBand
                steps={["Alerta", "Hora", "Ubicación", "Video", "Histórico"]}
                result="Más información para revisar"
              />
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Ejemplo hipotético: los cinco elementos anteriores podrían ofrecer más información
                para revisar una situación. No implica que todos esos datos existan en una misma
                plataforma ni en BÚNKER.
              </p>
            </section>

            <section id="timestamp" className="mt-16 scroll-mt-28">
              <SectionTitle id="timestamp" number="10">
                La hora importa al correlacionar
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Para relacionar un evento de acceso, una posición y un clip de video, los tiempos
                deben ser coherentes entre cámaras, equipos GPS, sistemas de control y plataforma.
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio práctico</p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  Si dos sistemas registran el mismo evento con horarios inconsistentes,
                  correlacionar lo ocurrido se vuelve más difícil.
                </p>
              </aside>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Revisar la sincronización de relojes es parte de una buena operación, sin necesidad
                de una implementación avanzada de NTP. No se hacen aquí conclusiones legales ni
                periciales.
              </p>
            </section>

            <section id="evento-incidente" className="mt-16 scroll-mt-28">
              <SectionTitle id="evento-incidente" number="11">
                Evento, alerta e incidente
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando se habla de integración conviene distinguir tres niveles, tal como se hace en
                otras guías del blog:
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Marco práctico de evento, alerta e incidente"
              >
                {[
                  ["Evento", "Una condición detectada por un sistema."],
                  ["Alerta", "Una regla o notificación que avisa que esa condición ocurrió."],
                  [
                    "Incidente",
                    "Una situación validada o tratada como tal según el procedimiento de la organización.",
                  ],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Es un marco práctico del artículo, no una definición legal universal. Un evento no
                se convierte en incidente sólo porque un sistema lo notificó.
              </p>
            </section>

            <section id="automatizacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="automatizacion" number="12">
                Integrar no es automatizar todas las decisiones
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Que los sistemas se integren no significa que toda decisión deba automatizarse. Un
                flujo razonable conserva la validación humana en el centro.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="border border-line bg-surface-elevated p-5">
                  <p className="text-eyebrow text-primary">Flujo con validación</p>
                  <ol className="mt-4 space-y-3 text-sm font-semibold leading-6 text-ink">
                    {["Sensor", "Alerta", "Video", "Operador", "Decisión"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span aria-hidden="true" className="text-primary">
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="border border-dashed border-line bg-surface p-5">
                  <p className="text-eyebrow text-primary">
                    Automatización total no es el objetivo
                  </p>
                  <ol className="mt-4 space-y-3 text-sm font-semibold leading-6 text-ink-muted">
                    {["Sensor", "IA", "Decisión automática universal"].map((item, index, arr) => (
                      <li key={item} className="flex items-center gap-3">
                        {index < arr.length - 1 ? (
                          <span aria-hidden="true" className="text-ink-muted">
                            →
                          </span>
                        ) : (
                          <span aria-hidden="true" className="text-ink-muted">
                            ✗
                          </span>
                        )}
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Dependiendo de la solución pueden existir reglas, avisos o registros automáticos; se
                tratan como capacidades del producto y no como sustitutos del criterio humano.
              </p>
            </section>

            <section id="personas" className="mt-16 scroll-mt-28">
              <SectionTitle id="personas" number="13">
                Tecnología, personas y procedimientos
              </SectionTitle>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Elementos de una respuesta organizada"
              >
                {[
                  [
                    "Tecnología",
                    "Aporta señales: detecta o notifica condiciones según sus capacidades.",
                  ],
                  ["Personas", "Validan contexto y deciden conforme a sus responsabilidades."],
                  ["Procedimientos", "Coordinan la respuesta y el registro de lo actuado."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <FormulaBand
                steps={["Tecnología", "Personas", "Procedimientos"]}
                result="Respuesta organizada"
              />
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Modelo editorial del artículo: la tecnología señala, las personas validan y los
                procedimientos coordinan. Ninguna capa sustituye a las otras por sí sola.
              </p>
            </section>

            <section id="regulacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="regulacion" number="14">
                Qué dice la LFSP sobre monitoreo
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La Ley Federal de Seguridad Privada define el monitoreo electrónico como la
                recepción, clasificación, seguimiento y administración de señales de sistemas de
                alarma, además de los avisos conforme corresponda. También define la central de
                monitoreo como el lugar donde se reciben señales y existe la infraestructura y el
                personal para las funciones correspondientes.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Usar esta definición ayuda a entender que monitorear no es sólo “ver pantallas”: es
                un proceso de recepción, clasificación, seguimiento y administración. Esto no es
                asesoría jurídica, ni prueba de autorizaciones, central propia, horarios o
                redundancia específicos de BÚNKER.
              </p>
            </section>

            <section id="fallas" className="mt-16 scroll-mt-28">
              <SectionTitle id="fallas" number="15">
                Qué ocurre cuando un sistema falla
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La misma ley define un sistema de redundancia como respaldos físicos y tecnológicos
                frente a contingencias y fallas de equipo, comunicaciones o suministro eléctrico. Es
                un criterio útil para pensar que integrar más sistemas también implica planear qué
                ocurre si uno falla.
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio práctico</p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  Una integración mal diseñada puede hacer que demasiadas funciones dependan de un
                  único componente.
                </p>
              </aside>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Sin entrar en arquitectura avanzada, conviene evaluar al menos:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Energía.",
                  "Red y conectividad.",
                  "Almacenamiento de video y registros.",
                  "Canal de comunicación con la plataforma.",
                  "Acceso y disponibilidad de la plataforma.",
                  "Personal y horarios de revisión.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Estas recomendaciones no son requisitos universales ni implican que BÚNKER cuente
                con una redundancia específica.
              </p>
            </section>

            <section id="ciberseguridad" className="mt-16 scroll-mt-28">
              <SectionTitle id="ciberseguridad" number="16">
                Más sistemas conectados, más superficie que administrar
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando varios sistemas IP se integran, amplía la superficie que debe administrarse y
                protegerse. No afirmamos que integrar aumente automáticamente el riesgo: decimos que
                hay más componentes que cuidar.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Elementos de ciberseguridad a administrar"
              >
                {[
                  ["Accesos", "Credenciales, roles, permisos y acceso remoto."],
                  ["Equipos", "Firmware, segmentación, logs y mantenimiento."],
                  ["Datos", "Cifrado cuando corresponda y conservación definida."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                No se desarrolla aquí un programa de ciberseguridad ni un tutorial ofensivo; la
                administración de estos elementos corresponde a cada organización según su contexto.
              </p>
            </section>

            <section id="privacidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="privacidad" number="17">
                Privacidad cuando la información se combina
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Si la operación combina video, identidad, ubicación, accesos, nombres o teléfonos,
                pueden existir obligaciones de protección de datos personales según el contexto. La
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                (LFPDPPP) es la referencia vigente en México.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Principios de protección de datos"
              >
                {[
                  ["Finalidad", "Definir y documentar para qué se tratan los datos."],
                  ["Proporcionalidad", "Reunir sólo lo necesario para la finalidad."],
                  ["Información", "Mantener avisos de privacidad vigentes y accesibles."],
                  ["Acceso", "Definir quién puede consultar cada dato."],
                  ["Conservación", "Limitar la retención a lo necesario."],
                  ["Seguridad", "Establecer medidas técnicas y administrativas adecuadas."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Esto no es asesoría jurídica. Los puntos concretos deben revisarse con el área
                jurídica o de privacidad de cada organización.
              </p>
            </section>

            <section id="causalidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="causalidad" number="18">
                Correlación no es causalidad
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Que varios datos coincidan en tiempo y lugar no confirma por sí solo la causa de un
                evento.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["GPS", "Una unidad aparece detenida."],
                  ["Video", "Una cámara muestra personas cercanas."],
                  ["Alarma", "Un sensor registra una condición."],
                ].map(([title, detail]) => (
                  <div key={title} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Eso no significa automáticamente que haya ocurrido un robo. Los datos ayudan a
                construir contexto; la validación sigue siendo necesaria antes de definir qué pasó.
              </p>
            </section>

            <section id="arquitectura" className="mt-16 scroll-mt-28">
              <SectionTitle id="arquitectura" number="19">
                De la señal a la acción
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Para cerrar el modelo, el artículo propone dos diagramas de lectura, ambos
                conceptuales y sin relación con ningún producto específico.
              </p>
              <FlowSteps
                steps={[
                  ["Sensor · GPS · Video", "Las fuentes generan condiciones detectables."],
                  ["Evento", "Un sistema registra la condición."],
                  [
                    "Correlación de datos",
                    "Se relacionan hora, ubicación, video y contexto disponible.",
                  ],
                  ["Validación", "Una persona o procedimiento revisa la información."],
                  ["Escalamiento", "Se notifica al responsable correspondiente."],
                  ["Acción", "Se aplica la respuesta definida por la organización."],
                ]}
                label="Flujo de referencia del evento a la acción"
              />
              <div className="mt-10">
                <p className="text-eyebrow text-primary">Preguntas complementarias</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {[
                    ["GPS", "¿Dónde?"],
                    ["Video", "¿Qué se veía?"],
                    ["Alarma", "¿Qué condición ocurrió?"],
                    ["Monitoreo", "¿Quién revisa y escala?"],
                  ].map(([system, question]) => (
                    <div key={system} className="border border-line bg-surface-elevated p-5">
                      <p className="text-eyebrow text-primary">{system}</p>
                      <p className="mt-3 text-title leading-6">{question}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border border-line bg-surface-alt px-5 py-6 text-center text-sm font-semibold text-primary">
                  = Mayor contexto operativo
                </div>
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Ambos diagramas son un modelo editorial de este artículo, no una arquitectura de
                sistema ni una oferta de producto.
              </p>
            </section>

            <section id="aportes" className="mt-16 scroll-mt-28">
              <SectionTitle id="aportes" number="20">
                Qué aporta cada sistema
              </SectionTitle>
              <div className="overflow-x-auto border border-line">
                <table className="min-w-[720px] w-full border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">
                    Qué aporta cada sistema, qué no aporta por sí solo y ejemplo de integración
                  </caption>
                  <thead className="bg-surface-alt text-ink">
                    <tr>
                      <th scope="col" className="p-4">
                        Sistema
                      </th>
                      <th scope="col" className="p-4">
                        Qué aporta
                      </th>
                      <th scope="col" className="p-4">
                        Qué NO aporta por sí solo
                      </th>
                      <th scope="col" className="p-4">
                        Ejemplo de integración
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    {[
                      [
                        "GPS",
                        "Ubicación, recorrido y tiempos.",
                        "No explica visualmente qué ocurre.",
                        "Correlacionar un evento con una ubicación.",
                      ],
                      [
                        "Video",
                        "Contexto visual.",
                        "No conoce necesariamente intención ni ruta.",
                        "Revisar un evento.",
                      ],
                      [
                        "Control de acceso",
                        "Credencial, puerta y evento.",
                        "No muestra todo el contexto físico.",
                        "Asociar un evento de acceso con video.",
                      ],
                      [
                        "Alarma",
                        "Condición detectada.",
                        "No confirma automáticamente un incidente.",
                        "Activar una revisión.",
                      ],
                      [
                        "Monitoreo",
                        "Recepción, clasificación y escalamiento.",
                        "No sustituye sensores.",
                        "Coordinar una respuesta.",
                      ],
                    ].map(([sistema, aporta, noAporta, ejemplo]) => (
                      <tr key={sistema} className="border-t border-line">
                        <th scope="row" className="p-4 font-semibold text-ink">
                          {sistema}
                        </th>
                        <td className="p-4">{aporta}</td>
                        <td className="p-4">{noAporta}</td>
                        <td className="p-4">{ejemplo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="beneficios" className="mt-16 scroll-mt-28">
              <SectionTitle id="beneficios" number="21">
                Beneficios potenciales, sin promesas
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando la integración responde a un objetivo y se prueba, puede traer beneficios
                operativos. También conviene ser explícito sobre lo que no debe prometerse.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <aside className="border-l-2 border-primary bg-primary-soft px-5 py-5">
                  <p className="text-eyebrow text-primary">Beneficios potenciales</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-ink">
                    {[
                      "Más contexto al revisar un evento.",
                      "Menos sistemas aislados.",
                      "Revisión más rápida de información relacionada.",
                      "Trazabilidad de eventos.",
                      "Mejor coordinación entre áreas.",
                    ].map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </aside>
                <aside className="border border-dashed border-line bg-surface px-5 py-5">
                  <p className="text-eyebrow text-primary">Lo que no debe prometerse</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-muted">
                    {[
                      "Reducción porcentual de robos.",
                      "Respuesta X% más rápida.",
                      "Ahorro o retorno de inversión garantizado.",
                      "Reducción de personal.",
                      "Cero falsos positivos.",
                      "Prevención garantizada.",
                    ].map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </aside>
              </div>
            </section>

            <section id="errores" className="mt-16 scroll-mt-28">
              <SectionTitle id="errores" number="22">
                Errores conceptuales que conviene evitar
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {errores.map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="checklist" className="mt-16 scroll-mt-28">
              <SectionTitle id="checklist" number="23">
                Qué revisar antes de integrar sistemas de seguridad
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

            <section id="escenarios" className="mt-16 scroll-mt-28">
              <SectionTitle id="escenarios" number="24">
                Tres escenarios hipotéticos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Instalación",
                    "Un sensor detecta la apertura de un acceso fuera del horario establecido. Si existe integración, se genera el evento, se consulta el video, se revisa el control de acceso y se escala según el procedimiento. No se afirma que sea una intrusión.",
                  ],
                  [
                    "Flotilla",
                    "Se genera un evento asociado a una unidad. El GPS aporta ubicación y timestamp; el video puede aportar contexto visual; el monitoreo permite coordinar revisión y escalamiento. No se atribuyen estas capacidades a BÚNKER.",
                  ],
                  [
                    "Falla técnica",
                    "Una cámara deja de reportar. El sistema puede registrar pérdida de comunicación, hora y dispositivo afectado, si la plataforma lo soporta. Se sigue el procedimiento técnico. La enseñanza: la integración también debe considerar la salud del sistema.",
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

            <section id="preguntas-frecuentes" className="mt-16 scroll-mt-28">
              <SectionTitle id="preguntas-frecuentes" number="25">
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
                Antes de integrar más tecnología, conviene definir qué información necesita
                compartir cada sistema y qué decisión debe habilitar esa integración
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                BÚNKER puede ayudarle a evaluar las necesidades de información de su operación y a
                revisar cómo distintos sistemas de seguridad y seguimiento se coordinan dentro de
                sus procedimientos.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                Conozca los servicios de{" "}
                <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink>,{" "}
                <InternalLink to="/servicios/videovigilancia">videovigilancia</InternalLink>,{" "}
                <InternalLink to="/servicios/gps-rastreo">GPS y rastreo</InternalLink>,{" "}
                <InternalLink to="/servicios/tecnologia-perimetral">
                  tecnología perimetral
                </InternalLink>{" "}
                y{" "}
                <InternalLink to="/servicios/instalacion-soporte">
                  instalación y soporte
                </InternalLink>
                .
              </p>
            </section>

            <section className="mt-16" aria-labelledby="relacionados">
              <SectionTitle id="relacionados" number="26">
                Continúe explorando
              </SectionTitle>
              <div className="grid gap-4 sm:grid-cols-3">
                {(
                  [
                    [
                      "Videovigilancia empresarial",
                      "videovigilancia-que-considerar-antes-instalar-camaras",
                    ],
                    [
                      "GPS para decisiones operativas",
                      "gps-logistica-como-utilizar-informacion-decisiones",
                    ],
                    [
                      "Coordinación de respuesta ante alertas",
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
              <SectionTitle id="fuentes" number="27">
                Fuentes y referencias
              </SectionTitle>
              <ul className="space-y-3 text-sm leading-6 text-ink-muted">
                {[
                  [
                    "ONVIF — Specification Profiles",
                    "https://www.onvif.org/profiles/specifications/",
                  ],
                  ["ONVIF — Mission", "https://www.onvif.org/about/mission/"],
                  ["ONVIF — Profile C", "https://www.onvif.org/profiles/onvif-profile-c/"],
                  [
                    "ONVIF — Profile M (anuncio de lanzamiento)",
                    "https://www.onvif.org/blog/2021/06/30/onvif-announces-the-release-of-profile-m/",
                  ],
                  [
                    "CISA — Security Integration Guidance (CFATS RBP)",
                    "https://www.cisa.gov/sites/default/files/publications/cfats-rbps-guidance_508.pdf",
                  ],
                  ["GPS.gov — The Global Positioning System", "https://www.gps.gov/gps"],
                  [
                    "Ley Federal de Seguridad Privada — Cámara de Diputados",
                    "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFSP.pdf",
                  ],
                  [
                    "Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
                    "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf",
                  ],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary underline underline-offset-4"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-6 text-ink-muted">
                Contenido informativo. La arquitectura, capacidades, integraciones, autorizaciones y
                procedimientos deben verificarse para cada servicio y operación.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
