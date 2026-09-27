import type { Theme } from "@/types";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  const applyTheme = (themeToApply: Theme) => {
    const html = document.documentElement;

    if (themeToApply === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", themeToApply);
  };

  const toggleTheme = (event?: MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (!event) {
      setTheme(newTheme);
      applyTheme(newTheme);

      return;
    }

    generateCircleAnimation(event, newTheme);
  };

  const generateCircleAnimation = (
    event: MouseEvent<HTMLButtonElement>,
    newTheme: Theme,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const circle = document.createElement("div");

    circle.style.position = "fixed";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.width = "0px";
    circle.style.height = "0px";
    circle.style.borderRadius = "50%";

    circle.style.background = newTheme === "dark" ? "#000" : "#FFF";
    // circle.className = newTheme === "dark" ? "bg-surface" : "bg-surface";
    circle.style.zIndex = "9999";
    circle.style.pointerEvents = "none";
    circle.style.transform = "translate(-50%, -50%)";
    circle.style.transition = "width 0.4s ease-out, height 0.4s ease-out";

    document.body.appendChild(circle);

    requestAnimationFrame(() => {
      circle.style.width = `${maxRadius * 2}px`;
      circle.style.height = `${maxRadius * 2}px`;
    });

    setTimeout(() => {
      setTheme(newTheme);
      applyTheme(newTheme);
    }, 200);

    setTimeout(() => {
      circle.remove();
    }, 400);
  };

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const userPrefersDarkTheme = mediaQuery.matches;

    const initialTheme =
      savedTheme || (userPrefersDarkTheme ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem("theme");

      if (!storedTheme) return;

      const systemTheme = e.matches ? "dark" : "light";

      setTheme(systemTheme);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return { theme, toggleTheme, mounted };
};
