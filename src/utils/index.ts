import type { Theme } from "@/types";

export const getThemeBasedOnUserPreference = (): Theme => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");

  return mediaQuery.matches ? "dark" : "light";
}

export const appendBaseUrl = (url: string) => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL || '';

  return `${baseUrl}${url}`
}

const EducationBadgeStatusLookUpTable: Record<string, string> = {
  "true:es": "Graduado",
  "true:en": "Graduated",
  "false:es": "Estudiando",
  "false:en": "Studying",
}

export const getStudyStatus = (finished: boolean, lang: string = "es") => {
  const key = `${finished}:${lang}`

  return EducationBadgeStatusLookUpTable[key] || "Unknown state"
} 

const WorkBadgeStatusLookUpTable: Record<string, string> = {
  "true:es": "Trabajo actual",
  "true:en": "Currently working",
  "false:es": "Trabajé",
  "false:en": "Previously worked",
};

export const getWorkStatus = (currentlyWorking: boolean, lang: string = "es") => {
  const key = `${currentlyWorking}:${lang}`;

  return WorkBadgeStatusLookUpTable[key] || "Unknown state";
};