import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";

interface DetailsProps {
  title: string;
  content: string[];
}

export const Details = ({ title, content }: DetailsProps) => {
  const theme = useStore($theme);

  const lightClassNames = "bg-white-smoke-500 border";
  const darkClassNames = "bg-raisin-black-600";

  const themeClassNames = theme === 'light' ? lightClassNames : darkClassNames;

  return (
    <details className={`flex gap-2 w-full appearance-none px-2 rounded-md p-2 ${themeClassNames}`}>
      <summary className={`flex`}>{title}</summary>
      <ul className="mt-2 list-disc pl-6">
        {content.map((text, index) => {
          return <li className="marker:mr-0" key={index}>{text}</li>
        })}
      </ul>
    </details>
  )
}