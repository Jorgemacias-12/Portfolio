import type { Locale } from "@/types";
import type { SocialLink } from "@/types/dtos";

export const socialNetworks: Record<Locale, SocialLink[]> = {
  en: [
    {
      description: "Code and projects",
      label: "GitHub",
      url: "https://github.com/Jorgemacias-12",
      icon: {
        name: "local:github",
        size: 32,
      },
    },
    {
      description: "Professional experience",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jamz3/",
      icon: {
        name: "devicon:linkedin",
        size: 32,
      },
    },
  ],
  es: [
    {
      description: "Código y proyectos",
      label: "GitHub",
      url: "https://github.com/Jorgemacias-12",
      icon: {
        name: "local:github",
        size: 32,
      },
    },
    {
      description: "Experiencia profesional",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jamz3/",
      icon: {
        name: "devicon:linkedin",
        size: 32,
      },
    },
  ],
};
