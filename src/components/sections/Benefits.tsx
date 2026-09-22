import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { benefits, benefitsSection } from "@/data/benefits";

export function Benefits() {
  return (
    <section className="section-y section-rule bg-surface-elevated">
      <Container>
        <SectionHeading
          eyebrow={benefitsSection.eyebrow}
          title={benefitsSection.title}
          description={benefitsSection.description}
          className="max-w-3xl"
        />
        <div className="mt-12 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.id} delay={index * 45}>
              <article className="min-h-44 border-b border-line py-6 pr-6 md:px-6 md:first:pl-0 lg:border-r lg:last:border-r-0">
                <span className="font-display text-sm font-bold text-primary">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{benefit.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
