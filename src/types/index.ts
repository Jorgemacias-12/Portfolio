export type Locales = {
  [key: string]: string;
};

export interface TimeUnit {
  averageDays: number;
  locales: Locales;
}

export interface SkillSection {
  title: string;
  type: SkillType;
  content: Skill[];
}

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
  icon?: string;
  description: string;
}

export interface JobProject {
  name: string;
  description: string;
  url: string | null;
}

export type WorkType = "remote" | "hybrid" | "onsite";

export interface Job {
  company: string;
  location: string;
  work_type: WorkType;
  period: string;
  role: string;
  technologies?: string[];
  responsabilities: string[];
  key_projects?: JobProject[];
  links?: string[];
}

export type ProjectStatus = "completed" | "inProgress" | "planned";
export type EducationStatus = "false" | "true";

export interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  role: string;
  url?: string;
  splash?: string;
  images?: string[];
  status: ProjectStatus;
  status_caption: string;
  features?: string[];
  limitations?: string[];
}

export type TechnologyCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "tool_and_platform"
  | "mobile";

export type SectionVariant = "normal" | "hero";

export interface Technology {
  name: string;
  icon: string;
  category?: TechnologyCategory;
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
  finished_caption: string;
}

export interface EducationProps extends Education {
  lang: string;
}

export type Theme = "light" | "dark";

export interface AstroComponent {
  (props: any): any;
  isAstroComponent?: boolean;
}

export type SectionProps = {
  currentLocale?: string;
};

export type SkillType =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "tool_and_platform"
  | "mobile";

export interface SkillSection {
  title: string;
  type: SkillType;
  content: Skill[];
}
