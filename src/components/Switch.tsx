import { $theme } from "@/stores"
import { useStore } from "@nanostores/react"
import { useState } from "react"

interface SwitchProps  {
  icons?: [string | null, string | null] // falseIcon, trueIcon
  title?: string
  defaultState?: boolean
  onClick?: (state: boolean) => void
}

export const Switch = (
  {
    icons = ["fa-circle", "fa-circle"],
    title = "Switch component",
    defaultState = false,
    onClick
  }: SwitchProps
) => {
  const theme = useStore($theme);
  const [state, setState] = useState(defaultState)

  const toggleState = () => {
    setState(!state);

    if (onClick) {
      onClick(state);
    }
  }

  const commonIconClasses = "fas fa-md fa-fw";
  const falseState = "translate-x-9";
  const trueState = "translate-x-2"
  const buttonDarkBg = "border bg-whitesmoke-400";
  const buttonLightBg = "bg-whitesmoke-400 border";

  const bg = theme === 'light' ? buttonLightBg : buttonDarkBg;

  return (
    <button 
      type="button"
      title={title}
      className={`inline-flex rounded-2xl w-16 relative h-8 ${bg}`}
      onClick={toggleState}
    >
      <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${commonIconClasses} ${state ? trueState : falseState} ${state ? icons[0] : icons[1]}`}></span>
    </button>
  )
}