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

const title = "Bunker Global Security Systems | Videovigilancia CCTV y Monitoreo 24/7";
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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Monitoring />
        <Sectors />
        <Process />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
