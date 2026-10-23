import type {
  Icon,
  LinkType,
  TechnicalSkill,
  TechnicalSkillItem,
} from "./dtos";
import type { Locale } from "./i18n";
import type { HTMLAttributes } from "astro/types";

export interface AstroComponent {
  (props: any): any;
  isAstroComponent?: boolean;
}

export interface MenuItem {
  label: string;
  url: string;
  icon?: Icon | string;
}

export type LinkComponentProps = MenuItem &
  HTMLAttributes<"a"> & {
    variant?: LinkType;
  };

export interface SectionCmpProps {
  id?: string;
  title?: string;
  variant?: SectionVariant;
  showTitle?: boolean;
}

export interface CarrouselCmp {
  locale: Locale;
  images?: (typeof Image)[];
}

export interface BadgeCmpProps extends TechnicalSkill {
  color?: string;
  type?: BadgeType;
  class?: string;
}

export interface SkillCardProps extends TechnicalSkillItem {
  class?: string;
}

export interface LinkVariantConfig {
  href: string;
  target?: TargetType;
  rel?: string;
  wrapper: any | typeof Fragment;
  classes: string;
}

export interface SectionTypeConfig extends SectionCmpProps {
  section: string;
  article: string;
  title: string;
}

export const BADGE_TYPES = [
  "normal",
  "graduated",
  "completed",
  "ongoing",
  "star",
] as const;

export const LINK_TYPES = [
  "social",
  "oficial",
  "menu",
  "iconfied",
  "element",
] as const;

export const SECTION_VARIANTS = ["hero", "normal"];

export const TARGET_TYPE = ["_blank", "_self", "_parent", "_top"] as const;

export type SectionType = NonNullable<SectionCmpProps["variant"]>;
export type LinkVariant = NonNullable<LinkComponentProps["variant"]>;
export type TargetType = "_blank" | "_self" | "_parent" | "_top";
export type SectionVariant = (typeof SECTION_VARIANTS)[number];
export type BadgeType = (typeof BADGE_TYPES)[number];
