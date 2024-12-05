import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";

interface SkillProps {
  name: string;
  icon: string;
  description: string;
}

export const Skill = ({ name, icon, description }: SkillProps) => {
  const theme = useStore($theme);

  const lightClassNames = "border bg-white";
  const darkClassNames = "border-black_rain-900 bg-black_rain-800";

  const themeClassNames = theme === "light" ? lightClassNames : darkClassNames;

  return (
    <article
      className={`flex border flex-col rounded-md gap-2 p-2 items-center ${themeClassNames}`}
    >
      <section>
        <span className={`${icon} text-6xl text-center`}></span>
      </section>
      <section className="flex flex-col">
        <h3 className="text-center font-bold text-2xl">{name}</h3>
        <p className="p-2">{description}</p>
      </section>
    </article>
  );
};
