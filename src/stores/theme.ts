import type { Theme } from "@/types";
import { persistentAtom } from "@nanostores/persistent";

export const $theme = persistentAtom<Theme>("theme", "light");