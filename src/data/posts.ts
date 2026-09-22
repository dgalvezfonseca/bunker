import type { BlogPost } from "./cms";
import { blogImages } from "./images";

type EditorialPost = BlogPost &
  Required<Pick<BlogPost, "metaTitle" | "metaDescription" | "sections" | "cta">>;
const contact = { label: "Contactar a un asesor", href: "/contacto" };
const sections = (
  intro: string,
  content: { heading: string; paragraphs?: string[]; items?: string[] }[],
) => [{ paragraphs: [intro] }, ...content];

export const posts: EditorialPost[] = [
  {
    id: "rastreo-gps",
    slug: "que-revisar-antes-contratar-sistema-rastreo-gps",
    category: "Rastreo y Telemetría",
    title: "Qué revisar antes de contratar un sistema de rastreo GPS para flotillas en México",
    seoTitle: "Rastreo GPS para Flotillas: Qué Revisar Antes de Contratar",
    metaTitle: "Rastreo GPS para Flotillas: Qué Revisar Antes de Contratar | BÚNKER",
    metaDescription:
      "Guía para evaluar un sistema de rastreo GPS para flotillas: hardware, conectividad, telemetría, integraciones, datos y soporte antes de contratar.",
    excerpt:
      "Una guía técnica para comparar hardware, conectividad, plataforma, datos e instalación antes de contratar.",
    cover: blogImages.rastreoGps,
    published: true,
    cta: contact,
    sections: sections(
      "Para las empresas que dependen de la movilidad de sus unidades, el seguimiento de la flotilla es una necesidad operativa. Antes de integrar un proveedor de telemetría, es recomendable evaluar si la solución se alinea con los requerimientos técnicos y operativos.",
      [
        {
          heading: "Especificaciones de hardware y resistencia",
          paragraphs: [
            "El entorno de una flotilla comercial suele ser exigente. Los equipos pueden estar sometidos a vibración, variaciones térmicas y exposición a polvo.",
          ],
          items: [
            "Calidad de instalación estructurada.",
            "Condiciones físicas del equipo según el modelo seleccionado.",
          ],
        },
        {
          heading: "Transmisión y almacenamiento de datos",
          paragraphs: [
            "Durante los recorridos, las unidades pueden atravesar zonas sin cobertura celular. Es importante consultar las capacidades de almacenamiento del equipo seleccionado.",
          ],
        },
        {
          heading: "Funcionalidades de la plataforma",
          items: [
            "Configuración de geocercas.",
            "Reportes históricos que apoyen el análisis logístico.",
          ],
        },
        {
          heading: "Capacidad de integración",
          paragraphs: [
            "Es útil evaluar si la plataforma permite sumar otras tecnologías, como video en ruta, según la compatibilidad del hardware.",
          ],
        },
      ],
    ),
  },
  {
    id: "visibilidad-flotilla",
    slug: "como-mejorar-visibilidad-flotilla-logistica",
    category: "Logística y Transporte",
    title: "Cómo mejorar la visibilidad operativa de una flotilla",
    seoTitle: "Cómo mejorar la visibilidad operativa de una flotilla",
    metaTitle: "Cómo mejorar la visibilidad operativa de una flotilla | BÚNKER",
    metaDescription:
      "Conoce cómo pasar del rastreo básico a una visibilidad operativa de flotilla con ubicación, histórico, eventos, contexto y datos útiles.",
    excerpt:
      "Una guía para relacionar ubicación, histórico, eventos y contexto con las preguntas que importan a la operación.",
    cover: blogImages.visibilidadFlotilla,
    published: true,
    cta: { label: "Solicitar información", href: "/contacto" },
    sections: sections(
      "En la gestión de transporte, visibilidad no solo significa conocer la ubicación: implica herramientas que ayudan a comprender el contexto operativo.",
      [
        {
          heading: "Posicionamiento y configuración telemática",
          paragraphs: [
            "El rastreo GPS es el cimiento del seguimiento. La configuración de rutas y delimitaciones virtuales puede ayudar a observar desviaciones.",
          ],
        },
        {
          heading: "Contexto visual en cabina",
          paragraphs: [
            "Dependiendo del modelo, algunas dashcams permiten el registro de la ruta y de la cabina, aportando una herramienta visual frente a incidentes.",
          ],
        },
        {
          heading: "Centralización de datos",
          paragraphs: [
            "La visibilidad mejora cuando ubicación, historial de alertas y registros de video pueden consultarse de manera ágil.",
          ],
        },
      ],
    ),
  },
  {
    id: "videovigilancia",
    slug: "videovigilancia-que-considerar-antes-instalar-camaras",
    category: "Seguridad en Instalaciones",
    title: "Videovigilancia empresarial: qué considerar antes de instalar cámaras",
    seoTitle: "Videovigilancia empresarial: qué considerar antes de instalar cámaras",
    metaTitle: "Videovigilancia empresarial: qué considerar antes de instalar cámaras | BÚNKER",
    metaDescription:
      "Guía para empresas sobre qué evaluar antes de instalar videovigilancia: objetivos, campo de visión, iluminación, red, almacenamiento, ciberseguridad y privacidad.",
    excerpt:
      "Una guía para definir objetivos, escena e infraestructura antes de seleccionar cámaras para una instalación empresarial.",
    cover: blogImages.videovigilancia,
    published: true,
    cta: { label: "Agendar visita técnica", href: "/contacto" },
    sections: sections(
      "En el entorno industrial y corporativo, un levantamiento previo ayuda a evitar ángulos limitados, fallas de conectividad o almacenamiento insuficiente.",
      [
        {
          heading: "Objetivos de supervisión y selección de lentes",
          paragraphs: [
            "Cada cámara debe tener un propósito. El objetivo de observación define el tipo de lente, la resolución y la ubicación física.",
          ],
        },
        {
          heading: "Condiciones ambientales e iluminación",
          items: [
            "Condiciones de exterior.",
            "Variaciones de luz en andenes y accesos.",
            "Iluminación según el alcance requerido.",
          ],
        },
        {
          heading: "Almacenamiento y retención de video",
          paragraphs: [
            "La retención depende de la capacidad de discos, resolución, cuadros por segundo y compresión. El requerimiento debe plantearse desde el proyecto.",
          ],
        },
        {
          heading: "Infraestructura de red y cableado",
          paragraphs: [
            "La estabilidad de un sistema IP depende de una red y una instalación física ordenadas.",
          ],
        },
      ],
    ),
  },
  {
    id: "dashcam",
    slug: "que-aporta-dashcam-con-ia-operacion-logistica",
    category: "Video Telemática",
    title: "¿Qué aporta una dashcam con IA a una operación logística?",
    seoTitle: "Dashcam con IA en logística: qué aporta a una flotilla",
    metaTitle: "Dashcam con IA en Logística: Qué Aporta a una Flotilla | BÚNKER",
    metaDescription:
      "Conoce qué puede aportar una dashcam con IA a una flotilla: contexto visual, eventos, monitoreo del conductor, ADAS, privacidad y criterios para evaluar una solución.",
    excerpt:
      "Una guía para entender el contexto visual, las funciones opcionales y el proceso operativo detrás de una dashcam para flotillas.",
    cover: blogImages.dashcam,
    published: true,
    cta: { label: "Solicitar información sobre dashcams", href: "/contacto" },
    sections: sections(
      "Mientras el GPS aporta ubicación, el video puede aportar contexto visual sobre incidencias en el camino.",
      [
        {
          heading: "Registro de eventos",
          paragraphs: [
            "La función principal de una dashcam es el registro de video. Sus capacidades de análisis y transmisión dependen del hardware y plataforma seleccionados.",
          ],
        },
        {
          heading: "Apoyo visual frente a incidentes",
          paragraphs: [
            "El video hacia el frente del vehículo puede ser una herramienta documental para procesos de revisión interna.",
          ],
        },
        {
          heading: "Análisis en cabina",
          paragraphs: [
            "Algunas tecnologías incorporan un segundo lente. Las capacidades específicas de IA dependen del modelo y configuración.",
          ],
        },
        {
          heading: "Integración con monitoreo",
          paragraphs: [
            "La información de video cobra relevancia cuando se integra a procesos de monitoreo y comunicación acordados con el cliente.",
          ],
        },
      ],
    ),
  },
  {
    id: "custodia",
    slug: "custodia-en-transito-factores-evaluar-seguridad-carga",
    category: "Logística y Transporte",
    title: "Custodia en tránsito: factores a evaluar para proteger una carga",
    seoTitle: "Custodia en Tránsito: Qué Evaluar para Proteger una Carga",
    metaTitle: "Custodia en Tránsito: Qué Evaluar para Proteger una Carga | BÚNKER",
    metaDescription:
      "Conoce qué evaluar antes de contratar custodia en tránsito: análisis de riesgo, ruta, monitoreo, protocolos, regulación y coordinación operativa.",
    excerpt:
      "Una guía para analizar el traslado completo antes de definir controles de protección para una carga.",
    cover: blogImages.custodia,
    published: true,
    cta: { label: "Contactar para custodia", href: "/contacto" },
    sections: sections(
      "La custodia no consiste únicamente en un vehículo siguiendo a otro; requiere coordinación logística y comunicación.",
      [
        {
          heading: "Modalidad del acompañamiento",
          items: [
            "Vehículo con distintivos para una presencia visual clara.",
            "Caja blanca para un seguimiento de bajo perfil.",
          ],
        },
        {
          heading: "Planeación logística previa",
          items: [
            "Ruta sugerida y alternativas.",
            "Paraderos autorizados para descansos.",
            "Zonas con retos de comunicación.",
          ],
        },
        {
          heading: "Perfil del personal de acompañamiento",
          paragraphs: [
            "Su función principal es observar el entorno, acompañar el trayecto y reportar eventualidades.",
          ],
        },
        {
          heading: "Soporte del centro de monitoreo",
          paragraphs: [
            "El monitoreo puede apoyar la revisión de posiciones y la coordinación de contactos ante incidencias.",
          ],
        },
      ],
    ),
  },
  {
    id: "monitoreo",
    slug: "como-se-coordina-respuesta-alerta-seguridad-monitoreo",
    category: "Centro de Control y Respuesta",
    title: "¿Cómo se coordina la respuesta ante una alerta de seguridad?",
    seoTitle: "Cómo se coordina la respuesta ante una alerta de seguridad",
    metaTitle: "Cómo se coordina la respuesta ante una alerta de seguridad | BÚNKER",
    metaDescription:
      "Conoce cómo se gestiona una alerta de seguridad desde la detección y validación hasta el escalamiento, respuesta, registro y seguimiento.",
    excerpt:
      "Una guía para convertir una señal técnica en una respuesta coordinada, documentada y revisable.",
    cover: blogImages.monitoreo,
    published: true,
    cta: { label: "Solicitar asesoría en monitoreo", href: "/contacto" },
    sections: sections(
      "GPS, dashcams y otras plataformas generan información diaria. El monitoreo busca procesarla como un canal de observación y reporte organizado.",
      [
        {
          heading: "Clasificación de la información",
          paragraphs: [
            "Categorizar notificaciones ayuda a priorizar la atención según la información disponible.",
          ],
        },
        {
          heading: "Proceso de verificación",
          items: [
            "Revisar el comportamiento de las coordenadas.",
            "Consultar video si está integrado.",
            "Intentar contacto según procedimientos autorizados.",
          ],
        },
        {
          heading: "Protocolos de comunicación",
          paragraphs: [
            "Los lineamientos definidos con el cliente establecen a quién notificar, por qué medio y bajo qué circunstancias.",
          ],
        },
        {
          heading: "Coordinación documental",
          paragraphs: [
            "El seguimiento y registro de acciones aportan referencias técnicas sobre los hechos.",
          ],
        },
      ],
    ),
  },
  {
    id: "gps-logistica",
    slug: "gps-logistica-como-utilizar-informacion-decisiones",
    category: "Rastreo y Telemetría",
    title: "GPS en logística: cómo utilizar la información para tomar decisiones",
    seoTitle: "GPS en Logística: Cómo Convertir Datos en Decisiones",
    metaTitle: "GPS en Logística: Cómo Convertir Datos en Decisiones | BÚNKER",
    metaDescription:
      "Aprende cómo transformar datos GPS de una flotilla en información útil para analizar rutas, tiempos, permanencias, excepciones y decisiones operativas.",
    excerpt:
      "Una guía para transformar posiciones GPS en información útil para analizar tiempos, permanencias, excepciones y decisiones operativas.",
    cover: blogImages.decisionesGps,
    published: true,
    cta: { label: "Solicitar información", href: "/contacto" },
    sections: sections(
      "Los reportes GPS pueden ofrecer referencias sobre tiempos, rutas y uso de vehículos para fines de análisis.",
      [
        {
          heading: "Tiempos de inactividad y ralentí",
          paragraphs: [
            "Los reportes pueden ayudar a identificar dónde se concentra el tiempo de espera y revisar procesos de recepción y despacho.",
          ],
        },
        {
          heading: "Revisión histórica de rutas",
          paragraphs: [
            "Comparar rutas planeadas con recorridos realizados ayuda a entender las condiciones reales del camino.",
          ],
        },
        {
          heading: "Parámetros sujetos al hardware",
          paragraphs: [
            "Las capacidades de conducción registradas dependen del dispositivo instalado.",
          ],
        },
        {
          heading: "Uso de geocercas",
          paragraphs: [
            "Las delimitaciones virtuales pueden aportar registros de llegada y salida de zonas configuradas.",
          ],
        },
      ],
    ),
  },
  {
    id: "integracion",
    slug: "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion",
    category: "Integración tecnológica",
    title: "Integrar videovigilancia, GPS y monitoreo: qué aporta",
    seoTitle: "Integrar Videovigilancia, GPS y Monitoreo: Qué Aporta",
    metaTitle: "Integrar Videovigilancia, GPS y Monitoreo: Qué Aporta | BÚNKER",
    metaDescription:
      "Conoce cómo combinar videovigilancia, GPS y monitoreo puede aportar más contexto para validar eventos, coordinar respuestas y evitar sistemas aislados.",
    excerpt:
      "Una guía editorial para entender qué aporta integrar videovigilancia, GPS y monitoreo, qué puede hacer cada sistema y qué definir antes de conectar tecnología de seguridad.",
    cover: blogImages.integracion,
    published: true,
    cta: contact,
    sections: sections(
      "Cuando cámaras, GPS y protocolos operan por separado, consultar información tras un incidente puede requerir distintas fuentes.",
      [
        {
          heading: "Visión conjunta del ciclo operativo",
          items: [
            "Videovigilancia para procesos en instalaciones.",
            "GPS y video en ruta para referencias del recorrido.",
            "Monitoreo para revisar fuentes disponibles.",
          ],
        },
        {
          heading: "Homologación y compatibilidad",
          paragraphs: [
            "La compatibilidad de equipos y plataformas debe considerarse desde el diseño de infraestructura.",
          ],
        },
        {
          heading: "Centralización en el monitoreo",
          paragraphs: [
            "La información adquiere sentido operativo cuando puede revisarse y procesarse de forma estructurada.",
          ],
        },
        {
          heading: "Beneficios de la estructuración",
          items: ["Agilidad en revisión.", "Consistencia técnica.", "Información correlacionada."],
        },
      ],
    ),
  },
];

export const blogCategories = [...new Set(posts.map((post) => post.category ?? ""))].filter(
  Boolean,
);
