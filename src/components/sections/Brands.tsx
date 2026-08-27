import { Container } from "@/components/common/Container";
import { brands } from "@/data/brands";

export function Brands() {
  return (
    <section aria-label="Tecnologías con las que trabajamos" className="border-y border-line/70 bg-surface py-10">
      <Container>
        <p className="text-center text-sm font-medium text-ink-muted">
          Trabajamos con tecnología de fabricantes reconocidos
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <li
              key={brand}
              className="font-display text-lg font-extrabold tracking-widest text-ink/40 sm:text-xl"
            >
              {brand}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
