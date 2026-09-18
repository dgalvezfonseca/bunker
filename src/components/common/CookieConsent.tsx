import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "./Button";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
  version: 1;
};

const STORAGE_KEY = "bsit_cookie_preferences_v1";
const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000;

function readPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const preferences = JSON.parse(raw) as Partial<CookiePreferences>;
    const savedAt = Date.parse(preferences.savedAt ?? "");
    const expired = !Number.isFinite(savedAt) || Date.now() - savedAt > CONSENT_DURATION_MS;

    if (preferences.version !== 1 || expired) return null;

    return {
      necessary: true,
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing),
      savedAt: preferences.savedAt ?? new Date().toISOString(),
      version: 1,
    };
  } catch {
    return null;
  }
}

function savePreferences(analytics: boolean, marketing: boolean): CookiePreferences {
  const preferences: CookiePreferences = {
    necessary: true,
    analytics,
    marketing,
    savedAt: new Date().toISOString(),
    version: 1,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("cookie-preferences-changed", { detail: preferences }));
  return preferences;
}

export function CookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const showPreferences = useCallback(() => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const latest = readPreferences();
    setAnalytics(latest?.analytics ?? false);
    setMarketing(latest?.marketing ?? false);
    setPanelOpen(true);
  }, []);

  useEffect(() => {
    const stored = readPreferences();
    setPreferences(stored);
    setAnalytics(stored?.analytics ?? false);
    setMarketing(stored?.marketing ?? false);
    setInitialized(true);

    window.addEventListener("open-cookie-preferences", showPreferences);
    return () => window.removeEventListener("open-cookie-preferences", showPreferences);
  }, [showPreferences]);

  useEffect(() => {
    if (!panelOpen) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanelOpen(false);
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      previousFocusRef.current?.focus();
    };
  }, [panelOpen]);

  const choose = (nextAnalytics: boolean, nextMarketing: boolean) => {
    setPreferences(savePreferences(nextAnalytics, nextMarketing));
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setPanelOpen(false);

    // TODO: cargar aquí proveedores opcionales solo después del consentimiento correspondiente.
  };

  if (!initialized) return null;

  return (
    <>
      {!preferences && !panelOpen ? (
        <section
          aria-label="Aviso de cookies"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-h-[calc(100vh-1.5rem)] max-w-5xl overflow-y-auto border border-line bg-surface-elevated p-4 shadow-raised sm:inset-x-6 sm:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-lg font-bold text-primary-dark">
                Tu privacidad importa
              </p>
              <p className="mt-2 max-w-3xl text-xs leading-relaxed text-ink-muted sm:text-sm">
                Usamos almacenamiento necesario para recordar tus preferencias. Los rastreadores de
                analítica o marketing permanecerán desactivados salvo que los aceptes y se configure
                un proveedor.
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <Link
                  to="/politica-de-cookies"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  Política de cookies
                </Link>
                <Link
                  to="/aviso-de-privacidad"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  Aviso de privacidad
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:max-w-md lg:justify-end">
              <Button variant="ghost" onClick={() => choose(false, false)}>
                Rechazar opcionales
              </Button>
              <Button variant="outline" onClick={showPreferences}>
                Configurar
              </Button>
              <Button onClick={() => choose(true, true)}>Aceptar todas</Button>
            </div>
          </div>
        </section>
      ) : null}

      {panelOpen ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-primary-dark/70 p-3 backdrop-blur-sm sm:p-6">
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="flex max-h-[min(44rem,calc(100vh-1.5rem))] w-full max-w-2xl flex-col overflow-hidden bg-surface-elevated shadow-raised"
          >
            <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
              <h2 id="cookie-preferences-title" className="text-title text-primary-dark">
                Preferencias de cookies
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setPanelOpen(false)}
                aria-label="Cerrar preferencias"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                <Icon name="close" className="text-2xl" />
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-6 sm:px-7">
              <p className="text-sm leading-relaxed text-ink-muted">
                Puedes decidir qué categorías opcionales permitir. Actualmente el sitio no tiene
                herramientas de analítica ni publicidad configuradas; estas preferencias dejan el
                control preparado para una integración futura.
              </p>

              <div className="mt-6 divide-y divide-line border-y border-line">
                <PreferenceRow
                  title="Almacenamiento necesario"
                  description="Recuerda esta selección y permite funciones básicas del sitio. No puede desactivarse."
                  checked
                  disabled
                  onChange={() => undefined}
                />
                <PreferenceRow
                  title="Analítica"
                  description="Permitirá medir visitas y uso del sitio cuando se configure un proveedor aprobado."
                  checked={analytics}
                  onChange={() => setAnalytics((value) => !value)}
                />
                <PreferenceRow
                  title="Marketing"
                  description="Permitirá medir campañas o personalizar publicidad cuando exista una integración aprobada."
                  checked={marketing}
                  onChange={() => setMarketing((value) => !value)}
                />
              </div>

              <p className="mt-5 text-xs leading-relaxed text-ink-muted">
                Puedes cambiar tu elección en cualquier momento desde “Preferencias de cookies” en
                el pie de página.
              </p>
            </div>

            <footer className="flex flex-col-reverse gap-2 border-t border-line bg-surface px-5 py-4 sm:flex-row sm:justify-end sm:px-7">
              <Button variant="ghost" onClick={() => choose(false, false)}>
                Rechazar opcionales
              </Button>
              <Button variant="outline" onClick={() => choose(analytics, marketing)}>
                Guardar preferencias
              </Button>
              <Button onClick={() => choose(true, true)}>Aceptar todas</Button>
            </footer>
          </section>
        </div>
      ) : null}
    </>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex gap-5 py-5">
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`${title}: ${checked ? "activado" : "desactivado"}`}
        disabled={disabled}
        onClick={onChange}
        className="relative mt-0.5 h-7 w-12 shrink-0 rounded-full bg-ink-muted/35 transition-colors aria-checked:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span
          className={cn(
            "absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform",
            checked && "translate-x-5",
          )}
        />
      </button>
    </div>
  );
}
