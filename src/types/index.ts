export interface LanguageType {
  PAGE_TITLE: string;
  PAGE_DESCRIPTION: string;
  KEYWORDS: string[];
  ABOUT_ME: string[];
  HEADER_MENU_CAPTION: string;
  HEADER_PAGE_VERSION_CAPTION: string;
  HERO_TAGLINE: string;
  HERO_CTA: string;
  COMPONENTS: {
    HEADER: SectionItem[];
  };
  SECTIONS: SectionItem[];
  SKILLS: SkillSection[];
  EXPERIENCES: Job[];
  PROJECTS: Project[];
  EDUCATION: Education[];
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
  type: SkillType;
}

export interface Job {
  companyName: string;
  companyPageUrl: string;
  companyAddress?: string;
  isFullTime?: boolean;
  companyDescription?: string;
  achievements?: string[];
  startDate: string;
  endDate: string;
  actualJob?: string;
  position: string;
  technologies?: Skill[];
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

export interface AstroComponent {
  (props: any): any;
  isAstroComponent?: boolean;
}

export type SectionProps = {
  lang: LanguageType;
  currentLocale?: string;
};

export type SkillType =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "tool_and_platform"
  | "mobile";
