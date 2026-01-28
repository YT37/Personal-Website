"use client";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { ABOUT_ME, SKILLS } from "../data/portfolio";
import { parseText } from "../utils/text";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto py-20 relative"
    >
      <div className="w-full relative z-10">
        <SectionHeading number="01" title="About Me" />

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 text-slate-400 text-lg leading-relaxed"
          >
            <p className="mb-6 whitespace-pre-line">{parseText(ABOUT_ME)}</p>

            <p className="mb-4 text-slate-200 font-semibold">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {SKILLS.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-neon-primary">▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 flex justify-center items-start"
          >
            <div className="w-full max-w-[320px] mx-auto font-mono text-sm relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-neon-primary/20 rounded-lg blur-lg group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>

              {/* Terminal Window */}
              <div className="relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
                {/* Title Bar */}
                <div className="bg-slate-900 p-2 flex items-center justify-between border-b border-slate-800">
                  <div className="text-slate-500 text-xs font-mono pl-2">
                    yt37@mainframe:~
                  </div>
                  <div className="flex gap-2 pr-2">
                    <div className="w-3 h-3 bg-slate-700 hover:bg-slate-600 transition-colors rounded-sm"></div>
                    <div className="w-3 h-3 border border-slate-600 hover:bg-slate-700 transition-colors rounded-sm"></div>
                    <div className="w-3 h-3 bg-red-900/50 hover:bg-red-600 transition-colors rounded-sm"></div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 space-y-4 min-h-[200px] relative">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-neon-primary">
                      <span>➜</span>
                      <span>~</span>
                      <span className="text-slate-300">neofetch</span>
                    </div>

                    <div className="mt-2 flex gap-4">
                      <div className="text-neon-accent text-4xl pt-1">
                        <FaLaptopCode />
                      </div>
                      <div className="text-xs leading-relaxed text-slate-400">
                        <p>
                          <span className="text-neon-primary">OS:</span> Arch
                          Linux x86_64
                        </p>
                        <p>
                          <span className="text-neon-primary">Host:</span> Yug
                          Thapar
                        </p>
                        <p>
                          <span className="text-neon-primary">Kernel:</span>{" "}
                          5.15.0-AI-dev
                        </p>
                        <p>
                          <span className="text-neon-primary">Uptime:</span> 21
                          years
                        </p>
                        <p>
                          <span className="text-neon-primary">Packages:</span>{" "}
                          376
                        </p>
                        <p>
                          <span className="text-neon-primary">Shell:</span> zsh
                          5.9
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-neon-primary mt-4">
                      <span>➜</span>
                      <span>~</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
