import { useEffect, useRef, useState } from "react";

import { Button } from "./Button";
import { Icon } from "./Icon";
import {
  readCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "./cookiePreferences";

const TAWK_SCRIPT_ID = "tawk-chat-script";
const TAWK_SRC = "https://embed.tawk.to/6aad886da98f283440b1f0d1/1k2qtpr1g";

declare global {
  interface Window {
    Tawk_API?: { hideWidget?: () => void; maximize?: () => void };
  }
}

export function TawkChat() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const loadedRef = useRef(false);

  const loadChat = () => {
    if (loadedRef.current || document.getElementById(TAWK_SCRIPT_ID)) {
      setChatActive(true);
      window.Tawk_API?.maximize?.();
      return;
    }
    const script = document.createElement("script");
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.onload = () => {
      loadedRef.current = true;
      setChatActive(true);
      window.Tawk_API?.maximize?.();
    };
    script.onerror = () => setChatActive(false);
    document.head.appendChild(script);
  };

  const activate = () => {
    if (readCookiePreferences()?.functional) {
      loadChat();
      return;
    }
    setConfirmOpen(true);
  };

  const confirm = () => {
    const preferences = readCookiePreferences();
    saveCookiePreferences(true, preferences?.analytics ?? false);
    setConfirmOpen(false);
    loadChat();
  };

  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) setChatActive(true);

    const handleChange = (event: Event) => {
      const preferences = (event as CustomEvent<CookiePreferences>).detail;
      if (preferences?.functional || !document.getElementById(TAWK_SCRIPT_ID)) return;
      window.Tawk_API?.hideWidget?.();
      // A reload is the reliable boundary after a third-party widget has executed.
      window.location.reload();
    };
    window.addEventListener("cookie-preferences-changed", handleChange);
    return () => window.removeEventListener("cookie-preferences-changed", handleChange);
  }, []);

  return (
    <>
      {!chatActive ? (
        <button
          type="button"
          onClick={activate}
          aria-label="Activar chat"
          className="future-chat hover:text-primary"
        >
          <Icon name="chat" className="text-xl" filled />
        </button>
      ) : null}
      {confirmOpen ? (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-consent-title"
          className="fixed right-4 bottom-20 z-[75] w-[min(22rem,calc(100vw-2rem))] border border-line bg-surface-elevated p-5 shadow-raised sm:right-6"
        >
          <h2 id="chat-consent-title" className="text-title text-primary-dark">
            Activar chat
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Usamos tawk.to para el chat y su activación puede guardar datos funcionales en tu
            navegador.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button onClick={confirm}>Activar y abrir chat</Button>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancelar
            </Button>
          </div>
        </section>
      ) : null}
    </>
  );
}
