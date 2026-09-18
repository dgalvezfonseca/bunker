import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="pt-20">
        <header className="border-b border-line bg-primary-dark py-14 sm:py-20">
          <Container>
            <p className="text-eyebrow text-primary-soft">{eyebrow}</p>
            <h1 className="text-headline mt-4 max-w-4xl text-surface-elevated">{title}</h1>
            <p className="text-lead mt-5 max-w-3xl text-primary-soft/80">{description}</p>
          </Container>
        </header>

        <Container className="py-12 sm:py-16">
          <div className="mb-10 border-l-2 border-primary bg-primary-soft px-5 py-4 text-sm leading-relaxed text-primary-dark">
            <strong>Borrador para revisión.</strong> Este documento no sustituye asesoría jurídica.
            Los datos marcados como pendientes deben confirmarse antes de publicar el sitio.
          </div>
          <article className="legal-content max-w-4xl">{children}</article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
