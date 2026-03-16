"use client";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ABOUT_ME } from "../data/portfolio";
import { parseText } from "../utils/text";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-12 md:py-20 relative"
    >
      <div className="w-full relative z-10">
        <SectionHeading number="01" title="About Me" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 text-slate-400 text-base md:text-lg leading-relaxed min-w-0"
          >
            <p className="mb-6 whitespace-pre-line break-words">{parseText(ABOUT_ME)}</p>

            <p className="mb-4 text-slate-200 font-semibold">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 flex justify-center items-start min-w-0"
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
