import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["pocas-palabras", "En pocas palabras"],
  ["modelo-decision", "Del dato a la decisión"],
  ["que-puede-aportar", "Qué puede aportar el GPS"],
  ["ahora-historico-analisis", "Ahora, histórico y análisis"],
  ["tiempos-variabilidad", "Tiempos de viaje y variabilidad"],
  ["paradas-permanencias", "Paradas y permanencias"],
  ["geocercas", "Geocercas"],
  ["ruta-planeada", "Ruta planeada vs recorrida"],
  ["limites", "Lo que el GPS no confirma"],
  ["mapa-decision", "De mapa a decisión"],
  ["indicadores-kpi", "Indicadores y KPIs"],
  ["dashboards", "Dashboards"],
  ["alertas", "Alertas y responsables"],
  ["metodo", "Método en nueve pasos"],
  ["calidad-datos", "Calidad de los datos"],
  ["integracion", "Integración"],
  ["privacidad", "Privacidad en México"],
  ["escenarios", "Escenarios hipotéticos"],
  ["errores", "Errores comunes"],
  ["tabla", "Qué dice cada dato"],
  ["checklist", "Checklist"],
  ["preguntas", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const resumen = [
  "Ubicación y recorrido son el punto de partida, no la conclusión.",
  "Un dato GPS se convierte en indicador solo cuando responde una pregunta.",
  "Detenido no equivale a ralentí; trayecto distinto no equivale a incumplimiento.",
  "Contexto e histórico ayudan a interpretar, no a culpar.",
  "Las metas y umbrales los define cada operación, no una regla universal.",
  "La calidad del dato se revisa antes de tomar decisiones.",
] as const;

const modelo = [
  ["Dato GPS", "Posición y hora registradas por el equipo."],
  ["Contexto", "Qué rodea la señal: zona, momento, parada, recorrido."],
  ["Indicador", "Cómo se resume: tiempo de viaje, permanencia, variabilidad."],
  ["Patrón o excepción", "¿Es algo habitual o merece atención frente a lo esperado?"],
  ["Decisión", "Qué conviene investigar, comparar o ajustar."],
  ["Seguimiento", "Revisar después qué ocurrió con la decisión."],
] as const;

const escalera = [
  ["Dato", "Latitud, longitud y hora", "Lo que el equipo registra."],
  [
    "Información",
    "Trayectoria, parada y duración",
    "Lo que se reconstruye a partir de la posición en el tiempo.",
  ],
  [
    "Indicador",
    "Tiempo de viaje, permanencia y variabilidad",
    "Una forma de resumir y comparar esa información.",
  ],
  [
    "Decisión",
    "Investigar, comparar, ajustar o planificar",
    "Lo que la operación hace con el indicador.",
  ],
] as const;

const derivados = [
  "Posición en un momento dado.",
  "Trayectoria o recorrido observado.",
  "Tiempo entre puntos de la secuencia.",
  "Velocidad estimada entre posiciones.",
  "Paradas identificadas por ausencia de desplazamiento.",
  "Permanencias cuando la plataforma lo registra.",
  "Recorrido histórico consultable.",
] as const;

const horizontes = [
  [
    "Ahora",
    "¿Dónde está?",
    "Orienta la atención en el momento: ubicación de la unidad, zona y situación actual.",
  ],
  [
    "Histórico",
    "¿Qué ocurrió?",
    "Permite volver a un recorrido o evento y revisar la secuencia con registros.",
  ],
  [
    "Análisis",
    "¿Qué patrón aparece?",
    "Comparar varios recorridos revela permanencias, variaciones o excepciones que un instante no muestra.",
  ],
] as const;

const proxies = [
  ["Promedio", "Resume la duración típica de un conjunto de viajes."],
  ["Variabilidad", "Muestra qué tan parecidos o distintos son esos viajes entre sí."],
] as const;

const noAtribuibles = [
  "RPM del motor",
  "Nivel real de combustible",
  "Consumo de combustible",
  "Temperatura del motor",
  "Códigos de diagnóstico (DTC)",
  "Temperatura de la carga",
  "Apertura de puertas",
  "Cinturón o fatiga",
  "Distracción del conductor",
  "Ignición y ralentí real",
  "Odómetro de la ECU",
] as const;

const mapaPasos = [
  ["Mapa", "¿Dónde está la unidad?"],
  ["Histórico", "¿Qué ocurrió en este recorrido?"],
  ["Indicador", "¿Con qué frecuencia ocurre?"],
  ["Contexto", "¿Qué puede explicar el comportamiento?"],
  ["Decisión", "¿Qué debemos revisar o ajustar?"],
] as const;

const kpiNiveles = [
  ["Dato", "Una observación: una posición, un registro horario, una velocidad estimada."],
  ["Indicador", "Resume o interpreta observaciones: tiempo de viaje, permanencia, variabilidad."],
  [
    "KPI",
    "Está vinculado a un objetivo relevante del negocio y a una responsabilidad de seguimiento.",
  ],
] as const;

const posiblesIndicadores = [
  "Tiempo observado de viaje entre puntos.",
  "Permanencia en zonas de interés.",
  "Frecuencia de paradas en un recorrido.",
  "Variabilidad entre recorridos equivalentes.",
  "Cumplimiento de una regla interna definida por la operación.",
  "Diferencias entre trayectoria planeada y observada.",
] as const;

const dashGrid = [
  ["Pregunta", "¿Dónde se acumulan permanencias?"],
  ["Datos", "Entrada, salida y tiempo en zona."],
  ["Visual", "Tendencia o comparación por unidad."],
  ["Decisión", "Investigar causas y proceso."],
] as const;

const metodo = [
  "Define la pregunta que la operación necesita responder.",
  "Identifica qué dato puede aportar una señal.",
  "Comprueba que ese dato realmente existe.",
  "Revisa su calidad antes de usarlo.",
  "Construye el indicador con la información disponible.",
  "Define quién lo revisa y con qué frecuencia.",
  "Define cuándo un valor requiere atención.",
  "Toma una acción concreta.",
  "Revisa después el resultado y ajusta el proceso.",
] as const;

const calidad = [
  "Frecuencia de actualización de las posiciones.",
  "Huecos o saltos en el recorrido.",
  "Timestamps confiables y coherentes.",
  "Consistencia entre las unidades de la flotilla.",
  "Cobertura en las rutas reales.",
  "Cambios de configuración que alteren comparaciones.",
  "Definición de variables antes de comparar.",
] as const;

const sinDato = [
  ["Sin ignición", "no afirmar ralentí."],
  ["Sin ruta planeada", "no afirmar cumplimiento."],
  ["Sin combustible", "no afirmar consumo real."],
  ["Sin contexto", "no asignar causa."],
] as const;

const privacidad = [
  ["Finalidad", "Definir y documentar para qué se tratan las ubicaciones."],
  ["Proporcionalidad", "Recopilar solo la información necesaria para la finalidad."],
  ["Información", "Mantener avisos de privacidad vigentes y accesibles."],
  ["Responsabilidad", "Designar responsables del tratamiento."],
  ["Conservación", "Limitar la retención a lo necesario para la finalidad."],
] as const;

const escenarios = [
  [
    "¿Por qué algunos viajes tardan más?",
    "Datos: salida, recorrido, llegada, paradas e histórico. Análisis: comparar recorridos equivalentes. Resultado: detectar dónde vale la pena investigar. No se promete una mejora porcentual.",
  ],
  [
    "¿Cuánto permanecen las unidades en un centro?",
    "Datos: entrada y salida, si la plataforma soporta ese registro. Indicador: permanencia observada. Decisión: investigar patrones y sus causas.",
  ],
  [
    "¿Se sigue la ruta prevista?",
    "Requiere ruta planeada y trayectoria observada. No se asume incumplimiento automático: primero se revisa el contexto del recorrido.",
  ],
] as const;

const errores = [
  "Usar el GPS solo como mapa.",
  "Crear KPIs sin un objetivo.",
  "Asumir causalidad desde una señal.",
  "Interpretar detenido como ralentí.",
  "Calificar un trayecto distinto como incumplimiento.",
  "Ignorar la calidad de los datos.",
  "Medir demasiadas cosas a la vez.",
  "Acumular alertas que nadie revisa.",
  "No asignar responsables.",
  "No revisar históricos.",
  "Mantener dashboards que nadie utiliza.",
] as const;

const tabla = [
  ["Ubicación", "Posición registrada.", "No explica causa.", "Seguimiento."],
  ["Timestamp", "Momento registrado.", "No explica el proceso completo.", "Histórico."],
  [
    "Velocidad",
    "Movimiento estimado.",
    "No es necesariamente el valor de la ECU.",
    "Análisis del recorrido.",
  ],
  ["Parada", "Ausencia de desplazamiento.", "No significa ralentí.", "Permanencias."],
  ["Trayectoria", "Recorrido observado.", "No equivale a ruta planeada.", "Comparación."],
] as const;

const checklist = [
  "¿Qué decisión quiero tomar?",
  "¿Qué dato necesito para tomarla?",
  "¿Ese dato realmente existe?",
  "¿De dónde proviene?",
  "¿Con qué frecuencia se registra?",
  "¿Tiene huecos o inconsistencias?",
  "¿Necesita contexto adicional?",
  "¿Es un evento o un patrón?",
  "¿Quién revisará el indicador?",
  "¿Cuándo requiere acción?",
  "¿Cómo documentaremos la decisión?",
  "¿Cómo comprobaremos el resultado?",
] as const;

const faqs = [
  [
    "¿Qué información aporta un GPS de flotilla?",
    "En esencia, posicionamiento, navegación y tiempo. A partir de posiciones en el tiempo y según la configuración, pueden analizarse recorridos, tiempos, paradas y permanencias. No explica por sí solo causas ni estado mecánico.",
  ],
  [
    "¿El GPS puede medir combustible?",
    "No por sí solo. El nivel o consumo real suele requerir sensores, interfaces como CAN, OBD o ECU, u otras fuentes. Sin esa información no conviene afirmar un consumo.",
  ],
  [
    "¿Vehículo detenido significa ralentí?",
    "No. La unidad puede estar estacionada, cargando, descargando, esperando o detenida con el motor encendido o apagado. Confirmar ralentí real puede requerir otras señales.",
  ],
  [
    "¿Cómo puede medirse una permanencia?",
    "A partir de posiciones y tiempos: si la unidad permanece en una zona durante un tiempo y la plataforma lo registra. También puede apoyarse en entrada y salida cuando existen delimitaciones como geocercas.",
  ],
  [
    "¿Qué diferencia existe entre dato GPS e indicador?",
    "El dato es una observación, como una posición o una hora. El indicador resume o interpreta observaciones, como tiempo de viaje o permanencia. El KPI, en específico, se vincula a un objetivo del negocio.",
  ],
  [
    "¿Cómo se compara una ruta planeada con una recorrida?",
    "Se comparan la ruta planificada y la trayectoria observada. Una diferencia no implica incumplimiento; primero se revisa el contexto del recorrido.",
  ],
  [
    "¿El GPS calcula una ETA?",
    "No automáticamente ni con precisión garantizada. Algunas plataformas combinan datos de posición con otras fuentes para estimar la llegada; la confiabilidad depende de la plataforma y las condiciones de operación.",
  ],
  [
    "¿Para qué sirve guardar histórico?",
    "Para volver a un recorrido, revisar una secuencia y comparar patrones. El tiempo real muestra dónde está; el histórico muestra qué ocurrió; el análisis muestra qué se repite.",
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

export function GpsDecisionesGuide({ post }: { post: BlogPost }) {
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
                Rastreo GPS
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">{post.title}</h1>
              <p className="mt-6 max-w-3xl text-lead text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 14 min
              <br />
              <span className="font-normal text-ink-muted">
                Del punto en el mapa a la decisión operativa.
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
                width={1600}
                height={900}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: post.cover.objectPosition }}
              />
            ) : null}
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              La imagen acompaña esta guía; los datos y capacidades descritas deben confirmarse en
              cada plataforma y configuración.
            </p>

            <section id="pocas-palabras" className="mt-14 scroll-mt-28">
              <SectionTitle id="pocas-palabras" number="01">
                En pocas palabras
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                Tener GPS no es lo mismo que utilizar bien los datos GPS. Un punto en un mapa puede
                indicar dónde está una unidad; la pregunta operativa es qué se puede aprender y
                decidir a partir del recorrido que dejó esa unidad.
              </p>
              <ul
                className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-2"
                aria-label="Puntos clave de esta guía"
              >
                {resumen.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 bg-surface-elevated px-4 py-4 text-sm font-semibold leading-6 text-ink"
                  >
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="modelo-decision" className="mt-16 scroll-mt-28">
              <SectionTitle id="modelo-decision" number="02">
                El modelo editorial: del dato GPS a la decisión
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Esta guía organiza la lectura con un modelo editorial: una secuencia que conecta el
                dato GPS con una decisión operativa y una revisión posterior. No es un estándar
                oficial ni un proceso obligatorio; es una forma de ordenar el análisis.
              </p>
              <FlowSteps
                steps={modelo}
                label="Secuencia editorial de dato GPS a decisión y seguimiento"
              />
              <p className="mt-8 max-w-[65ch] text-base leading-8 text-ink-muted">
                Cada salto convierte el dato en algo más útil, y también exige más contexto. Un
                indicador construido sobre un dato que no existe o que se interpreta mal puede
                orientar la conversación en la dirección equivocada.
              </p>
            </section>

            <section id="que-puede-aportar" className="mt-16 scroll-mt-28">
              <SectionTitle id="que-puede-aportar" number="03">
                Qué puede aportar realmente el GPS
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Un receptor GPS aporta, en esencia, posicionamiento, navegación y tiempo. Cuando las
                posiciones se observan a través del espacio y el tiempo, forman una secuencia de
                movimiento a partir de la cual se puede hablar de recorridos, velocidad estimada,
                paradas o permanencias. Esta es una representación conceptual, no una fórmula
                técnica.
              </p>
              <FormulaBand steps={["Posición", "Timestamp"]} result="Secuencia de movimiento" />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {derivados.map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio práctico</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  No toda plataforma entrega automáticamente estos indicadores: dependen de la
                  frecuencia, la calidad, la disponibilidad y la configuración de cada solución.
                </p>
              </aside>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                La precisión y el desempeño de un receptor dependen de factores como la geometría
                satelital, las obstrucciones, la propagación, el multipath y el propio receptor. No
                hace falta llenar el análisis de cifras de precisión: el objetivo es tomar
                decisiones operativas con el nivel de detalle que la información realmente ofrece.
              </p>
            </section>

            <section id="ahora-historico-analisis" className="mt-16 scroll-mt-28">
              <SectionTitle id="ahora-historico-analisis" number="04">
                Ahora, histórico y análisis responden preguntas distintas
              </SectionTitle>
              <div className="grid gap-px border border-line bg-line md:grid-cols-3">
                {horizontes.map(([label, question, detail]) => (
                  <div key={label} className="bg-surface-elevated p-6">
                    <p className="text-eyebrow text-primary">{label}</p>
                    <h3 className="mt-3 text-title">{question}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                El tiempo real se usa para atención inmediata; el histórico y el análisis, para
                comprender procesos. Confundirlos es una fuente habitual de malas conclusiones: un
                patrón solo aparece cuando se comparan varios recorridos.
              </p>
            </section>

            <section id="tiempos-variabilidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="tiempos-variabilidad" number="05">
                Tiempos de viaje y variabilidad
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Conceptualmente, con una salida, una trayectoria y una llegada puede observarse un
                tiempo de viaje entre dos puntos. En este artículo se usa solo como concepto, no
                como estándar oficial: las posiciones en el tiempo permiten ver cuánto tardó un
                recorrido.
              </p>
              <FormulaBand
                steps={["Salida", "Trayectoria", "Llegada"]}
                result="Tiempo observado de viaje"
              />
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                El promedio no significa consistencia. Dos rutas pueden tener tiempos promedio
                parecidos y comportarse de forma muy distinta: una con viajes constantes y otra con
                picos y demoras. La noción de fiabilidad del tiempo de viaje (travel-time
                reliability) sirve para pensar esa variedad; no la convertimos en un KPI obligatorio
                para México.
              </p>
              <div className="mt-8 grid gap-4 border-y border-line py-6 sm:grid-cols-2">
                {proxies.map(([title, detail]) => (
                  <div key={title}>
                    <h3 className="text-title">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="paradas-permanencias" className="mt-16 scroll-mt-28">
              <SectionTitle id="paradas-permanencias" number="06">
                Paradas y permanencias: del dato a la pregunta
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Una parada puede identificarse a partir del movimiento o la posición según el
                sistema: la unidad permanece en un punto durante un tiempo. Eso es un dato. La causa
                no aparece en la coordenada.
              </p>
              <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
                <div className="bg-surface-elevated p-6">
                  <p className="text-eyebrow text-primary">El dato dice</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-ink">
                    «La unidad permaneció cierto tiempo en un punto.»
                  </p>
                </div>
                <div className="bg-surface-elevated p-6">
                  <p className="text-eyebrow text-primary">El dato no dice</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-ink">
                    «El operador perdió tiempo» ni «se trató de ralentí».
                  </p>
                </div>
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                La pregunta correcta es: <strong className="text-ink">¿por qué ocurrió?</strong>{" "}
                Espera de carga o descarga, horario, tránsito, escala autorizada o un procedimiento
                son hipótesis que requieren contexto adicional. A lo largo de este artículo el foco
                es siempre dato → pregunta, nunca dato → culpa.
              </p>
            </section>

            <section id="geocercas" className="mt-16 scroll-mt-28">
              <SectionTitle id="geocercas" number="07">
                Geocercas: de la zona a la información
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Una geocerca es una zona virtual definida sobre un área geográfica. Dependiendo de
                la plataforma, puede utilizarse para registrar la entrada, la salida o la
                permanencia en esa zona. No asumimos que toda plataforma la ofrezca ni inventamos
                dimensiones.
              </p>
              <FormulaBand steps={["Entrada", "Salida"]} result="Permanencia observada" />
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Varios eventos históricos pueden convertirse en un patrón de permanencias y,
                después, en una pregunta operativa: ¿por qué algunas unidades permanecen más que
                otras? Esto no reduce tiempos automáticamente; orienta la revisión. Para el marco de
                capas completo, consulte la{" "}
                <InternalLink to="/blog/como-mejorar-visibilidad-flotilla-logistica">
                  guía de visibilidad operativa de flotilla
                </InternalLink>
                .
              </p>
            </section>

            <section id="ruta-planeada" className="mt-16 scroll-mt-28">
              <SectionTitle id="ruta-planeada" number="08">
                Ruta planeada frente a ruta recorrida
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                El GPS muestra el recorrido observado; no conoce necesariamente la ruta que la
                empresa planeó. Para hablar de cumplimiento se necesita comparar la ruta planificada
                con la trayectoria observada.
              </p>
              <FormulaBand
                steps={["Ruta planificada", "Trayectoria observada"]}
                result="Comparación"
              />
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio práctico</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  No llamar «desvío no autorizado» a cualquier diferencia. Una variación puede
                  deberse a obras viales, tráfico, cierres o una instrucción vigente. Primero la
                  pregunta; después la conclusión.
                </p>
              </aside>
            </section>

            <section id="limites" className="mt-16 scroll-mt-28">
              <SectionTitle id="limites" number="09">
                Lo que el GPS no confirma por sí solo
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Un receptor de GPS aporta posición, no el estado mecánico del vehículo. Distancia,
                velocidad y ralentí requieren cuidado antes de convertirse en conclusiones.
              </p>
              <div className="mt-8 max-w-[65ch] space-y-10 text-base leading-8 text-ink-muted">
                <section>
                  <h3 className="text-title">Distancia derivada no es odómetro</h3>
                  <p className="mt-3">
                    La distancia calculada a partir de la trayectoria GPS no equivale al odómetro
                    real del vehículo. Son referencias diferentes y no deben presentarse como
                    equivalentes.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">Velocidad estimada, no lectura de la ECU</h3>
                  <p className="mt-3">
                    Puede existir velocidad derivada del sistema GPS. Una lectura aislada no debe
                    convertirse en conclusión automática sobre conducción, infracción o
                    comportamiento: el contexto importa.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">Detenido no es ralentí</h3>
                  <p className="mt-3">
                    Una unidad que no se mueve puede estar detenida con el motor encendido o
                    apagado, cargando, descargando, esperando o estacionada. Confirmar ralentí real
                    puede requerir otras señales, como ignición o interfaces del vehículo.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">Telemetría adicional es otra capa</h3>
                  <p className="mt-3">El GPS solo tampoco mide variables como estas:</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                    {noAtribuibles.map((item) => (
                      <li key={item} className="border-l border-primary pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">
                    Esas variables pueden requerir ignición, sensores, CAN, OBD, ECU, hardware
                    adicional u otras fuentes. Si está evaluando qué esperar de un sistema, consulte
                    la{" "}
                    <InternalLink to="/blog/que-revisar-antes-contratar-sistema-rastreo-gps">
                      guía para evaluar un sistema de rastreo GPS
                    </InternalLink>
                    .
                  </p>
                </section>
              </div>
            </section>

            <section id="mapa-decision" className="mt-16 scroll-mt-28">
              <SectionTitle id="mapa-decision" number="10">
                De mapa a decisión
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Este esquema condensa el recorrido conceptual de la guía: empezar por el plano
                («dónde está») y terminar en una revisión concreta. No es un estándar, es una ruta
                de lectura.
              </p>
              <FlowSteps steps={mapaPasos} label="Ruta conceptual de mapa a decisión operativa" />
            </section>

            <section id="indicadores-kpi" className="mt-16 scroll-mt-28">
              <SectionTitle id="indicadores-kpi" number="11">
                Indicadores, KPIs y metas: diferencias que importan
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                No toda variable GPS debe convertirse en un KPI. Conviene distinguir qué es una
                observación, qué resume, y qué está atado a un objetivo de negocio.
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {kpiNiveles.map(([term, definition]) => (
                  <div key={term} className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                    <dt className="font-semibold text-ink">{term}</dt>
                    <dd className="text-sm leading-6 text-ink-muted">
                      <span className="mr-2 text-primary">→</span>
                      {definition}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Posibles indicadores, cuando los datos existan:
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {posiblesIndicadores.map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Sin metas inventadas</p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  Cada operación define sus propios criterios: umbrales de permanencia, cumplimiento
                  o ralentí dependen de su contexto y sus objetivos. Esta guía no publica
                  porcentajes de ralentí, niveles de cumplimiento, minutos máximos detenido,
                  desviaciones, velocidades ideales, ahorros ni productividad.
                </p>
              </aside>
            </section>

            <section id="dashboards" className="mt-16 scroll-mt-28">
              <SectionTitle id="dashboards" number="12">
                Dashboards que responden preguntas
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Un buen dashboard responde preguntas; no muestra datos porque sí. Antes de pedir más
                pantallas, defina la pregunta que debe responder. Un ejemplo conceptual:
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-4"
                aria-label="De pregunta a decisión en un dashboard"
              >
                {dashGrid.map(([label, detail]) => (
                  <div key={label} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{label}</p>
                    <p className="mt-3 text-sm leading-6 text-ink">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Si el dashboard no tiene una pregunta detrás, es material de exhibición. La decisión
                de qué mostrar nace de la decisión que se quiere tomar, no del número de widgets
                disponibles.
              </p>
            </section>

            <section id="alertas" className="mt-16 scroll-mt-28">
              <SectionTitle id="alertas" number="13">
                Alertas y responsables: menos ruido, más criterio
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Una alerta debe existir porque hay una condición que requiere atención. Más alertas
                no significan mejor control: pueden convertirse en ruido que nadie revisa. Además,
                una alerta no es un problema confirmado; primero se revisa el contexto y después se
                decide.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Sin responsable, la alerta no produce acción; sin seguimiento, la acción no produce
                aprendizaje. Para ordenar validación, escalamiento y registro, consulte la{" "}
                <InternalLink to="/blog/como-se-coordina-respuesta-alerta-seguridad-monitoreo">
                  guía sobre la coordinación de la respuesta ante una alerta de seguridad
                </InternalLink>
                .
              </p>
            </section>

            <section id="metodo" className="mt-16 scroll-mt-28">
              <SectionTitle id="metodo" number="14">
                Método práctico en nueve pasos
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Esta es una metodología práctica de este artículo, no un estándar oficial. Su
                objetivo es evitar que la tecnología se use antes de entender la pregunta operativa.
              </p>
              <ol className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {metodo.map((item, index) => (
                  <li key={item} className="flex gap-4 border-t border-line pt-4">
                    <span className="text-eyebrow text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-ink-muted">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="calidad-datos" className="mt-16 scroll-mt-28">
              <SectionTitle id="calidad-datos" number="15">
                Calidad de los datos antes de decidir
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Antes de tomar decisiones conviene revisar cómo se generan los registros. La calidad
                varía según la fuente y el contexto; no inventamos un porcentaje mínimo aceptable.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {calidad.map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-y border-primary/35 bg-primary-soft px-6 py-10 sm:px-9">
                <p className="text-eyebrow text-primary">Regla práctica</p>
                <h3 className="mt-3 text-headline">
                  Si no tienes el dato, no inventes el indicador.
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                  {sinDato.map(([condition, consequence]) => (
                    <li key={condition} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>
                        <strong className="font-semibold text-ink">{condition} → </strong>
                        {consequence}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="integracion" className="mt-16 scroll-mt-28">
              <SectionTitle id="integracion" number="16">
                Integración con los sistemas de la operación
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Si la organización utiliza ERP, TMS, WMS o sistemas propios, puede tener valor
                integrar información de rastreo con esos procesos. La recomendación práctica es
                comprobar si la plataforma dispone de mecanismos compatibles, como API, webhooks o
                exportaciones, con los sistemas de la organización.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Este artículo no afirma que BÚNKER ofrezca API, webhooks, conectores, ERP ni TMS. La
                existencia y el alcance de una integración deben verificarse con cada proveedor y
                evaluarse junto con seguridad, responsables y datos necesarios. Para una visión
                conjunta, consulte también la{" "}
                <InternalLink to="/blog/integrar-videovigilancia-gps-monitoreo-seguridad-proteccion">
                  lectura sobre la integración de videovigilancia, GPS y monitoreo
                </InternalLink>
                .
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Pregunte al proveedor</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  ¿Qué mecanismos de intercambio de información ofrece la plataforma y bajo qué
                  condiciones de alcance y seguridad?
                </p>
              </aside>
            </section>

            <section id="privacidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="privacidad" number="17">
                Privacidad y datos personales en México
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando la ubicación puede asociarse con una persona identificada o identificable,
                pueden existir obligaciones de protección de datos personales. La LFPDPPP vigente
                regula el tratamiento de datos personales; esta guía no constituye asesoría
                jurídica.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {privacidad.map(([title, detail]) => (
                  <li key={title} className="border-l border-primary pl-4">
                    <strong className="font-semibold text-ink">{title}: </strong>
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Cada organización debe revisar su caso con su área jurídica o de privacidad. No
                inventamos períodos de retención ni usos permitidos.
              </p>
            </section>

            <section id="escenarios" className="mt-16 scroll-mt-28">
              <SectionTitle id="escenarios" number="18">
                Tres escenarios hipotéticos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {escenarios.map(([title, detail]) => (
                  <section key={title} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">Ejemplo hipotético</p>
                    <h3 className="mt-3 text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </section>
                ))}
              </div>
            </section>

            <section className="mt-16 scroll-mt-28" aria-labelledby="errores">
              <SectionTitle id="errores" number="19">
                Errores comunes
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {errores.map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="tabla" className="mt-16 scroll-mt-28">
              <SectionTitle id="tabla" number="20">
                Qué dice y qué no dice cada dato
              </SectionTitle>
              <div className="overflow-x-auto border border-line">
                <table className="min-w-[720px] w-full border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">
                    Dato GPS, qué puede mostrar, qué no debe asumirse y posible uso
                  </caption>
                  <thead className="bg-surface-alt text-ink">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">
                        Dato
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Qué puede mostrar
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Qué NO debe asumirse
                      </th>
                      <th scope="col" className="p-4 font-semibold">
                        Posible uso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    {tabla.map((row) => (
                      <tr key={row[0]} className="border-t border-line">
                        <th scope="row" className="p-4 font-semibold text-ink">
                          {row[0]}
                        </th>
                        {row.slice(1).map((cell) => (
                          <td key={cell} className="p-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="checklist" className="mt-16 scroll-mt-28">
              <SectionTitle id="checklist" number="21">
                Checklist: qué preguntarle a tus datos GPS
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
              <SectionTitle id="preguntas" number="22">
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
                Antes de crear más alertas o reportes, defina qué necesita decidir la operación
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                Los datos GPS adquieren valor cuando responden una pregunta operativa concreta.
                BÚNKER puede ayudarle a revisar qué información de su flotilla conviene analizar y
                cómo ordenar su revisión.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                Conozca los servicios de{" "}
                <InternalLink to="/servicios/gps-rastreo">GPS y rastreo</InternalLink>,{" "}
                <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink> y{" "}
                <InternalLink to="/servicios/dashcam-ia">dashcam con IA</InternalLink>.
              </p>
            </section>

            <section className="mt-16 scroll-mt-28" aria-labelledby="relacionados">
              <SectionTitle id="relacionados" number="23">
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
              <SectionTitle id="fuentes" number="24">
                Fuentes y referencias
              </SectionTitle>
              <ul className="space-y-3 text-sm leading-6 text-ink-muted">
                <li>
                  <a
                    href="https://www.gps.gov/gps"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    GPS.gov — The Global Positioning System
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gps.gov/gps-accuracy"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    GPS.gov — Accuracy standards and performance
                  </a>
                </li>
                <li>
                  <a
                    href="https://rosap.ntl.bts.gov/view/dot/90551"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Bureau of Transportation Statistics — Transportation Probe Data Guide: Fleet GPS
                    Data
                  </a>
                </li>
                <li>
                  <a
                    href="https://ops.fhwa.dot.gov/wz/resources/publications/fhwahop13043/ch2.htm"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    FHWA — Work Zone Data: position, travel time y demora
                  </a>
                </li>
                <li>
                  <a
                    href="https://ops.fhwa.dot.gov/publications/fhwahop20029/data.html"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    FHWA — Roadway performance measurement con datos de posiciones
                  </a>
                </li>
                <li>
                  <a
                    href="https://ops.fhwa.dot.gov/publications/fhwahop21058/chap5.htm"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    FHWA — Travel time reliability
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
              </ul>
              <p className="mt-8 text-sm leading-6 text-ink-muted">
                Contenido informativo. Las capacidades, compatibilidades y datos disponibles pueden
                variar según vehículo, hardware, configuración, plataforma y condiciones de
                operación. Los estándares estadounidenses citados se usan como referencia
                conceptual, sin trasladarse como reglas obligatorias a México.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
