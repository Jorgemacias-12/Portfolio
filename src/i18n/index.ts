import english from "@/locales/en.json";
import spanish from "@/locales/es.json";
import type { LanguageType } from "@/types";

const LANGUAGES: Record<string, LanguageType> = {
  en: english,
  es: spanish,
};

export const getI18N = (currentLocale: string): LanguageType => {
  return LANGUAGES[currentLocale] ?? LANGUAGES.en;
};
