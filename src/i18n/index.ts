import english from '@/locales/en.json';
import spanish from '@/locales/es.json';
import type { Education, Job, Project, Skill } from '@/types';

type LanguageType = {
  PAGE_TITLE: string;
  PAGE_DESCRIPTION: string;
  ABOUT_ME: string[];
  HEADER_MENU_CAPTION: string;
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
  SKILLS: {
    LANGS: Skill[],
    FRAMEWORKS: Skill[],
    OTHERS: Skill[],
  },
  EXPERIENCES: Job[];
  PROJECTS: Project[];
  EDUCATION: Education[];
};

const LANGUAGES: Record<string, LanguageType> = {
  en: english,
  es: spanish,
};

export const getI18N = (currentLocale: string): LanguageType => {
  return LANGUAGES[currentLocale] ?? LANGUAGES['en'];
};