import { createFileRoute } from "@tanstack/react-router";

import { GpsRastreoServicePage } from "@/components/services/GpsRastreoServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "GPS y Rastreo para Flotillas | BÚNKER";
const description =
  "Soluciones de GPS y rastreo para conocer la ubicación y recorrido de unidades, dar seguimiento a flotillas y contar con más información para la operación.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/gps-rastreo")({
  head: () => {
    const url = absoluteUrl("/servicios/gps-rastreo");
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
  component: GpsRastreoServiceRoute,
});

function GpsRastreoServiceRoute() {
  return (
    <SitePage>
      <GpsRastreoServicePage />
    </SitePage>
  );
}
