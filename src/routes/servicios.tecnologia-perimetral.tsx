import { createFileRoute } from "@tanstack/react-router";

import { TecnologiaPerimetralServicePage } from "@/components/services/TecnologiaPerimetralServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Tecnología Perimetral para Empresas | BÚNKER";
const description =
  "Soluciones de tecnología perimetral para apoyar la supervisión de accesos, límites y zonas exteriores en instalaciones empresariales.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/tecnologia-perimetral")({
  head: () => {
    const url = absoluteUrl("/servicios/tecnologia-perimetral");
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
  component: TecnologiaPerimetralServiceRoute,
});

function TecnologiaPerimetralServiceRoute() {
  return (
    <SitePage>
      <TecnologiaPerimetralServicePage />
    </SitePage>
  );
}
