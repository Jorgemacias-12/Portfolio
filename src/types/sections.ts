import type { AstroComponent, SectionVariant } from "./component-types";

export type SectionKey =
  | "skills"
  | "about"
  | "experiences"
  | "projects"
  | "education";

export interface SectionConfig {
  key: SectionKey;
  loader: () => Promise<{ default: AstroComponent }>;
  showTitle?: boolean;
  variant?: SectionVariant;
}
