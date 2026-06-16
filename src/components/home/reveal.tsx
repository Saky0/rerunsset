"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

type RevealSectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
};

function motionProps(delay: number, reduceMotion: boolean) {
  return {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18, margin: "0px 0px -10% 0px" },
    transition: { duration: 0.62, ease, delay },
  };
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div {...motionProps(delay, Boolean(reduceMotion))} {...props}>
      {children}
    </motion.div>
  );
}

export function RevealSection({ children, delay = 0, ...props }: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section {...motionProps(delay, Boolean(reduceMotion))} {...props}>
      {children}
    </motion.section>
  );
}
