import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";

interface SkillProps {
  name: string;
  icon: string;
  description: string;
}

export const Skill = ({ name, icon, description }: SkillProps) => {
  const theme = useStore($theme);

  const lightClassNames = "border bg-seasalt-500";
  const darkClassNames = "border-raisin-black-600 bg-raisin-black";

  const themeClassNames = theme === "light" ? lightClassNames : darkClassNames;

  return (
    <article
      className={`flex border flex-col rounded-md gap-2 p-2 items-center ${themeClassNames}`}
    >
      <section>
        <span className={`${icon} text-6xl text-center`}></span>
      </section>
      <section className="flex flex-col gap-2">
        <h4 className="text-center font-bold text-2xl">{name}</h4>
        <p>{description}</p>
      </section>
    </article>
  );
};
