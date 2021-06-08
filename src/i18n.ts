import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { uiLanguage } from "utils/storageHelpers";
import { appLanguages } from "constants/appLanguages";
import { APP_DEFAULT_LANGUAGE } from "constants/settings";
import { enTranslations } from "locales/enTranslations";
import { ruTranslations } from "locales/ruTranslations";

const resources = {
  en: enTranslations,
  ru: ruTranslations,
};

export enum Namespaces {
  Common = "common",
  Home = "home",
  Examples = "examples",
  About = "about",
  NotFound = "notFound",
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
      fallbackLng: APP_DEFAULT_LANGUAGE,
      supportedLngs: Object.values(appLanguages),
      resources,
      ns: Object.values(Namespaces),
      load: "languageOnly",
      react: {
        useSuspense: true,
        bindI18n: "languageChanged",
      },
      interpolation: {
        escapeValue: false,
      },
    });

  return instance;
};

const i18n = createI18nInstance({ language: uiLanguage.get() });

export { i18n };
