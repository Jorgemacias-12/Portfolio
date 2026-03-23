import type { Locale, Theme } from "@/types";
import { getTranslation } from "@/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  lang: Locale;
}

export const ThemeToggler = ({ lang }: Props) => {
  const ICON_SIZE_IN_PX = 20;

  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
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
      className="p-2 rounded-sm transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-dark-600  cursor-pointer"
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
