import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "../components/common/CookieConsent";
import { Toaster } from "../components/ui/sonner";
import { siteConfig } from "../config/site";
import { withBasePath } from "../lib/base-path";
import {
  consentDefaultsScript,
  gtmHeadScript,
  gtmNoScriptHtml,
  initAnalytics,
} from "../lib/analytics";

const isGitHubPagesBuild = import.meta.env.MODE === "github-pages";
// GTM only on the production site; the GitHub Pages staging copy must not send data.
const analyticsEnabled = import.meta.env.PROD && !isGitHubPagesBuild;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          No pudimos cargar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un problema inesperado. Puedes intentarlo de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Intentar nuevamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteConfig.companyName },
      {
        name: "description",
        content:
          "Vigilancia, custodia en tránsito, rastreo GPS, videovigilancia y monitoreo para unidades, instalaciones y operaciones.",
      },
      { name: "author", content: siteConfig.companyName },
      { name: "theme-color", content: "#2D2926" },
      ...(isGitHubPagesBuild ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: withBasePath("/logo.ico"), type: "image/x-icon" },
    ],
    // Consent defaults must run before the GTM loader; both scripts are ordered.
    scripts: analyticsEnabled
      ? [{ children: consentDefaultsScript }, { children: gtmHeadScript }]
      : [],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <HeadContent />
      </head>
      <body>
        {analyticsEnabled ? (
          <noscript dangerouslySetInnerHTML={{ __html: gtmNoScriptHtml }} />
        ) : null}
        <a
          href="#contenido-principal"
          className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-[2px] bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => (analyticsEnabled ? initAnalytics(router) : undefined), [router]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CookieConsent />
      <Toaster closeButton duration={5000} position="top-right" />
    </QueryClientProvider>
  );
}
