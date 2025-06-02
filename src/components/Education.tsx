import type { EducationProps } from "@/types";
import { Card } from "./Card";
import { getStudyStatus } from "@/utils";
import {
  CalendarMonthOutlined,
  HistoryEduOutlined,
  MapOutlined,
  PublicOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
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
  const statusColorBadge = finished
    ? "bg-[#056674] text-white"
    : "bg-[#f6f6f7] border dark:bg-black_rain-900";

  const textClassNames = "text-[#71717a] dark:text-[#d5d5d5]";

  return (
    <Card aditionalClassNames="">
      <section className="flex-items-center justify-between px-4 w-full">
        <h3 className="font-bold text-xl">{institution}</h3>

        <span className={`rounded-full px-2 ${statusColorBadge}`}>
          {getStudyStatus(finished, lang)}
        </span>
      </section>

      <section className={`flex gap-1 w-full px-2 text-sm ${textClassNames}`}>
        <MapOutlined />
        {campus}
      </section>

      <section className={`flex gap-1 w-full px-2 text-sm ${textClassNames}`}>
        <HistoryEduOutlined />
        {gpa}
      </section>

      <section className={`flex gap-1 w-full px-2 text-sm ${textClassNames}`}>
        <SchoolOutlined />
        {degree}
      </section>

      <section className={`w-full px-2 text-sm ${textClassNames}`}>
        <CalendarMonthOutlined />

        <FormattedDate date={startDate} lang={lang} />
        <FormattedDate date={endDate} lang={lang} />
      </section>

      <section className={`flex gap-1 text-sm w-full px-2 ${textClassNames}`}>
        <PublicOutlined />
        <a
          className="hover:text-blue-500"
          href={schoolLink}
          target="_blank"
          rel="noreferrer"
        >
          {schoolLink}
        </a>
      </section>
    </Card>
  );
};
