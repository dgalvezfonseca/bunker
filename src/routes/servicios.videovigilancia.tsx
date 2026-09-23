import { createFileRoute } from "@tanstack/react-router";

import { VideovigilanciaServicePage } from "@/components/services/VideovigilanciaServicePage";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";

const title = "Videovigilancia para Empresas e Instalaciones | BÚNKER";
const description =
  "Soluciones de videovigilancia para apoyar la supervisión de accesos, áreas prioritarias y operaciones en instalaciones empresariales.";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

export const Route = createFileRoute("/servicios/videovigilancia")({
  head: () => {
    const url = absoluteUrl("/servicios/videovigilancia");
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
  component: VideovigilanciaServiceRoute,
});

function VideovigilanciaServiceRoute() {
  return (
    <SitePage>
      <VideovigilanciaServicePage />
    </SitePage>
  );
}
