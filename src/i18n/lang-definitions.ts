import english from "@/locales/en.json";
import spanish from "@/locales/es.json";
import type { LanguageType, Locale } from "@/types";

export const LANGUAGES: Record<Locale, LanguageType> = {
  en: english,
  es: spanish,
};
