import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";

import { WorkOutline, CalendarMonthOutlined } from "@mui/icons-material";
import { FormattedDate } from "./FormattedDate";

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

  const jobStatusBadgeColorLight = actualJob ? "bg-[#056674]" : "bg-[#f6f6f7]";
  const jobStatusBadgeColorDark = actualJob
    ? "bg-[#056674]"
    : "bg-black_rain-900";
  const jobStatusBadgeTheme =
    theme === "light" ? jobStatusBadgeColorLight : jobStatusBadgeColorDark;

  const goToCompanyUrlLabel = lang === "es" ? "Ir a perfil de compañia" : "Go to company profile";

  const linkedInIconClassNamesTheme = theme === 'light' ? "colored" : "text-white";

  return (
    <article
      className={`flex flex-col border rounded-md p-2 gap-2 ${themeClassNames} w-fit`}
    >
      <section className="flex items-center justify-between px-4">
        <h3 className="font-bold text-xl">{position}</h3>

        <span className={`rounded-full px-2 ${jobStatusBadgeTheme}`}>
          Anterior
        </span>
      </section>
      <p className="text-[#71717a] flex px-2">
        <WorkOutline className="text-[#71717a]" />
        {companyName}
      </p>
      <p className="text-[#71717a] flex px-2">
        <CalendarMonthOutlined />
        <FormattedDate date={startDate} lang={lang} />
        <FormattedDate date={finishDate} lang={lang} />
      </p>
      <p className="mt-2 px-2">{description}</p>

      <a className="text-[#71717a] flex items-center gap-2 justify-center"  target="_blank" href={linkedIn}>
        <span className={`devicon-linkedin-plain ${linkedInIconClassNamesTheme} text-2xl no-underline`}></span>
        <span className="hover:text-blue-500 hover:underline">{goToCompanyUrlLabel}</span>
      </a>
    </article>
  );
};
