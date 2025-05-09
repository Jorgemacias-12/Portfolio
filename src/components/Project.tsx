import type { ProjectProps } from "@/types";
import { Card } from "./Card";
import { Technology } from "./Technology";
import { Details } from "./Details";

export const Project = ({
  title,
  description,
  technologies,
  responsabilities,
  roles,
  demoLink,
  screenshots,
  repoLink,
  lang,
}: ProjectProps) => {
  const projectRepoLabel = lang === "es" ? "Repositorio" : "Repository";
  const projectResponsabilitiesLabel =
    lang === "es" ? "Responsabilidades" : "Responsablities";
  const projectTechnologiesLabel =
    lang === "es" ? "Tecnologías" : "Technologies";

  return (
    <Card aditionalClassNames="h-fit">
      <h3 className="text-xl font-bold mt-2">{title}</h3>

      {screenshots && "No hay carrousel, pero haré uno mejor que el otro XD"}

      <p className="p-2 text-sm">{description}</p>

      <h4 className="text-left w-full pl-2 text-sm">
        {projectTechnologiesLabel}
      </h4>

      <section className="flex flex-wrap gap-1 justify-center">
        {technologies.map(({ name, icon }) => {
          return <Technology key={name} name={name} icon={icon} />;
        })}
      </section>

      <Details
        title={projectResponsabilitiesLabel}
        content={responsabilities}
      />

      <Details title="Roles" content={roles} />

      <section className="flex flex-wrap items-center gap-2 w-full mt-2">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-2 flex-1 rounded-full h-10 flex items-center justify-center bg-[#056674] dark:bg-persimmon"
          >
            Demo
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 rounded-full gap-2 flex-1 flex items-center justify-center bg-[#e8ebec] dark:bg-[#0d1117]"
          >
            <span className="devicon-github-original" />
            {projectRepoLabel}
          </a>
        )}
      </section>
    </Card>
  );
};
