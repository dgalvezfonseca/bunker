import { createFileRoute } from "@tanstack/react-router";

import { VigilanciaServicePage } from "@/components/services/VigilanciaServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Servicio de Vigilancia para Empresas | BÚNKER";
const description =
  "Servicio de vigilancia para corporativos, instalaciones industriales y centros de distribución, con personal presencial para control, supervisión y ejecución de consignas.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/vigilancia")({
  head: () => {
    const url = absoluteUrl("/servicios/vigilancia");
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
  component: VigilanciaServiceRoute,
});

function VigilanciaServiceRoute() {
  return (
    <SitePage>
      <VigilanciaServicePage />
    </SitePage>
  );
}
