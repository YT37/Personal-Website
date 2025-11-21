"use client";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { ABOUT_ME, SKILLS } from "../data/portfolio";
import { parseText } from "../utils/text";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto py-20"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 font-cyber uppercase tracking-wider">
            <span className="text-neon-primary mr-2 font-mono">01.</span>About
            Me
          </h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </motion.div>

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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-primary to-neon-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-void border border-neon-primary/20 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2 text-center">
                  <FaLaptopCode className="text-6xl text-neon-accent mx-auto mb-4" />
                  <p className="text-slate-300 font-cyber tracking-wide">
                    AI, Hardware, <br /> Web & Mobile Dev
                  </p>
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
