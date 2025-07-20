import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {typeof icon === "string" ? (
        <img src={icon} className="h-5 w-5 sm:h-8 sm:w-8" alt={name} />
      ) : (
        // @ts-expect-error: icon is a React component
        <icon className="h-5 w-5 sm:h-8 sm:w-8" />
      )}
      <span className="font-medium">{name}</span>
    </div>
  );
}