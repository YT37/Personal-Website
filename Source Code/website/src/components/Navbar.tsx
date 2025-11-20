"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SecretModal from "./SecretModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => setClickCount(0), 2000);
      return () => clearTimeout(timer);
    }
  }, [clickCount]);

  const handleLogoClick = () => {
    if (clickCount + 1 === 5) {
      setShowSecret(true);
      setClickCount(0);
    } else {
      setClickCount((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Projects", target: "projects" },
    { name: "Experience", target: "experience" },
    { name: "Awards", target: "awards" },
    { name: "Contact", target: "contact" },
  ];

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-void/80 backdrop-blur-md border-b border-neon-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={handleLogoClick}
            className="text-2xl font-bold text-slate-100 font-cyber tracking-widest cursor-pointer group"
          >
            YT
            <span
              className={`text-neon-accent ${
                clickCount > 0 ? "animate-ping" : "group-hover:animate-pulse"
              }`}
            >
              _
            </span>
          </button>

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className="text-slate-300 hover:text-neon-accent transition-colors text-sm font-medium cursor-pointer font-cyber tracking-wider uppercase relative group"
              >
                <span className="text-neon-primary mr-1 font-mono">
                  0{navLinks.indexOf(link) + 1}.
                </span>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-void/80 backdrop-blur-md border-b border-neon-primary/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => scrollToSection(link.target), 100);
                  }}
                  className="block text-slate-300 hover:text-neon-accent transition-colors cursor-pointer w-full text-left"
                >
                  <span className="text-neon-primary mr-2">
                    0{navLinks.indexOf(link) + 1}.
                  </span>
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SecretModal isOpen={showSecret} onClose={() => setShowSecret(false)} />
    </nav>
  );
};

export default Navbar;
