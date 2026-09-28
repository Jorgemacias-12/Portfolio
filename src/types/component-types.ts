import type { Icon, LinkType, TechnicalSkill } from "./dtos";
import type { Locale } from "./i18n";

export interface AstroComponent {
  (props: any): any;
  isAstroComponent?: boolean;
}

export interface MenuItem {
  label: string;
  url: string;
  icon?: Icon;
}

export type LinkComponentProps = MenuItem & {
  isForMenu?: boolean;
  isForElement?: boolean;
  isLastElement?: boolean;
  variant?: LinkType;
  classes?: string;
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

export type SectionType = NonNullable<SectionCmpProps["variant"]>;
export type LinkVariant = NonNullable<LinkComponentProps["variant"]>;
export type TargetType = "_blank" | "_self" | "_parent" | "_top";
export type SectionVariant = "hero" | "normal";
export type BadgeType = "normal" | "graduated" | "completed" | "ongoing";
