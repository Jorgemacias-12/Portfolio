import { useSwipe } from "@/hooks/useSwipe";
import type { Locale } from "@/types";
import { appendBaseUrl, getTranslation } from "@/utils";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "../astro/Link.astro";
import { ThemeToggler } from "./ThemeToggler";
import { NavLink } from "./NavLink";

type Props = {
  locale: Locale;
};

const ICON_SIZE_PX = 32;

export const MobileMenu = ({ locale }: Props) => {
  const { t } = getTranslation(locale);

  const menuSections = Object.values(t("sections"));
  const flagUrl = t("components.header.flagUrl");
  const languageUrl = t("components.header.languageUrl");
  const languageCaption = t("components.header.languageCaption");

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  useSwipe(isOpen, openMenu, closeMenu);

  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflow = "";
      return;
    }

    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="p-4 bg-bg/50 dark:bg-bg/50 flex items-center justify-between md:hidden">
        <a
          className="font-bold cursor-pointer text-xl hover:scale-105 transition-all duration-300 hover:text-accent"
          href={appendBaseUrl("/")}
        >
          {t("site.author_shortname")}
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          aria-label={t("components.header.menu_opener_title")}
          title={t("components.header.menu_opener_title")}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={ICON_SIZE_PX} /> : <Menu size={ICON_SIZE_PX} />}
        </button>
      </nav>

      <section
        className={clsx(
          "fixed inset-0 min-h-dvh h-full z-100",
          "transition-opacity duration-300 ease-in-out",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <button
          aria-label=""
          type="button"
          onClick={closeMenu}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        ></button>

        <aside
          className={clsx(
            "absolute top-0 left-0 z-10 flex flex-col",
            "w-8/12 min-h-dvh",
            "bg-surface dark:bg-bg",
            "transition-all duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <section className="flex justify-between items-center p-4 border-b border-border-strong">
            <a
              className="font-bold cursor-pointer text-xl hover:scale-105 transition-all duration-300 hover:text-accent"
              href={appendBaseUrl("/")}
            >
              {t("site.author_shortname")}
            </a>

            <button
              onClick={closeMenu}
              type="button"
              aria-label={t("components.header.menu_opener_title")}
              title={t("components.header.menu_opener_title")}
            >
              <X size={ICON_SIZE_PX} />
            </button>
          </section>

          <section className="flex p-2 flex-col flex-1">
            <section className="p-2 justify-between flex flex-row">
              <a
                className="flex items-center gap-2 p-1"
                href={appendBaseUrl(languageUrl)}
              >
                <img
                  width={32}
                  height={32}
                  src={flagUrl}
                  alt={`${
                    locale === "es"
                      ? "usa flag for lang change"
                      : "mexico flag for lang change"
                  }`}
                />
                {languageCaption}
              </a>

              <ThemeToggler lang={locale} />
            </section>

            <ul className="flex p-2 flex-col gap-2">
              {menuSections.map((el) => {
                return <NavLink isForMenu key={el.label} {...el} />;
              })}
            </ul>
          </section>

          <footer className="border-t border-border-strong "></footer>
        </aside>
      </section>
    </>
  );
};
