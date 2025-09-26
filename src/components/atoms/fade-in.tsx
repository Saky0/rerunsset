"use client";
import { motion } from "framer-motion";
import { PropsWithChildren, ComponentProps } from "react";

type FadeProps = PropsWithChildren<ComponentProps<typeof motion.div>>;

export function FadeIn({ children, ...rest }: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
  {...rest}
    >
      {children}
    </motion.div>
  );
}
