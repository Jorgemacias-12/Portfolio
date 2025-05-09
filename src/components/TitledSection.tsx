import type { ReactNode } from "react";

import styles from "@/styles/TitledSection.module.css";

interface TitledSectionProps {
  title: string;
  children?: ReactNode;
  name: string;
}

export const TitledSection = ({
  title,
  children,
  name,
}: TitledSectionProps) => {
  return (
    <section id={name} className={`${styles.section}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
