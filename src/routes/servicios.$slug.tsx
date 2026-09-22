import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicios/$slug")({
  head: ({ params }) => {
    const service = services.find((item) => item.slug === params.slug);
    return service
      ? {
          meta: [
            { title: service.metaTitle },
            { name: "description", content: service.metaDescription },
          ],
        }
      : {};
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) throw notFound();
  return (
    <SitePage>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        description={service.description}
      />
      <section className="section-y">
        <div className="mx-auto grid max-w-container gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="grid gap-8">
            <div>
              <p className="text-eyebrow text-primary">El reto operativo</p>
              <p className="mt-3 text-lead text-ink-muted">{service.problem}</p>
            </div>
            <div>
              <p className="text-eyebrow text-primary">Cómo funciona</p>
              <p className="mt-3 text-ink-muted">{service.howItWorks}</p>
            </div>
          </div>
          <div className="border-t border-primary pt-5">
            <h2 className="text-title">Beneficios y aplicaciones</h2>
            <ul className="mt-5 grid gap-3 border-t border-line text-sm leading-relaxed text-ink-muted">
              {[...service.benefits, ...service.applications].map((item) => (
                <li key={item} className="border-b border-line py-3">
                  {item}
                </li>
              ))}
            </ul>
            {service.related.length ? (
              <p className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-primary">
                {service.related.map((item) => (
                  <Link key={item.href} to={item.href}>
                    {item.label} ↗
                  </Link>
                ))}
              </p>
            ) : null}
            <Link to="/contacto" className="mt-8 inline-flex text-sm font-semibold text-primary">
              {service.cta} ↗
            </Link>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
