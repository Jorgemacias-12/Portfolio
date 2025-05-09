import type { Technology as TechnologyProps } from "@/types";

export const Technology = ({ name, icon }: TechnologyProps) => {
  return (
    <p className="flex items-center gap-1 px-2 rounded-full">
      <span className={`text-2xl ${icon}`} />
      {name}
    </p>
  );
};
