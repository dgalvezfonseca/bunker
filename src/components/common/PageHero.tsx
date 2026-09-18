import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="technical-grid border-b border-line bg-surface-elevated pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container>
        <p className="text-eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-display">{title}</h1>
        <p className="text-lead mt-6 max-w-2xl text-ink-muted">{description}</p>
      </Container>
    </section>
  );
}
