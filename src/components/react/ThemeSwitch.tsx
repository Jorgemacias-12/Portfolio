import { useTheme } from "@/hooks/useTheme";
import type { Locale } from "@/types";
import { getTranslation } from "@/utils";
import { LuMoon, LuSun } from "react-icons/lu";

interface Props {
  lang: Locale;
}

const ICON_SIZE_PX = 24;

export const ThemeSwitch = ({ lang }: Props) => {
  const { mounted, theme, toggleTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="w-5 h-5 border-t-blue-500 animate-spin rounded-full border-l-gray-200" />
    );
  }

  const { t } = getTranslation(lang);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={t("components.theme_toggler.title")}
      aria-label={t("components.theme_toggler.aria-label")}
      className="p-2 rounded-md cursor-pointer"
    >
      {theme === "light" ? (
        <LuMoon size={ICON_SIZE_PX} />
      ) : (
        <LuSun size={ICON_SIZE_PX} />
      )}
    </button>
  );
};
