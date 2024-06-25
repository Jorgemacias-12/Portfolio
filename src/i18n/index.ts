import english from '@/locales/en.json';
import spanish from '@/locales/es.json';

type LanguageType = {
  PAGE_TITLE: string;
  PAGE_DESCRIPTION: string;
  ABOUT_ME: string[];
  COMPONENTS: {
    HEADER: {
      label: string;
      url: string;
    }[];
  };
  SECTIONS: {
    label: string;
    url: string;
  }[];
};

const LANGUAGES: Record<string, LanguageType> = {
  en: english,
  es: spanish,
};

export const getI18N = (currentLocale: string): LanguageType => {
  return LANGUAGES[currentLocale] ?? LANGUAGES['en'];
};
