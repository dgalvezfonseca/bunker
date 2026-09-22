import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import type { BlogPost } from "@/data/cms";

const chapters = [
  ["respuesta", "Una alerta no es un incidente"],
  ["proceso", "De detección a cierre"],
  ["clasificacion", "Clasificar antes de decidir"],
  ["validacion", "Validación y contexto"],
  ["escalamiento", "Escalamiento y responsables"],
  ["preparacion", "Preparación previa"],
  ["tecnologia", "Tecnología, personas y procedimientos"],
  ["continuidad", "Eventos técnicos y continuidad"],
  ["cierre", "Registro, cierre y aprendizaje"],
  ["regulacion", "Marco regulatorio"],
  ["datos", "Datos y ciberseguridad"],
  ["escenarios", "Escenarios hipotéticos"],
  ["matriz", "Matriz de escalamiento"],
  ["checklist", "Checklist"],
  ["preguntas", "Preguntas frecuentes"],
  ["fuentes", "Fuentes"],
] as const;

const checklist = [
  "¿Qué sistemas generarán alertas?",
  "¿Qué tipo de eventos son relevantes para la operación?",
  "¿Cómo se clasifican las señales?",
  "¿Qué información se utiliza para validar?",
  "¿Quién recibe la primera notificación?",
  "¿Quién es el contacto de respaldo?",
  "¿Cuándo debe escalarse una situación?",
  "¿Qué autoridades o terceros podrían intervenir según el procedimiento?",
  "¿Cómo se registra cada evento?",
  "¿Qué ocurre si falla Internet o la energía?",
  "¿Qué ocurre si un dispositivo queda sin comunicación?",
  "¿En qué horarios opera el servicio de monitoreo?",
  "¿Qué tiempos de atención y escalamiento establece contractualmente el proveedor?",
  "¿Cómo se protegen credenciales y accesos?",
  "¿Cómo se actualizan los contactos?",
  "¿Cómo se revisan los eventos cerrados?",
] as const;

const faqs = [
  [
    "¿Qué ocurre cuando se activa una alarma?",
    "El sistema puede generar una señal o alerta según su configuración. El procedimiento debe indicar qué información se revisa, quién valida y cuándo corresponde escalar.",
  ],
  [
    "¿Una alerta significa que existe una intrusión?",
    "No necesariamente. Una alerta es una notificación; el contexto disponible y el procedimiento ayudan a decidir si se trata como incidente.",
  ],
  [
    "¿Cómo se valida una alarma?",
    "Depende de la solución y del procedimiento. Puede revisarse contexto disponible como estado del sensor, video, historial, acceso registrado o un contacto definido.",
  ],
  [
    "¿Qué diferencia existe entre monitoreo y respuesta?",
    "El monitoreo puede recibir, clasificar o dar seguimiento a señales. La respuesta corresponde a las acciones que la organización define después de validar y escalar un evento.",
  ],
  [
    "¿Toda alerta debe notificarse a una autoridad?",
    "No. Depende del servicio contratado, el tipo de señal, el procedimiento interno y las condiciones aplicables. No es una regla universal para cualquier alerta.",
  ],
  [
    "¿Qué pasa si falla Internet o una cámara queda offline?",
    "Puede tratarse como un evento técnico. Según la plataforma, conviene verificar conectividad, energía y estado del dispositivo, y escalarlo al responsable definido.",
  ],
  [
    "¿Qué debe preguntar una empresa antes de contratar monitoreo?",
    "Debe aclarar fuentes de alertas, validación, responsables, horario, tiempos contractuales, escalamiento, continuidad y protección de accesos.",
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

export function MonitoringAlertGuide({ post }: { post: BlogPost }) {
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
                Respuesta ante alertas
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-end">
            <div>
              <p className="text-eyebrow text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-display">
                ¿Cómo se coordina la respuesta ante una alerta de seguridad?
              </h1>
              <p className="mt-6 max-w-3xl text-lead text-ink-muted">{post.excerpt}</p>
            </div>
            <p className="border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-ink">
              Lectura estimada: 12 min
              <br />
              <span className="font-normal text-ink-muted">
                Guía editorial para definir procesos, no promesas de atención.
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
              Imagen editorial de monitoreo. No acredita infraestructura, horarios, integración ni
              capacidad de respuesta específica de BÚNKER.
            </p>

            <section id="respuesta" className="mt-14 scroll-mt-28">
              <SectionTitle id="respuesta" number="01">
                Una alerta no es lo mismo que un incidente confirmado
              </SectionTitle>
              <p className="max-w-[65ch] text-lead text-ink-muted">
                Una señal técnica necesita pasar por un proceso operativo antes de definir una
                respuesta. Recibir una alerta no significa automáticamente confirmar un incidente.
              </p>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Marco práctico de evento, alerta e incidente"
              >
                {[
                  ["Evento", "Una condición detectada por un sistema."],
                  [
                    "Alerta",
                    "Una notificación generada porque el evento cumple una regla o criterio.",
                  ],
                  [
                    "Incidente",
                    "Una situación validada o tratada como tal conforme al procedimiento de la organización.",
                  ],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Este es un marco práctico del artículo, no una clasificación legal ni un estándar
                universal. Dependiendo del sistema instalado, las señales pueden provenir de
                sensores, contactos, botones, control de acceso, video, analítica, dispositivos
                perimetrales o fallas técnicas.
              </p>
            </section>

            <section id="proceso" className="mt-16 scroll-mt-28">
              <SectionTitle id="proceso" number="02">
                De detección a cierre: un modelo editorial
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                El valor de un sistema no termina al emitir una notificación. El proceso debe
                conectar la señal con contexto, responsables, decisiones y seguimiento.
              </p>
              <ol
                className="mt-8 grid gap-4 border border-line bg-surface-elevated p-5 sm:grid-cols-6 sm:gap-0 sm:p-0"
                aria-label="Flujo editorial de atención de alertas"
              >
                {[
                  "Detección",
                  "Recepción",
                  "Validación",
                  "Escalamiento",
                  "Respuesta",
                  "Cierre",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="relative px-3 py-4 text-center text-sm font-semibold text-ink sm:border-r sm:border-line sm:last:border-r-0"
                  >
                    {item}
                    {index < 5 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-4 left-1/2 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-surface text-primary sm:bottom-auto sm:left-auto sm:-right-4 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <p className="mt-7 max-w-[65ch] text-sm leading-7 text-ink-muted">
                La clasificación y revisión pueden tener diferente profundidad según señal,
                contexto, activo y reglas de la organización. El modelo no establece prioridades
                oficiales ni tiempos de respuesta.
              </p>
            </section>

            <section id="clasificacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="clasificacion" number="03">
                Misma plataforma no significa misma prioridad
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Clasificar una alerta ayuda a decidir quién la revisa, qué información necesita y
                qué procedimiento corresponde. No todas las señales requieren la misma acción.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Alarma de intrusión",
                    "Una condición que requiere revisar el contexto disponible.",
                  ],
                  ["Falla técnica", "Una señal sobre el estado de un dispositivo o servicio."],
                  [
                    "Puerta abierta",
                    "Un cambio de estado que requiere contexto de hora, área y procedimiento.",
                  ],
                  [
                    "Pérdida de comunicación",
                    "Un dispositivo dejó de reportar y conviene revisar condiciones técnicas.",
                  ],
                  [
                    "Evento de video",
                    "Una regla o analítica generó una señal que necesita contexto.",
                  ],
                ].map(([title, detail]) => (
                  <div key={title} className="border-l-2 border-primary pl-4">
                    <h3 className="text-title">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="validacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="validacion" number="04">
                Validar antes de convertir una señal en decisión
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Dependiendo del sistema, la validación puede apoyarse en video, estado de sensores,
                historial, acceso registrado, contacto definido o información adicional de
                plataforma. El dispositivo puede detectar o notificar; no decide por sí solo cuál es
                la respuesta humana correcta.
              </p>
              <aside className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-5">
                <p className="text-eyebrow text-primary">Criterio práctico</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">
                  Validar antes de escalar ayuda a distinguir entre una señal técnica y una
                  situación que requiere respuesta operativa.
                </p>
              </aside>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Algunos sistemas pueden generar señales por configuración, condiciones ambientales,
                usuarios, fallas de comunicación o cambios de escena. Esto no implica una tasa
                universal de falsos positivos ni que toda respuesta deba retrasarse para validar.
              </p>
            </section>

            <section id="escalamiento" className="mt-16 scroll-mt-28">
              <SectionTitle id="escalamiento" number="05">
                Escalamiento: responsables definidos antes del evento
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Antes de una alerta deben existir reglas claras sobre quién recibe, quién decide,
                quién es contacto primario, quién respalda y qué información se conserva. El aviso a
                autoridades o terceros depende del servicio, procedimiento, tipo de evento y
                condiciones aplicables; no es una regla automática para cualquier alarma.
              </p>
              <ol
                className="mt-8 grid gap-3 border border-line bg-surface-alt p-5 text-center text-sm font-semibold text-ink sm:grid-cols-6"
                aria-label="Flujo de escalamiento"
              >
                {[
                  "Alerta",
                  "Validación",
                  "Responsable definido",
                  "Escalamiento",
                  "Acción",
                  "Registro",
                ].map((item, index) => (
                  <li key={item}>
                    {item}
                    {index < 5 ? (
                      <span aria-hidden="true" className="ml-3 text-primary">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>

            <section id="preparacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="preparacion" number="06">
                Una respuesta eficaz se diseña antes de que ocurra la alerta
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Instalar sensores sin definir procedimiento deja incompleta la operación. Para cada
                activo, conviene aclarar riesgo, señal relevante, responsable y criterio de
                escalamiento.
              </p>
              <div
                className="mt-8 grid gap-3 border border-line bg-surface-elevated p-5 text-center text-sm font-semibold text-ink sm:grid-cols-6"
                aria-label="Preparación de respuesta"
              >
                {["Activo", "Riesgo", "Señal", "Responsable", "Procedimiento", "Escalamiento"].map(
                  (item, index) => (
                    <div key={item}>
                      {item}
                      {index < 5 ? (
                        <span aria-hidden="true" className="ml-3 text-primary">
                          →
                        </span>
                      ) : null}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Los contactos necesitan mantenerse actualizados, contar con respaldo y tener canales
                definidos. No se incluyen datos personales, teléfonos ni nombres de puestos
                universales.
              </p>
            </section>

            <section id="tecnologia" className="mt-16 scroll-mt-28">
              <SectionTitle id="tecnologia" number="07">
                Tecnología, personas y procedimientos
              </SectionTitle>
              <div
                className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3"
                aria-label="Elementos de una respuesta coordinada"
              >
                {[
                  [
                    "Tecnología",
                    "Detecta o notifica condiciones según sus capacidades y configuración.",
                  ],
                  [
                    "Personas",
                    "Validan contexto y toman decisiones conforme a sus responsabilidades.",
                  ],
                  ["Procedimientos", "Coordinan escalamiento, registro y seguimiento."],
                ].map(([title, detail]) => (
                  <div key={title} className="bg-surface-elevated p-5">
                    <p className="text-eyebrow text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[65ch] text-base leading-8 text-ink-muted">
                Automatizar una notificación no equivale a automatizar toda la decisión. Dependiendo
                de la solución, pueden existir reglas, avisos o registros automáticos; deben
                revisarse como capacidades del producto, no como sustitutos del criterio humano.
              </p>
              <p className="mt-5 max-w-[65ch] text-sm leading-7 text-ink-muted">
                Una alarma puede indicar una condición; el video puede añadir contexto; y el control
                de acceso puede aportar datos de credencial cuando corresponda. Cada sistema aporta
                señales distintas. Consulte también la{" "}
                <InternalLink to="/blog/videovigilancia-que-considerar-antes-instalar-camaras">
                  guía para definir videovigilancia empresarial
                </InternalLink>
                .
              </p>
            </section>

            <section id="continuidad" className="mt-16 scroll-mt-28">
              <SectionTitle id="continuidad" number="08">
                Las fallas técnicas también son eventos
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Un proceso de monitoreo no sólo trata situaciones físicas. Dependiendo de la
                plataforma, puede haber señales sobre pérdida de comunicación, alimentación,
                almacenamiento, batería o estado de un sensor. También debe definirse qué ocurre
                cuando falla el propio sistema de seguridad.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                La Ley Federal de Seguridad Privada define un sistema de redundancia para servicios
                de monitoreo como respaldos físicos y tecnológicos ante contingencias y fallas. Es
                un criterio para evaluar continuidad de energía, comunicación y equipos; no implica
                que BÚNKER cuente con una redundancia específica.
              </p>
            </section>

            <section id="cierre" className="mt-16 scroll-mt-28">
              <SectionTitle id="cierre" number="09">
                Responder no termina cuando la alerta desaparece
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                El cierre puede requerir registrar qué ocurrió, acciones realizadas, responsables,
                hora, evidencia asociada, estado final y seguimiento pendiente. Los campos concretos
                dependen del procedimiento y no se presentan aquí como requisitos universales.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <aside className="border-l-2 border-primary bg-primary-soft px-5 py-5">
                  <p className="text-eyebrow text-primary">Registro</p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    Evento → registro → responsable → acción → seguimiento.
                  </p>
                </aside>
                <aside className="border-l-2 border-primary bg-primary-soft px-5 py-5">
                  <p className="text-eyebrow text-primary">Mejora posterior</p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    Después de ciertos eventos puede revisarse si la regla funcionó, si faltó
                    información, si se notificó a la persona correcta y si el procedimiento requiere
                    ajustes.
                  </p>
                </aside>
              </div>
              <p className="mt-6 max-w-[65ch] text-sm leading-7 text-ink-muted">
                NIST SP 800-61r3 trata respuesta a incidentes de ciberseguridad, no monitoreo
                físico. Se utiliza aquí sólo como referencia conceptual para preparación, detección,
                respuesta, recuperación y mejora continua.
              </p>
            </section>

            <section id="regulacion" className="mt-16 scroll-mt-28">
              <SectionTitle id="regulacion" number="10">
                Marco regulatorio de alarmas y monitoreo
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                La Ley Federal de Seguridad Privada define sistemas de alarmas como dispositivos
                electrónicos para disuadir y detectar incidencias; describe monitoreo electrónico
                como recepción, clasificación, seguimiento y administración de señales; y define una
                central de monitoreo como el lugar que recibe las señales con infraestructura y
                personal para la función correspondiente.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                La ley contempla una modalidad de servicios de alarmas y monitoreo electrónico. Esto
                no es asesoría jurídica ni prueba de autorización, infraestructura o cumplimiento
                por parte de BÚNKER. El alcance aplicable debe revisarse con las áreas competentes y
                el proveedor.
              </p>
            </section>

            <section id="datos" className="mt-16 scroll-mt-28">
              <SectionTitle id="datos" number="11">
                Información de seguridad: privacidad y ciberseguridad
              </SectionTitle>
              <p className="max-w-[65ch] text-base leading-8 text-ink-muted">
                Cuando la operación registra nombres, teléfonos, video, audio, accesos, ubicación o
                bitácoras, pueden existir obligaciones aplicables de protección de datos personales.
                Conviene revisar finalidad, proporcionalidad, acceso, conservación y
                responsabilidades con el área jurídica o de privacidad.
              </p>
              <p className="mt-5 max-w-[65ch] text-base leading-8 text-ink-muted">
                Si una plataforma depende de cámaras IP, alarmas IP, apps, cloud o conexiones
                remotas, también debe evaluarse credenciales, permisos, autenticación, firmware,
                acceso remoto, logs, segmentación y actualización. No se desarrolla aquí un programa
                de ciberseguridad ni se atribuyen controles a BÚNKER.
              </p>
            </section>

            <section id="escenarios" className="mt-16 scroll-mt-28">
              <SectionTitle id="escenarios" number="12">
                Tres escenarios hipotéticos
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  [
                    "Sensor de acceso fuera de horario",
                    "El sistema registra una señal. Un responsable revisa el contexto disponible y sigue el procedimiento definido; no se asume automáticamente una intrusión.",
                  ],
                  [
                    "Dispositivo sin comunicación",
                    "La señal se trata como evento técnico. Se revisa conectividad o estado y se escala a soporte o responsable según el procedimiento.",
                  ],
                  [
                    "Evento de video",
                    "Una regla o analítica genera una señal. Se revisa el contexto y la organización decide si requiere seguimiento; no se asume un delito confirmado.",
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
              <SectionTitle id="matriz" number="13">
                Matriz para ordenar el escalamiento
              </SectionTitle>
              <div className="overflow-x-auto border border-line">
                <table className="min-w-[720px] w-full border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">
                    Matriz de validación y escalamiento de señales de seguridad
                  </caption>
                  <thead className="bg-surface-alt text-ink">
                    <tr>
                      <th scope="col" className="p-4">
                        Señal
                      </th>
                      <th scope="col" className="p-4">
                        Qué significa
                      </th>
                      <th scope="col" className="p-4">
                        Qué revisar
                      </th>
                      <th scope="col" className="p-4">
                        Qué no asumir
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-muted">
                    {[
                      [
                        "Sensor de acceso",
                        "Cambio de estado detectado.",
                        "Contexto, hora y área.",
                        "intrusión confirmada.",
                      ],
                      [
                        "Pérdida de comunicación",
                        "El dispositivo dejó de reportar.",
                        "Red, energía y estado.",
                        "sabotaje.",
                      ],
                      [
                        "Evento de video",
                        "Una regla o analítica se activó.",
                        "Imagen y contexto disponible.",
                        "delito confirmado.",
                      ],
                      [
                        "Falla técnica",
                        "Condición de equipo o servicio.",
                        "Diagnóstico y seguimiento.",
                        "que los demás sistemas estén afectados.",
                      ],
                    ].map(([signal, meaning, review, assumption]) => (
                      <tr key={signal} className="border-t border-line">
                        <th scope="row" className="p-4 font-semibold text-ink">
                          {signal}
                        </th>
                        <td className="p-4">{meaning}</td>
                        <td className="p-4">{review}</td>
                        <td className="p-4">No asumir {assumption}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="checklist" className="mt-16 scroll-mt-28">
              <SectionTitle id="checklist" number="14">
                Qué definir antes de contratar monitoreo de seguridad
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
              <SectionTitle id="errores" number="15">
                Errores conceptuales que conviene evitar
              </SectionTitle>
              <ul className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-ink-muted">
                {[
                  "Asumir que alerta equivale a incidente.",
                  "No definir responsables.",
                  "Mantener contactos desactualizados.",
                  "Configurar demasiadas alertas.",
                  "No diferenciar fallas técnicas.",
                  "Depender de un único canal.",
                  "No registrar acciones.",
                  "No revisar eventos después del cierre.",
                  "Instalar tecnología sin procedimientos.",
                  "Asumir que automatización sustituye criterio humano.",
                ].map((item) => (
                  <li key={item} className="border-l border-primary pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="preguntas" className="mt-16 scroll-mt-28">
              <SectionTitle id="preguntas" number="16">
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
                Un sistema es más útil cuando también está definido qué ocurre después de la alerta
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-ink-muted">
                Antes de instalar o contratar una solución, conviene definir señales, responsables,
                validación, escalamiento y registro. BÚNKER puede ayudarle a evaluar las necesidades
                de información de su operación.
              </p>
              <ButtonLink href="/contacto" className="mt-7">
                Hablar con un especialista
              </ButtonLink>
              <p className="mt-6 text-sm leading-6 text-ink-muted">
                Conozca los servicios de{" "}
                <InternalLink to="/servicios/monitoreo">monitoreo</InternalLink>,{" "}
                <InternalLink to="/servicios/videovigilancia">videovigilancia</InternalLink> y{" "}
                <InternalLink to="/servicios/instalacion-soporte">
                  instalación y soporte
                </InternalLink>
                .
              </p>
            </section>

            <section className="mt-16" aria-labelledby="relacionados">
              <SectionTitle id="relacionados" number="17">
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
                      "Custodia en tránsito",
                      "custodia-en-transito-factores-evaluar-seguridad-carga",
                    ],
                    [
                      "Visibilidad operativa de flotilla",
                      "como-mejorar-visibilidad-flotilla-logistica",
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
              <SectionTitle id="fuentes" number="18">
                Fuentes y referencias
              </SectionTitle>
              <ul className="space-y-3 text-sm leading-6 text-ink-muted">
                {[
                  [
                    "Ley Federal de Seguridad Privada — Cámara de Diputados",
                    "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFSP.pdf",
                  ],
                  [
                    "Reglamento de la Ley Federal de Seguridad Privada — Cámara de Diputados",
                    "https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFSP.pdf",
                  ],
                  [
                    "NIST SP 800-61r3 — Incident Response",
                    "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
                  ],
                  [
                    "ONVIF Core Specification — Event handling",
                    "https://www.onvif.org/specs/2506/ONVIF-Core-Spec-v2506.pdf",
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
                Contenido informativo. La arquitectura, capacidades, horarios, autorizaciones y
                procedimientos deben verificarse para cada servicio y operación.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
