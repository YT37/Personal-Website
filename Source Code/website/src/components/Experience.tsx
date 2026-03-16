"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { WORK } from "../data/portfolio";
import { parseText } from "../utils/text";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      <SectionHeading number="02" title="Where I've Worked" />

      <div className="space-y-12">
        {WORK.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-slate-700 hover:border-neon-primary transition-colors will-change-transform"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-void border-2 border-neon-primary transform rotate-45"></div>

            <div className="mb-2">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-cyber tracking-wide">
                {job.title}
                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-accent hover:text-neon-primary transition-colors text-sm"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </h3>
              <p className="text-sm font-mono text-neon-primary mb-4">
                {job.period}
              </p>
            </div>

            <div className="text-slate-400 leading-relaxed">
              <p className="mb-2 font-semibold text-slate-300">{job.role}</p>

              <div className="whitespace-pre-line text-sm">
                {parseText(job.description)}

                <div className="mt-4">
                  <p className="font-semibold text-slate-300 mb-2">
                    Key Contributions:
                  </p>
                  {job.contributions.map((contribution, i) => (
                    <div key={i}>
                      {"• "}
                      {parseText(contribution)}
                      {"\n"}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
