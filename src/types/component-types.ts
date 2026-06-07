import type { Icon, LinkType } from "./dtos";

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
  linkType?: LinkType;
};

export interface SectionCmpProps {
  id?: string;
  title?: string;
  variant?: SectionVariant;
  showTitle?: boolean;
}

export type SectionVariant = "hero" | "normal";
export type BadgeType = "normal" | "graduated" | "completed" | "ongoing";
