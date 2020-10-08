import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { uiLanguage } from "utils/storageHelpers";
import { Languages } from "types/common/Languages";
import { APP_DEFAULT_LANGUAGE } from "constants/settings";
import { enTranslation } from "locales/enTranslation";
import { ruTranslation } from "locales/ruTranslation";
import { createBundle } from "utils/createBundle";

export enum Namespaces {
  Common = "common",
  Home = "home",
  Examples = "examples",
  About = "about",
}

const createI18nInstance = ({
  language = APP_DEFAULT_LANGUAGE,
}: {
  language?: string;
}) => {
  const instance = i18next.createInstance();
  instance
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      lng: language,
      ns: Object.values(Namespaces),
      preload: Object.values(Languages),
      resources: {
        en: createBundle(Namespaces, enTranslation),
        ru: createBundle(Namespaces, ruTranslation),
      },
      react: {
        wait: true,
        useSuspense: false,
        bindI18n: "languageChanged",
      },
      interpolation: {
        escapeValue: false,
      },
    });

  return instance;
};

const commonI18n = createI18nInstance({ language: uiLanguage.get() });

export default commonI18n;
