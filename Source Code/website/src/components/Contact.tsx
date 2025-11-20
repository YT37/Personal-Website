"use client";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { EMAIL } from "../data/portfolio";
import MagneticWrapper from "./MagneticButton";
import MatrixRain from "./MatrixRain";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden"
        >
            <MatrixRain />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-cyber uppercase tracking-widest">
                    Get In Touch
                </h2>
                <p className="text-slate-400 text-lg mb-12">
                    I'm currently looking for new opportunities. Whether you have a question
                    or just want to say hi, my inbox is always open.
                </p>
                <MagneticWrapper>
                    <a
                        href={`mailto:${EMAIL}`}
                        className="inline-flex items-center gap-2 px-8 py-4 border border-neon-primary text-neon-primary hover:bg-neon-primary/10 transition-all duration-300 text-lg font-medium font-cyber tracking-wider uppercase relative overflow-hidden group"
                        style={{
                            clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
                        }}
                    >
                        <span className="absolute inset-0 bg-neon-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <FaEnvelope className="relative z-10" />
                        <span className="relative z-10">Say Hello</span>
                    </a>
                </MagneticWrapper>
            </motion.div>
        </section>
    );
};

export default Contact;
