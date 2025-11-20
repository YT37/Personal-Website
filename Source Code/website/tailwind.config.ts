import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--color-void)",
        neon: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
        },
      },
      fontFamily: {
        sans: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        cyber: ["var(--font-orbitron)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        flicker: "flicker 0.15s infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        flicker: {
          "0%": { opacity: "0.02" },
          "5%": { opacity: "0.05" },
          "10%": { opacity: "0.02" },
          "15%": { opacity: "0.06" },
          "20%": { opacity: "0.02" },
          "50%": { opacity: "0.02" },
          "55%": { opacity: "0.05" },
          "60%": { opacity: "0.02" },
          "65%": { opacity: "0.04" },
          "70%": { opacity: "0.02" },
          "100%": { opacity: "0.02" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
