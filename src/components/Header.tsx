import type { MouseEvent } from "react";
import { appendBaseUrl } from "@/utils";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { getI18N } from "@/i18n";
import { Link } from "./Link";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  lang: string;
}

export const Header = ({ lang }: Props) => {
  const { COMPONENTS, HEADER_MENU_CAPTION, HEADER_PAGE_VERSION_CAPTION } =
    getI18N(lang);
  const { HEADER } = COMPONENTS;
  const [showMenu, setShowMenu] = useState(false);
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    const flagImport = async () => {
      const _flagUrl = appendBaseUrl(
        lang === "es" ? "/usa.svg" : "/mexico.svg"
      );

      setFlagUrl(_flagUrl);
    };

    flagImport();
  }, [lang]);

  const handleMenuShow = () => {
    setShowMenu((previousValue) => !previousValue);
  };

  const handleMenuHide = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    setShowMenu(false);
  };

  const menuHiddenClasses = "pointer-events-none opacity-0 translate-x-[1rem]";
  const menuShownClasses = "opacity-100 translate-x-0 pointer-events-auto";

  return (
    <header className="border-b dark:border-black_rain-800 bg-white dark:bg-black_rain-700 md:border-r p-4 fixed md:w-60 md:h-full z-20 w-full">
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

          <ul>
            {HEADER.map(({ label, url }) => {
              return <Link label={label} url={url} key={`link-${url}`} />;
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
            href={`${
              lang === "es" ? appendBaseUrl("/en") : appendBaseUrl("/")
            }`}
            className="flex items-center gap-2 py-1 md:hidden"
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
            {showMenu ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </section>

        <nav
          className={`fixed top-0 right-0 bg-black/25 dark:bg-white/25 w-full h-full flex flex-col gap-1 z-10 transition-all duration-300 transform-cpu ${
            showMenu ? menuShownClasses : menuHiddenClasses
          } `}
          onClick={handleMenuHide}
          onKeyUp={() => {}}
        >
          <section className="flex items-center justify-between bg-white p-4 dark:bg-black_rain md:bg-transparent dark:md:bg-transparent">
            <h2 className="transition-none">{HEADER_MENU_CAPTION}</h2>

            <div className="flex items-center gap-4">
              <ThemeSwitcher />

              <button
                title="Mobile version of the navigation close button"
                type="button"
                className="md:hidden gap-2"
                onClick={handleMenuShow}
              >
                {showMenu ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </button>
            </div>
          </section>

          <ul className="bg-white border dark:border-0 rounded-md dark:bg-black_rain m-4 p-2">
            {HEADER.map(({ label, url }) => {
              return <Link key={`label-${label}`} label={label} url={url} />;
            })}
          </ul>

          {import.meta.env.PUBLIC_VERSION !== undefined && (
            <p className="mx-4 p-4 rounded-md text-center border dark:border-0  bg-white md:bg-transparent dark:bg-black_rain dark:md:bg-transparent">
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
