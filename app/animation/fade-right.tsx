import { ReactNode } from "react";
import { motion, cubicBezier } from "framer-motion";

export interface FadeRightProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  className?: string;
  whileInView?: boolean; // Determines which prop to use
}

export default function FadeRight({
  children,
  duration,
  delay = 0, // Default delay to 0
  className,
  whileInView = false,
}: FadeRightProps) {
  const animation = {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: cubicBezier(0.42, 0, 0.58, 1),
      delay,
    },
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={whileInView ? undefined : animation}
      whileInView={whileInView ? animation : undefined}
      viewport={whileInView ? { once: true } : undefined} // Ensures in-view only triggers once
      className={className}
    >
      {children}
    </motion.div>
  );
}
