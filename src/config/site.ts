/**
 * Central site configuration.
 * PENDIENTE = placeholder data waiting for confirmation from the client.
 */
export const siteConfig = {
  companyName: "BÚNKER Servicios Integrales de Tecnología S.A. de C.V.",
  shortName: "BÚNKER",
  domain: "PENDIENTE",
  phone: "+52 729 383 1608",
  phoneHref: "tel:+527293831608",
  whatsapp: "",
  whatsappDisplay: "",
  email: "contacto@bunkermexico.com.mx",
  address: {
    line1: "Miguel Hidalgo #5, San Francisco Coaxusco",
    line2: "Metepec, Estado de México, C.P. 52140, México",
  },
  socialLinks: {
    facebook: "PENDIENTE",
    instagram: "PENDIENTE",
    linkedin: "PENDIENTE",
  },
  whatsappMessage:
    "Hola BÚNKER, me gustaría solicitar información sobre sus soluciones tecnológicas.",
} as const;

export const hasWhatsapp = Boolean(siteConfig.whatsapp);
export const hasEmail = Boolean(siteConfig.email);
export const hasPhone = Boolean(siteConfig.phone && siteConfig.phoneHref);
export const hasAddress = Boolean(siteConfig.address.line1 || siteConfig.address.line2);

export const whatsappUrl = (message: string = siteConfig.whatsappMessage) =>
  hasWhatsapp ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}` : null;

export const mailtoUrl = (subject = "Solicitud de cotización") =>
  hasEmail ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}` : null;

/** Se renderiza únicamente cuando exista un dominio real confirmado. */
export const organizationStructuredData =
  siteConfig.domain !== "PENDIENTE"
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.companyName,
        url: siteConfig.domain,
      }
    : null;
