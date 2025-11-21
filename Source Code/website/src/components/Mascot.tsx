"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

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

const Mascot = () => {
  const { currentTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [message, setMessage] = useState("System Online.\nWatching you...");
  const [isTalking, setIsTalking] = useState(false);

  // Smooth mouse tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Update spring values for smooth eye movement
      // Map screen coordinates to eye movement range (-10 to 10 pixels)
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Random blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Random messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (Math.random() > 0.4 && !isHovered && !isTalking) {
        const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
        setMessage(randomMsg);
        setIsTalking(true);
        setTimeout(() => {
          setIsTalking(false);
          setTimeout(() => setMessage("System Online.\nWatching you..."), 500);
        }, 4000);
      }
    }, 5000);
    return () => clearInterval(messageInterval);
  }, [isHovered, isTalking]);

  // Eye pupil movement
  const pupilX = useTransform(mouseX, (value) => value);
  const pupilY = useTransform(mouseY, (value) => value);

  return (
    <motion.div
      className="fixed bottom-24 right-8 z-[90] hidden md:block cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
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
            <div className="relative w-6 h-8 bg-black/50 rounded-full overflow-hidden border border-neon-primary/50">
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
            </div>

            {/* Right Eye */}
            <div className="relative w-6 h-8 bg-black/50 rounded-full overflow-hidden border border-neon-primary/50">
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
            </div>
          </div>

          {/* Mouth (changes on hover) */}
          <motion.div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-8 h-1 bg-neon-primary rounded-full"
            animate={{
              height: isHovered ? 6 : 2,
              width: isHovered ? 12 : 8,
              borderRadius: isHovered ? "50%" : "2px",
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
