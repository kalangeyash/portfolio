import { AnimatePresence } from "framer-motion";

import SkillPill, {
    type SkillPillProps,
} from "./Skill-pill";

export interface SkillsShowcaseProps {
    skills: {
        sectionName: string;
        skills: SkillPillProps[];
    }[];
}

export default function Skill({ skills }: SkillsShowcaseProps) {
    return (
        <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
            <div className="relative mx-auto max-w-7xl">
                <h2 className="text-xl font-semibold text-accent sm:text-4xl">
                    Skills
                </h2>
                {skills.map((section) => (
                    <AnimatePresence key={section.sectionName}>
                        <div className="mt-4">
                            <span className="text-xs font-semibold text-foreground sm:text-sm">
                                {section.sectionName}
                            </span>
                            <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                                {section.skills.map((pill, index) => (
                                    <div
                                        key={`lang-${index}`}
                                        className="-z-20"
                                    >
                                        <SkillPill {...pill} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatePresence>
                ))}
            </div>
        </section>
    );
}