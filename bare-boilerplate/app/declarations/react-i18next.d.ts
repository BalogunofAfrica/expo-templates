import "react-i18next";

import english from "../i18n/languages/en.json";

declare module "react-i18next" {
  interface Resources {
    en: typeof english;
  }
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof english;
    };
  }
}
