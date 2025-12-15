import type { AstroComponent } from "@/types";

export const ICON_SIZE_IN_PX = 20;

export const SECTION_COMPONENTS: Record<
  string,
  () => Promise<{ default: AstroComponent }>
> = {
  skills: () => import("@/sections/Skills.astro"),
  about: () => import("@/sections/About.astro"),
  experience: () => import("@/sections/Experiences.astro"),
  projects: () => import("@/sections/Projects.astro"),
  education: () => import("@/sections/Schools.astro"),
};
