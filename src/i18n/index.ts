import english from "@/locales/en.json";
import spanish from "@/locales/es.json";

export type LanguageType = typeof english;

const LANGUAGES: Record<string, LanguageType> = {
  en: english,
  es: spanish,
};

export const getTranslations = (locale: string): LanguageType => {
  return LANGUAGES[locale] ?? LANGUAGES.en;
};
