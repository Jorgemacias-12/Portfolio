export interface Icon {
  name: string;
  size?: number;
  class?: string;
  isLucideIcon?: boolean;
}

export interface SocialNetwork {
  url: string;
  label: string;
  icon: Icon;
}

export interface TechnicalSkill {
  name: string;
  icon?: string;
}

export interface TechnicalSkillItem {
  label: string;
  color: string;
  technologies: TechnicalSkill[];
  tagline: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: TechnicalSkill[];
}
