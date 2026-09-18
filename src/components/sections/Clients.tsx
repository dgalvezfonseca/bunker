import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { clients } from "@/data/clients";
import { pageContent } from "@/data/page-content";

export function Clients() {
  const content = pageContent.clients;
  const loopedClients = [...clients, ...clients];
  return (
    <section id="clientes" className="section-y section-rule overflow-hidden bg-surface">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} className="max-w-2xl" />
        {clients.length ? (
          <div
            className="clients-marquee mt-12 border-y border-line"
            aria-label="Empresas que confían en BÚNKER"
          >
            <ul className="clients-track flex w-max items-stretch">
              {loopedClients.map((client, index) => (
                <li
                  key={`${client.id}-${index}`}
                  aria-hidden={index >= clients.length}
                  className="grid h-24 w-40 shrink-0 place-items-center border-r border-line px-6 py-5 sm:h-28 sm:w-52"
                >
                  {client.logo ? (
                    <img
                      src={client.logo.src}
                      alt={client.logo.alt}
                      className="h-11 max-w-full object-contain grayscale opacity-70 transition-[filter,opacity,transform] duration-300 hover:scale-[1.03] hover:grayscale-0 hover:opacity-100"
                      loading="lazy"
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
