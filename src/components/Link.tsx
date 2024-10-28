import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import type { MouseEvent } from "react";

type LinkProps = {
  label: string;
  url: string;
};

export const Link = ({ label, url }: LinkProps) => {
  const theme = useStore($theme);

  const hoverBackgroundDark = "hover:bg-raisin-black-600";
  const hoverBackgroundLight = "hover:bg-persimmon-500 hover:text-white";

  const background =
    theme === "light" ? hoverBackgroundLight : hoverBackgroundDark;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!url.includes("/")) return;

    event.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <li>
      <a
        aria-label={label}
        className={`flex flex-1 w-full rounded-md p-2 ${background}`}
        href={url}
        onClick={handleClick}
      >
        {label}
      </a>
    </li>
  );
};
