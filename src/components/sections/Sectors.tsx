import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { sectors } from "@/data/sectors";
import { pageContent } from "@/data/page-content";

export function Sectors() {
  const content = pageContent.sectors;
  const layout: Record<string, string> = {
    corporativo: "order-1 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1",
    comercial: "order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1",
    industrial: "order-3 lg:col-span-5 lg:col-start-8 lg:row-start-2",
    residencial: "order-4 lg:col-span-5 lg:col-start-1 lg:row-start-3",
  };

  const mobileHeight: Record<string, string> = {
    corporativo: "h-96",
    comercial: "h-64",
    industrial: "h-80",
    residencial: "h-72",
  };

  return (
    <section id="sectores" className="section-y section-rule bg-surface-elevated">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading index="05" eyebrow={content.eyebrow} title={content.title} />
          <p className="text-lead max-w-2xl text-ink-muted lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(3,minmax(16rem,auto))]">
          {sectors.map((sector, i) => (
            <Reveal
              key={sector.id}
              delay={i * 65}
              from={i === 0 ? "scale" : i % 2 === 0 ? "left" : "right"}
              className={layout[sector.id] ?? ""}
            >
              <article
                className={`group relative overflow-hidden rounded-card md:h-80 lg:h-full lg:min-h-64 ${mobileHeight[sector.id] ?? "h-72"}`}
              >
                <img
                  src={sector.image}
                  alt={`Sector ${sector.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[260ms] ease-out motion-safe:group-hover:scale-[1.025]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-950/55 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black-950/0 transition-colors duration-[220ms] group-hover:bg-black-950/10"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-[220ms] ease-out motion-safe:group-hover:-translate-y-0.5">
                  <h3 className="text-lg font-bold tracking-[0.04em] text-surface-elevated uppercase">
                    {sector.name}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-warm-gray-100">
                    {sector.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <div className="order-5 flex flex-col justify-center gap-5 border-t border-primary bg-black-900 p-7 text-surface-elevated md:col-span-2 lg:col-span-7 lg:col-start-6 lg:row-start-3 lg:p-10">
            <p className="max-w-2xl text-base leading-relaxed text-warm-gray-300">
              {content.ctaDescription}
            </p>
            <a
              href="#contacto"
              className="w-fit text-sm font-bold tracking-[0.06em] text-primary uppercase hover:text-silver-100"
            >
              {content.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
