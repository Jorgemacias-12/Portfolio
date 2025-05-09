export interface NavigationItem {
  label: string;
  url: string;
}

export interface SectionItem {
  label: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Job {
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  finishDate: string;
  linkedIn?: string | null | undefined;
  actualJob: boolean;
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  screenshots?: string[];
  demoLink?: string;
  roles: string[];
  responsabilities: string[];
  repoLink?: string;
}

export interface ProjectProps extends Project {
  lang: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  campus: string;
  startDate: string;
  endDate: string;
  gpa: string;
  relevantProjects: string[];
  courses: string[];
  achievements: string[];
  extracurricularActivities: string[];
  schoolLink: string;
  finished: boolean;
}

export interface EducationProps extends Education {
  lang: string;
}

export type Theme = "light" | "dark";
