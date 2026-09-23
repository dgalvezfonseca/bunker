import { createFileRoute } from "@tanstack/react-router";

import { InstalacionSoporteServicePage } from "@/components/services/InstalacionSoporteServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Instalación y Soporte Técnico | BÚNKER";
const description =
  "Instalación, puesta en marcha y soporte para soluciones de videovigilancia, rastreo y tecnología de seguridad, de acuerdo con el alcance de cada proyecto.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/instalacion-soporte")({
  head: () => {
    const url = absoluteUrl("/servicios/instalacion-soporte");
    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...(url
          ? [
              { property: "og:type", content: "website" },
              { property: "og:title", content: title },
              { property: "og:description", content: description },
              { property: "og:url", content: url },
              { name: "twitter:card", content: "summary" },
              { name: "twitter:title", content: title },
              { name: "twitter:description", content: description },
            ]
          : []),
      ],
      links: url ? [{ rel: "canonical", href: url }] : [],
    };
  },
  component: InstalacionSoporteServiceRoute,
});

function InstalacionSoporteServiceRoute() {
  return (
    <SitePage>
      <InstalacionSoporteServicePage />
    </SitePage>
  );
}
