"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  ABOUT_ME,
  EMAIL,
  PROJECTS,
  SKILLS,
  SOCIALS,
  WORK,
} from "../data/portfolio";

interface OutputLine {
  type: "command" | "output" | "error" | "neofetch";
  content: string;
  cwd?: string;
}

const neofetchOutput = (): OutputLine[] => [
  {
    type: "neofetch",
    content: "NEOFETCH",
  },
];

const helpText = `Available commands:
  help          - Show this help message
  neofetch      - Display system info
  ls [dir]      - List directories or contents
  cd [dir]      - Change directory
  cat [file]    - Display file contents
  echo [text]   - Echo text back
  clear         - Clear the terminal`;

const FILESYSTEM: Record<string, string[]> = {
  "~": ["projects/", "experience/", "skills/", "contact/", "about.txt"],
  "~/projects": PROJECTS.map((p) => p.title),
  "~/experience": WORK.map((w) => `${w.role} @ ${w.title}`),
  "~/skills": SKILLS.map((s) => s),
  "~/contact": [EMAIL, ...SOCIALS.map((s) => s.name)],
};

const InteractiveTerminal = () => {
  const [outputLines, setOutputLines] = useState<OutputLine[]>([
    { type: "command", content: "neofetch" },
    ...neofetchOutput(),
    {
      type: "output",
      content:
        "Type 'help' for available commands. This terminal is interactive — try it out!",
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [cwd, setCwd] = useState("~");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Use preventScroll to avoid jumping to this section on page load
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [outputLines]);

  const processCommand = (raw: string): OutputLine[] => {
    const trimmed = raw.trim();
    if (!trimmed) return [];

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    switch (cmd) {
      case "help":
        return [{ type: "output", content: helpText }];

      case "neofetch":
        return neofetchOutput();

      case "clear":
        return [];

      case "cd": {
        const target = args.trim().toLowerCase().replace(/\/$/, "");
        if (!target || target === "~" || target === "/") {
          setCwd("~");
          return [];
        }
        if (target === "..") {
          setCwd("~");
          return [];
        }
        // resolve relative to cwd
        const resolved = cwd === "~" ? `~/${target}` : `${cwd}/${target}`;
        if (FILESYSTEM[resolved]) {
          setCwd(resolved);
          return [];
        }
        return [
          {
            type: "error",
            content: `cd: no such directory: ${args.trim()}`,
          },
        ];
      }

      case "ls": {
        const target = args.trim().toLowerCase().replace(/\/$/, "");
        // resolve which dir to list
        let dir = cwd;
        if (target) {
          if (target === "~" || target === "/") dir = "~";
          else if (target === "..") dir = "~";
          else dir = cwd === "~" ? `~/${target}` : `${cwd}/${target}`;
        }
        const contents = FILESYSTEM[dir];
        if (contents) {
          return [{ type: "output", content: contents.join("\n") }];
        }
        return [
          {
            type: "error",
            content: `ls: cannot access '${args.trim()}': No such file or directory`,
          },
        ];
      }

      case "cat": {
        const file = args.trim().toLowerCase();
        if (file === "about.txt") {
          return [{ type: "output", content: ABOUT_ME.replace(/\*\*/g, "") }];
        }
        if (!file) {
          return [{ type: "error", content: "cat: missing file operand" }];
        }
        return [
          {
            type: "error",
            content: `cat: ${args.trim()}: No such file or directory`,
          },
        ];
      }

      case "echo":
        return [{ type: "output", content: args || "" }];

      default:
        return [{ type: "error", content: `command not found: ${cmd}` }];
    }
  };

  const handleSubmit = () => {
    const raw = currentInput;
    const trimmed = raw.trim();

    if (trimmed.toLowerCase() === "clear") {
      setOutputLines([]);
      setCurrentInput("");
      if (trimmed) {
        setCommandHistory((prev) => [...prev, trimmed]);
      }
      setHistoryIndex(-1);
      return;
    }

    const result = processCommand(raw);
    setOutputLines((prev) => [
      ...prev,
      { type: "command", content: raw, cwd },
      ...result,
    ]);
    setCurrentInput("");
    if (trimmed) {
      setCommandHistory((prev) => [...prev, trimmed]);
    }
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCurrentInput("");
      } else {
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const renderLine = (line: OutputLine, index: number) => {
    if (line.type === "command") {
      return (
        <div key={index} className="flex items-center gap-2">
          <span className="text-neon-primary">➜</span>
          <span className="text-neon-primary">{line.cwd || "~"}</span>
          <span className="text-slate-300">{line.content}</span>
        </div>
      );
    }

    if (line.type === "neofetch") {
      return (
        <div key={index} className="mt-2 mb-2 flex gap-4">
          <div className="text-neon-accent text-4xl pt-1">
            <FaLaptopCode />
          </div>
          <div className="text-xs leading-relaxed text-slate-400">
            <p>
              <span className="text-neon-primary">OS:</span> Arch Linux x86_64
            </p>
            <p>
              <span className="text-neon-primary">Host:</span> Yug Thapar
            </p>
            <p>
              <span className="text-neon-primary">Kernel:</span> 5.15.0-AI-dev
            </p>
            <p>
              <span className="text-neon-primary">Uptime:</span> 21 years
            </p>
            <p>
              <span className="text-neon-primary">Packages:</span> 376
            </p>
            <p>
              <span className="text-neon-primary">Shell:</span> zsh 5.9
            </p>
          </div>
        </div>
      );
    }

    if (line.type === "error") {
      return (
        <div key={index} className="text-neon-secondary whitespace-pre-wrap">
          {line.content}
        </div>
      );
    }

    return (
      <div key={index} className="text-slate-400 whitespace-pre-wrap">
        {line.content}
      </div>
    );
  };

  return (
    <div className="w-full max-w-full font-mono text-sm relative group overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-neon-primary/20 rounded-lg blur-lg group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>

      {/* Terminal Window */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
        {/* Title Bar */}
        <div className="bg-slate-900 p-2 flex items-center justify-between border-b border-slate-800">
          <div className="text-slate-500 text-xs font-mono pl-2">
            yt37@mainframe:~
          </div>
          <div className="flex gap-2 pr-2">
            <div className="w-3 h-3 bg-slate-700 hover:bg-slate-600 transition-colors rounded-sm"></div>
            <div className="w-3 h-3 border border-slate-600 hover:bg-slate-700 transition-colors rounded-sm"></div>
            <div className="w-3 h-3 bg-red-900/50 hover:bg-red-600 transition-colors rounded-sm"></div>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={scrollRef}
          onClick={focusInput}
          className="p-3 md:p-4 space-y-1 min-h-[200px] md:min-h-[300px] max-h-[300px] md:max-h-[450px] overflow-y-auto relative cursor-text"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

          <div className="relative z-10">
            {outputLines.map((line, i) => renderLine(line, i))}

            {/* Input Line */}
            <div className="flex items-center gap-2">
              <span className="text-neon-primary">➜</span>
              <span className="text-neon-primary">{cwd}</span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-slate-300 outline-none caret-transparent font-mono text-sm"
                  spellCheck={false}
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                />
                {/* Blinking cursor */}
                <span
                  className="absolute top-0 text-neon-primary animate-pulse pointer-events-none"
                  style={{ left: `${currentInput.length}ch` }}
                >
                  _
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
