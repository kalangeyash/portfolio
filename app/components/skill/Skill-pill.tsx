import Image, { StaticImageData } from "next/image";
import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string | StaticImageData;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;

  if (!Icon) {
    console.error(`SkillPill Error: Icon is undefined for skill "${name}"`);
    return (
      <div className="flex w-max items-center gap-1.5 sm:gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base shadow-sm dark:bg-zinc-800">
        <span className="font-medium text-red-500">{name} (No Icon)</span>
      </div>
    );
  }

  const isComponent = typeof Icon === "function";

  return (
    <div className="flex w-max items-center gap-1.5 sm:gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base shadow-sm dark:bg-zinc-800">
      {isComponent ? (
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
      ) : (
        <Image
          src={Icon as string | StaticImageData}
          alt={name}
          width={32}
          height={32}
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
          unoptimized // This is important for SVGs to render correctly
        />
      )}
      <span className="font-medium">{name}</span>
    </div>
  );
}