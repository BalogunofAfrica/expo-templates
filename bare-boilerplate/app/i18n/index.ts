/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prefer-export-from */
import i18n from "i18next";
import numeral from "numeral";
import { initReactI18next } from "react-i18next";

import english from "./languages/en.json";
import spanish from "./languages/es.json";
import french from "./languages/fr.json";

const numberFormatter = (value: any, format?: string) =>
  numeral(value).format(format);

i18n.use(initReactI18next).init({
  // compatibilityJSON: "v3",
  debug: __DEV__,
  fallbackLng: {
    // French and Italian are also spoken in Switzerland
    "de-CH": ["fr", "it", "en"],
    default: ["en"],
    es: ["fr", "en"],
    "fr-FR": ["fr", "en"],
    "zh-Hant": ["zh-Hans", "en"],
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    format: (value, format) => numberFormatter(value, format),
  },
  lng: "en",
  react: {
    useSuspense: false,
  },
  resources: {
    en: {
      translation: english,
    },
    es: {
      translation: spanish,
    },
    fr: {
      translation: french,
    },
  },
});

export default i18n;
