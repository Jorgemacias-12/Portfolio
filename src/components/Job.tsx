import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";

interface JobProps {
  companyName: string,
  position: string,
  description: string,
  startDate: string,
  finishDate: string,
  linkedIn?: string,
}

export const Job = ({ companyName, description, position, startDate, finishDate, linkedIn }: JobProps) => {
  const theme = useStore($theme);

  const lightClassNames = "border bg-seasalt-500";
  const darkClassNames = "border-raisin-black-600 bg-raisin-black";

  const themeClassNames = theme === 'light' ? lightClassNames : darkClassNames;

  return (
    <article className={`flex flex-col border rounded-md p-2 gap-2 items-center ${themeClassNames}`}>
      <h4 className="text-center font-bold text-2xl">{companyName}</h4>
      <p>{position}</p>
      <p>{description}</p>
      <section className="flex gap-2">
        <p className="px-4 py-1 rounded-full bg-green-300 text-green-800">{startDate}</p>
        <p className="px-4 py-1 rounded-full bg-red-300 text-red-800">{finishDate}</p>
      </section>
      {/* TODO: refactor this to change depending of lang */}
      <a className="flex items-center gap-2 bg-blue-500 text-white p-2 rounded-md" href={linkedIn} target="_blank">
        <span className="fa-brands fa-linkedin fa-2xl"></span>
        Ir a LinkedIn
      </a>
    </article>
  )
}
