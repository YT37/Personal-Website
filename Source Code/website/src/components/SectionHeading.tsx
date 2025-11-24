"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  return (
    <motion.div
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
      <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
    </motion.div>
  );
};

export default SectionHeading;
