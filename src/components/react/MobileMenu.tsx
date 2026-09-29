import { useSwipe } from "@/hooks/useSwipe";
import type { Locale } from "@/types";
import { appendBaseUrl, getTranslation } from "@/utils";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { LuX, LuMenu } from "react-icons/lu";
import { ThemeSwitch } from "./ThemeSwitch";
import { LocaleChanger } from "./LocaleChanger";
import { NavLink } from "./NavLink";

interface Props {
  locale: Locale;
}

const ICON_SIZE_PX = 32;

export const MobileMenu = ({ locale }: Props) => {
  const { t } = getTranslation(locale);

  const menuOptions = Object.values(t("sections"));

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
      <button
        onClick={toggleMenu}
        type="button"
        className="block"
        aria-label={t("components.header.menu_opener_title")}
        title={t("components.header.menu_opener_title")}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <LuX size={ICON_SIZE_PX} /> : <LuMenu size={ICON_SIZE_PX} />}
      </button>

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
            "bg-surface",
            "transition-all duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <section className="flex justify-between items-center p-4 border-b border-border">
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
              <LuX size={ICON_SIZE_PX} />
            </button>
          </section>

          <section className="flex p-2 flex-col flex-1">
            <section className="p-2 justify-between flex flex-row">
              <LocaleChanger lang={locale} />

              <ThemeSwitch lang={locale} />
            </section>

            <ul className="flex p-2 flex-col gap-2">
              {menuOptions.map((el) => {
                return <NavLink isForMenu key={el.label} {...el} />;
              })}
            </ul>
          </section>

          <footer className="border-t py-4 px-2 border-border">
            <span>{t("components.header.version_title")}</span>
            <span>{import.meta.env.PUBLIC_VERSION}</span>
          </footer>
        </aside>
      </section>
    </>
  );
};
