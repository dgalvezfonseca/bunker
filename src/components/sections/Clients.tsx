import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { clients } from "@/data/clients";
import { pageContent } from "@/data/page-content";

export function Clients() {
  const content = pageContent.clients;
  return (
    <section id="clientes" className="section-y section-rule overflow-hidden bg-surface">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} className="max-w-2xl" />
        {clients.length ? (
          <div
            className="clients-marquee mt-12 border-y border-line"
            aria-label="Empresas que confían en BÚNKER"
          >
            <ul className="clients-track">
              {[false, true].map((isDuplicate) => (
                <li key={String(isDuplicate)} aria-hidden={isDuplicate} className="clients-group">
                  <ul className="clients-list">
                    {clients.map((client) => (
                      <li
                        key={client.id}
                        data-client={client.id}
                        className="clients-slot flex h-28 w-48 shrink-0 items-center justify-center sm:h-32"
                      >
                        {client.logo ? (
                          <img
                            src={client.logo.src}
                            alt={isDuplicate ? "" : client.logo.alt}
                            className="carousel-logo mx-5 h-14 w-auto max-w-[172px] shrink-0 object-contain"
                            loading={isDuplicate ? "lazy" : "eager"}
                          />
                        ) : (
                          <span className="text-center">
                            {client.name}
                            <small className="mt-1.5 block font-normal text-ink-muted">
                              Logo pendiente
                            </small>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-8 border-l-2 border-primary pl-4 text-sm text-ink-muted">
            {content.emptyMessage}
          </p>
        )}
      </Container>
    </section>
  );
}
