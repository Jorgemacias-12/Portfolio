import {
  type LanguageType,
  type Locale,
  type TranslationKey,
  type TranslationObject,
  type ValueAtKey,
} from "@/types";
import { AVAILABLE_LANGUAGES } from "@/types/lang-definitions";

export const getTranslation = (locale: Locale): TranslationObject => {
  const dictionary = AVAILABLE_LANGUAGES[locale];

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
