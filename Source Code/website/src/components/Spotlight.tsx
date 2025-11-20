"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

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

  // Convert hex to rgba for opacity
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )}`
      : "255, 255, 255";
  };

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${
          mousePosition.y
        }px, rgba(${hexToRgb(
          currentTheme.colors.primary
        )}, 0.08), transparent 80%)`,
      }}
    />
  );
};

export default Spotlight;
