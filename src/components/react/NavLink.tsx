import type { LinkComponentProps } from "@/types";
import { appendBaseUrl } from "@/utils";
import type { ReactNode } from "react";

export const NavLink = ({
  label,
  url,
  icon,
  variant = "oficial",
  isForMenu,
}: LinkComponentProps) => {
  const buildedUrl = isForMenu ? appendBaseUrl(`#${url}`) : appendBaseUrl(url);

  const variantRenderers: Record<
    NonNullable<LinkComponentProps["variant"]>,
    () => ReactNode
  > = {
    oficial: () => (
      <li>
        <a
          aria-label={label}
          data-url={url}
          href={buildedUrl}
          className="text-normal flex w-fullt flex-1 hover:bg-blue-500 active:bg-accent hover:text-white text-text p-2 rounded-md"
        >
          {label}
        </a>
      </li>
    ),
    social: () => <li></li>,
    iconfied: () => <li></li>,
    element: () => <li></li>,
    menu: () => <li></li>,
  };

  const renderLink = variantRenderers[variant] ?? variantRenderers.element;

  return renderLink();
};
