import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";

import { WorkOutline, CalendarMonthOutlined } from "@mui/icons-material";
import { FormattedDate } from "./FormattedDate";
import { getWorkStatus } from "@/utils";

interface JobProps {
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  finishDate: string;
  linkedIn?: string;
  lang: string;
  actualJob: boolean;
}

export const Job = ({
  companyName,
  description,
  position,
  startDate,
  finishDate,
  linkedIn,
  lang,
  actualJob,
}: JobProps) => {
  const theme = useStore($theme);

  // #056674
  const lightClassNames = "border bg-white";
  const darkClassNames = "border-black_rain-900 bg-black_rain-800";

  const themeClassNames = theme === "light" ? lightClassNames : darkClassNames;

  const statusColorBadge = actualJob
    ? "bg-[#056674] text-white"
    : theme === "light"
    ? "bg-[#f6f6f7] border"
    : "bg-black_rain-900";

  const textColorClassNames =
    theme == "light" ? "text-[#71717a]" : "text-[#d5d5d5]";

  const goToCompanyProfileLabel =
    lang === "es"
      ? "Ir al perfil de la empresa"
      : "Go to the company's profile";

  return (
    <article
      className={`flex flex-col border justify-between rounded-md p-2 gap-2 ${themeClassNames} w-full`}
    >
      <section className="flex items-center justify-between px-4 py-2 w-full gap-1">
        <h4 className="font-bold text-xl">{position}</h4>

        <span className={`rounded-full px-2 ${statusColorBadge}`}>
          {getWorkStatus(actualJob, lang)}
        </span>
      </section>
      <section
        className={`w-full px-4 flex fap-1 ${textColorClassNames} text-lg`}
      >
        <WorkOutline />
        {companyName}
      </section>
      <section
        className={`w-full px-4 flex gap-1 ${textColorClassNames} text-lg`}
      >
        <CalendarMonthOutlined />

        <FormattedDate date={startDate} lang={lang} />
        <hr />
        <FormattedDate date={finishDate} lang={lang} />
      </section>
      <p className="px-4">{description}</p>
      {linkedIn && (
        <a
          target="_blank"
          className="px-4 flex items-center gap-2 hover:text-blue-500"
          href={linkedIn}
        >
          <span className="devicon-linkedin-plain colored text-2xl text-transparent"></span>
          {goToCompanyProfileLabel}
        </a>
      )}
    </article>
  );
};
