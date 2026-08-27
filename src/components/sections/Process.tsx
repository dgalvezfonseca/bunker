import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="proceso" className="section-y bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo trabajamos"
          description="Un método claro, de la primera visita al soporte continuo."
          align="center"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 70}>
              <li className="flex h-full flex-col gap-2 rounded-card border border-line/70 bg-surface-elevated p-6">
                <span className="font-display text-3xl font-extrabold text-primary/30">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
