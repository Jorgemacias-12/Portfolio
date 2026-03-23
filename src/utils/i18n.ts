import { LANGUAGES } from "@/i18n/lang-definitions";
import type {
  LanguageType,
  Locale,
  TranslationKey,
  TranslationObject,
  ValueAtKey,
} from "@/types";

export const getTranslation = (locale: Locale): TranslationObject => {
  const dictionary = LANGUAGES[locale];

  if (!dictionary) {
    throw new Error(`Locale ${locale} not found`);
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
