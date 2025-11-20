"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { EMAIL } from "../data/portfolio";
import MagneticWrapper from "./MagneticButton";
import MatrixRain from "./MatrixRain";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden py-20"
    >
      <MatrixRain />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl relative z-10 flex flex-col md:flex-row gap-12 items-start"
      >
        {/* Text Section */}
        <div className="flex-1 text-left pt-8">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 font-cyber uppercase tracking-widest leading-tight">
            Let's <span className="text-neon-primary">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
            I'm currently looking for new opportunities. Whether you have a
            question, a project idea, or just want to say hi, my inbox is always
            open.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full bg-void/50 backdrop-blur-sm border border-neon-primary/20 p-8 rounded-lg relative group"
        >
          {/* Decorative corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon-primary"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-primary"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-primary"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon-primary"></div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-neon-accent font-cyber text-sm mb-2 tracking-wider"
              >
                // NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neon-primary/30 focus:border-neon-primary text-slate-100 px-4 py-3 outline-none transition-colors font-mono"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-neon-accent font-cyber text-sm mb-2 tracking-wider"
              >
                // EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neon-primary/30 focus:border-neon-primary text-slate-100 px-4 py-3 outline-none transition-colors font-mono"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-neon-accent font-cyber text-sm mb-2 tracking-wider"
              >
                // MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neon-primary/30 focus:border-neon-primary text-slate-100 px-4 py-3 outline-none transition-colors font-mono resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="flex justify-center">
              <MagneticWrapper>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-5 px-8 py-4 bg-neon-primary/10 border border-neon-primary text-neon-accent hover:bg-neon-primary hover:text-void transition-all duration-300 text-lg font-medium font-cyber tracking-wider uppercase relative overflow-hidden group"
                >
                  <FaPaperPlane className="relative z-10 text-3xl md:text-xl" />
                  <span className="relative z-10">Send</span>
                </button>
              </MagneticWrapper>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
