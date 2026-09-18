import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { featuredServices, secondaryServices } from "@/data/services";
import { cn } from "@/lib/utils";
import { pageContent } from "@/data/page-content";

export function Services() {
  const content = pageContent.services;
  return (
    <section id="servicios" className="section-y section-rule bg-surface">
      <Container>
        <SectionHeading
          index="03"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-start">
          {featuredServices.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 100}
              className={i === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:mt-20"}
              from={i === 0 ? "left" : "right"}
            >
              <article
                className={cn(
                  "group/service relative flex h-full flex-col overflow-hidden rounded-card border-t-2 border-primary",
                  i === 0 ? "min-h-[32rem] justify-end" : "bg-black-950 text-surface-elevated",
                )}
              >
                <span
                  aria-hidden="true"
                  className="service-accent absolute top-0 right-0 left-0 z-20 h-0.5 bg-silver-100"
                />
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover transition-transform duration-[260ms] ease-out motion-safe:group-hover/service:scale-[1.025]",
                      i === 0
                        ? "absolute inset-0 h-full"
                        : "h-64 border-b border-surface-elevated/10 sm:h-80",
                    )}
                  />
                ) : null}
                {i === 0 ? (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-950/45 to-transparent"
                  />
                ) : null}
                <div
                  className={cn(
                    "relative z-10 flex flex-1 flex-col gap-3 p-7 transition-transform duration-[220ms] ease-out motion-safe:group-hover/service:translate-x-0.5 sm:p-8",
                    i === 0 && "flex-none pt-28 text-surface-elevated sm:p-10",
                  )}
                >
                  <span
                    className={cn("text-eyebrow", i === 0 ? "text-silver-100" : "text-primary")}
                  >
                    Servicio principal · 0{i + 1}
                  </span>
                  <h3 className="text-title text-surface-elevated">{service.title}</h3>
                  <p className="max-w-xl text-base leading-relaxed text-warm-gray-100">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {secondaryServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 65} from={i % 2 === 0 ? "up" : "scale"}>
              <article className="group/secondary flex h-full flex-col gap-3 border-b border-line py-7 pr-6 sm:px-6 sm:first:pl-0 lg:min-h-56 lg:border-r lg:last:border-r-0">
                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-primary transition-[width,background-color] duration-[220ms] ease-out group-hover/secondary:w-10 group-hover/secondary:bg-primary"
                />
                <span className="font-display text-sm font-bold text-primary">0{i + 3}</span>
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
