"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPalette, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../data/themes";
import HackerText from "./HackerText";

const ThemeButton = ({
  theme,
  currentTheme,
  setCurrentTheme,
}: {
  theme: Theme;
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
}) => (
  <button
    onClick={() => setCurrentTheme(theme)}
    className={`w-full text-left px-4 py-3 relative group transition-all duration-300 overflow-hidden ${
      currentTheme.id === theme.id
        ? "bg-neon-primary/10 border-l-2 border-neon-accent"
        : "hover:bg-white/5 border-l-2 border-transparent hover:border-neon-primary/50"
    }`}
  >
    <div className="flex items-center justify-between relative z-10">
      <span
        className={`text-sm font-mono transition-colors ${
          currentTheme.id === theme.id
            ? "text-neon-accent"
            : "text-slate-400 group-hover:text-slate-200"
        }`}
      >
        {theme.name}
      </span>
      <div className="flex gap-1.5">
        <div
          className="w-2 h-8 transform -skew-x-12"
          style={{ backgroundColor: theme.colors.primary }}
        />
        <div
          className="w-2 h-8 transform -skew-x-12"
          style={{ backgroundColor: theme.colors.secondary }}
        />
        <div
          className="w-2 h-8 transform -skew-x-12"
          style={{ backgroundColor: theme.colors.accent }}
        />
      </div>
    </div>

    {/* Hover Effect Background */}
    <div
      className={`absolute inset-0 bg-gradient-to-r from-neon-primary/0 via-neon-primary/5 to-neon-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]`}
    />
  </button>
);

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        setIsFooterVisible(isVisible);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    handleScroll();
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredThemeIds = [
    "matrix",
    "high_contrast",
    "netrunner",
    "blade_runner",
    "the_grid",
  ];

  const featuredThemes = themes.filter((t) => featuredThemeIds.includes(t.id));
  const otherThemes = themes.filter((t) => !featuredThemeIds.includes(t.id));

  return (
    <motion.div
      className="fixed left-8 z-[10000]"
      initial={{ opacity: 0, scale: 0, bottom: "1rem" }}
      animate={{
        opacity: 1,
        scale: isMobile ? 0.75 : 1,
        bottom: isFooterVisible ? "7rem" : "0.5rem",
      }}
      transition={{
        bottom: { duration: 0.3, ease: "easeInOut" },
        default: { duration: 0.5 },
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 left-0 bg-void/90 border border-neon-primary/30 p-0 rounded-none shadow-[0_0_30px_-5px_var(--color-neon-primary)] w-72 max-h-[32rem] overflow-hidden backdrop-blur-xl"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 95%, 92% 100%, 0 100%)",
            }}
          >
            {/* Header */}
            <div className="bg-neon-primary/10 p-3 border-b border-neon-primary/20 flex items-center justify-between">
              <h3 className="text-neon-accent font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-primary animate-pulse"></span>
                <HackerText text="System_Theme" />
              </h3>
              <span className="text-[10px] text-neon-primary/50 font-mono">
                v2.0.4
              </span>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--color-neon-primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-neon-primary),0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="p-4 space-y-2 overflow-y-auto overflow-x-hidden max-h-[28rem] custom-scrollbar relative z-10">
              <div className="mb-2">
                <h4 className="text-xs font-cyber text-neon-primary/70 uppercase tracking-widest mb-2 px-2">
                  Featured
                </h4>
                {featuredThemes.map((theme) => (
                  <ThemeButton
                    key={theme.id}
                    theme={theme}
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                ))}
              </div>

              <div className="border-t border-white/5 pt-2">
                <h4 className="text-xs font-cyber text-slate-500 uppercase tracking-widest mb-2 px-2 mt-2">
                  Themes
                </h4>
                {otherThemes.map((theme) => (
                  <ThemeButton
                    key={theme.id}
                    theme={theme}
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-void border-2 border-neon-primary text-neon-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_var(--color-neon-primary)] transition-all duration-300 hover:scale-105 group relative overflow-hidden"
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)",
        }}
      >
        <div className="absolute inset-0 bg-neon-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? (
          <FaTimes className="text-xl relative z-10" />
        ) : (
          <FaPalette className="text-xl group-hover:rotate-180 transition-transform duration-500 relative z-10" />
        )}
      </button>
    </motion.div>
  );
};

export default ThemeSwitcher;
