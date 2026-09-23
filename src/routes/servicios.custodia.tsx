import { createFileRoute } from "@tanstack/react-router";

import { CustodiaServicePage } from "@/components/services/CustodiaServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Custodia en Tránsito para Operaciones Logísticas | BÚNKER";
const description =
  "Servicio de custodia en tránsito para acompañar y supervisar traslados de carga, con un alcance definido según las características de cada operación.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/custodia")({
  head: () => {
    const url = absoluteUrl("/servicios/custodia");
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
  component: CustodiaServiceRoute,
});

function CustodiaServiceRoute() {
  return (
    <SitePage>
      <CustodiaServicePage />
    </SitePage>
  );
}
