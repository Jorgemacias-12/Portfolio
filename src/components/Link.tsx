import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";

type LinkProps = {
  label: string;
  url: string;
}

export const Link = ({ label, url }: LinkProps) => {
  const theme = useStore($theme);

  const hoverBackgroundDark = "hover:bg-raisin-black-600";
  const hoverBackgroundLight = "hover:bg-indigo-500 hover:text-white";

  const background = theme === 'light' ? hoverBackgroundLight : hoverBackgroundDark;

  return (
    <li>
      <a aria-hidden="true" className={`flex flex-1 w-full rounded-md p-2 ${background}`} href={`${url}`}>{label}</a>
    </li>
  )
}
