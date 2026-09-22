import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DashcamAiGuide } from "@/components/blog/DashcamAiGuide";
import { CustodyTransitGuide } from "@/components/blog/CustodyTransitGuide";
import { MonitoringAlertGuide } from "@/components/blog/MonitoringAlertGuide";
import { FleetVisibilityGuide } from "@/components/blog/FleetVisibilityGuide";
import { GpsDecisionesGuide } from "@/components/blog/GpsDecisionesGuide";
import { GpsFlotillaGuide } from "@/components/blog/GpsFlotillaGuide";
import { IntegrarSeguridadGuide } from "@/components/blog/IntegrarSeguridadGuide";
import { VideoSurveillanceGuide } from "@/components/blog/VideoSurveillanceGuide";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { siteConfig } from "@/config/site";
import { posts } from "@/data/posts";

const gpsGuideSlug = "que-revisar-antes-contratar-sistema-rastreo-gps";
const fleetVisibilityGuideSlug = "como-mejorar-visibilidad-flotilla-logistica";
const videoSurveillanceGuideSlug = "videovigilancia-que-considerar-antes-instalar-camaras";
const dashcamAiGuideSlug = "que-aporta-dashcam-con-ia-operacion-logistica";
const custodyTransitGuideSlug = "custodia-en-transito-factores-evaluar-seguridad-carga";
const monitoringAlertGuideSlug = "como-se-coordina-respuesta-alerta-seguridad-monitoreo";
const gpsDecisionesGuideSlug = "gps-logistica-como-utilizar-informacion-decisiones";
const integrarSeguridadGuideSlug = "integrar-videovigilancia-gps-monitoreo-seguridad-proteccion";

function absoluteUrl(path: string) {
  return siteConfig.domain === "PENDIENTE" ? null : new URL(path, siteConfig.domain).toString();
}

function GuideStructuredData({ post }: { post: (typeof posts)[number] }) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  if (!url) return null;
  const image = post.cover ? absoluteUrl(post.cover.src) : null;
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      articleSection: post.category,
      mainEntityOfPage: url,
      ...(image ? { image } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((item) => item.slug === params.slug);
    if (!post) return {};
    const url = absoluteUrl(`/blog/${post.slug}`);
    const image = post.cover ? absoluteUrl(post.cover.src) : null;
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        ...(url
          ? [
              { property: "og:type", content: "article" },
              { property: "og:title", content: post.metaTitle },
              { property: "og:description", content: post.metaDescription },
              { property: "og:url", content: url },
              { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
              { name: "twitter:title", content: post.metaTitle },
              { name: "twitter:description", content: post.metaDescription },
              ...(image
                ? [
                    { property: "og:image", content: image },
                    { name: "twitter:image", content: image },
                  ]
                : []),
            ]
          : []),
      ],
      links: url ? [{ rel: "canonical", href: url }] : [],
    };
  },
  component: PostDetail,
});

function PostDetail() {
  const { slug } = Route.useParams();
  const post = posts.find((item) => item.slug === slug && item.published);
  if (!post) throw notFound();
  const guide =
    post.slug === gpsGuideSlug ? (
      <GpsFlotillaGuide post={post} />
    ) : post.slug === fleetVisibilityGuideSlug ? (
      <FleetVisibilityGuide post={post} />
    ) : post.slug === videoSurveillanceGuideSlug ? (
      <VideoSurveillanceGuide post={post} />
    ) : post.slug === dashcamAiGuideSlug ? (
      <DashcamAiGuide post={post} />
    ) : post.slug === custodyTransitGuideSlug ? (
      <CustodyTransitGuide post={post} />
    ) : post.slug === monitoringAlertGuideSlug ? (
      <MonitoringAlertGuide post={post} />
    ) : post.slug === gpsDecisionesGuideSlug ? (
      <GpsDecisionesGuide post={post} />
    ) : post.slug === integrarSeguridadGuideSlug ? (
      <IntegrarSeguridadGuide post={post} />
    ) : null;
  if (guide) {
    return (
      <SitePage>
        <GuideStructuredData post={post} />
        {guide}
      </SitePage>
    );
  }
  return (
    <SitePage>
      <PageHero eyebrow={post.category ?? "Blog"} title={post.title} description={post.excerpt} />
      <article className="section-y">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <img
            src={post.cover?.src}
            alt={post.cover?.alt}
            className="mb-10 aspect-[16/9] w-full object-cover"
            style={{ objectPosition: post.cover?.objectPosition }}
          />
          {post.sections?.map((section, index) => (
            <section key={section.heading ?? index} className="mb-10 last:mb-0">
              <>{section.heading ? <h2 className="text-title mb-4">{section.heading}</h2> : null}</>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-base leading-8 text-ink-muted">
                  {paragraph}
                </p>
              ))}
              {section.items?.length ? (
                <ul className="mb-4 list-disc space-y-2 pl-5 text-ink-muted">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <Link
            to={post.cta.href}
            className="inline-flex border-b border-primary pb-1 text-sm font-semibold text-primary"
          >
            {post.cta.label} ↗
          </Link>
          <p className="mt-10 border-t border-line pt-5 text-sm leading-relaxed text-ink-muted">
            Contenido de carácter informativo. Las características, capacidades y resultados de las
            tecnologías descritas pueden variar según fabricante, modelo, configuración y
            condiciones de operación.
          </p>
        </div>
      </article>
    </SitePage>
  );
}
