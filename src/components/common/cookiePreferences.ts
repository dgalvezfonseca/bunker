export type CookiePreferences = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  savedAt: string;
  version: 2;
};

export const COOKIE_PREFERENCES_STORAGE_KEY = "bsit_cookie_preferences_v2";
const LEGACY_COOKIE_PREFERENCES_STORAGE_KEY = "bsit_cookie_preferences_v1";
const CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000;

export function readCookiePreferences(): CookiePreferences | null {
  try {
    window.localStorage.removeItem(LEGACY_COOKIE_PREFERENCES_STORAGE_KEY);
    const raw = window.localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY);
    if (!raw) return null;
    const preferences = JSON.parse(raw) as Partial<CookiePreferences>;
    const savedAt = Date.parse(preferences.savedAt ?? "");
    if (
      preferences.version !== 2 ||
      !Number.isFinite(savedAt) ||
      Date.now() - savedAt > CONSENT_DURATION_MS
    )
      return null;
    return {
      necessary: true,
      functional: Boolean(preferences.functional),
      analytics: Boolean(preferences.analytics),
      savedAt: preferences.savedAt ?? new Date().toISOString(),
      version: 2,
    };
  } catch {
    return null;
  }
}

export function saveCookiePreferences(functional: boolean, analytics: boolean): CookiePreferences {
  const preferences: CookiePreferences = {
    necessary: true,
    functional,
    analytics,
    savedAt: new Date().toISOString(),
    version: 2,
  };
  window.localStorage.removeItem(LEGACY_COOKIE_PREFERENCES_STORAGE_KEY);
  window.localStorage.setItem(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("cookie-preferences-changed", { detail: preferences }));
  return preferences;
}
