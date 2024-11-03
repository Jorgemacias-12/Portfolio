import { type EducationProps } from "@/types";
import { Card } from "./Card";
import { Details } from "./Details";

export const Education = ({
  degree,
  institution,
  campus,
  startDate,
  endDate,
  gpa,
  relevantProjects,
  courses,
  achievements,
  extracurricularActivities,
  schoolLink,
  lang,
}: EducationProps) => {
  const relevantProjectsLabel =
    lang === "es" ? "Proyectos relevantes" : "Relevant projects";

  const educationGoToLabel = `${
    lang === "es" ? "Ir a" : "Go to"
  } ${institution}`;

  return (
    <Card aditionalClassNames="h-fit">
      <h4 className="text-balance text-center font-bold text-lg">{degree}</h4>

      <p className="text-md">{institution}</p>
      <p className="text-md">{campus}</p>

      <section className="flex gap-2 items-center border px-2 py-1 rounded-md">
        <span className="fas fa-calendar"></span>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full px-2 py-1 gap-2 bg-indigo-200 text-indigo-900">
            {startDate}
          </span>
          <span className="rounded-full px-2 py-1 bg-rose-200 text-rose-900">
            {endDate}
          </span>
        </div>
      </section>

      <p className="flex gap-2 items-center bg-orange-200 rounded-full px-2 py-1 text-orange-900">
        <span className="fas fa-scroll fa-dw"></span>
        {gpa}
      </p>

      {relevantProjects && relevantProjects.length !== 0 && (
        <Details title={relevantProjectsLabel} content={relevantProjects} />
      )}

      {courses && courses.length !== 0 && (
        <Details title="Especialidades" content={courses} />
      )}

      {achievements && achievements.length !== 0 && (
        <Details title="Logros" content={achievements} />
      )}

      {extracurricularActivities && extracurricularActivities.length !== 0 && (
        <Details
          title="Actividades extracurriculares"
          content={extracurricularActivities}
        />
      )}

      <a
        href={schoolLink}
        target="_blank"
        className="text-xs rounded-md bg-slate-900 border border-slate-600 text-slate-300 px-2 py-1"
      >
        {educationGoToLabel}
      </a>
    </Card>
  );
};
