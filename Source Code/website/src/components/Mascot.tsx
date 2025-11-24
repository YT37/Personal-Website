"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const TALK_INTERVAL = 7500;

const MESSAGES = [
  "Did you try turning it off and on again?",
  "It works on my machine!",
  "There is no place like 127.0.0.1",
  "I speak binary. 01001000 01101001!",
  "My code compiles, therefore I am.",
  "Ctrl+C, Ctrl+V is my superpower.",
  "I'm not a bug, I'm a feature.",
  "Real programmers count from 0.",
  "Whitespace matters!",
  "Git happens.",
  "Scanning for coffee...",
  "404: Sleep not found.",
  "I dream in electric sheep.",
  "Have you updated your drivers?",
  "Sudo make me a sandwich.",
  "Console.log('Hello World');",
  "Warning: Low caffeine levels.",
  "Compiling...",
  "Debugging: Being the detective in a crime movie where you are also the murderer.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
];

const EMOTES = [
  "happy",
  "angry",
  "surprised",
  "love",
  "sleep",
  "dead",
] as const;
type EmoteType = (typeof EMOTES)[number] | "normal";

const Mascot = () => {
  const { currentTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [message, setMessage] = useState("System Online.\nWatching you...");
  const [isTalking, setIsTalking] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [emote, setEmote] = useState<EmoteType>("normal");

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

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (Math.random() > 0.7 && !isHovered && !isTalking) {
        const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
        setMessage(randomMsg);

        const randomEmote = EMOTES[Math.floor(Math.random() * EMOTES.length)];
        setEmote(randomEmote);

        setIsTalking(true);
        setTimeout(() => {
          setIsTalking(false);
          setEmote("normal");
          setTimeout(() => setMessage("System Online.\nWatching you..."), 500);
        }, 4000);
      }
    }, TALK_INTERVAL);
    return () => clearInterval(messageInterval);
  }, [isHovered, isTalking]);

  const pupilX = useTransform(mouseX, (value) => value);
  const pupilY = useTransform(mouseY, (value) => value);

  return (
    <motion.div
      className="fixed right-4 md:right-8 z-[90] cursor-pointer"
      initial={{ opacity: 0, scale: 0, bottom: "1rem" }}
      animate={{
        opacity: 1,
        scale: isMobile ? 0.8 : 1,
        bottom: isFooterVisible ? "6rem" : "0.5rem",
      }}
      transition={{
        bottom: { duration: 0.3, ease: "easeInOut" },
        default: { duration: 0.5 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
    >
      <div className="relative w-24 h-24">
        {/* Robot Head Container */}
        <motion.div
          className="w-full h-full bg-void border-2 border-neon-primary rounded-full relative overflow-hidden shadow-[0_0_20px_var(--color-primary)]"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundColor: currentTheme.colors.void,
            borderColor: isHovered
              ? currentTheme.colors.accent
              : currentTheme.colors.primary,
            boxShadow: `0 0 ${isHovered ? "30px" : "15px"} ${
              isHovered
                ? currentTheme.colors.accent
                : currentTheme.colors.primary
            }`,
          }}
        >
          {/* Scanlines effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-30"></div>

          {/* Face/Screen Background */}
          <div className="absolute inset-0 bg-neon-primary/10 z-0"></div>

          {/* Eyes Container */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 z-10">
            {/* Left Eye */}
            <div className="relative w-6 h-8 bg-black/50 rounded-full overflow-hidden border border-neon-primary/50 flex items-center justify-center">
              {emote === "normal" ? (
                <>
                  <motion.div
                    className="absolute w-3 h-3 rounded-full bg-neon-accent shadow-[0_0_10px_var(--color-accent)]"
                    style={{
                      x: pupilX,
                      y: pupilY,
                      backgroundColor: currentTheme.colors.accent,
                      boxShadow: `0 0 10px ${currentTheme.colors.accent}`,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-void z-20"
                    animate={{ height: isBlinking ? "100%" : "0%" }}
                    transition={{ duration: 0.1 }}
                  />
                </>
              ) : (
                <div
                  className="text-lg font-bold"
                  style={{ color: currentTheme.colors.accent }}
                >
                  {emote === "happy" && "^"}
                  {emote === "angry" && ">"}
                  {emote === "surprised" && "O"}
                  {emote === "love" && "♥"}
                  {emote === "sleep" && "-"}
                  {emote === "dead" && "x"}
                </div>
              )}
            </div>

            {/* Right Eye */}
            <div className="relative w-6 h-8 bg-black/50 rounded-full overflow-hidden border border-neon-primary/50 flex items-center justify-center">
              {emote === "normal" ? (
                <>
                  <motion.div
                    className="absolute w-3 h-3 rounded-full bg-neon-accent shadow-[0_0_10px_var(--color-accent)]"
                    style={{
                      x: pupilX,
                      y: pupilY,
                      backgroundColor: currentTheme.colors.accent,
                      boxShadow: `0 0 10px ${currentTheme.colors.accent}`,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-void z-20"
                    animate={{ height: isBlinking ? "100%" : "0%" }}
                    transition={{ duration: 0.1 }}
                  />
                </>
              ) : (
                <div
                  className="text-lg font-bold"
                  style={{ color: currentTheme.colors.accent }}
                >
                  {emote === "happy" && "^"}
                  {emote === "angry" && "<"}
                  {emote === "surprised" && "O"}
                  {emote === "love" && "♥"}
                  {emote === "sleep" && "-"}
                  {emote === "dead" && "x"}
                </div>
              )}
            </div>
          </div>

          {/* Mouth (changes on hover) */}
          <motion.div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-8 h-1 bg-neon-primary rounded-full"
            animate={{
              height:
                isHovered || emote === "surprised" || emote === "happy" ? 6 : 2,
              width:
                isHovered || emote === "happy"
                  ? 12
                  : emote === "surprised"
                  ? 6
                  : 8,
              borderRadius:
                isHovered || emote === "surprised"
                  ? "50%"
                  : emote === "happy"
                  ? "0 0 10px 10px"
                  : "2px",
            }}
            style={{ backgroundColor: currentTheme.colors.primary }}
          />
        </motion.div>

        {/* Antenna */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-neon-primary"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ backgroundColor: currentTheme.colors.primary }}
        >
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-accent animate-pulse"
            style={{
              backgroundColor: currentTheme.colors.accent,
              boxShadow: `0 0 10px ${currentTheme.colors.accent}`,
            }}
          />
        </motion.div>
      </div>

      {/* Speech Bubble (appears on hover or when talking) */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 w-48 bg-void border border-neon-primary p-2 rounded-lg text-[10px] font-mono text-center pointer-events-none z-50"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: isHovered || isTalking ? 1 : 0,
          scale: isHovered || isTalking ? 1 : 0.8,
          y: isHovered || isTalking ? 0 : 10,
        }}
        style={{
          borderColor: currentTheme.colors.primary,
          color: currentTheme.colors.accent,
        }}
      >
        {message.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < message.split("\n").length - 1 && <br />}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Mascot;
