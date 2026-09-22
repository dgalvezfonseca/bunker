import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["respuesta-directa", "La idea central"],
  ["modelo-practico", "Modelo de capas"],
  ["tiempo-e-historico", "Tiempo real e histórico"],
  ["geocercas-y-eventos", "Geocercas y eventos"],
  ["contexto-y-telemetria", "Contexto y telemetría"],
  ["dato-contexto-decision", "De datos a decisiones"],
  ["metodo", "Método práctico"],
  ["errores", "Errores comunes"],
  ["ejemplo", "Ejemplo hipotético"],
  ["checklist", "Checklist"],
  ["preguntas-frecuentes", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const layers = [
  ["01", "Ubicación", "¿Dónde está la unidad?"],
  ["02", "Recorrido e histórico", "¿Qué trayecto realizó y qué se puede revisar después?"],
  ["03", "Eventos y geocercas", "¿Qué situación merece atención?"],
  ["04", "Contexto", "¿Qué información ayuda a interpretar un evento?"],
  ["05", "Telemetría", "¿Qué variables adicionales están disponibles?"],
  ["06", "Integración operativa", "¿Cómo se relaciona esa información con un proceso?"],
] as const;

const process = [
  "Defina qué necesita saber la operación.",
  "Identifique qué datos responden esa pregunta.",
  "Determine cómo puede obtener esos datos.",
  "Centralice la información que realmente usará.",
  "Defina qué eventos requieren atención.",
  "Asigne responsables para revisar excepciones.",
  "Revise el histórico cuando una situación lo requiera.",
  "Ajuste el proceso con lo que aprenda.",
] as const;

const checklist = [
  "¿Qué preguntas operativas queremos responder con esta información?",
  "¿Qué datos son necesarios y cuáles solo agregarían ruido?",
  "¿Qué eventos requieren atención y quién los revisa?",
  "¿Qué recorrido o historial necesitamos poder consultar después?",
  "¿Qué zonas conviene delimitar virtualmente para nuestra operación?",
  "¿Qué contexto adicional sería útil ante una excepción?",
  "¿Qué datos puede aportar realmente cada vehículo y hardware compatible?",
  "¿Cómo se relacionará la información con los procesos ya existentes?",
  "¿Quién tendrá acceso a la plataforma y con qué responsabilidades?",
] as const;

const faqs = [
  [
    "¿Qué es la visibilidad operativa de una flotilla?",
    "Es la capacidad de relacionar la información disponible de las unidades con preguntas y procesos de operación. Un punto en el mapa puede ser parte de esa visibilidad, pero no la agota por sí solo.",
  ],
  [
    "¿Cuál es la diferencia entre rastreo y visibilidad operativa?",
    "El rastreo puede indicar la ubicación de una unidad. La visibilidad operativa busca sumar recorrido, histórico, eventos y el contexto disponible para interpretar lo que sucede y decidir qué revisar.",
  ],
  [
    "¿Qué es una geocerca?",
    "Es un área virtual delimitada sobre un mapa, como un patio, sucursal, centro de distribución o zona de servicio. Dependiendo de la plataforma, puede generar eventos asociados con la entrada o salida de esa zona.",
  ],
  [
    "¿Por qué revisar el histórico además del tiempo real?",
    "El tiempo real ayuda a entender qué está ocurriendo ahora. El histórico permite volver a un recorrido, evento o excepción para revisar qué ocurrió anteriormente.",
  ],
  [
    "¿El video puede ayudar a la visibilidad de una flotilla?",
    "Cuando una solución lo soporta, el video puede aportar contexto visual ante determinados eventos. Su alcance depende del hardware, la configuración y las políticas de acceso aplicables.",
  ],
  [
    "¿Toda flotilla necesita telemetría e integraciones?",
    "No necesariamente. Una organización puede obtener valor con las capas que respondan a sus necesidades actuales. Conviene definir primero el problema operativo y después evaluar qué información y conexiones son pertinentes.",
  ],
] as const;

function SectionTitle({ id, number, children }: { id: string; number: string; children: string }) {
  return (
    <div className="mb-6 border-t border-primary/40 pt-4">
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

export function FleetVisibilityGuide({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="border-b border-line bg-surface-alt pb-12 pt-10 sm:pb-16 sm:pt-14">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link to="/" className="hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Visibilidad operativa</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_0.82fr] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-3 max-w-4xl text-display">
                Cómo mejorar la visibilidad operativa de una flotilla
              </h1>
              <p className="mt-5 max-w-3xl text-lead">{post.excerpt}</p>
              <p className="mt-6 text-sm font-medium text-ink-muted">Lectura estimada: 10 min</p>
            </div>
            {post.cover ? (
              <img
                src={post.cover.src}
                alt={post.cover.alt}
                width={1672}
                height={941}
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: post.cover.objectPosition }}
              />
            ) : null}
          </div>
        </Container>
      </header>

      <Container>
        <div className="grid gap-12 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-20">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice de contenidos"
              className="sticky top-28 border-l border-line pl-5"
            >
              <p className="text-eyebrow text-primary">Índice</p>
              <ol className="mt-4 space-y-3 text-sm leading-5 text-ink-muted">
                {chapters.map(([id, label]) => (
                  <li key={id}>
                    <a className="hover:text-primary" href={`#${id}`}>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="lg:hidden">
              <details className="border-y border-line py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink marker:content-none">
                  Índice de contenidos <ChevronDown aria-hidden="true" className="size-4" />
                </summary>
                <ol className="mt-4 space-y-3 text-sm text-ink-muted">
                  {chapters.map(([id, label]) => (
                    <li key={id}>
                      <a className="hover:text-primary" href={`#${id}`}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            </div>

            <section className="pt-10 lg:pt-0" aria-labelledby="respuesta-directa">
              <SectionTitle id="respuesta-directa" number="01">
                Visibilidad no es solamente un mapa
              </SectionTitle>
              <p className="text-base leading-8 text-ink-muted">
                La visibilidad operativa de una flotilla es la capacidad de relacionar la
                información disponible de las unidades con preguntas y procesos concretos. Saber
                dónde está un vehículo puede ser útil, pero por sí solo no explica qué recorrido
                realiza, qué ocurrió antes ni qué requiere atención.
              </p>
              <p className="mt-5 text-base leading-8 text-ink-muted">
                El punto de partida es definir qué necesita saber la organización: ubicación,
                recorrido, eventos, contexto, histórico o la relación de esos datos con otros
                procesos. Si todavía está evaluando la tecnología de rastreo, consulte la{" "}
                <InternalLink to="/blog/que-revisar-antes-contratar-sistema-rastreo-gps">
                  guía para evaluar un sistema GPS para flotillas
                </InternalLink>
                .
              </p>

              <div className="mt-10 border-y border-line bg-surface-alt px-5 py-7 sm:px-8">
                <p className="text-eyebrow text-primary">En pocas palabras</p>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    "La ubicación responde dónde está una unidad en un momento dado.",
                    "El histórico permite revisar un recorrido o evento anterior.",
                    "Las geocercas pueden enfocar la atención en zonas relevantes.",
                    "El contexto visual o técnico depende de las capacidades disponibles.",
                    "Los datos son más útiles cuando existe un responsable y un proceso para revisarlos.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-ink-muted">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="modelo-practico">
              <SectionTitle id="modelo-practico" number="02">
                Un modelo práctico para entender la visibilidad
              </SectionTitle>
              <p className="max-w-3xl text-base leading-8 text-ink-muted">
                Estas capas no son un estándar de la industria ni una lista obligatoria. Sirven para
                ordenar conversaciones: una operación puede comenzar por una o dos, y sumar otras
                cuando respondan a una necesidad real.
              </p>
              <ol className="mt-8 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
                {layers.map(([number, title, question]) => (
                  <li
                    key={title}
                    className="min-h-40 border-b border-r border-line px-5 py-6 sm:px-6"
                  >
                    <p className="text-eyebrow text-primary">{number}</p>
                    <h3 className="mt-3 text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{question}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-16" aria-labelledby="tiempo-e-historico">
              <SectionTitle id="tiempo-e-historico" number="03">
                Tiempo real e histórico responden preguntas distintas
              </SectionTitle>
              <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                <div className="bg-surface px-6 py-7">
                  <p className="text-eyebrow text-primary">Tiempo real</p>
                  <h3 className="mt-3 text-title">¿Qué está ocurriendo ahora?</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    Puede orientar la atención hacia una unidad, una zona o una excepción que
                    necesita seguimiento en el momento.
                  </p>
                </div>
                <div className="bg-surface px-6 py-7">
                  <p className="text-eyebrow text-primary">Histórico</p>
                  <h3 className="mt-3 text-title">¿Qué ocurrió anteriormente?</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    Permite volver a un recorrido, revisar una secuencia de eventos y conversar con
                    evidencia disponible después de la operación.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="geocercas-y-eventos">
              <SectionTitle id="geocercas-y-eventos" number="04">
                Geocercas y eventos: delimitar lo relevante
              </SectionTitle>
              <p className="text-base leading-8 text-ink-muted">
                Una geocerca es un área virtual definida sobre un mapa. Una organización podría
                delimitar un patio, sucursal, centro de distribución o zona de servicio. Dependiendo
                de la plataforma, la entrada o salida de esas zonas puede asociarse con un evento.
              </p>
              <aside className="my-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Pregunta operativa</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  ¿Qué zonas o situaciones requieren que alguien revise la información?
                </p>
              </aside>
              <p className="text-base leading-8 text-ink-muted">
                El valor no está en generar la mayor cantidad posible de avisos, sino en definir
                cuáles representan una excepción útil y quién debe atenderla. Para evaluar
                herramientas de seguimiento, puede revisar también los servicios de{" "}
                <InternalLink to="/servicios/gps-rastreo">GPS y rastreo</InternalLink> y{" "}
                <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink> disponibles en
                BÚNKER.
              </p>
            </section>

            <section className="mt-16" aria-labelledby="contexto-y-telemetria">
              <SectionTitle id="contexto-y-telemetria" number="05">
                Contexto visual y telemetría, sin perder el foco
              </SectionTitle>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-title">Contexto visual</h3>
                  <p className="mt-3 text-base leading-8 text-ink-muted">
                    Cuando una solución lo soporta, el video puede agregar contexto visual ante
                    determinados eventos. El alcance depende del hardware, la configuración y las
                    políticas de acceso. Conozca el servicio de{" "}
                    <InternalLink to="/servicios/dashcam-ia">videovigilancia móvil</InternalLink> si
                    ese contexto es relevante para su operación.
                  </p>
                </div>
                <div>
                  <h3 className="text-title">Telemetría</h3>
                  <p className="mt-3 text-base leading-8 text-ink-muted">
                    Dependiendo del vehículo, hardware y compatibilidad disponible, algunas
                    soluciones pueden obtener información adicional. Referencias como CAN, OBD o
                    J1939 describen posibilidades técnicas; los datos reales varían por vehículo,
                    año, fabricante, configuración y plataforma.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-16" aria-labelledby="dato-contexto-decision">
              <SectionTitle id="dato-contexto-decision" number="06">
                De datos a contexto y decisiones
              </SectionTitle>
              <p className="text-base leading-8 text-ink-muted">
                Una señal aislada no siempre responde una pregunta operativa. Este esquema ayuda a
                pensar qué puede aportar cada tipo de información, sin prometer resultados
                automáticos.
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {[
                  ["Ubicación", "Saber dónde está una unidad."],
                  ["Histórico", "Revisar un recorrido anterior."],
                  ["Geocerca", "Identificar una entrada o salida cuando la plataforma lo soporte."],
                  ["Evento", "Dirigir la atención hacia una excepción."],
                  ["Video", "Agregar contexto visual cuando exista esa capacidad."],
                  [
                    "Telemetría",
                    "Analizar variables adicionales cuando vehículo y hardware sean compatibles.",
                  ],
                ].map(([data, context]) => (
                  <div key={data} className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="font-semibold text-ink">{data}</dt>
                    <dd className="text-sm leading-6 text-ink-muted">
                      <span className="mr-2 text-primary">→</span>
                      {context}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-16" aria-labelledby="metodo">
              <SectionTitle id="metodo" number="07">
                Un método práctico para implementar visibilidad
              </SectionTitle>
              <p className="text-base leading-8 text-ink-muted">
                Esta es una metodología editorial, no un estándar oficial. Su objetivo es evitar que
                la tecnología se elija antes de entender la pregunta operativa.
              </p>
              <ol className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {process.map((item, index) => (
                  <li key={item} className="flex gap-4 border-t border-line pt-4">
                    <span className="text-eyebrow text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-ink-muted">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-16" aria-labelledby="errores">
              <SectionTitle id="errores" number="08">
                Errores comunes
              </SectionTitle>
              <ul className="grid gap-3 text-base leading-7 text-ink-muted">
                {[
                  "Creer que visibilidad significa solamente ver un mapa.",
                  "Generar alertas que nadie puede revisar.",
                  "Recopilar datos que no responden a una pregunta operativa.",
                  "No asignar responsables para atender excepciones.",
                  "Ignorar el histórico cuando es necesario reconstruir un recorrido.",
                  "Mantener información útil en sistemas aislados.",
                  "Implementar tecnología antes de definir el problema operativo.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16" aria-labelledby="ejemplo">
              <SectionTitle id="ejemplo" number="09">
                Ejemplo hipotético: una operación de 25 unidades
              </SectionTitle>
              <p className="text-base leading-8 text-ink-muted">
                Este ejemplo enseña una evolución conceptual; no describe una solución específica ni
                anticipa resultados de operación.
              </p>
              <ol className="mt-8 grid gap-4">
                {[
                  ["Etapa 1", "Ubicación para saber dónde están las unidades."],
                  [
                    "Etapa 2",
                    "Ubicación y geocercas para observar entradas o salidas de zonas relevantes cuando la plataforma lo soporte.",
                  ],
                  [
                    "Etapa 3",
                    "Eventos e histórico para revisar excepciones y recorridos anteriores.",
                  ],
                  ["Etapa 4", "Contexto visual cuando exista esa capacidad y resulte pertinente."],
                  [
                    "Etapa 5",
                    "Relación con procesos internos cuando la solución permita una integración adecuada.",
                  ],
                ].map(([stage, detail]) => (
                  <li
                    key={stage}
                    className="grid gap-2 border-b border-line pb-4 sm:grid-cols-[6rem_1fr]"
                  >
                    <span className="text-eyebrow text-primary">{stage}</span>
                    <span className="text-sm leading-6 text-ink-muted">{detail}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-16" aria-labelledby="checklist">
              <SectionTitle id="checklist" number="10">
                Checklist para definir qué necesita la operación
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-line px-4 py-4 text-sm leading-6 text-ink-muted"
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

            <section className="mt-16" aria-labelledby="preguntas-frecuentes">
              <SectionTitle id="preguntas-frecuentes" number="11">
                Preguntas frecuentes
              </SectionTitle>
              <div className="divide-y divide-line border-y border-line">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink marker:content-none">
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
                ¿Quiere definir qué información necesita su operación?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                BÚNKER puede ayudarle a evaluar el escenario y determinar una solución adecuada para
                sus necesidades.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                También puede conocer los servicios de{" "}
                <InternalLink to="/servicios/instalacion-soporte">
                  instalación y soporte
                </InternalLink>
                .
              </p>
            </section>

            <section className="mt-16" aria-labelledby="relacionados">
              <SectionTitle id="relacionados" number="12">
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
                      "Cómo usar datos GPS en logística",
                      "gps-logistica-como-utilizar-informacion-decisiones",
                    ],
                    [
                      "Video, GPS y monitoreo",
                      "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
                    ],
                  ] as const
                ).map(([label, to]) => (
                  <Link
                    key={to}
                    to="/blog/$slug"
                    params={{ slug: to }}
                    className="border border-line p-5 text-sm font-semibold leading-6 text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {label} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-16 border-t border-line pt-5" aria-labelledby="fuentes">
              <SectionTitle id="fuentes" number="13">
                Fuentes y referencias
              </SectionTitle>
              <ul className="space-y-3 text-sm leading-6 text-ink-muted">
                <li>
                  <a
                    href="https://www.gps.gov/other-global-navigation-satellite-systems-gnss"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    GPS.gov — Global Navigation Satellite Systems (GNSS)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sae.org/standards/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    SAE International — Standards
                  </a>
                </li>
              </ul>
              <p className="mt-8 text-sm leading-6 text-ink-muted">
                Contenido informativo. Las capacidades, compatibilidades y datos disponibles pueden
                variar según vehículo, hardware, configuración, plataforma y condiciones de
                operación.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
