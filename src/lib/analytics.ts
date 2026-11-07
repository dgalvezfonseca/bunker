import type { AnyRouter } from "@tanstack/react-router";

import {
  COOKIE_PREFERENCES_STORAGE_KEY,
  type CookiePreferences,
} from "@/components/common/cookiePreferences";

/**
 * Google Tag Manager + Consent Mode v2.
 *
 * GA4 (G-E2QHELSMZX) is configured inside GTM, never with gtag.js here.
 * The site only pushes consent state and neutral business events to the dataLayer;
 * no personal data (names, emails, phones, messages) is ever sent.
 */
export const GTM_ID = "GTM-NFNRRZ4Z";

const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

type ConsentValue = "granted" | "denied";

/** Analytics only: the site has no advertising category, so ad signals stay denied. */
function consentState(analytics: boolean, functional: boolean): Record<string, ConsentValue> {
  return {
    analytics_storage: analytics ? "granted" : "denied",
    functionality_storage: functional ? "granted" : "denied",
  };
}

/**
 * Inline <head> script that must run before the GTM loader: sets Consent Mode v2
 * defaults to "denied" and restores a previously saved choice synchronously, so GTM
 * never starts with analytics granted for a visitor who has not accepted it.
 * The stored-preference check mirrors readCookiePreferences().
 */
export const consentDefaultsScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);
try{var p=JSON.parse(localStorage.getItem(${JSON.stringify(COOKIE_PREFERENCES_STORAGE_KEY)})||'null');var t=p&&Date.parse(p.savedAt);if(p&&p.version===2&&isFinite(t)&&Date.now()-t<=${CONSENT_MAX_AGE_MS}){gtag('consent','update',{analytics_storage:p.analytics?'granted':'denied',functionality_storage:p.functional?'granted':'denied'});}}catch(e){}`;

/** Official GTM snippet (<head>), unchanged except for the GTM ID. */
export const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

/** Official GTM snippet (<noscript>, immediately after <body>). */
export const gtmNoScriptHtml = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

export function pushDataLayer(event: { event: string } & Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}

/** gtag()-style command: Consent Mode requires an Arguments object, not an array. */
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer ?? [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function linkPlacement(anchor: HTMLAnchorElement) {
  return (
    anchor.closest<HTMLElement>("[data-track-placement]")?.dataset["trackPlacement"] ??
    (anchor.closest("header")
      ? "header"
      : anchor.closest("footer")
        ? "footer"
        : (anchor.closest<HTMLElement>("section[id]")?.id ?? "page"))
  );
}

function handleClick(event: MouseEvent) {
  const anchor = (event.target as Element | null)?.closest?.<HTMLAnchorElement>("a[href]");
  if (!anchor) return;
  const href = anchor.getAttribute("href") ?? "";
  const base = { link_placement: linkPlacement(anchor), page_path: window.location.pathname };
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
    pushDataLayer({ event: "whatsapp_click", ...base });
  } else if (/^tel:/i.test(href)) {
    pushDataLayer({ event: "phone_call_click", ...base });
  }
}

function handleConsentChange(event: Event) {
  const preferences = (event as CustomEvent<CookiePreferences>).detail;
  if (!preferences) return;
  gtag("consent", "update", consentState(preferences.analytics, preferences.functional));
  pushDataLayer({
    event: "consent_update",
    analytics_consent: preferences.analytics ? "granted" : "denied",
  });
}

/**
 * Client-only wiring. Returns a cleanup function.
 * - Consent updates from the cookie banner.
 * - Delegated click tracking for WhatsApp and phone links.
 * - virtual_page_view only for client-side route changes (the initial load is counted
 *   by the GA4 tag in GTM), so internal TanStack Router navigation is never doubled.
 */
export function initAnalytics(router: AnyRouter) {
  document.addEventListener("click", handleClick, { capture: true });
  window.addEventListener("cookie-preferences-changed", handleConsentChange);

  const unsubscribe = router.subscribe(
    "onResolved",
    ({ fromLocation, toLocation, pathChanged }) => {
      if (!fromLocation || !pathChanged) return;
      // Wait a frame so HeadContent has applied the new <title>.
      requestAnimationFrame(() =>
        pushDataLayer({
          event: "virtual_page_view",
          page_location: window.location.href,
          page_path: toLocation.pathname,
          page_title: document.title,
        }),
      );
    },
  );

  return () => {
    document.removeEventListener("click", handleClick, { capture: true });
    window.removeEventListener("cookie-preferences-changed", handleConsentChange);
    unsubscribe();
  };
}
