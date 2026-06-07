export type LinkType = "social" | "oficial";
export type EducationStatus = "graduated" | "completed" | "ongoing";

export interface Icon {
  name: string;
  size?: number;
  class?: string;
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

export interface Image {
  url: string;
  description: string;
}

export interface Video {
  url: string;
  settings: object;
}

export interface Link {
  label: string;
  href: string;
  icon?: string;
}

export interface VerificationLink extends Link {
  type: LinkType;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  campus: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  status: EducationStatus;
  finished: boolean;
  schoolLink: string;
  schoolIconName: string;
  verificationLinks: VerificationLink[];
  relevantProjects: Link[];
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  media?: Image[];
  demo_link?: string;
  repo_link?: string;
  links?: Link[];
}

export interface Point {
  x: number;
  y: number;
}

export interface SocialLink {
  url: string;
  label: string;
  description: string;
  icon?: Icon;
}
