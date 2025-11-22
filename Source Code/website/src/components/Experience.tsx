"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { WORK } from "../data/portfolio";
import { parseText } from "../utils/text";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 font-cyber uppercase tracking-wider">
          <span className="text-neon-primary mr-2 font-mono">03.</span>Where
          I've Worked
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
      </motion.div>

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
                {job.description.split("Period:")[1]?.trim() ||
                  job.description.split("Period -")[1]?.trim() ||
                  "Present"}
              </p>
            </div>

            <div className="text-slate-400 leading-relaxed">
              {/* Extract Role if possible */}
              <p className="mb-2 font-semibold text-slate-300">
                {job.description.includes("Role:")
                  ? job.description.split("Role:")[1].split("\n")[0]
                  : job.description.includes("Role -")
                  ? job.description.split("Role -")[1].split("\n")[0]
                  : "Role"}
              </p>

              <div className="whitespace-pre-line text-sm">
                {/* Parse the description part before "Role:" or "Role -" */}
                {parseText(
                  job.description.split("Role:")[0].split("Role -")[0].trim()
                )}

                {/* Parse the Key Contributions part if it exists */}
                {job.description.includes("Key Contributions:") && (
                  <div className="mt-4">
                    <p className="font-semibold text-slate-300 mb-2">
                      Key Contributions:
                    </p>
                    {parseText(
                      job.description
                        .split("Key Contributions:")[1]
                        .split("Period:")[0]
                        .trim()
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
