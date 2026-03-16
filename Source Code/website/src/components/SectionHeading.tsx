"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 font-cyber uppercase tracking-wider">
        <span className="text-neon-primary mr-2 font-mono">{number}.</span>
        {title}
      </h2>
      <motion.div
        className="h-[1px] bg-slate-700 flex-grow max-w-xs"
        style={{ scaleX: lineScaleX, transformOrigin: "left" }}
      ></motion.div>
    </motion.div>
  );
};

export default SectionHeading;
