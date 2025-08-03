import { motion } from "framer-motion";

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
        <section className="overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
            <div className="relative mx-auto max-w-7xl">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-100 mb-6 sm:mb-8 md:mb-10">
                    Skills
                </h2>
                {skills.map((section) => (
                    <div key={section.sectionName} className="mt-6 sm:mt-8 md:mt-10">
                        <span className="text-xs sm:text-sm md:text-base font-semibold text-neutral-400 block mb-3 sm:mb-4">
                            {section.sectionName}
                        </span>
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                            {section.skills.map((pill, index) => (
                                <motion.div
                                    key={`lang-${index}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="-z-20"
                                >
                                    <SkillPill {...pill} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}