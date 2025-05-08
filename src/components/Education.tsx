import { type EducationProps } from "@/types";
import { Card } from "./Card";
import { useStore } from "@nanostores/react";
import { $theme } from "@/stores";
import { getStudyStatus } from "@/utils";

import { CalendarMonthOutlined, SchoolOutlined, MapOutlined, PublicOutlined, HistoryEduOutlined } from "@mui/icons-material";
import { FormattedDate } from "./FormattedDate";

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
  finished,
}: EducationProps) => {
  const theme = useStore($theme);

  const statusColorBadge = finished 
      ? "bg-[#056674] text-white"
      : theme === 'light' ?  "bg-[#f6f6f7] border": "bg-black_rain-900"

  const themeClassNames = theme == 'light' ? "text-[#71717a]" : "text-[#d5d5d5]";
  
  return (
    <Card aditionalClassNames="h-fit w-full">
      <section className="flex items-center justify-between px-4 w-full">
        <h5 className="font-bold text-xl">{institution}</h5>

        <span className={`rounded-full px-2 ${statusColorBadge}`}>
          {getStudyStatus(finished, lang)}
        </span>
      </section>

      <section className={`w-full px-2 flex gap-1 ${themeClassNames} text-sm`}>
        <MapOutlined />
        {campus}
      </section>
      
      <section className={`w-full px-2 flex gap-1 ${themeClassNames} text-sm`}>
        <HistoryEduOutlined />
        {gpa}
      </section>

      <section className={`w-full px-2 flex gap-1 ${themeClassNames}`}>
        <SchoolOutlined />
        {degree}
      </section>

      <section className={`w-full px-2 ${themeClassNames} text-sm`}>
        <CalendarMonthOutlined />

        <FormattedDate date={startDate} lang={lang} />
        <FormattedDate date={endDate} lang={lang} />
      </section>
    
      <section className={`w-full px-2 ${themeClassNames} flex gap-1 text-sm`}>
        <PublicOutlined />

        <a className="hover:text-blue-500" href={schoolLink} target="_blank">{schoolLink}</a>
      </section>
    </Card>
  );
};
