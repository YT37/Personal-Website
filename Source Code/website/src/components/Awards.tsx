"use client";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { AWARDS } from "../data/portfolio";

const Awards = () => {
  return (
    <section
      id="awards"
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
          <span className="text-neon-primary mr-2 font-mono">04.</span>Awards &
          Achievements
        </h2>
        <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AWARDS.map((award, index) => (
          <div
            key={index}
            className="relative bg-slate-900/80 p-6 rounded-lg flex items-start gap-4 transition-all duration-300 border border-white/10 hover:border-neon-accent hover:shadow-[0_0_15px_var(--color-neon-accent)] group overflow-hidden hover:-translate-y-1 hover:scale-[1.01]"
          >
            {/* Cyberpunk corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="mt-1 relative z-10">
              <FaTrophy className="text-2xl text-neon-secondary drop-shadow-[0_0_8px_var(--color-secondary)]" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-slate-100 mb-1 font-cyber tracking-wide group-hover:text-neon-accent transition-colors">
                {award.title}
              </h3>
              {award.year && (
                <p className="text-xs font-mono text-neon-primary mb-2">
                  {award.year}
                </p>
              )}
              <p className="text-slate-400 text-sm mb-4 font-mono">
                {award.description}
              </p>
              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-primary text-sm hover:text-neon-secondary hover:underline font-mono flex items-center gap-2 transition-colors"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
