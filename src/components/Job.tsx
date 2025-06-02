import { getWorkStatus } from "@/utils";
import { Card } from "./Card";
import { CalendarMonthOutlined, WorkOutline } from "@mui/icons-material";
import { FormattedDate } from "./FormattedDate";

interface Props {
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
}: Props) => {
  const statusColorBadge = actualJob
    ? "bg-[#056674] text-white"
    : "bg-[#f6f6f7] border dark:bg-black_rain-900";

  const goToCompanyProfileLabel =
    lang === "es"
      ? "Ir al perfil de la empresa"
      : "Go to the company's profile";

  const textColorClassNames = "text-[#71717a] dark:text-[#d5d5d5]";

  return (
    <Card aditionalClassNames="justify-between">
      <section className="flex items-center justify-between px-4 w-full">
        <h3 className="text-xl font-bold">{position}</h3>

        <span className={`rounded-full px-2 ${statusColorBadge}`}>
          {getWorkStatus(actualJob, lang)}
        </span>
      </section>

      <section
        className={`w-full px-4 flex gap-1 text-lg ${textColorClassNames}`}
      >
        <WorkOutline />
        {companyName}
      </section>

      <section className={`w-full px-4 flex gap-1 ${textColorClassNames}`}>
        <CalendarMonthOutlined />

        <FormattedDate date={startDate} lang={lang} />
        <hr />
        <FormattedDate date={finishDate} lang={lang} />
      </section>

      <p className="px-4">{description}</p>

      {linkedIn && (
        <a
          target="_blank"
          rel="noreferrer"
          href={linkedIn}
          className="px-4 flex items-center gap-2 hover:text-blue-500"
        >
          <span className="devicon-linkedin-plain colored text-2xl text-transparent" />

          {goToCompanyProfileLabel}
        </a>
      )}
    </Card>
  );
};
