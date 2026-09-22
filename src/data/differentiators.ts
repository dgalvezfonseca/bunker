export type Differentiator = { icon: string; title: string; description: string };

export const differentiators: Differentiator[] = [
  {
    icon: "engineering",
    title: "Levantamiento",
    description: "Revisamos el sitio, los recorridos y los puntos que requieren atención.",
  },
  {
    icon: "shield_locked",
    title: "Cobertura",
    description: "Definimos la cobertura de acuerdo con lo que necesita observarse y seguirse.",
  },
  {
    icon: "quick_reference_all",
    title: "Infraestructura",
    description:
      "Consideramos conectividad, almacenamiento y condiciones de instalación desde el diseño.",
  },
  {
    icon: "support_agent",
    title: "Puesta en marcha",
    description: "Instalamos, configuramos y probamos el sistema antes de cerrar el trabajo.",
  },
];

export const heroHighlights = [
  { icon: "public", label: "Cobertura nacional" },
  { icon: "location_searching", label: "Rastreo GPS" },
  { icon: "shield", label: "Vigilancia" },
  { icon: "local_shipping", label: "Custodia en tránsito" },
];
