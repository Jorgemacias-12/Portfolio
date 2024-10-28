import type { ReactNode } from "react";

interface SkillSectionProps {
  name: string;
  iconName: string;
  children?: ReactNode
}

export const SkillSection = ({ name, iconName, children }: SkillSectionProps) => {
  return (
    <article className="border p-2">
      <h3 className="">{name}<span className={`${iconName} fa-dw`}></span></h3>

      <div className="">
        {children}
      </div>
    </article>
  )
}