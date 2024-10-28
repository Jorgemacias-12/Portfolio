import { getI18N } from "@/i18n";
import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Link } from "./Link";

interface Props {
  lang: string;
}

export const Header = ({ lang }: Props) => {
  const { COMPONENTS, HEADER_MENU_CAPTION } = getI18N(lang);
  const { HEADER } = COMPONENTS;
  const theme = useStore($theme);
  const [showMenu, setShowMenu] = useState(false);

  const headerDarkClassNames = "bg-raisin-black text-white";
  const headerLightClassNames = "bg-seasalt text-black";

  const menuBackgroundSolid =
    theme === "light"
      ? "bg-white-smoke md:bg-transparent"
      : "bg-raisin-black md:bg-transparent";
  const menuBackgroundOpacity =
    theme === "light"
      ? "bg-black/50 md:bg-transparent"
      : "bg-black/50 md:bg-transparent";

  const menuHiddenClasses = "pointer-events-none opacity-0 translate-x-[1rem]";
  const menuShownClasses = "opacity-100 translate-x-0 pointer-events-auto";
  const dividerLight = "";
  const dividerDark = "border-raisin-black-600";
  const borderColorClassName = theme === "light" ? dividerLight : dividerDark;

  const handleMenuShow = () => {
    setShowMenu((previousValue) => !previousValue);
  };

  return (
    <header
      className={`border-b md:border-b-0 md:border-r ${
        theme === "light" ? headerLightClassNames : headerDarkClassNames
      } ${borderColorClassName} p-4 md:fixed md:w-60 h-full`}
    >
      <section className="max-w-screen-xl mx-auto flex justify-between items-center gap-2 md:flex-col md:justify-end">
        <h1 className="font-bold md:text-2xl">Jorge Macias</h1>

        <section className="flex-1 w-full p-2 hidden md:flex flex-col rounded-md gap-2">
          <section className="flex gap-2">
            <ThemeSwitcher />

           <a href="">
            {lang === "es"}
           </a>
          </section>

          <ul className="">
            {HEADER.map(({ label, url }, index) => {
              return <Link key={index} label={label} url={url}></Link>;
            })}
          </ul>
        </section>

        <button
          type="button"
          onClick={handleMenuShow}
          className={`fas fa fa-xl fa-fw ${
            showMenu ? "fa-times" : "fa-bars"
          } md:hidden`}
        ></button>

        <nav
          className={`fixed top-0 right-0 w-full h-full flex flex-col gap-1  z-10 transition-all duration-300 transform-cpu ${
            showMenu ? menuShownClasses : menuHiddenClasses
          } ${menuBackgroundOpacity}`}
        >
          <section
            className={`flex items-center justify-between p-4 ${menuBackgroundSolid}`}
          >
            <h2 className="transition-none">{HEADER_MENU_CAPTION}</h2>

            <div className="flex items-center gap-4">
              <ThemeSwitcher />

              <button
                type="button"
                onClick={handleMenuShow}
                className={`fas fa fa-xl fa-fw fa-times md:hidden gap-2`}
              ></button>
            </div>
          </section>
          <ul className={`m-4 p-2 rounded-md ${menuBackgroundSolid}`}>
            {HEADER.map(({ label, url }, index) => {
              return <Link key={index} label={label} url={url}></Link>;
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
};
