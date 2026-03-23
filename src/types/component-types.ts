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
