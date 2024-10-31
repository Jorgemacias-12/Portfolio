import type { Theme } from "@/types";

export const getThemeBasedOnUserPreference = (): Theme => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");

  return mediaQuery.matches ? "dark" : "light";
}

export const appendBaseUrl = (url: string) => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL || '';

  return `${baseUrl}${url}`
}