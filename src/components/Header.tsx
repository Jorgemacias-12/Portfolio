import { getI18N } from "@/i18n";
import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { Link } from "./Link";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
  lang: string
}

export const Header = ({ lang }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [useFixedHeader, setUseFixedHeader] = useState(false);
  const theme = useStore($theme);

  const { COMPONENTS } = getI18N(lang);
  const { HEADER } = COMPONENTS;

  const FIXED_SCROLL_THRESHOLD = 50;

  const headerDarkClassNames = "bg-raisin-black text-white border-none";
  const headerLightClassNames = "bg-seasalt text-black";
  const headerFixedClassNames = useFixedHeader ? `fixed w-full z-50` : "";

  const menuBackground = theme === 'light' ? 'bg-white-smoke md:bg-transparent' : 'bg-raisin-black md:bg-transparent';
  const menuHiddenClasses = "pointer-events-none opacity-0 translate-x-[1rem]";
  const menuShownClasses = "opacity-100 translate-x-0 pointer-events-auto";

  const dividerLight = "";
  const dividerDark = "border-raisin-black-600";
  const borderColorClassName = theme === 'light' ? dividerLight : dividerDark;

  const handleMenuShow = () => {
    setShowMenu(previousValue => !previousValue);
  }

  const handleScroll = () => {
    const scrollOverpassed = window.scrollY > FIXED_SCROLL_THRESHOLD;

    setUseFixedHeader(scrollOverpassed);

    if (useFixedHeader) {
      const main = document.querySelector('main');

      if (!main) return;

      main.style.marginTop = `${FIXED_SCROLL_THRESHOLD}`;
    }
  }

  useEffect(() => {
    handleScroll();

    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={`transition-all duration-300 border-b ${theme === 'light' ? headerLightClassNames : headerDarkClassNames} p-4 ${headerFixedClassNames}`}>
      <section className="max-w-screen-xl mx-auto flex justify-between items-center gap-2">
        <h1 className="font-bold md:text-2xl static z-20">Jorge Macias</h1>

        <nav className="flex flex-1 justify-end">
          <button type="button" onClick={handleMenuShow} className={`fas fa-xl fa-fw ${showMenu ? 'fa-times' : 'fa-bars'} inline-flex cursor-pointer md:hidden`}></button>

          <ul
            className={`fixed top-0 right-0 w-fit h-full p-2 flex flex-col gap-1  ${menuBackground} z-10 tranisiton-all duration-300 transform ${showMenu ? menuShownClasses : menuHiddenClasses} md:static md:opacity-100  md:pointer-events-auto md:flex-row md:items-center`}
          >
            <section className={`border-b pb-1 flex items-center gap-2 justify-end ${borderColorClassName} md:pb-0 md:border-0`}>
              <ThemeSwitcher />

              <button type="button" onClick={handleMenuShow} className={`my-5 fas fa-xl fa-fw ${showMenu ? 'fa-times' : 'fa-bars'} inline-flex cursor-pointer md:hidden`}></button>
            </section>

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
