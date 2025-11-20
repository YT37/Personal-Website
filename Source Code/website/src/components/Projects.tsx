"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaFolder, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../data/portfolio";
import GlitchImage from "./GlitchImage";

const Projects = () => {
  const { currentTheme } = useTheme();

  const getRgba = (hex: string, alpha: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(
          result[2],
          16
        )}, ${parseInt(result[3], 16)}, ${alpha})`
      : `rgba(255,255,255,${alpha})`;
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 font-cyber uppercase tracking-wider">
            <span className="text-neon-primary mr-2 font-mono">02.</span>Some
            Things I've Built
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-slate-900/50 p-6 rounded-lg transition-all duration-300 group border border-white/10 hover:border-neon-primary/50 perspective-1000 overflow-hidden flex flex-col"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                boxShadow: `0 0 30px -5px ${getRgba(
                  currentTheme.colors.primary,
                  0.3
                )}`,
                transition: { duration: 0.2 },
              }}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

              {project.image ? (
                <div className="mb-4 rounded-lg overflow-hidden h-48 w-full relative z-10">
                  <GlitchImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <FaFolder className="text-4xl text-neon-primary" />
                  <div className="flex gap-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-neon-accent transition-colors text-xl"
                        title={link.name}
                      >
                        {link.name === "Source Code" ? (
                          <FaGithub />
                        ) : (
                          <FaExternalLinkAlt />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-neon-accent transition-colors relative z-10 font-cyber tracking-wide">
                {project.title}
              </h3>

              <div className="text-slate-400 text-sm mb-4 line-clamp-4 relative z-10 flex-grow">
                {project.description.split("\n\n")[0]}
              </div>

              <div className="mt-auto relative z-10">
                <div className="text-xs font-mono text-slate-500">
                  {project.description.includes("Tech Stack:")
                    ? project.description.split("Tech Stack:")[1].trim()
                    : project.description.includes("Technology Used -")
                    ? project.description
                        .split("Technology Used -")[1]
                        .split("\n")[0]
                        .trim()
                    : "Tech Stack"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
