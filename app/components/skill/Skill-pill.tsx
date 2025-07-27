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
      <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
        <span className="font-medium text-red-500">{name} (No Icon)</span>
      </div>
    );
  }

  const isComponent = typeof Icon === "function";

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {isComponent ? (
      <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
      ) : (
        <Image
          src={Icon as string | StaticImageData}
          alt={name}
          width={32}
          height={32}
          className="h-5 w-5 sm:h-8 sm:w-8"
          unoptimized // This is important for SVGs to render correctly
        />
      )}
      <span className="font-medium">{name}</span>
    </div>
  );
}