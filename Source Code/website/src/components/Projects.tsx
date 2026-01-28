"use client";

import { useState } from "react";
import { Project, PROJECTS } from "../data/portfolio";
import CyberCorners from "./CyberCorners";
import GlitchImage from "./GlitchImage";
import ProjectModal from "./ProjectInfo";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      <SectionHeading number="02" title="Some Things I've Built" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project)}
            className="relative bg-slate-900/50 p-6 rounded-lg transition-all duration-300 group border border-white/10 hover:border-neon-accent hover:shadow-[0_0_15px_var(--color-neon-accent)] overflow-hidden flex flex-col hover:-translate-y-1 hover:scale-[1.01] cursor-pointer"
          >
            <CyberCorners />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

            {project.image && (
              <div className="mb-4 rounded-lg overflow-hidden h-48 w-full relative z-10">
                <GlitchImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="flex justify-between items-start mb-2 relative z-10">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-neon-accent transition-colors font-cyber tracking-wide">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.links.map((link, i) => (
                  <div
                    key={i}
                    className="text-slate-400 hover:text-neon-accent transition-colors text-lg"
                    title={link.name}
                    onClick={(e) => e.stopPropagation()} // Prevent modal open on link click
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-slate-400 text-sm mb-4 line-clamp-4 relative z-10 flex-grow">
              {project.description.split("\n\n")[0]}
            </div>

            <div className="mt-auto relative z-10">
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-neon-primary bg-neon-primary/10 px-2 py-1 rounded border border-neon-primary/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs font-mono text-slate-500 py-1">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
