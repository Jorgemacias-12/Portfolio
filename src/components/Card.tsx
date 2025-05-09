import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  aditionalClassNames?: string;
}

export const Card = ({ children, aditionalClassNames }: Props) => {
  return (
    <article
      className={`flex flex-col items-center rounded-md gap-2 p-2 border bg-white dark:border-black_rain-900 dark:bg-black_rain-800 ${aditionalClassNames}`}
    >
      {children}
    </article>
  );
};
