"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import { RESUME_LINK } from "../data/portfolio";
import CyberButton from "./CyberButton";
import HackerText from "./HackerText";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, my name is";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center pt-20 overflow-hidden"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center items-start relative z-10">
        <div className="h-8 mb-4">
          <h2 className="text-xl md:text-2xl text-neon-accent font-mono">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight font-cyber uppercase">
            <HackerText text="Yug Thapar." />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
            Architecting Intelligence across Hardware, Mobile & Web.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="max-w-xl text-slate-400 text-lg mb-12 leading-relaxed"
        >
          <p>
            I engineer the convergence of{" "}
            <span className="text-neon-accent">Artificial Intelligence</span>,{" "}
            <span className="text-neon-accent">Embedded Systems</span>, and{" "}
            <span className="text-neon-accent">Web & Mobile Applications</span>.
            From autonomous robotics to scalable digital platforms, I build
            technology that thinks and interacts with the physical world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <CyberButton
            onClick={() => {
              const element = document.getElementById("projects");
              if (element)
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            variant="secondary"
          >
            Check out my work
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </CyberButton>
          <CyberButton
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <FaFileAlt className="group-hover:rotate-12 transition-transform duration-300" />
            Resume
          </CyberButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
