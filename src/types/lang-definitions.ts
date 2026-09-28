import spanish from "@/locales/es.json";
import english from "@/locales/en.json";

import type { LanguageType, Locale } from "./i18n";

export const AVAILABLE_LANGUAGES: Record<Locale, LanguageType> = {
  en: english,
  es: spanish,
};

export const LOCALES = ["en", "es"] as Locale[];
