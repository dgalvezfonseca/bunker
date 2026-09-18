import { Container } from "@/components/common/Container";
import { brands } from "@/data/brands";

export function Brands() {
  return (
    <section
      id="marcas"
      aria-label="Tecnologías con las que trabajamos"
      className="border-y border-primary/30 bg-primary-dark py-8 text-surface-elevated"
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center">
          <p className="max-w-md text-sm leading-relaxed text-warm-gray-300">
            Tecnología seleccionada según las necesidades de cada proyecto.
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 md:justify-end">
            {brands.map((brand) => (
              <li
                key={brand.id}
                className="font-display text-base font-bold tracking-[0.16em] text-surface-elevated/65 sm:text-lg"
              >
                {brand.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
