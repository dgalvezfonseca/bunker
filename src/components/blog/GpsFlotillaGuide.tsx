import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["en-pocas-palabras", "En pocas palabras"],
  ["como-funciona", "Cómo funciona el rastreo"],
  ["siete-criterios", "7 criterios de evaluación"],
  ["criterios-tecnicos", "Criterios técnicos"],
  ["comparar-proveedores", "Qué comparar"],
  ["checklist", "Checklist antes de firmar"],
  ["preguntas-frecuentes", "Preguntas frecuentes"],
  ["fuentes", "Fuentes y referencias"],
] as const;

const criteria = [
  [
    "01",
    "Hardware y GNSS",
    "Revise qué recibe la ubicación y bajo qué condiciones puede operar el equipo propuesto.",
    "¿Qué constelaciones GNSS admite el equipo y qué condiciones de instalación requiere?",
  ],
  [
    "02",
    "Conectividad",
    "La coordenada y su transmisión son procesos distintos. Revise la red, las bandas y la cobertura de su operación.",
    "¿Qué tecnología, bandas y operador contempla la propuesta?",
  ],
  [
    "03",
    "Memoria interna",
    "La continuidad del historial depende de que el hardware pueda conservar registros cuando no hay comunicación.",
    "¿El dispositivo incorpora memoria interna y cómo reenvía los registros almacenados?",
  ],
  [
    "04",
    "Plataforma",
    "Defina qué información necesita consultar, cómo se configura y cómo se exporta.",
    "¿Cómo se configura la frecuencia de reporte y qué datos puede exportar?",
  ],
  [
    "05",
    "Telemetría",
    "Los datos disponibles dependen de la interfaz, el vehículo, el hardware y la configuración.",
    "¿Qué parámetros puede leer esta combinación de vehículo y equipo?",
  ],
  [
    "06",
    "Integraciones",
    "Una API o integración debe evaluarse contra los sistemas que la operación ya utiliza.",
    "¿Existe documentación de API o mecanismos de integración aplicables a nuestro ERP o TMS?",
  ],
  [
    "07",
    "Soporte y datos",
    "El contrato debe dejar claros instalación, atención, privacidad, acceso y salida de los datos.",
    "¿Qué procedimiento sigue ante una falla y qué ocurre con nuestros datos al terminar el contrato?",
  ],
] as const;

const checklist = [
  "¿Qué tecnología celular, bandas y operador utiliza el equipo propuesto?",
  "¿Qué ocurre cuando el vehículo pierde cobertura durante el recorrido?",
  "¿El hardware cuenta con memoria interna y cómo reenvía los registros?",
  "¿Cómo configura la solución la frecuencia de reporte por tiempo, distancia o cambio de dirección?",
  "¿Qué telemetría está disponible para mis vehículos específicos?",
  "¿El dispositivo ofrecido cuenta con homologación del IFT?",
  "¿Puedo exportar mis datos y bajo qué condiciones?",
  "¿Existe una API o integración si más adelante necesito conectarla con un ERP o TMS?",
  "¿Cómo se realiza la instalación y qué debo confirmar sobre la garantía del vehículo?",
  "¿Qué ocurre con los datos y dispositivos al terminar el contrato?",
] as const;

const comparisons = [
  [
    "Conectividad",
    "Tecnología soportada, bandas, operador y cobertura de las rutas.",
    "Afecta la capacidad de transmitir la información desde la operación.",
    "¿Qué tecnología, bandas y operador contempla esta propuesta?",
  ],
  [
    "Memoria interna",
    "Si el equipo la incorpora y el proceso de reenvío de registros.",
    "Puede conservar el historial cuando se pierde comunicación.",
    "¿Qué guarda el equipo sin cobertura y cómo lo recupera la plataforma?",
  ],
  [
    "Frecuencia de reporte",
    "Reglas por tiempo, distancia y cambio de dirección, cuando correspondan.",
    "Define el nivel de detalle y el uso de datos de cada configuración.",
    "¿Qué reglas de reporte admite esta combinación de hardware y plataforma?",
  ],
  [
    "Telemetría",
    "Fuente de datos, parámetros disponibles y compatibilidad con cada vehículo.",
    "Evita contratar datos que el vehículo o el equipo no pueden proporcionar.",
    "¿Qué parámetros están disponibles para esta marca, modelo, año y configuración?",
  ],
  [
    "Integraciones",
    "Documentación, alcance y método de intercambio de datos.",
    "Determina si la información puede relacionarse con otros procesos.",
    "¿Existe API o integración documentada aplicable a nuestro sistema?",
  ],
  [
    "Homologación",
    "Constancia del dispositivo que se propone instalar.",
    "Los equipos que usan espectro o se conectan a redes deben revisarse ante IFT.",
    "¿Puede compartir la homologación IFT del modelo cotizado?",
  ],
  [
    "Exportación de datos",
    "Formato, alcance histórico, responsables y condiciones contractuales.",
    "Aclara el acceso a información operativa y la transición entre proveedores.",
    "¿Qué datos podemos exportar, en qué formato y qué ocurre al terminar el contrato?",
  ],
  [
    "Soporte",
    "Canales, alcance, responsabilidades y procedimiento ante fallas.",
    "Convierte una expectativa operativa en un criterio verificable de contratación.",
    "¿Qué procedimiento aplica si un dispositivo falla o deja de comunicar?",
  ],
] as const;

const faqs = [
  [
    "¿Qué diferencia hay entre GPS y GNSS?",
    "GPS es una de las constelaciones de navegación por satélite. GNSS es el término general para los sistemas satelitales de posicionamiento. En una cotización, también conviene distinguir esa obtención de ubicación de la transmisión de datos por red celular.",
  ],
  [
    "¿Qué ocurre si el vehículo pierde señal celular?",
    "Depende del hardware y de la configuración. El equipo puede seguir obteniendo coordenadas GNSS, pero la plataforma no recibe nuevas posiciones mientras no haya comunicación. Verifique si incorpora memoria interna para conservar registros y enviarlos al recuperar cobertura.",
  ],
  [
    "¿Todos los equipos GPS guardan la ruta sin cobertura?",
    "No necesariamente. Es una característica de hardware y configuración que debe confirmarse. Pregunte por la memoria interna, el límite de registros y la forma en que se reenvían al servidor.",
  ],
  [
    "¿Qué es la telemetría vehicular?",
    "Es la información técnica que puede obtenerse del vehículo o de sensores conectados. Los parámetros disponibles dependen del hardware, el vehículo, su año, fabricante, configuración y plataforma.",
  ],
  [
    "¿Se puede conectar el GPS con un ERP o TMS?",
    "Algunas soluciones pueden ofrecer API, webhooks u otros mecanismos de integración. Revise si existen, qué información exponen y si su alcance responde al proceso que desea conectar.",
  ],
  [
    "¿Qué debo revisar antes de instalar GPS en vehículos de empresa?",
    "Además del equipo, confirme el método de instalación, las condiciones de garantía del vehículo, la homologación IFT, el tratamiento de datos, el acceso histórico y el procedimiento de soporte.",
  ],
] as const;

function AskProvider({ children }: { children: string }) {
  return (
    <aside className="my-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
      <p className="text-eyebrow text-primary">Pregunte a su proveedor</p>
      <p className="mt-2 text-base font-semibold leading-7 text-ink">{children}</p>
    </aside>
  );
}

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

export function GpsFlotillaGuide({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="technical-grid border-b border-line bg-surface-elevated pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">{post.title}</h1>
              <p className="text-lead mt-6 max-w-3xl text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 11 min
              <br />
              <span className="font-normal text-ink-muted">
                Guía técnica para comparar propuestas.
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
            <img
              src={post.cover?.src}
              alt={post.cover?.alt}
              width="1868"
              height="1536"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
              style={{ objectPosition: post.cover?.objectPosition }}
            />
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              La imagen acompaña esta guía; los criterios técnicos descritos deben confirmarse en
              cada propuesta y equipo cotizado.
            </p>

            <section id="en-pocas-palabras" className="mt-14 scroll-mt-28">
              <SectionTitle id="en-pocas-palabras" number="01">
                En pocas palabras
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                Un sistema de rastreo no se evalúa solo por el punto que aparece en un mapa. La
                decisión combina el equipo, la red, el manejo de información, la instalación y las
                condiciones de operación.
              </p>
              <ul
                className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-2"
                aria-label="Puntos clave antes de contratar"
              >
                {[
                  "Hardware y recepción GNSS.",
                  "Conectividad, bandas y cobertura.",
                  "Memoria interna ante pérdida de comunicación.",
                  "Plataforma, telemetría e integraciones.",
                  "Instalación, datos, privacidad y soporte.",
                ].map((item) => (
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

            <section id="como-funciona" className="mt-16 scroll-mt-28">
              <SectionTitle id="como-funciona" number="02">
                Localizar no es lo mismo que transmitir
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                El dispositivo puede obtener coordenadas mediante GNSS y, por separado, usar una red
                de datos para enviarlas a una plataforma. Entender esa diferencia ayuda a formular
                mejores preguntas cuando una unidad recorre zonas con cobertura irregular.
              </p>
              <div
                className="mt-8 grid overflow-hidden border border-line bg-surface-elevated"
                aria-label="Flujo de información de rastreo vehicular"
              >
                {[
                  "Satélites / GNSS",
                  "Dispositivo en vehículo",
                  "Red de datos",
                  "Servidor / plataforma",
                  "Operaciones / integraciones",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="relative grid min-h-20 place-items-center border-b border-line px-4 py-5 text-center text-sm font-semibold leading-6 text-ink last:border-b-0"
                  >
                    <span>{step}</span>
                    {index < 4 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-5 left-1/2 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary"
                      >
                        ↓
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-6 text-ink-muted">
                <strong className="text-ink">Clave de lectura:</strong> una coordenada puede seguir
                obteniéndose aunque no exista comunicación celular; sin transmisión, la plataforma
                no recibe la actualización en ese momento.
              </p>
            </section>

            <section id="siete-criterios" className="mt-16 scroll-mt-28">
              <SectionTitle id="siete-criterios" number="03">
                Siete cosas que debe revisar
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-2">
                {criteria.map(([number, title, description, question]) => (
                  <section key={number} className="border border-line bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{number}</p>
                    <h3 className="mt-4 text-title">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{description}</p>
                    <p className="mt-5 border-t border-line pt-4 text-sm leading-6 text-ink">
                      <span className="font-semibold">Qué preguntar: </span>
                      {question}
                    </p>
                  </section>
                ))}
              </div>
            </section>

            <section id="criterios-tecnicos" className="mt-16 scroll-mt-28">
              <SectionTitle id="criterios-tecnicos" number="04">
                Criterios técnicos y operativos
              </SectionTitle>
              <div className="max-w-[65ch] space-y-10 text-base leading-8 text-ink-muted">
                <section>
                  <h3 className="text-title">GNSS y red celular cumplen funciones distintas</h3>
                  <p className="mt-3">
                    GNSS es el término general para sistemas de navegación por satélite; GPS es una
                    de sus constelaciones. El receptor del dispositivo obtiene la ubicación y el
                    módem utiliza una red de datos para comunicarla. Evalúe ambas capas: recepción
                    de ubicación y transmisión hacia la plataforma.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">
                    Cuando se pierde cobertura, pregunte por el comportamiento completo
                  </h3>
                  <p className="mt-3">
                    La ausencia de comunicación puede impedir la actualización inmediata en la
                    plataforma. Verifique si el dispositivo cuenta con memoria interna o datalogger,
                    qué registros conserva y cómo los reenvía al recuperar cobertura. No es una
                    capacidad universal de todo equipo comercial.
                  </p>
                  <AskProvider>
                    ¿Qué ocurre con la información cuando el vehículo pierde cobertura durante 40
                    minutos?
                  </AskProvider>
                </section>
                <section>
                  <h3 className="text-title">Compatibilidad de red y configuración de reporte</h3>
                  <p className="mt-3">
                    La tecnología soportada, bandas, operador y cobertura deben evaluarse contra las
                    rutas reales de la operación y la vida útil esperada del dispositivo. Puede
                    preguntar por 4G, LTE o LTE-M como tecnologías a evaluar, sin asumir que una
                    alternativa es adecuada para todos los casos. También confirme si los reportes
                    se configuran por tiempo, distancia o cambio de dirección; esa configuración
                    influye en el detalle del historial y en la transmisión de datos.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">
                    Telemetría: valide primero el vehículo y luego la promesa
                  </h3>
                  <p className="mt-3">
                    CAN, OBD-II y J1939 son posibilidades técnicas que dependen del hardware,
                    vehículo, año, fabricante, configuración y plataforma. En ciertos contextos
                    pueden permitir la lectura de parámetros del vehículo, pero la disponibilidad
                    debe comprobarse en la combinación específica que se pretende instalar.
                  </p>
                  <AskProvider>
                    ¿Qué parámetros puede entregar este equipo en nuestros vehículos, y qué
                    condición técnica requiere cada uno?
                  </AskProvider>
                </section>
                <section>
                  <h3 className="text-title">APIs e integraciones</h3>
                  <p className="mt-3">
                    Si la operación utiliza ERP, TMS u otro sistema, pida revisar si existe API
                    documentada, webhooks u otro mecanismo de integración y qué información entrega.
                    La existencia de una integración no sustituye la revisión de seguridad, alcance,
                    responsables y datos necesarios para el proceso.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">Datos personales, homologación e interferencia</h3>
                  <p className="mt-3">
                    Cuando los datos de ubicación pueden asociarse con una persona identificada o
                    identificable, su tratamiento puede estar sujeto a las obligaciones aplicables
                    en materia de protección de datos personales. Conviene revisar el aviso de
                    privacidad y las finalidades del tratamiento con el área jurídica de la
                    organización.
                  </p>
                  <p className="mt-3">
                    También conviene verificar que el dispositivo propuesto cuente con homologación
                    del IFT. La legislación mexicana restringe el uso de equipos destinados a
                    bloquear señales. Si este riesgo es relevante para su operación, pregunte al
                    proveedor si el hardware cuenta con mecanismos de detección de interferencia y
                    cómo responde la plataforma ante una pérdida inesperada de comunicación.
                  </p>
                </section>
                <section>
                  <h3 className="text-title">Instalación, propiedad de datos y soporte</h3>
                  <p className="mt-3">
                    Solicite el método de instalación, confirme con la agencia las condiciones de
                    garantía que aplican al vehículo y documente responsabilidades ante una falla.
                    El contrato también debe precisar acceso, exportación, conservación y
                    tratamiento de los datos, así como el proceso operativo de soporte. Son
                    criterios de contratación; no deben inferirse de una ficha comercial.
                  </p>
                  <AskProvider>
                    ¿Qué datos podemos exportar, quién conserva el acceso histórico y qué proceso
                    aplica al terminar el contrato?
                  </AskProvider>
                </section>
              </div>
            </section>

            <section id="comparar-proveedores" className="mt-16 scroll-mt-28">
              <SectionTitle id="comparar-proveedores" number="05">
                Qué comparar entre proveedores
              </SectionTitle>
              <div
                className="overflow-x-auto border border-line"
                tabIndex={0}
                aria-label="Tabla comparativa desplazable horizontalmente"
              >
                <table className="min-w-[58rem] w-full border-collapse text-left text-sm leading-6">
                  <thead className="bg-primary-dark text-surface-elevated">
                    <tr>
                      {["Criterio", "Qué revisar", "Por qué importa", "Pregunta al proveedor"].map(
                        (heading) => (
                          <th key={heading} scope="col" className="px-4 py-4 font-semibold">
                            {heading}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-t border-line align-top even:bg-surface-elevated"
                      >
                        <th scope="row" className="px-4 py-4 font-semibold text-ink">
                          {row[0]}
                        </th>
                        {row.slice(1).map((cell) => (
                          <td key={cell} className="px-4 py-4 text-ink-muted">
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
              <SectionTitle id="checklist" number="06">
                Checklist antes de firmar
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-line py-4 text-sm leading-6 text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center border border-primary text-primary"
                    >
                      □
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="preguntas-frecuentes" className="mt-16 scroll-mt-28">
              <SectionTitle id="preguntas-frecuentes" number="07">
                Preguntas frecuentes
              </SectionTitle>
              <div className="divide-y divide-line border-y border-line">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="group py-1">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 py-3 text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      {question}
                      <ChevronDown
                        aria-hidden="true"
                        className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="pb-5 pr-10 text-sm leading-7 text-ink-muted">{answer}</div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-16 border-y border-primary/35 bg-primary-soft px-6 py-10 sm:px-9">
              <p className="text-eyebrow text-primary">Siguiente paso</p>
              <h2 className="mt-3 text-headline">
                ¿Está evaluando un sistema de rastreo para su flotilla?
              </h2>
              <p className="mt-5 max-w-[60ch] text-base leading-7 text-ink-muted">
                BÚNKER puede ayudarle a revisar los requerimientos técnicos de su operación y
                diseñar una solución acorde con sus necesidades.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
            </section>

            <section className="mt-16">
              <p className="text-eyebrow text-primary">Continúe explorando</p>
              <h2 className="mt-3 text-headline">Servicios y lecturas relacionadas</h2>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <nav aria-label="Servicios relacionados" className="border-t border-line pt-4">
                  <h3 className="text-title">Servicios relacionados</h3>
                  <ul className="mt-4 grid gap-3 text-sm">
                    <li>
                      <InternalLink to="/servicios/gps-rastreo">GPS y Rastreo</InternalLink>
                    </li>
                    <li>
                      <InternalLink to="/servicios/monitoreo">Monitoreo</InternalLink>
                    </li>
                    <li>
                      <InternalLink to="/servicios/dashcam-ia">Dashcam con IA</InternalLink>
                    </li>
                    <li>
                      <InternalLink to="/servicios/instalacion-soporte">
                        Instalación y soporte técnico
                      </InternalLink>
                    </li>
                  </ul>
                </nav>
                <nav aria-label="Artículos relacionados" className="border-t border-line pt-4">
                  <h3 className="text-title">Artículos relacionados</h3>
                  <ul className="mt-4 grid gap-3 text-sm">
                    <li>
                      <InternalLink to="/blog/como-mejorar-visibilidad-flotilla-logistica">
                        Cómo buscar mejorar la visibilidad de una flotilla
                      </InternalLink>
                    </li>
                    <li>
                      <InternalLink to="/blog/gps-logistica-como-utilizar-informacion-decisiones">
                        GPS y logística: conceptos para decisiones operativas
                      </InternalLink>
                    </li>
                    <li>
                      <InternalLink to="/blog/integrar-videovigilancia-gps-monitoreo-seguridad-proteccion">
                        Conceptos sobre integración de videovigilancia, GPS y monitoreo
                      </InternalLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>

            <section id="fuentes" className="mt-16 scroll-mt-28">
              <SectionTitle id="fuentes" number="08">
                Fuentes y referencias
              </SectionTitle>
              <ul className="grid gap-3 text-sm leading-6 text-ink-muted">
                <li>
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="https://www.gps.gov/systems/gnss/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GPS.gov — GNSS
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="https://www.ift.org.mx/industria/homologacion"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instituto Federal de Telecomunicaciones — Homologación
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cámara de Diputados — LFPDPPP
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFTR.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cámara de Diputados — Ley Federal de Telecomunicaciones y Radiodifusión
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="https://www.sae.org/standards/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SAE International — Estándares vehiculares
                  </a>
                </li>
              </ul>
              <p className="mt-8 border-t border-line pt-5 text-sm leading-6 text-ink-muted">
                Contenido de carácter informativo. Las características, capacidades y resultados de
                las tecnologías descritas pueden variar según fabricante, modelo, configuración y
                condiciones de operación.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
