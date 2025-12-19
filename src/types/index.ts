import english from "@/locales/en.json";

export type LanguageType = typeof english;
export type Locale = "en" | "es";
export type TranslationKey = NestedKeyOf<LanguageType>;
export type Theme = "light" | "dark";
export type SectionVariant = "hero" | "normal";
export type LinkItem = MenuItem;
export type Direction = "next" | "prev" | "direct";
export type SkillVariant = "card" | "pill";

export type TranslationObject = {
  locale: Locale;
  dictionary: LanguageType;
  t: <K extends TranslationKey>(key: K) => ValueAtKey<LanguageType, K>;
};

export type NestedKeyOf<T extends Record<string, unknown>> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown>
    ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & string];

export type ValueAtKey<
  Obj extends object,
  Key extends string
> = Key extends `${infer First}.${infer Rest}`
  ? First extends keyof Obj
    ? Obj[First] extends object
      ? ValueAtKey<Obj[First], Rest>
      : never
    : never
  : Key extends keyof Obj
  ? Obj[Key]
  : never;

export interface AstroComponent {
  (props: any): any;
  isAstroComponent?: boolean;
}

export interface MenuItem {
  label: string;
  url: string;
}

export type LinkComponentProps = MenuItem & {
  isForMenu?: boolean;
  isForElement?: boolean;
};

export interface Skill {
  name: string;
  icon: string;
  color?: string;
  type?: SkillVariant;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  responsabilities: string[];
  technologies: Skill[];
}

export interface Image {
  url: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tags: Skill[];
  images: Image[];
  link: LinkItem;
}

export interface Education {
  degree: string;
  institution: string;
  campus: string;
  startDate: string;
  endDate: string;
  gpa: string;
  schoolLink: string;
  finished: boolean;
}
