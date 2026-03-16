"use client";
import { SKILLS } from "../data/portfolio";

const ROW_COLORS = ["#b0c4ff", "#80eacc", "#f0abfc"];

const Skills = () => {
  const third = Math.ceil(SKILLS.length / 3);
  const rows = [
    SKILLS.slice(0, third),
    SKILLS.slice(third, third * 2),
    SKILLS.slice(third * 2),
  ];

  return (
    <div className="space-y-4 overflow-hidden">
      {rows.map((row, rowIndex) => {
        const direction = rowIndex % 2 === 0 ? "scroll-left" : "scroll-right";
        const items = [...row, ...row];
        const color = ROW_COLORS[rowIndex];
        // Scale duration by item count so visual speed matches across rows
        const speed = (row.length / rows[0].length) * 30;

        const skillSpan = (skill: string, keyPrefix: string, i: number) => (
          <span
            key={`${keyPrefix}-${skill}-${i}`}
            className="shrink-0 px-4 py-2 text-xs font-mono bg-transparent border border-solid border-neon-primary/40 hover:border-neon-primary hover:shadow-[0_0_15px_-3px_var(--color-primary)] transition-all duration-300 cursor-default whitespace-nowrap"
            style={{ color }}
          >
            {skill}
          </span>
        );

        return (
          <div
            key={rowIndex}
            className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,white_8%,white_92%,transparent)]"
          >
            <div
              className="flex shrink-0 gap-4 py-1 hover:[animation-play-state:paused]"
              style={{ animation: `${direction} ${speed}s linear infinite` }}
            >
              {items.map((skill, i) => skillSpan(skill, "a", i))}
            </div>
            <div
              className="flex shrink-0 gap-4 py-1 ml-4 hover:[animation-play-state:paused]"
              style={{ animation: `${direction} ${speed}s linear infinite` }}
              aria-hidden
            >
              {items.map((skill, i) => skillSpan(skill, "b", i))}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
