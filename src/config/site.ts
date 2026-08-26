/**
 * Central site configuration.
 * PENDIENTE = placeholder data waiting for confirmation from the client.
 */
export const siteConfig = {
  companyName: "Bunker Global Security Systems",
  shortName: "BUNKER GLOBAL",
  domain: "PENDIENTE",
  // PENDIENTE: confirmar datos reales de contacto
  phone: "+52 (55) 1234 5678",
  phoneHref: "tel:+525512345678",
  whatsapp: "5215587654321", // formato internacional sin signos
  whatsappDisplay: "+52 (55) 8765 4321",
  email: "contacto@bunkerglobal.com.mx",
  address: {
    line1: "Av. Reforma 222, Piso 14",
    line2: "Col. Juárez, CDMX, 06600",
  },
  socialLinks: {
    facebook: "PENDIENTE",
    instagram: "PENDIENTE",
    linkedin: "PENDIENTE",
  },
  whatsappMessage:
    "Hola Bunker Global, me gustaría solicitar información sobre sus soluciones de seguridad.",
} as const;

export const whatsappUrl = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailtoUrl = (subject = "Solicitud de cotización") =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
