import type { Theme } from "@/types";
import { getThemeBasedOnUserPreference } from "@/utils";
import { persistentAtom } from "@nanostores/persistent";

export const $theme = persistentAtom<Theme>(
  "theme",
  getThemeBasedOnUserPreference()
);
