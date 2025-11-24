"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface CyberButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

const CyberButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: CyberButtonProps) => {
  const baseStyles =
    "px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 text-sm sm:text-base font-cyber tracking-wider uppercase relative overflow-hidden transition-all duration-300 group cursor-pointer";

  const variants = {
    primary:
      "bg-neon-primary/20 border border-neon-primary text-neon-accent font-bold hover:bg-neon-primary/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:scale-105",
    secondary:
      "border border-neon-accent text-neon-accent hover:bg-neon-accent/10",
  };

  const clipPaths = {
    primary: "polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)",
    secondary: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  const style = { clipPath: clipPaths[variant] };

  if (href) {
    // If it's an external link or a download, use <a>
    if (target === "_blank" || href.startsWith("http")) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
          style={style}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    // Internal link
    return (
      <Link
        href={href}
        className={combinedClassName}
        style={style}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} style={style}>
      {children}
    </button>
  );
};

export default CyberButton;
