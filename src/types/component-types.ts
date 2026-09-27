export interface AstroComponent {
  (props: any): any;
  isAstroComponent?: boolean;
}

export type SectionVariant = "hero" | "normal";
