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
        <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
            <div className="relative mx-auto max-w-7xl">
                <h2 className="text-xl font-semibold text-neutral-100 sm:text-4xl">
                    Skills
                </h2>
                {skills.map((section) => (
                    <div key={section.sectionName} className="mt-4">
                        <span className="text-xs font-semibold text-neutral-400 sm:text-sm">
                            {section.sectionName}
                        </span>
                        <div className="mt-2 flex flex-wrap gap-4">
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