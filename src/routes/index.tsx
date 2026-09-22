import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Monitoring } from "@/components/sections/Monitoring";
import { Sectors } from "@/components/sections/Sectors";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Clients } from "@/components/sections/Clients";
import { Blog } from "@/components/sections/Blog";
import { RecoveryCases } from "@/components/sections/RecoveryCases";
import { NationalCoverage } from "@/components/sections/NationalCoverage";
import { organizationStructuredData, siteConfig } from "@/config/site";
import logoOg from "../../assets/logo-og.png";

const title = "BÚNKER | Servicios Integrales de Tecnología, Vigilancia y Monitoreo";
const description =
  "Integramos personal, tecnología, rastreo GPS y monitoreo para proteger logística e instalaciones en México. Conoce nuestros servicios para empresas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoOg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: logoOg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-surface">
      {organizationStructuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      ) : null}
      <Header />
      <main>
        <Hero />
        <Brands />
        <Clients />
        <About />
        <Services />
        <RecoveryCases />
        <Monitoring />
        <Sectors />
        <Process />
        <Benefits />
        <NationalCoverage />
        <Blog />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
