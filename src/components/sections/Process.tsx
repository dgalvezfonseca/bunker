import type { CSSProperties } from "react";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/data/process";
import { pageContent } from "@/data/page-content";

export function Process() {
  const content = pageContent.process;
  return (
    <section id="proceso" className="section-y section-rule bg-surface">
      <Container>
        <SectionHeading
          index="06"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          className="max-w-2xl"
        />

        <Reveal className="relative mt-14">
          <span aria-hidden="true" className="timeline-line" />
          <ol className="relative grid gap-0 pl-7 xl:grid-cols-6 xl:pt-10 xl:pl-0">
            {processSteps.map((step, i) => (
              <li
                key={step.step}
                className="relative pb-10 last:pb-0 xl:px-4 xl:pb-0 first:xl:pl-0 last:xl:pr-0"
              >
                <span
                  aria-hidden="true"
                  className="timeline-dot absolute top-2 -left-[2.05rem] h-3 w-3 rounded-full border-2 border-primary bg-black-950 xl:-top-[2.7rem] xl:left-4 first:xl:left-0"
                  style={{ "--motion-delay": `${120 + i * 65}ms` } as CSSProperties}
                />
                <Reveal delay={160 + i * 65}>
                  <span className="font-display text-5xl font-extrabold tracking-[-0.04em] text-primary xl:text-6xl">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
