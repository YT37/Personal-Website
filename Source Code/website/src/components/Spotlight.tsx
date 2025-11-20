"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { hexToRgbString } from "../utils/colors";

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { currentTheme } = useTheme();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, rgba(${hexToRgbString(
          currentTheme.colors.primary
        )}, 0.08), transparent 80%)`,
      }}
    />
  );
};

export default Spotlight;
