import type { Icon } from "./dtos";

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
};

export interface SectionCmpProps {
  id?: string;
  title?: string;
  variant?: SectionVariant;
  showTitle?: boolean;
}

export type SectionVariant = "hero" | "normal";
