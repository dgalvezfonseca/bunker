import { images } from "./images";

export type OperationSolution = {
  id: string;
  title: string;
  description: string;
  services: string[];
  image: string;
};

export const operationSolutions: OperationSolution[] = [
  {
    id: "instalaciones",
    title: "Protección de instalaciones",
    description: "Tecnología para observar áreas, accesos y condiciones que requieren seguimiento.",
    services: ["Videovigilancia", "Tecnología perimetral", "Monitoreo"],
    image: images.sectorCorporate,
  },
  {
    id: "flotillas",
    title: "Protección de flotillas",
    description: "Información visual y de localización para apoyar la supervisión de unidades.",
    services: ["GPS y Rastreo", "Dashcam con IA", "Monitoreo"],
    image: images.sectorCommercial,
  },
  {
    id: "transito",
    title: "Custodia en tránsito",
    description: "Acompañamiento, seguimiento y coordinación para mercancía durante el recorrido.",
    services: ["Custodia", "Seguimiento de unidad", "Coordinación operativa"],
    image: images.project2,
  },
  {
    id: "respuesta",
    title: "Supervisión y respuesta",
    description: "Monitoreo, alertas, protocolos y seguimiento definidos para cada operación.",
    services: ["Monitoreo", "Alertas", "Protocolos"],
    image: images.monitoring,
  },
  {
    id: "tecnologia",
    title: "Tecnología aplicada",
    description:
      "Video, conectividad, rastreo e IA integrados de acuerdo con las necesidades del proyecto.",
    services: ["IA", "Video", "Conectividad", "Rastreo"],
    image: images.sectorIndustrial,
  },
];

export type Sector = {
  id: string;
  name: string;
  validationNote: string;
};

/** Sectores de aplicación propuestos; requieren validación comercial de BÚNKER. */
export const sectors: Sector[] = [
  {
    id: "logistica-transporte",
    name: "Logística y transporte",
    validationNote: "Pendiente de validar",
  },
  { id: "automotriz", name: "Automotriz", validationNote: "Pendiente de validar" },
  { id: "industrial", name: "Industrial", validationNote: "Pendiente de validar" },
  { id: "corporativo", name: "Corporativo", validationNote: "Pendiente de validar" },
  { id: "distribucion", name: "Distribución", validationNote: "Pendiente de validar" },
  { id: "retail", name: "Retail", validationNote: "Pendiente de validar" },
  { id: "almacenes", name: "Almacenes", validationNote: "Pendiente de validar" },
];
