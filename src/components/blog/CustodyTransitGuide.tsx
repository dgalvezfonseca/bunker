import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["respuesta", "Qué es custodia en tránsito"],
  ["riesgo", "El análisis antes del recurso"],
  ["capas", "Custodia, rastreo y monitoreo"],
  ["planeacion", "Planeación y responsables"],
  ["tecnologia", "Tecnología como apoyo"],
  ["escalamiento", "Validación y escalamiento"],
  ["carga", "Seguridad física de la carga"],
  ["regulacion", "Marco regulatorio"],
  ["datos", "Datos y ciberseguridad"],
  ["escenarios", "Escenarios hipotéticos"],
  ["matriz", "Matriz de factores"],
  ["checklist", "Checklist"],
  ["preguntas", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const checklist = [
  "¿Qué análisis de riesgo se realiza para este traslado?",
  "¿Qué modalidad de servicio se está contratando?",
  "¿Qué autorizaciones aplican y en qué entidades se prestará el servicio?",
  "¿Qué responsabilidades corresponden al transportista y cuáles al proveedor?",
  "¿Cómo se define la ruta operativa y sus restricciones?",
  "¿Qué paradas están previstas y cómo se documentan las excepciones?",
  "¿Quién monitorea y quién valida una alerta?",
  "¿Quién toma decisiones y cómo se escala un evento?",
  "¿Cómo se documentan el inicio, los cambios y el cierre del traslado?",
  "¿Qué tecnologías se utilizan y con qué finalidad?",
  "¿Cómo se protege la información de ubicación y de las personas involucradas?",
  "¿Qué ocurre si falla la conectividad o una fuente de información?",
  "¿Cómo se verifica que el servicio terminó correctamente?",
] as const;

const faqs = [
  [
    "¿Toda carga de alto valor necesita custodia?",
    "No existe un umbral universal. Conviene evaluar la combinación de carga, ruta, operación, exposición y capacidad de respuesta antes de definir controles.",
  ],
  [
    "¿El GPS sustituye la custodia?",
    "No. El GPS puede aportar ubicación; la custodia, el monitoreo y los protocolos responden a funciones diferentes. Ninguna capa sustituye automáticamente a las demás.",
  ],
  [
    "¿Una custodia elimina el riesgo de robo?",
    "No. Ninguna medida debe presentarse como garantía. La decisión debe partir del perfil de riesgo y de responsabilidades claras durante el traslado.",
  ],
  [
    "¿La custodia siempre implica personal armado?",
    "No debe asumirse. El alcance depende de la modalidad, las autorizaciones aplicables y el diseño del servicio; este artículo no prescribe recursos ni tácticas.",
  ],
  [
    "¿Qué debe revisar una empresa antes de contratar?",
    "Análisis de riesgo, alcance, autorizaciones, responsabilidades, monitoreo, escalamiento y tratamiento de la información son criterios prácticos para iniciar la evaluación.",
  ],
  [
    "¿Cuándo debe revisarse la estrategia?",
    "Antes de un traslado y cuando cambien de forma relevante la carga, la operación, la ruta, los participantes o los procedimientos internos.",
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

export function CustodyTransitGuide({ post }: { post: BlogPost }) {
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
                Custodia en tránsito
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">
                Custodia en tránsito: factores a evaluar para proteger una carga
              </h1>
              <p className="mt-6 max-w-3xl text-lead text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 12 min
              <br />
              <span className="font-normal text-ink-muted">
                Guía de evaluación operativa; no prescribe tácticas de seguridad.
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
                width={1920}
                height={810}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: post.cover.objectPosition }}
              />
            ) : null}
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Imagen ilustrativa. No prescribe la configuración de un servicio, vehículos ni
              recursos de custodia.
            </p>

            <section id="respuesta" className="mt-14 scroll-mt-28">
              <SectionTitle id="respuesta" number="01">
                Custodia en tránsito: una decisión de riesgo, no sólo de valor
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                La custodia en tránsito puede formar parte de una estrategia de protección para
                bienes durante su traslado. La Ley Federal de Seguridad Privada contempla la
                modalidad de seguridad privada en el traslado de bienes o valores; el alcance
                regulatorio concreto debe revisarse con el área jurídica y las autorizaciones
                aplicables.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                No toda carga necesita el mismo nivel de control. La pregunta útil no es sólo cuánto
                vale la mercancía, sino qué condiciones del traslado cambian su exposición y qué
                capacidad de respuesta existe.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2"
                aria-label="En pocas palabras"
              >
                {[
                  "La carga es un factor, no el único criterio.",
                  "La ruta y la operación modifican el contexto.",
                  "Rastreo, monitoreo, custodia y protocolo cumplen funciones distintas.",
                  "Una alerta necesita validación antes de convertirse en decisión.",
                  "Las autorizaciones y responsabilidades deben revisarse antes del viaje.",
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

            <section id="riesgo" className="mt-16 scroll-mt-28">
              <SectionTitle id="riesgo" number="02">
                La custodia empieza con análisis de riesgo
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                El Servicio de Protección Federal describe un análisis previo de amenazas,
                vulnerabilidades y nivel de riesgo, así como origen, ruta, alternativas y destino
                para sus propios servicios. Es una referencia útil para entender que el análisis
                antecede a la definición de recursos; no es una metodología obligatoria para todas
                las empresas.
              </p>
              <div
                className="mt-8 border border-line bg-surface-elevated p-5 sm:p-7"
                aria-label="Modelo práctico de perfil de riesgo"
              >
                <p className="text-eyebrow text-primary">Modelo práctico del artículo</p>
                <div className="mt-5 grid gap-3 text-center text-sm font-semibold text-ink sm:grid-cols-5">
                  {["Carga", "Ruta", "Operación", "Exposición", "Respuesta"].map((item, index) => (
                    <div key={item} className="border border-line px-3 py-4">
                      {item}
                      {index < 4 ? (
                        <span aria-hidden="true" className="ml-3 text-primary">
                          +
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-center text-sm font-semibold text-primary">
                  Perfil de riesgo
                </p>
                <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-6 text-ink-muted">
                  No es una fórmula matemática, norma ni puntuación. Es una forma de ordenar las
                  preguntas antes de contratar.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Carga",
                    "Naturaleza, sensibilidad, impacto operativo de una pérdida y requisitos de manejo.",
                  ],
                  ["Ruta", "Origen, destino, condiciones operativas, paradas y restricciones."],
                  [
                    "Operación",
                    "Ventanas, transferencias, puntos de carga o descarga y coordinación.",
                  ],
                  [
                    "Exposición",
                    "Tiempo en tránsito, inmovilizaciones, patios y terceros involucrados.",
                  ],
                  ["Respuesta", "Quién observa, valida, decide, escala y registra una excepción."],
                ].map(([title, detail]) => (
                  <div key={title} className="border-l-2 border-primary pl-4">
                    <h3 className="text-title">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="capas" className="mt-16 scroll-mt-28">
              <SectionTitle id="capas" number="03">
                Custodia, rastreo, monitoreo y protocolo no son lo mismo
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Conocer la ubicación de una unidad no equivale a tener una estrategia de seguridad
                en tránsito. Ubicación, contexto, procedimiento, responsables y capacidad de
                respuesta son dimensiones diferentes.
              </p>
              <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-4">
                {[
                  ["Rastreo", "Puede aportar ubicación y recorrido."],
                  ["Monitoreo", "Puede ayudar a supervisar información y eventos."],
                  [
                    "Custodia",
                    "Puede incorporar recursos humanos u operativos cuando el modelo contractual y regulatorio lo contempla.",
                  ],
                  ["Protocolo", "Define cómo se valida y atiende una excepción."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Dependiendo de la tecnología contratada, una operación puede utilizar ubicación,
                alertas, video, telemetría o comunicación. Estas posibilidades deben verificarse por
                solución; no sustituyen el análisis ni el procedimiento.
              </p>
            </section>

            <section id="planeacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="planeacion" number="04">
                Planeación del traslado y coordinación entre actores
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Antes del viaje debe quedar claro quién observa, quién decide y quién escala. Según
                el caso, pueden intervenir el dueño de la carga, transportista, operador, proveedor
                de monitoreo, proveedor de seguridad, destinatario, aseguradora y áreas internas. No
                todos participan en cada operación.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <aside className="border-l-2 border-primary bg-primary-soft px-5 py-5">
                  <p className="text-eyebrow text-primary">Plan de viaje</p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    Defina origen, destino, ventanas operativas, puntos autorizados, contactos,
                    responsables, criterios de escalamiento y contingencias generales.
                  </p>
                </aside>
                <aside className="border-l-2 border-primary bg-primary-soft px-5 py-5">
                  <p className="text-eyebrow text-primary">Paradas y excepciones</p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    Pregunte cuáles son necesarias, si están planificadas, quién las conoce y cómo
                    se documenta una parada no prevista.
                  </p>
                </aside>
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                La ruta planeada y las alternativas pueden formar parte de la evaluación, pero esta
                guía no publica trayectos, horarios, ubicaciones de espera ni recomendaciones
                tácticas.
              </p>
              <p className="mt-5 max-w-[65ch] text-sm leading-7 text-ink-muted">
                La seguridad también empieza antes de que la unidad salga: puede ser pertinente
                validar a las partes involucradas y la documentación. La guía de FMCSA es una
                referencia estadounidense sobre fraude e identidad; no constituye una obligación
                legal mexicana.
              </p>
            </section>

            <section id="tecnologia" className="mt-16 scroll-mt-28">
              <SectionTitle id="tecnologia" number="05">
                La tecnología es una capa de apoyo
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La tecnología puede aportar información para la operación, pero una plataforma no
                convierte por sí sola una señal en un incidente ni decide qué hacer. Defina primero
                qué datos son útiles, quién puede acceder y qué procedimiento corresponde a cada
                excepción.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Si está evaluando tecnología de localización, consulte la{" "}
                <InternalLink to="/blog/que-revisar-antes-contratar-sistema-rastreo-gps">
                  guía para contratar rastreo GPS
                </InternalLink>
                . Para organizar información y responsables, revise la{" "}
                <InternalLink to="/blog/como-mejorar-visibilidad-flotilla-logistica">
                  guía de visibilidad operativa de flotilla
                </InternalLink>
                . El video puede aportar contexto adicional cuando una solución lo soporte; vea la
                guía sobre{" "}
                <InternalLink to="/blog/que-aporta-dashcam-con-ia-operacion-logistica">
                  dashcam con IA
                </InternalLink>
                .
              </p>
            </section>

            <section id="escalamiento" className="mt-16 scroll-mt-28">
              <SectionTitle id="escalamiento" number="06">
                De la señal al seguimiento
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Una plataforma puede generar una alerta, pero eso no significa automáticamente que
                exista un incidente. La organización necesita un procedimiento de validación y
                escalamiento acorde con su operación.
              </p>
              <ol
                className="mt-8 grid gap-4 border border-line bg-surface-elevated p-5 sm:grid-cols-6 sm:gap-0 sm:p-0"
                aria-label="Proceso editorial de escalamiento"
              >
                {[
                  "Evento",
                  "Validación",
                  "Clasificación",
                  "Responsable",
                  "Escalamiento",
                  "Seguimiento",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="relative px-3 py-4 text-center text-sm font-semibold text-ink sm:border-r sm:border-line sm:last:border-r-0"
                  >
                    {item}
                    {index < 5 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-4 left-1/2 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary sm:bottom-auto sm:left-auto sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:-rotate-90"
                      >
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="mt-10 grid gap-3 border border-line bg-surface-alt p-5 text-center text-sm font-semibold text-ink sm:grid-cols-5">
                {["Dato", "Validación", "Decisión", "Acción", "Registro"].map((item, index) => (
                  <div key={item}>
                    {item}
                    {index < 4 ? (
                      <span aria-hidden="true" className="ml-3 text-primary">
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section id="carga" className="mt-16 scroll-mt-28">
              <SectionTitle id="carga" number="07">
                Seguridad de la carga no es lo mismo que seguridad del traslado
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La NOM-015-SCT-2-2022 trata condiciones de seguridad para la estiba y sujeción de la
                carga en vehículos de autotransporte que circulan por carreteras y puentes de
                jurisdicción federal. Es un asunto físico de la carga; no es una norma sobre robo,
                custodia ni monitoreo.
              </p>
              <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
                {[
                  ["Seguridad de la carga", "Aspectos físicos como estiba y sujeción."],
                  [
                    "Seguridad del traslado",
                    "Planeación y gestión de riesgos durante el recorrido.",
                  ],
                  ["Custodia", "Puede integrarse a la estrategia según el perfil de riesgo."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <h3 className="text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="regulacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="regulacion" number="08">
                Marco regulatorio: alcance y autorizaciones
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La Ley Federal de Seguridad Privada contempla la modalidad de seguridad privada en
                el traslado de bienes o valores, que incluye custodia, vigilancia, cuidado y
                protección de bienes muebles o valores durante su traslado. Para servicios en dos o
                más entidades federativas, la ley y su reglamento contemplan un esquema de
                autorización. Esto no es asesoría jurídica: valide el alcance regulatorio y las
                autorizaciones aplicables con las áreas competentes.
              </p>
              <p className="mt-5 max-w-[65ch] text-sm leading-7 text-ink-muted">
                La Guardia Nacional documenta estrategias institucionales para prevenir delitos en
                vías federales, incluido el Operativo Escalón en su Informe Anual 2025. Es contexto
                institucional; no equivale a un servicio comercial ni implica participación de
                BÚNKER.
              </p>
            </section>

            <section id="datos" className="mt-16 scroll-mt-28">
              <SectionTitle id="datos" number="09">
                Ubicación y seguimiento también requieren protección de datos
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando una operación trata ubicación, nombres, teléfonos, video, audio o
                identificadores, puede haber obligaciones aplicables en materia de protección de
                datos personales. Conviene revisar finalidad, proporcionalidad, información a las
                personas, acceso, conservación y responsabilidades con el área jurídica o de
                privacidad.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Los sistemas conectados de gestión de flotillas pueden manejar información sensible.
                Evalúe autenticación, permisos, cuentas, acceso remoto, firmware, exposición de
                sistemas y tratamiento de datos. CISA incluye vehículos conectados y gestión de
                flotillas dentro de su guía de adquisición de IoT; las medidas concretas dependen de
                la arquitectura.
              </p>
            </section>

            <section id="escenarios" className="mt-16 scroll-mt-28">
              <SectionTitle id="escenarios" number="10">
                Tres escenarios hipotéticos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Traslado rutinario",
                    "Una empresa mueve mercancía entre dos instalaciones conocidas. Puede definir controles y responsables conforme a su propio perfil, sin que esto implique automáticamente custodia.",
                  ],
                  [
                    "Múltiples puntos operativos",
                    "Un traslado incorpora varias entregas y ventanas estrictas. La complejidad agrega variables a coordinar, validar y documentar.",
                  ],
                  [
                    "Impacto operativo alto",
                    "La pérdida o interrupción de una carga tendría consecuencias relevantes para la operación. Esto puede justificar una evaluación más profunda de controles, monitoreo y custodia.",
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

            <section id="matriz" className="mt-16 scroll-mt-28">
              <SectionTitle id="matriz" number="11">
                Matriz para ordenar la evaluación
              </SectionTitle>
              <div className="overflow-x-auto border border-line">
                <table className="min-w-[680px] w-full border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">
                    Factores para evaluar una estrategia de seguridad en tránsito
                  </caption>
                  <thead className="bg-surface-alt text-ink">
                    <tr>
                      <th scope="col" className="p-4">
                        Factor
                      </th>
                      <th scope="col" className="p-4">
                        Qué revisar
                      </th>
                      <th scope="col" className="p-4">
                        Pregunta operativa
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    {[
                      [
                        "Carga",
                        "Naturaleza e impacto de una interrupción o pérdida.",
                        "¿Qué consecuencias tendría para la operación?",
                      ],
                      [
                        "Ruta",
                        "Características y restricciones operativas.",
                        "¿Qué condiciones modifica el trayecto?",
                      ],
                      [
                        "Paradas",
                        "Necesidad, planeación y control.",
                        "¿Qué paradas están previstas?",
                      ],
                      [
                        "Monitoreo",
                        "Información disponible y criterios de revisión.",
                        "¿Quién observa y qué eventos requieren validación?",
                      ],
                      [
                        "Custodia",
                        "Necesidad según el perfil de riesgo.",
                        "¿Qué función concreta debe cumplir?",
                      ],
                      [
                        "Escalamiento",
                        "Responsabilidades y toma de decisiones.",
                        "¿Quién valida y quién decide?",
                      ],
                      [
                        "Destino",
                        "Recepción y confirmación de cierre.",
                        "¿Cómo se confirma el cierre del traslado?",
                      ],
                    ].map(([factor, review, question]) => (
                      <tr key={factor} className="border-t border-line">
                        <th scope="row" className="p-4 font-semibold text-ink">
                          {factor}
                        </th>
                        <td className="p-4">{review}</td>
                        <td className="p-4">{question}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="checklist" className="mt-16 scroll-mt-28">
              <SectionTitle id="checklist" number="12">
                Qué preguntar antes de contratar custodia en tránsito
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
              <SectionTitle id="errores" number="13">
                Errores que conviene evitar
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Decidir sólo por valor monetario.",
                  "Contratar sin análisis de riesgo.",
                  "Confundir GPS con seguridad completa.",
                  "No definir responsables.",
                  "No planificar paradas ni excepciones.",
                  "Tener canales de comunicación sin protocolo.",
                  "No establecer escalamiento.",
                  "No validar alcance y autorizaciones del proveedor.",
                  "Ignorar protección de datos.",
                  "No revisar el cierre del traslado.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
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
                Cada traslado tiene un perfil operativo distinto
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                Antes de definir recursos de custodia, conviene evaluar la carga, la ruta, los
                puntos de exposición y el procedimiento de respuesta. BÚNKER puede ayudarle a
                evaluar ese escenario.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                Conozca los servicios de{" "}
                <InternalLink to="/servicios/custodia">custodia en tránsito</InternalLink>,{" "}
                <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink> y{" "}
                <InternalLink to="/servicios/gps-rastreo">GPS y rastreo</InternalLink>.
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
                      "Cómo evaluar un sistema GPS",
                      "que-revisar-antes-contratar-sistema-rastreo-gps",
                    ],
                    [
                      "Visibilidad operativa de flotilla",
                      "como-mejorar-visibilidad-flotilla-logistica",
                    ],
                    [
                      "Dashcam con IA y contexto visual",
                      "que-aporta-dashcam-con-ia-operacion-logistica",
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
                {[
                  [
                    "Ley Federal de Seguridad Privada — Cámara de Diputados",
                    "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFSP.pdf",
                  ],
                  [
                    "Reglamento de la Ley Federal de Seguridad Privada — Orden Jurídico Nacional",
                    "https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo88479.html",
                  ],
                  [
                    "Servicio de Protección Federal — Protección a personas, custodia de bienes y valores",
                    "https://www.gob.mx/proteccionfederal/acciones-y-programas/proteccion-a-personas-custodia-de-bienes-y-valores",
                  ],
                  [
                    "NOM-015-SCT-2-2022 — Diario Oficial de la Federación",
                    "https://sidofqa.segob.gob.mx/notas/docFuente/5655591",
                  ],
                  [
                    "Informe Anual de Actividades 2025 — Guardia Nacional",
                    "https://sil.gobernacion.gob.mx/Archivos/Documentos/2026/02/asun_5014626_20260217_1771348874.pdf",
                  ],
                  [
                    "Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
                    "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf",
                  ],
                  [
                    "CISA — Internet of Things Acquisition Guidance",
                    "https://www.cisa.gov/sites/default/files/publications/20_0204_cisa_sed_internet_of_things_acquisition_guidance_final_508.pdf",
                  ],
                  [
                    "FMCSA — Broker and Carrier Fraud and Identity Theft",
                    "https://www.fmcsa.dot.gov/mission/help/broker-and-carrier-fraud-and-identity-theft",
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
                Contenido informativo. Las capacidades, autorizaciones, compatibilidades y
                resultados deben revisarse para el servicio, jurisdicción y operación concretos.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
