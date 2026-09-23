import { createFileRoute } from "@tanstack/react-router";

import { DashcamIaServicePage } from "@/components/services/DashcamIaServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Dashcam con IA para Flotillas y Logística | BÚNKER";
const description =
  "Soluciones de dashcam con IA para aportar contexto visual a eventos en ruta, apoyar la revisión operativa y complementar la información de una flotilla.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/dashcam-ia")({
  head: () => {
    const url = absoluteUrl("/servicios/dashcam-ia");
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
  component: DashcamIaServiceRoute,
});

function DashcamIaServiceRoute() {
  return (
    <SitePage>
      <DashcamIaServicePage />
    </SitePage>
  );
}
