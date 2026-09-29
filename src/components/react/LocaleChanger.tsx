import type { Locale } from "@/types";
import { appendBaseUrl, getTranslation } from "@/utils";

interface Props {
  lang: Locale;
}

const ICON_SIZE_PX = 32;

export const LocaleChanger = ({ lang }: Props) => {
  const { t } = getTranslation(lang);

  const flagUrl = t("components.header.flagUrl");
  const languageUrl = t("components.header.languageUrl");
  const languageCaption = t("components.header.languageCaption");

  return (
    <a
      className="flex items-center gap-2 p-1"
      href={appendBaseUrl(languageUrl)}
    >
      <img
        src={flagUrl}
        width={ICON_SIZE_PX}
        height={ICON_SIZE_PX}
        alt={languageCaption}
      />
      {languageCaption}
    </a>
  );
};
