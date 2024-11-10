import { type EducationProps } from "@/types";
import { Card } from "./Card";
import { Details } from "./Details";
import { useStore } from "@nanostores/react";
import { $theme } from "@/stores";

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
  const theme = useStore($theme);
  // TODO: make theme differences and change font color
  const relevantProjectsLabel =
    lang === "es" ? "Proyectos relevantes" : "Relevant projects";

  const educationGoToLabel = `${
    lang === "es" ? "Sitio web de la institución" : "Institution webpage"
  }`;

  const studentGradesLabel = `${lang === "es" ? "Promedio general" : "GPA"}`;

  const subtitleFore = theme == "light" ? "text-gray-600" : "";

  return (
    <Card aditionalClassNames="h-fit">
      <h4 className={`flex gap-2 items-center font-bold text-lg w-full`}>
        <span className="fas fa-school"></span>
        <span className="flex-1">{degree}</span>
      </h4>

      <p className={`w-full text-sm ${subtitleFore}`}>
        {institution} - {campus}
      </p>

      <p className={`w-full text-sm ${subtitleFore}`}>
        {startDate} - {endDate}
      </p>

      <p className="w-full flex items-center gap-2">
        <span className="fas fa-scroll fa-dw"></span>
        <span>
          {studentGradesLabel}: {gpa}
        </span>
      </p>

      <a
        className="w-fit px-2 h-10 flex items-center hover:text-blue-500 hover:underline transition-colors duration-100"
        target="_blank"
        href={schoolLink}
      >
        {educationGoToLabel}
      </a>
    </Card>
  );
};
