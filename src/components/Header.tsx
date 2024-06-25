import { MENU_OPTIONS } from "@/data";
import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { Link } from "./Link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { getI18N } from "@/i18n";


interface HeaderProps {
  lang: string
}

export const Header = ({ lang }: HeaderProps) => {
  const { COMPONENTS } = getI18N(lang);
  const { HEADER } = COMPONENTS;

  const FIXED_SCROLL_THRESHOLD = 40;

  const [showMenu, setShowMenu] = useState(false);
  const theme = useStore($theme);
  const [useFixedHeader, setUseFixedHeader] = useState(false);

  const headerDarkClassNames = "bg-raisin-black text-white";
  const headerLightClassNames = "bg-white-smoke text-black";
  const menuBackground = theme === 'light' ? 'bg-white-smoke' : 'bg-raisin-black';
  const headerFixedClassNames = useFixedHeader ? `fixed w-full z-50 opacity-90` : "";

  const handleMenuShow = () => {
    setShowMenu(previousValue => !previousValue);
  }

  const menuHiddenClasses = "scale-80 translate-y-[-1rem] opacity-0 pointer-events-none";
  const menuShownClasses = "scale-100 translate-y-0 opacity-100 pointer-events-auto";

  const updateFixedHeaderState = () => {
    const scrollOverpassed = window.scrollY > FIXED_SCROLL_THRESHOLD;

    setUseFixedHeader(scrollOverpassed);

    if (useFixedHeader) {
      const main = document.querySelector('main');

      if (!main) return;

      main.style.marginTop = `${FIXED_SCROLL_THRESHOLD}`;
    }
  }

  useEffect(() => {
    addEventListener('scroll', updateFixedHeaderState);

    return () => {
      removeEventListener('scroll', updateFixedHeaderState);
    }
  }, [])

  return (
    <header className={`transition-all duration-300 ${theme === 'light' ? headerLightClassNames : headerDarkClassNames} p-4 ${headerFixedClassNames}`}>
      <section className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Jorge Macias</h1>
        </div>
        <nav className="relative ">
          <ul className="hidden lg:flex items-center gap-2">
            {
              MENU_OPTIONS.map(({ label, url }, index) => {
                return <Link key={index} label={label} url={url} />
              })
            }

            <ThemeSwitcher />
          </ul>

          <div className="flex gap-2 items-center lg:hidden">
            <ThemeSwitcher />
            <span onClick={handleMenuShow} className={`fas fa-xl fa-fw ${showMenu ? 'fa-times' : 'fa-bars'} inline-flex cursor-pointer`}></span>
          </div>


          <ul className={`absolute right-0 mt-5 p-2 rounded-md flex flex-col w-40 transition-all duration-300 z-50 ${menuBackground} ${showMenu ? menuShownClasses : menuHiddenClasses}`}>
            {
              HEADER.map(({ label, url }, index) => {
                return <Link key={index} label={label} url={url}></Link>
              })
            }
          </ul>
        </nav>
      </section>
    </header>
  )
}
