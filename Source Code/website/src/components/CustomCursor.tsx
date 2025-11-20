"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <motion.div
            className="absolute left-0 w-1.5 h-full border-l-2 border-t-2 border-b-2 border-neon-accent"
            animate={{
              x: isHovering ? -4 : 0,
              height: isHovering ? "120%" : "100%",
            }}
          />
          <motion.div
            className="absolute right-0 w-1.5 h-full border-r-2 border-t-2 border-b-2 border-neon-accent"
            animate={{
              x: isHovering ? 4 : 0,
              height: isHovering ? "120%" : "100%",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-neon-primary pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 0.5,
          y: mousePosition.y - 0.5,
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
