export const locales = ['es', 'en', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localePrefixes: Record<Locale, string> = {
  es: '',
  en: '/en',
  fr: '/fr',
};

export const openGraphLocales: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
  fr: 'fr_FR',
};

export const isLocale = (value: string | undefined): value is Locale =>
  locales.some((locale) => locale === value);

export const localeFromPathname = (pathname: string): Locale => {
  const segment = pathname.split('/').filter(Boolean)[0];
  return isLocale(segment) ? segment : defaultLocale;
};

export const stripLocalePrefix = (pathname: string): string => {
  const locale = localeFromPathname(pathname);
  const prefix = localePrefixes[locale];

  if (!prefix || (pathname !== prefix && !pathname.startsWith(`${prefix}/`))) return pathname;

  const unprefixed = pathname.slice(prefix.length);
  return unprefixed || '/';
};

export const localizedPath = (pathname: string, locale: Locale): string => {
  const unprefixed = stripLocalePrefix(pathname);
  const normalized = unprefixed.startsWith('/') ? unprefixed : `/${unprefixed}`;
  return locale === defaultLocale ? normalized : `${localePrefixes[locale]}${normalized}`;
};
