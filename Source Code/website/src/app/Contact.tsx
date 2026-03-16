import CyberCorners from "@/components/CyberCorners";
import MagneticWrapper from "@/components/MagneticButton";
import MatrixRain from "@/components/MatrixRain";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck, FaPaperPlane, FaTimes } from "react-icons/fa";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden py-20"
    >
      <MatrixRain />

      <div className="w-full max-w-6xl relative z-10 flex flex-col md:flex-row gap-12 items-start">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-left pt-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 font-cyber uppercase tracking-widest leading-tight">
            Let's <span className="text-neon-primary">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
            I'm currently looking for new opportunities. Whether you have a
            question, a project idea, or just want to say hi, my inbox is always
            open.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex-1 w-full bg-void/50 backdrop-blur-sm border border-neon-primary/20 p-8 rounded-lg relative group"
        >
          {/* Decorative corners */}
          <CyberCorners />

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
                aria-required="true"
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
                aria-required="true"
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
                aria-required="true"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/40 border border-neon-primary/30 focus:border-neon-primary text-slate-100 px-4 py-3 outline-none transition-colors font-mono resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="flex flex-col items-center gap-3 mt-4">
              <MagneticWrapper>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative px-10 py-5 bg-transparent overflow-hidden active:scale-95 transition-transform duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Button Background & Border */}
                  <div
                    className="absolute inset-0 bg-neon-primary/5 border border-neon-primary/30 group-hover:border-neon-accent/50 transition-colors duration-300 z-0"
                    style={{
                      clipPath:
                        "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                    }}
                  />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3 text-neon-primary group-hover:text-neon-accent transition-colors duration-300 font-cyber tracking-widest uppercase text-sm font-bold">
                    <span className="text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                      <FaPaperPlane />
                    </span>
                    <span>
                      {status === "sending"
                        ? "Transmitting..."
                        : "Execute_Send"}
                    </span>
                  </span>

                  {/* Decorative bits */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-primary to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </button>
              </MagneticWrapper>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-neon-accent font-mono text-sm"
                  >
                    <FaCheck /> Message transmitted successfully.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-neon-secondary font-mono text-sm"
                  >
                    <FaTimes /> Transmission failed. Try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
