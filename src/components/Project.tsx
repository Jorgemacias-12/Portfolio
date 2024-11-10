import { type ProjectProps } from "@/types";
import { Card } from "./Card";
import { Carrousel } from "./Carrousel";
import { Details } from "./Details";
import { Technology } from "./Technology";
import { appendBaseUrl } from "@/utils";

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

  const baseUrlScreenshots =
    screenshots && screenshots.length > 0
      ? screenshots.map((el) => appendBaseUrl(el))
      : undefined;

  return (
    <Card aditionalClassNames="h-fit">
      {screenshots && <Carrousel images={baseUrlScreenshots!} />}

      <h3 className="text-xl font-bold m-2">{title}</h3>

      <p className="p-2 text-sm ">{description}</p>

      <h4 className="text-left w-full pl-2 text-sm">
        {projectTechnologiesLabel}
      </h4>

      <section className="flex gap-1 flex-wrap justify-center">
        {technologies.map(({ name, icon }) => (
          <Technology key={name} name={name} icon={icon} />
        ))}
      </section>

      <Details
        title={projectResponsabilitiesLabel}
        content={responsabilities}
      />

      <Details title="Roles" content={roles} />

      <section className="flex items-center flex-wrap gap-2 mt-2 w-full">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#056674] text-white px-2 flex-1 rounded-full h-10 flex items-center justify-center"
          >
            Demo
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border-slate-600 text-slate-300 h-10 rounded-full gap-2 flex-1 flex items-center justify-center"
          >
            <span className="fa-brands fa-github"></span>
            {projectRepoLabel}
          </a>
        )}
      </section>
    </Card>
  );
};
