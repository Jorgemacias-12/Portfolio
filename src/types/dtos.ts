export interface Icon {
  name: string;
  size?: number;
  class?: string;
  isLucideIcon?: boolean;
}

export interface SocialNetwork {
  url: string;
  label: string;
  icon: Icon;
}
