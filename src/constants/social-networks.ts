import type { SocialNetwork } from "@/types/dtos";

export const socialNetworks = [
  {
    label: "GitHub",
    icon: {
      name: "github",
      isLucideIcon: false,
      size: 32,
    },
    url: "https://github.com/Jorgemacias-12",
  },
  {
    label: "LinkedIn",
    icon: {
      name: "linkedin",
      isLucideIcon: false,
      size: 32,
    },
    url: "https://www.linkedin.com/in/jamz3/",
  },
] satisfies SocialNetwork[];
