import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarrouselButton = ({
  children,
  type,
  className,
  ...props
}: Props) => {
  return (
    <button
      type={type ?? "button"}
      className={clsx(
        "p-2 text-white bg-black/50 hover:bg-black dark:hover:bg-white/20 rounded-md transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-white/10",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
