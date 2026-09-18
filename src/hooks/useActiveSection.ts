import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";

/** Marca la sección del Home que ocupa la zona principal del viewport. */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const sections = mainNav
      .map((item) => document.getElementById(item.href.split("#")[1] ?? ""))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const hashSection = window.location.hash.slice(1);
    setActiveSection(hashSection || sections[0]?.id || "");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
