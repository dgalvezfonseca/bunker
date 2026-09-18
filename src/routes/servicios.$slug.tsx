import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { services } from "@/data/services";
export const Route = createFileRoute("/servicios/$slug")({ component: ServiceDetail });
function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) throw notFound();
  return (
    <SitePage>
      <PageHero eyebrow="Servicio" title={service.title} description={service.description} />
      <section className="section-y">
        <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
          <p className="max-w-2xl text-lead text-ink-muted">
            El alcance, la tecnología y los protocolos se definen de acuerdo con las condiciones
            reales de cada operación.
          </p>
        </div>
      </section>
    </SitePage>
  );
}
