import type { AstroComponent, Theme, TimeUnit } from "@/types";

export const getThemeBasedOnUserPreference = (): Theme => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");

  return mediaQuery.matches ? "dark" : "light";
};

export const appendBaseUrl = (url: string) => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL || "";

  return `${baseUrl}${url}`;
};

const EducationBadgeStatusLookUpTable: Record<string, string> = {
  "true:es": "Graduado",
  "true:en": "Graduated",
  "false:es": "Estudiando",
  "false:en": "Studying",
};

export const getStudyStatus = (finished: boolean, lang: string = "es") => {
  const key = `${finished}:${lang}`;

  return EducationBadgeStatusLookUpTable[key] || "Unknown state";
};

const WorkBadgeStatusLookUpTable: Record<string, string> = {
  "true:es": "Trabajo actual",
  "true:en": "Currently working",
  "false:es": "Trabajé",
  "false:en": "Previously worked",
};

export const getWorkStatus = (
  currentlyWorking: boolean,
  lang: string = "es"
) => {
  const key = `${currentlyWorking}:${lang}`;

  return WorkBadgeStatusLookUpTable[key] || "Unknown state";
};

export const SECTION_COMPONENTS: Record<
  string,
  () => Promise<{ default: AstroComponent }>
> = {
  experience: () => import("@/components/sections/Experience.astro"),
  about: () => import("@/components/sections/About.astro"),
  skills: () => import("@/components/sections/Skills.astro"),
  projects: () => import("@/components/sections/Projects.astro"),
  education: () => import("@/components/sections/Education.astro"),
};

export const calculateTime = (
  initialDate: Date,
  finalDate: Date,
  locale: string = "es"
) => {
  const differenceInMiliseconds = Math.abs(
    finalDate.getTime() - initialDate.getTime()
  );

  const MILISECONDS_IN_SECOND = 1000;
  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

  const MILISECONDS_IN_DAY =
    MILISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

  const differenceInDays = Math.floor(
    differenceInMiliseconds / MILISECONDS_IN_DAY
  );

  const timeUnits: TimeUnit[] = [
    { averageDays: 365.25, locales: { en: "year(s)", es: "año(s)" } },
    { averageDays: 30.44, locales: { en: "month(s)", es: "mes(es)" } },
    { averageDays: 7, locales: { en: "week(s)", es: "semana(s)" } },
    { averageDays: 1, locales: { en: "day(s)", es: "día(s)" } },
  ];

  const result = timeUnits.reduce<string | null>(
    (currentResult, { locales, averageDays }) => {
      if (currentResult) {
        return currentResult;
      }

      if (differenceInDays >= averageDays) {
        const quantity = Math.floor(differenceInDays / averageDays);
        const unit = locales[locale];
        return `${quantity} ${unit}`;
      }

      return null;
    },
    null
  );

  return (
    result ??
    `${differenceInDays} ${timeUnits[timeUnits.length - 1].locales[locale]}`
  );
};
