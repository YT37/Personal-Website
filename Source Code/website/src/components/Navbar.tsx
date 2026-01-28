"use client";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SecretModal from "./SecretModal";

const ScrambleLink = ({
  text,
  onClick,
  index,
}: {
  text: string;
  onClick: () => void;
  index: number;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const chars =
    "!@#$%^&*()_+-=[]{}|;:,.<>?/~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, idx) => {
            if (idx < iteration) {
              return text[idx];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={scramble}
      className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-neon-accent transition-colors font-cyber tracking-wider uppercase group overflow-hidden flex items-center justify-center"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-neon-primary text-xs opacity-50 group-hover:opacity-100 transition-opacity">
          0{index + 1}
        </span>
        {displayText}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <span className="absolute inset-0 bg-neon-primary/5 transform skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
    </button>
  );
};

const GlitchLogo = ({
  onClick,
  clickCount,
}: {
  onClick: () => void;
  clickCount: number;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center gap-1 leading-none z-10"
    >
      <div className="relative text-2xl font-bold font-cyber tracking-widest text-slate-100">
        <span className="relative z-10">YT</span>
        <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-primary opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:animate-pulse transition-all duration-100">
          YT
        </span>
        <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-secondary opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] group-hover:animate-pulse transition-all duration-100 delay-75">
          YT
        </span>
      </div>
      <span
        className={`text-neon-accent text-2xl font-bold ${
          clickCount > 0 ? "animate-ping" : "group-hover:animate-pulse"
        }`}
      >
        _
      </span>
    </button>
  );
};

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div
          className={`
            relative flex items-center justify-between px-6 transition-all duration-500
            ${
              scrolled
                ? "w-[90%] max-w-5xl h-16 bg-void/30 backdrop-blur-md backdrop-saturate-150 border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                : "w-full max-w-7xl h-20 bg-transparent border-transparent"
            }
          `}
        >
          {/* Decorative corner accents for scrolled state */}
          {scrolled && (
            <>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-neon-primary rounded-tl-2xl" />
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-neon-primary rounded-br-2xl" />

              {/* Scroll Progress Border */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient
                    id="progress-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="50%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-primary)" />
                  </linearGradient>
                </defs>
                <motion.rect
                  width="100%"
                  height="100%"
                  rx="16"
                  ry="16"
                  fill="none"
                  stroke="url(#progress-gradient)"
                  strokeWidth="2"
                  style={{
                    pathLength: scaleX,
                  }}
                  className="drop-shadow-[0_0_8px_var(--color-accent)] opacity-80"
                />
              </svg>
            </>
          )}

          <GlitchLogo onClick={handleLogoClick} clickCount={clickCount} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <ScrambleLink
                key={index}
                text={link.name}
                index={index}
                onClick={() => scrollToSection(link.target)}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 focus:outline-none hover:text-neon-accent transition-colors flex items-center"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-void/95 backdrop-blur-xl pt-24 px-6 lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => scrollToSection(link.target), 100);
                }}
                className="text-2xl font-cyber text-slate-300 hover:text-neon-accent transition-colors uppercase tracking-widest"
              >
                <span className="text-neon-primary mr-4 text-sm">
                  0{index + 1}.
                </span>
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <SecretModal isOpen={showSecret} onClose={() => setShowSecret(false)} />
    </>
  );
};

export default Navbar;
