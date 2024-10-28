import type { Theme } from "@/types";

export const getThemeBasedOnUserPreference = (): Theme => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark");

  return mediaQuery.matches ? "dark" : "light";
}