import type { AstroComponent, SectionVariant } from "./component-types";

export type PortfolioSectionKey =
  | "skills"
  | "about"
  | "experiences"
  | "projects"
  | "education";

export interface PortfolioSectionConfig {
  key: PortfolioSectionKey;
  loader: () => Promise<{ default: AstroComponent }>;
  showTitle?: boolean;
  variant?: SectionVariant;
}
