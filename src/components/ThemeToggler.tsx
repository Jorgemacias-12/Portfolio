import { ICON_SIZE_IN_PX } from "@/config";
import { getTranslation } from "@/i18n";
import type { Locale, Theme } from "@/types";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  lang: Locale;
}

export const ThemeToggler = ({ lang }: Props) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;

    if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const { t } = getTranslation(lang);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 cursor-pointer  hover:bg-gray-300 transition-colors text-black dark:text-white hover:dark:bg-dark-600"
      type="button"
      title={t("components.theme_toggler.title")}
      aria-label={t("components.theme_toggler.aria-label")}
    >
      {theme === "light" ? (
        <Moon size={ICON_SIZE_IN_PX} />
      ) : (
        <Sun size={ICON_SIZE_IN_PX} />
      )}
    </button>
  );
};
