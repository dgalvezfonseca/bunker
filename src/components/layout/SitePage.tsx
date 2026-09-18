import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppButton";
export function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
