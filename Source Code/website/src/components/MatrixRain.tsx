"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let columns = Math.floor(width / 20);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const chars = "0123456789ABCDEF";
    // Theme colors from context
    const colors = [currentTheme.colors.primary, currentTheme.colors.accent];

    const draw = () => {
      // Use theme void color with opacity for trail
      // We need to convert hex to rgba for opacity
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
            }
          : { r: 0, g: 0, b: 0 };
      };

      const bg = hexToRgb(currentTheme.colors.void);
      ctx.fillStyle = `rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.05)`;

      ctx.fillRect(0, 0, width, height);

      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.fillStyle = color;
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const newColumns = Math.floor(width / 20);
      // If window grew, add more drops
      for (let i = columns; i < newColumns; i++) {
        drops[i] = 1;
      }
      columns = newColumns;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
};

export default MatrixRain;
