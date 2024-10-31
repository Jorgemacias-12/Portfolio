import type { MouseEvent } from "react";

type LinkProps = {
  label: string;
  url: string;
};

export const Link = ({ label, url }: LinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!url.includes("/")) return;

    event.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });

    window.history.pushState(null, document.title, window.location.pathname);
  };

  return (
    <li>
      <a
        aria-label={label}
        className={`flex flex-1 w-full rounded-md p-2  hover:bg-persimmon-500 hover:text-white`}
        href={url}
        onClick={handleClick}
      >
        {label}
      </a>
    </li>
  );
};
