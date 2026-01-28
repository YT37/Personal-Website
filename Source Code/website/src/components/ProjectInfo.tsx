"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Project } from "../data/portfolio";
import { parseText } from "../utils/text";
import CyberButton from "./CyberButton";

interface ProjectInfoData {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectInfo = ({ project, isOpen, onClose }: ProjectInfoData) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-slate-900 border border-neon-primary w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg relative shadow-[0_0_50px_rgba(var(--color-primary),0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-neon-primary),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-neon-primary),0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Header */}
            <div className="sticky top-0 bg-slate-900/95 border-b border-neon-primary/30 p-6 flex justify-between items-center z-10 backdrop-blur-md">
              <div>
                <h2 className="text-2xl md:text-3xl font-cyber text-neon-accent uppercase tracking-wider">
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-neon-primary mt-1">
                  // SCHEMATIC_VIEW_V1.0
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-neon-accent transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 relative z-0">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column: Image & Description */}
                <div>
                  {project.image && (
                    <div className="mb-6 rounded-lg border-2 border-white overflow-hidden relative group max-w-full mx-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-neon-primary/10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                    </div>
                  )}
                  <div className="prose prose-invert max-w-none">
                    <h3 className="text-neon-primary font-cyber text-lg mb-2">
                      // SYSTEM_DESCRIPTION
                    </h3>
                    <p className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre-line">
                      {parseText(project.description)}
                    </p>
                  </div>
                </div>

                {/* Right Column: Tech Stack & Links */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-neon-primary font-cyber text-lg mb-4">
                      // ARCHITECTURE_STACK
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 border border-neon-primary/30 text-neon-primary text-xs font-mono rounded bg-neon-primary/5"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-neon-primary font-cyber text-lg mb-4">
                      // ACCESS_POINTS
                    </h3>
                    <div className="flex flex-col gap-3">
                      {project.links.map((link, i) => (
                        <CyberButton
                          key={i}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          className="w-full"
                        >
                          <link.icon className="mr-2" /> {link.name}
                        </CyberButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfo;
