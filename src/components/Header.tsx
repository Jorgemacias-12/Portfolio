import { getI18N } from "@/i18n";
import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Link } from "./Link";
import { appendBaseUrl } from "@/utils";
import type { MouseEvent } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  lang: string;
}

export const Header = ({ lang }: Props) => {
  const { COMPONENTS, HEADER_MENU_CAPTION, HEADER_PAGE_VERSION_CAPTION } =
    getI18N(lang);
  const { HEADER } = COMPONENTS;
  const theme = useStore($theme);
  const [showMenu, setShowMenu] = useState(false);
  const [flagUrl, setFlagUrl] = useState("");

  const headerDarkClassNames = "bg-black_rain text-white";
  const headerLightClassNames = "bg-seasalt-900 text-black";

  const menuBackgroundSolid =
    theme === "light"
      ? "bg-white-smoke md:bg-transparent"
      : "bg-black_rain md:bg-transparent";
  const menuBackgroundOpacity =
    theme === "light"
      ? "bg-black/50 md:bg-transparent"
      : "bg-black/50 md:bg-transparent";

  const menuHiddenClasses = "pointer-events-none opacity-0 translate-x-[1rem]";
  const menuShownClasses = "opacity-100 translate-x-0 pointer-events-auto";
  const dividerLight = "";
  const dividerDark = "border-black_rain-900";
  const borderColorClassName = theme === "light" ? dividerLight : dividerDark;

  const handleMenuShow = () => {
    setShowMenu((previousValue) => !previousValue);
  };

  const handleMenuHide = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    setShowMenu(false);
  };

  useEffect(() => {
    const flagImport = async () => {
      const _flagUrl = appendBaseUrl(
        lang === "es" ? "/usa.svg" : "/mexico.svg"
      );

      setFlagUrl(_flagUrl);
    };

    flagImport();
  }, [lang]);

  return (
    <header
      className={`border-b md:border-b-0 md:border-r ${
        theme === "light" ? headerLightClassNames : headerDarkClassNames
      } ${borderColorClassName} p-4 fixed md:w-60 md:h-full z-10 w-full`}
    >
      <section className="max-w-screen-xl mx-auto flex justify-between items-center gap-2 md:flex-col md:justify-end">
        <h1 className="font-bold md:text-2xl">Jorge Macias</h1>

        <section className="flex-1 w-full p-2 hidden md:flex flex-col rounded-md gap-2">
          <section className="flex justify-between items-center gap-2">
            <ThemeSwitcher />

            <a
              className="flex items-center gap-2 py-1"
              href={`${
                lang === "es" ? appendBaseUrl("/en") : appendBaseUrl("/")
              }`}
            >
              <img
                width={32}
                height={32}
                src={flagUrl}
                alt={`${
                  lang === "es"
                    ? "usa flag for lang change"
                    : "mexico flag for lang change"
                }`}
              />
              {lang === "es" ? "EN" : "ES"}
            </a>
          </section>

          <ul className="">
            {HEADER.map(({ label, url }, index) => {
              return <Link key={index} label={label} url={url}></Link>;
            })}
          </ul>

          {import.meta.env.PUBLIC_VERSION !== undefined && (
            <p className="text-sm text-balance text-center">
              {HEADER_PAGE_VERSION_CAPTION}{" "}
              {lang === "es" ? "versión" : "version"}{" "}
              {import.meta.env.PUBLIC_VERSION}
            </p>
          )}
        </section>

        <section className="flex flex-1 justify-end gap-10">
          <a
            className="flex items-center gap-2 py-1 md:hidden"
            href={`${
              lang === "es" ? appendBaseUrl("/en") : appendBaseUrl("/")
            }`}
          >
            <img
              className="aspect"
              loading="eager"
              src={flagUrl}
              alt={`${
                lang === "es"
                  ? "usa flag for lang change"
                  : "mexico flag for lang change"
              }`}
            />
            {lang === "es" ? "EN" : "ES"}
          </a>

          <button
            title="Mobile version of navigation open button"
            type="button"
            onClick={handleMenuShow}
            className="md:hidden"
          >
            {showMenu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </section>

        <nav
          className={`fixed top-0 right-0 w-full h-full flex flex-col gap-1  z-10 transition-all duration-300 transform-cpu ${
            showMenu ? menuShownClasses : menuHiddenClasses
          } ${menuBackgroundOpacity}`}
          onClick={handleMenuHide}
        >
          <section
            className={`flex items-center justify-between p-4 ${menuBackgroundSolid}`}
          >
            <h2 className="transition-none">{HEADER_MENU_CAPTION}</h2>

            <div className="flex items-center gap-4">
              <ThemeSwitcher />

              <button
                title="Mobile version of the navigation close button"
                type="button"
                className="md:hidden gap-2"
                onClick={handleMenuShow}
              >
                {showMenu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
              </button>
            </div>
          </section>

          <ul className={`m-4 p-2 rounded-md ${menuBackgroundSolid}`}>
            {HEADER.map(({ label, url }, index) => {
              return <Link key={index} label={label} url={url}></Link>;
            })}
          </ul>

          {import.meta.env.PUBLIC_VERSION !== undefined && (
            <p
              className={`mx-4 p-4 rounded-md text-center ${menuBackgroundSolid}`}
            >
              {HEADER_PAGE_VERSION_CAPTION}{" "}
              {lang === "es" ? "versión" : "version"}{" "}
              {import.meta.env.PUBLIC_VERSION}
            </p>
          )}
        </nav>
      </section>
    </header>
  );
};
