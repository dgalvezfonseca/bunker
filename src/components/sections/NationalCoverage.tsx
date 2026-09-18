import { Container } from "@/components/common/Container";
import { company } from "@/data/company";

export function NationalCoverage() {
  return (
    <section className="coverage section-y overflow-hidden bg-surface-elevated">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-eyebrow text-primary">Cobertura nacional</p>
            <h2 className="mt-4 text-headline">
              Presencia operativa donde tu operación lo requiere.
            </h2>
            <p className="text-lead mt-6 max-w-xl text-ink-muted">{company.nationalCoverage}</p>
          </div>
          <div
            className="coverage-map relative mx-auto aspect-[1.45/1] w-full max-w-2xl"
            aria-hidden="true"
          >
            <svg viewBox="0 0 720 500" className="h-full w-full" fill="none">
              <path
                d="M87 151 150 94l117 14 65-44 114 42 104-8 68 70-37 54 45 55-72 37-23 81-92 8-53 45-89-31-48 38-70-18-25-68-55-40 26-67-39-64Z"
                className="coverage-outline"
              />
              <path d="M150 224 286 205l102 72 128-26 64 63" className="coverage-route" />
              <path
                d="M196 135 336 160l144-34 93 82"
                className="coverage-route coverage-route-delay"
              />
              {[
                [150, 224],
                [286, 205],
                [388, 277],
                [516, 251],
                [580, 314],
                [336, 160],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" className="coverage-node" />
              ))}
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
