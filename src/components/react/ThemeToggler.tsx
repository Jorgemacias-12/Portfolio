import { useTheme } from "@/hooks/useTheme";
import type { Locale } from "@/types";
import { getTranslation } from "@/utils";
import { Moon, Sun } from "lucide-react";

interface Props {
  lang: Locale;
}

const ICON_SIZE_PX = 20;

export const ThemeToggler = ({ lang }: Props) => {
  const { mounted, theme, toggleTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="w-5 h-5 border border-t-blue-500 animate-spin rounded-full" />
    );
  }

  const { t } = getTranslation(lang);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={t("components.theme_toggler.title")}
      aria-label={t("components.theme_toggler.aria-label")}
      className="p-2 rounded-md cursor-pointer hover:bg-surface-soft"
    >
      {theme === "light" ? (
        <Moon size={ICON_SIZE_PX} />
      ) : (
        <Sun size={ICON_SIZE_PX} />
      )}
    </button>
  );
};
