import type { SectionConfig } from "@/types";

export const portfolioSections = [
  {
    key: "about",
    loader: () => import("@/sections/portfolio/About.astro"),
    showTitle: false,
  },
  {
    key: "skills",
    loader: () => import("@/sections/portfolio/Skills.astro"),
    showTitle: true,
  },
  {
    key: "experiences",
    loader: () => import("@/sections/portfolio/Experiences.astro"),
    showTitle: true,
  },
  {
    key: "projects",
    loader: () => import("@/sections/portfolio/Projects.astro"),
    showTitle: true,
  },
  {
    key: "education",
    loader: () => import("@/sections/portfolio/Education.astro"),
    showTitle: true,
  },
] satisfies SectionConfig[];
