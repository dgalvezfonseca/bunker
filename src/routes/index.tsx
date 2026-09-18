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
import { Projects } from "@/components/sections/Projects";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Clients } from "@/components/sections/Clients";
import { Blog } from "@/components/sections/Blog";
import { RecoveryCases } from "@/components/sections/RecoveryCases";
import { FieldVideos } from "@/components/sections/FieldVideos";
import { NationalCoverage } from "@/components/sections/NationalCoverage";
import { organizationStructuredData, siteConfig } from "@/config/site";

const title = `${siteConfig.companyName} | Videovigilancia y monitoreo 24/7`;
const description =
  "Diseño, instalación y monitoreo 24/7 de sistemas de videovigilancia CCTV e IP, control de acceso y alarmas para residencias, comercios, corporativos e industria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
        <Projects />
        <FieldVideos />
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
