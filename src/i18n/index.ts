import english from "@/locales/en.json";
import spanish from "@/locales/es.json";
import type {
  LanguageType,
  Locale,
  TranslationKey,
  TranslationObject,
  ValueAtKey,
} from "@/types";

const LANGUAGES: Record<Locale, LanguageType> = {
  en: english,
  es: spanish,
};

export const getTranslation = (locale: Locale): TranslationObject => {
  const dictionary = LANGUAGES[locale];

  if (!dictionary) {
    throw new Error(`Locale '${locale}' not found`);
  }

  const t = <K extends TranslationKey>(key: K): ValueAtKey<LanguageType, K> => {
    const value = key
      .split(".")
      .reduce((acc, part) => acc?.[part], dictionary as any);

    if (value === undefined) {
      throw new Error(`Missing translation key: ${key}`);
    }

    return value;
  };

  return {
    locale,
    dictionary,
    t,
  };
};
