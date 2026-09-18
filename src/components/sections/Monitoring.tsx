import type { CSSProperties } from "react";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { images } from "@/data/images";
import { pageContent } from "@/data/page-content";

export function Monitoring() {
  const content = pageContent.monitoring;
  return (
    <section id="monitoreo" className="section-y overflow-hidden bg-black-950">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-0">
          <Reveal className="group/monitor relative overflow-hidden lg:col-span-7" from="left">
            <div className="absolute top-0 left-0 z-10 bg-black-950 px-4 py-3 text-xs font-semibold tracking-[0.14em] text-silver-100 uppercase">
              {content.label}
            </div>
            <img
              src={images.monitoring}
              alt="Operadores atendiendo pantallas en un centro de monitoreo 24/7"
              loading="lazy"
              className="h-[26rem] w-full rounded-card object-cover transition-transform duration-[600ms] ease-out motion-safe:group-hover/monitor:scale-[1.012] sm:h-[34rem] lg:h-[42rem]"
            />
          </Reveal>

          <Reveal className="relative z-10 lg:col-span-5 lg:-ml-12" delay={120} from="right">
            <div className="border-t border-primary bg-black-900 p-7 sm:p-10 lg:p-12">
              <span
                aria-hidden="true"
                className="reveal-line -mt-px mb-8 block h-px w-full bg-primary"
              />
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-extrabold tracking-[0.14em] text-silver-100">
                  04
                </span>
                <span className="text-eyebrow text-primary">{content.eyebrow}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-primary/45" />
              </div>
              <h2 className="mt-5 text-headline text-surface-elevated">
                {content.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-lead mt-6 max-w-xl text-warm-gray-300">{content.description}</p>
              <ul className="mt-8 border-t border-surface-elevated/15">
                {content.features.map((feature, index) => (
                  <li
                    key={feature}
                    className="monitor-feature grid grid-cols-[2rem_1fr] gap-3 border-b border-surface-elevated/15 py-4"
                    style={{ "--motion-delay": `${160 + index * 55}ms` } as CSSProperties}
                  >
                    <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    <span className="text-sm font-medium text-warm-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contacto"
                variant="onDark"
                size="lg"
                className="monitor-feature mt-9"
                style={{ "--motion-delay": "410ms" } as CSSProperties}
              >
                Conocer el servicio
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
