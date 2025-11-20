"use client";
import { motion } from "framer-motion";
import { SOCIALS } from "../data/portfolio";

const Footer = () => {
    return (
        <footer className="py-8 bg-void border-t border-white/5 relative z-10">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-500 text-sm font-mono flex items-center gap-2">
                    <p>&copy; {new Date().getFullYear()} Yug Thapar. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    {SOCIALS.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, color: "#06b6d4" }}
                            className="text-slate-400 text-xl transition-colors"
                            title={social.name}
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
