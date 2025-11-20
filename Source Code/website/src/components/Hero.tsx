"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import { RESUME_LINK } from "../data/portfolio";
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
            className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 max-w-7xl mx-auto pt-20"
        >
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
                    I engineer the convergence of <span className="text-neon-accent">Artificial Intelligence</span>, <span className="text-neon-accent">Embedded Systems</span>, and <span className="text-neon-accent">Web & Mobile Applications</span>. From autonomous robotics to scalable digital platforms, I build technology that thinks and interacts with the physical world.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
                <button
                    onClick={() => {
                        const element = document.getElementById("projects");
                        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="group px-4 sm:px-8 py-3 sm:py-4 border border-neon-accent text-neon-accent hover:bg-neon-accent/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base font-cyber tracking-wider uppercase relative overflow-hidden"
                    style={{
                        clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
                    }}
                >
                    Check out my work
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-8 py-3 sm:py-4 bg-neon-primary/20 border border-neon-primary text-neon-accent font-bold hover:bg-neon-primary/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-cyber tracking-wider uppercase relative overflow-hidden group"
                    style={{
                        clipPath: "polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)"
                    }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <FaFileAlt className="group-hover:rotate-12 transition-transform duration-300" />
                    Resume
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
