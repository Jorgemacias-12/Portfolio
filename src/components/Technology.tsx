import { type Technology as TechnologyProps } from "@/types"

export const Technology = ({ name, icon }: TechnologyProps) => {
  return (
    <p className="flex rounded-full px-2 items-center gap-1">
      <span className={`text-2xl ${icon}`}></span>
      {name}
    </p>
  )
}