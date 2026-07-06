import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: {
    mode: "always",
    prefixes: {
      fr: "/fr",
      en: "/en",
    },
  },
  pathnames: {
    "/": "/",
    "/a-propos": {
      fr: "/a-propos",
      en: "/about",
    },
    "/expertises": {
      fr: "/expertises",
      en: "/expertise",
    },
    "/projets": {
      fr: "/projets",
      en: "/projects",
    },
    "/publications": {
      fr: "/publications",
      en: "/insights",
    },
    "/contact": "/contact",
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];