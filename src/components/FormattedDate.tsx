interface Props {
  date: string;
  lang: string;
  text?: string;
}
export const FormattedDate = ({ date, lang, text }: Props) => {
  const parsedDate = new Date(date);

  const isDateInvalid = Number.isNaN(parsedDate.getTime());

  const i18nDate = isDateInvalid
    ? lang === "es"
      ? " - Actual"
      : " - Current"
    : parsedDate.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

  return (
    <time dateTime={i18nDate}>
      {text} {i18nDate !== "Invalid Date" && i18nDate}
    </time>
  );
};
