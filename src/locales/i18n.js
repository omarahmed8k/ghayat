import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import En from "./translation/en.json";
import Ar from "./translation/ar.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
  lng: "ar",
  fallbackLng: "ar",
  resources: { en: { translations: En }, ar: { translations: Ar } },
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: { escapeValue: false },
});

export default i18n;
