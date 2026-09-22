import { Container } from "@/components/common/Container";
import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import proteccionFlotilla from "../../../assets/proteccion-flotilla.webp";

export function NationalCoverage() {
  return (
    <section className="coverage section-y overflow-hidden bg-surface-elevated">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-eyebrow text-primary">COBERTURA NACIONAL</p>
            <h2 className="mt-4 text-headline">
              Presencia operativa donde tu operación lo requiere
            </h2>
            <p className="text-lead mt-6 max-w-xl text-ink-muted">{company.nationalCoverage}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
              Integramos personal, tecnología y seguimiento operativo para acompañar proyectos
              empresariales.
            </p>
            <Link
              to="/contacto"
              className="mt-7 inline-flex border-b border-primary pb-1 text-sm font-semibold text-primary"
            >
              Solicitar información ↗
            </Link>
          </div>
          <img
            src={proteccionFlotilla}
            alt="Operación logística acompañada por BÚNKER"
            className="aspect-[16/10] w-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
      </Container>
    </section>
  );
}
