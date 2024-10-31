import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode;
  aditionalClassNames?: string;
}

export const Card = ({ children, aditionalClassNames }: CardProps) => {
  const theme = useStore($theme);

  const lightClassNames = "border bg-white";
  const darkClassNames = "border-black_rain-900 bg-black_rain-800";

  const themeClassNames = theme === 'light' ? lightClassNames : darkClassNames;

  return (
    <article className={`flex border flex-col rounded-md gap-2 p-2 items-center ${themeClassNames} ${aditionalClassNames}`}>
      {children}
    </article>
  )
}