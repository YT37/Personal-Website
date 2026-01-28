"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GlitchImage = ({ src, alt, className = "" }: GlitchImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-slate-800/50 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoaded(true)}
      />

      {isHovered && isLoaded && (
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
