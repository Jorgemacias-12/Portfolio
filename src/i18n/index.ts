import spanish from '@/locales/es.json';
import english from '@/locales/en.json';

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

const DEFAULT_LOCALE = LANGUAGES.SPANISH;

export const getI18N = (
  { currentLocale = 'es' }:
    { currentLocale: string | undefined }
) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;

  return spanish;
}