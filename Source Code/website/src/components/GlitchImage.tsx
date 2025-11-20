"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GlitchImage = ({ src, alt, className = "" }: GlitchImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover relative z-10"
      />

      {isHovered && (
        <>
          <motion.img
            src={src}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50 mix-blend-screen z-20"
            animate={{
              x: [-2, 2, -2],
              y: [1, -1, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.2,
              ease: "linear",
            }}
          />
          <motion.img
            src={src}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50 mix-blend-multiply z-20"
            animate={{
              x: [2, -2, 2],
              y: [-1, 1, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.3,
              ease: "linear",
            }}
          />
        </>
      )}
    </div>
  );
};

export default GlitchImage;
