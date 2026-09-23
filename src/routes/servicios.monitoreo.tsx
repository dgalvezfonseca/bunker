import { createFileRoute } from "@tanstack/react-router";

import { MonitoreoServicePage } from "@/components/services/MonitoreoServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Monitoreo de Seguridad y Operaciones | BÚNKER";
const description =
  "Servicio de monitoreo para revisar señales y eventos, aportar contexto y dar seguimiento a procedimientos definidos en operaciones e instalaciones.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/monitoreo")({
  head: () => {
    const url = absoluteUrl("/servicios/monitoreo");
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
  component: MonitoreoServiceRoute,
});

function MonitoreoServiceRoute() {
  return (
    <SitePage>
      <MonitoreoServicePage />
    </SitePage>
  );
}
