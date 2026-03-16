"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { AWARDS, type Award } from "../data/portfolio";

/* ---------- polar positioning for each award blip ---------- */
const BLIP_POSITIONS: { angle: number; radius: number }[] = [
  { angle: 30, radius: 0.72 },
  { angle: 85, radius: 0.55 },
  { angle: 140, radius: 0.82 },
  { angle: 195, radius: 0.45 },
  { angle: 240, radius: 0.68 },
  { angle: 310, radius: 0.58 },
  { angle: 355, radius: 0.38 },
];

function polarToPercent(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = Math.round((50 + radius * 50 * Math.cos(rad)) * 100) / 100;
  const y = Math.round((50 + radius * 50 * Math.sin(rad)) * 100) / 100;
  return { x, y };
}

/* ================================================================ */

const Awards = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected: Award = AWARDS[selectedIndex];

  return (
    <section id="awards" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading number="04" title="Awards & Achievements" />

      {/* ---------- radar + detail layout ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
      >
        {/* ==================== RADAR DISPLAY ==================== */}
        <div className="relative shrink-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
          {/* outer glow */}
          <div className="absolute inset-0 rounded-full bg-neon-primary/5 blur-2xl" />

          {/* main radar container */}
          <div className="relative w-full h-full rounded-full border border-neon-primary/20 bg-void/80 backdrop-blur-sm">
            {/* concentric rings */}
            {[0.75, 0.5, 0.25].map((scale) => (
              <div
                key={scale}
                className="absolute rounded-full border border-neon-primary/20"
                style={{
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                  top: `${((1 - scale) / 2) * 100}%`,
                  left: `${((1 - scale) / 2) * 100}%`,
                }}
              />
            ))}

            {/* cross-hair lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-neon-primary/15" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-neon-primary/15" />

            {/* sweep line — CSS animated */}
            <div className="absolute inset-0 animate-radar-sweep overflow-hidden rounded-full">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, var(--color-primary) 20deg, transparent 40deg)",
                  opacity: 0.3,
                }}
              />
            </div>

            {/* center dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/60" />

            {/* award blips */}
            {AWARDS.map((award, i) => {
              const pos = BLIP_POSITIONS[i % BLIP_POSITIONS.length];
              const { x, y } = polarToPercent(pos.angle, pos.radius);
              const isSelected = i === selectedIndex;

              return (
                <button
                  key={award.title}
                  onClick={() => setSelectedIndex(i)}
                  className="absolute group z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={`Select award: ${award.title}`}
                >
                  {/* glow halo */}
                  <span
                    className="absolute -inset-2 rounded-full animate-radar-pulse"
                    style={{
                      background: "var(--color-accent)",
                      opacity: isSelected ? 0.35 : 0.15,
                      animationDelay: `${i * 0.6}s`,
                      filter: "blur(6px)",
                    }}
                  />
                  {/* blip dot */}
                  <span
                    className={`relative block rounded-full transition-all duration-300 animate-radar-pulse ${
                      isSelected
                        ? "w-3 h-3 md:w-4 md:h-4 bg-neon-accent shadow-[0_0_12px_var(--color-accent)]"
                        : "w-2 h-2 md:w-[10px] md:h-[10px] bg-neon-accent/80 group-hover:bg-neon-accent group-hover:shadow-[0_0_10px_var(--color-accent)]"
                    }`}
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                  {/* tooltip label on hover */}
                  <span className="absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap text-[10px] font-mono text-neon-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-void/80 px-1.5 py-0.5 rounded">
                    {award.title}
                  </span>
                </button>
              );
            })}

            {/* screen-like overlay tint */}
            <div className="absolute inset-0 rounded-full bg-neon-primary/[0.03] pointer-events-none" />

            {/* scan-line texture */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none opacity-[0.04] overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, var(--color-primary) 2px, var(--color-primary) 3px)",
              }}
            />
          </div>

          {/* corner decorations */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-neon-primary/40" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-neon-primary/40" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-neon-primary/40" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-neon-primary/40" />
        </div>

        {/* ==================== DETAIL READOUT PANEL ==================== */}
        <div className="flex-1 min-w-0 w-full lg:w-auto">
          <div className="border border-neon-primary/20 bg-void/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
            {/* corner brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-primary/50" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-neon-primary/50" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-neon-primary/50" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-primary/50" />

            {/* scan line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-primary/30 to-transparent animate-scan" />

            {/* status header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-accent animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono text-neon-accent tracking-[0.25em] uppercase">
                Signal Acquired
              </span>
              <span className="ml-auto text-[10px] font-mono text-slate-600">
                [{String(selectedIndex + 1).padStart(2, "0")}/
                {String(AWARDS.length).padStart(2, "0")}]
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* title */}
                <h3 className="text-xl md:text-2xl font-cyber text-neon-accent mb-4 leading-tight tracking-wide">
                  {selected.title}
                </h3>

                {/* data fields */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] font-mono text-neon-primary/70 tracking-widest uppercase shrink-0">
                      Year
                    </span>
                    <span className="h-px flex-1 bg-slate-800" />
                    <span className="font-mono text-sm text-slate-300">
                      {selected.year}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] font-mono text-neon-primary/70 tracking-widest uppercase shrink-0">
                      Status
                    </span>
                    <span className="h-px flex-1 bg-slate-800" />
                    <span className="font-mono text-sm text-neon-accent/80">
                      Verified
                    </span>
                  </div>
                </div>

                {/* description */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-neon-primary/50 tracking-widest uppercase block mb-2">
                    Intel Report
                  </span>
                  <p className="text-sm text-slate-400 font-mono leading-relaxed">
                    {selected.description}
                  </p>
                </div>

                {/* link button */}
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-neon-accent/40 text-neon-accent text-xs font-mono tracking-widest uppercase hover:bg-neon-accent/10 hover:border-neon-accent/60 hover:shadow-[0_0_15px_-3px_var(--color-accent)] transition-all duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 bg-neon-accent rounded-full group-hover:animate-pulse" />
                    Access File
                    <svg
                      className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>

            {/* award selector dots (mobile-friendly navigation) */}
            <div className="flex items-center gap-1.5 mt-8 pt-4 border-t border-slate-800/50">
              <span className="text-[9px] font-mono text-slate-600 mr-2 uppercase tracking-wider">
                Targets
              </span>
              {AWARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "bg-neon-accent shadow-[0_0_6px_var(--color-accent)]"
                      : "bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Select award ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
