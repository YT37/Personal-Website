"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 800, damping: 35 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const cursorXPos = useTransform(springX, (x) => x - 10);
  const cursorYPos = useTransform(springY, (y) => y - 10);

  const dotXPos = useTransform(cursorX, (x) => x - 2);
  const dotYPos = useTransform(cursorY, (y) => y - 2);

  const hoverVal = useMotionValue(0);
  const hoverSpring = useSpring(hoverVal, { stiffness: 300, damping: 20 });

  const leftBracketX = useTransform(hoverSpring, [0, 1], [0, -4]);
  const rightBracketX = useTransform(hoverSpring, [0, 1], [0, 4]);
  const bracketScaleY = useTransform(hoverSpring, [0, 1], [1, 1.2]);
  const dotOpacity = useTransform(hoverSpring, [0, 1], [1, 0]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer");
      hoverVal.set(isInteractive ? 1 : 0);
    };

    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, hoverVal]);

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          x: cursorXPos,
          y: cursorYPos,
        }}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <motion.div
            className="absolute left-0 w-1.5 h-full border-l-2 border-t-2 border-b-2 border-neon-accent"
            style={{
              x: leftBracketX,
              scaleY: bracketScaleY,
            }}
          />
          <motion.div
            className="absolute right-0 w-1.5 h-full border-r-2 border-t-2 border-b-2 border-neon-accent"
            style={{
              x: rightBracketX,
              scaleY: bracketScaleY,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-neon-primary pointer-events-none z-[9999] will-change-transform"
        style={{
          x: dotXPos,
          y: dotYPos,
          opacity: dotOpacity,
        }}
      />
    </>
  );
};

export default CustomCursor;
