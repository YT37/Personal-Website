export interface ThemeColors {
  void: string;
  primary: string;
  secondary: string;
  accent: string;
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
}

const ALL_THEMES: Theme[] = [
  {
    id: "crimson",
    name: "Crimson Sith",
    colors: {
      void: "#050000",
      primary: "#dc2626", // Red
      secondary: "#991b1b", // Dark Red
      accent: "#ffffff", // White
    },
  },
  {
    id: "cyberpunk",
    name: "Night City",
    colors: {
      void: "#0b0b0b",
      primary: "#fcee0a", // Yellow
      secondary: "#00f0ff", // Cyan
      accent: "#ff003c", // Red
    },
  },
  {
    id: "matrix",
    name: "The Matrix",
    colors: {
      void: "#000000",
      primary: "#00ff41", // Matrix Green
      secondary: "#008f11", // Dark Green
      accent: "#d3f7d6", // Pale Green
    },
  },

  {
    id: "dracula",
    name: "Dracula",
    colors: {
      void: "#282a36",
      primary: "#bd93f9", // Purple
      secondary: "#ff79c6", // Pink
      accent: "#8be9fd", // Cyan
    },
  },
  {
    id: "nord",
    name: "Nordic Frost",
    colors: {
      void: "#2e3440",
      primary: "#88c0d0", // Blue
      secondary: "#81a1c1", // Darker Blue
      accent: "#eceff4", // White
    },
  },
  {
    id: "gruvbox",
    name: "Gruvbox Dark",
    colors: {
      void: "#282828",
      primary: "#fabd2f", // Yellow
      secondary: "#fe8019", // Orange
      accent: "#8ec07c", // Aqua
    },
  },
  {
    id: "oceanic",
    name: "Deep Ocean",
    colors: {
      void: "#0f172a",
      primary: "#38bdf8", // Sky
      secondary: "#818cf8", // Indigo
      accent: "#2dd4bf", // Teal
    },
  },
  {
    id: "sunset",
    name: "Sunset Drive",
    colors: {
      void: "#1c1917",
      primary: "#f59e0b", // Amber
      secondary: "#ef4444", // Red
      accent: "#fcd34d", // Yellow
    },
  },
  {
    id: "monokai",
    name: "Monokai",
    colors: {
      void: "#272822",
      primary: "#a6e22e", // Green
      secondary: "#f92672", // Pink
      accent: "#66d9ef", // Blue
    },
  },

  {
    id: "forest",
    name: "Enchanted Forest",
    colors: {
      void: "#0d1f12",
      primary: "#4ade80", // Light Green
      secondary: "#166534", // Dark Green
      accent: "#fcd34d", // Gold
    },
  },
  {
    id: "royal",
    name: "Royal Guard",
    colors: {
      void: "#1a0b2e",
      primary: "#ffd700", // Gold
      secondary: "#7600bc", // Deep Purple
      accent: "#ffffff", // White
    },
  },
  {
    id: "terminal",
    name: "Retro Terminal",
    colors: {
      void: "#0c0c0c",
      primary: "#cccccc", // Light Gray
      secondary: "#333333", // Dark Gray
      accent: "#00ff00", // Bright Green
    },
  },
  {
    id: "cotton_candy",
    name: "Cotton Candy",
    colors: {
      void: "#1f1f2e",
      primary: "#ffb7b2", // Pastel Pink
      secondary: "#a2e1db", // Pastel Blue
      accent: "#e2f0cb", // Pastel Green
    },
  },
  {
    id: "solarized",
    name: "Solarized Dark",
    colors: {
      void: "#002b36",
      primary: "#268bd2", // Blue
      secondary: "#d33682", // Magenta
      accent: "#2aa198", // Cyan
    },
  },
  {
    id: "tokyo_night",
    name: "Tokyo Night",
    colors: {
      void: "#1a1b26",
      primary: "#7aa2f7", // Blue
      secondary: "#bb9af7", // Purple
      accent: "#7dcfff", // Cyan
    },
  },
  {
    id: "coffee",
    name: "Coffee House",
    colors: {
      void: "#261C15",
      primary: "#D4A373", // Latte
      secondary: "#A98467", // Mocha
      accent: "#E3D5CA", // Cream
    },
  },
  {
    id: "cyber_grape",
    name: "Cyber Grape",
    colors: {
      void: "#10002b",
      primary: "#9d4edd", // Purple
      secondary: "#e0aaff", // Light Purple
      accent: "#c77dff", // Violet
    },
  },
  {
    id: "high_contrast",
    name: "High Contrast",
    colors: {
      void: "#000000",
      primary: "#ffff00", // Yellow
      secondary: "#ffffff", // White
      accent: "#00ffff", // Cyan
    },
  },
  {
    id: "blade_runner",
    name: "Blade Runner",
    colors: {
      void: "#040b14",
      primary: "#ff4500", // Orange Red
      secondary: "#00ced1", // Dark Turquoise
      accent: "#e0ffff", // Light Cyan
    },
  },
  {
    id: "neon_demon",
    name: "Neon Demon",
    colors: {
      void: "#0a0a0a",
      primary: "#ff0099", // Hot Pink
      secondary: "#4900ff", // Electric Blue
      accent: "#00ffcc", // Teal
    },
  },
  {
    id: "ghost_shell",
    name: "Ghost in Shell",
    colors: {
      void: "#0d1117",
      primary: "#39ff14", // Neon Green
      secondary: "#ff073a", // Neon Red
      accent: "#0ff0fc", // Cyan
    },
  },
  {
    id: "tron_legacy",
    name: "The Grid",
    colors: {
      void: "#000000",
      secondary: "#00a4e4", // Tron Blue
      primary: "#ff6600", // Tron Orange
      accent: "#ffffff", // White
    },
  },
  {
    id: "akira",
    name: "Neo Tokyo",
    colors: {
      void: "#1a0505",
      primary: "#ff0000", // Akira Red
      secondary: "#ffde00", // Bike Yellow
      accent: "#40e0d0", // Turquoise
    },
  },
  {
    id: "night_city",
    name: "Night City",
    colors: {
      void: "#000000",
      primary: "#fcee0a", // Cyber Yellow
      secondary: "#00f0ff", // Cyber Blue
      accent: "#ff003c", // Cyber Red
    },
  },
  {
    id: "synthwave",
    name: "Synthwave",
    colors: {
      void: "#2b003b", // Deep Purple
      primary: "#ff00ff", // Magenta
      secondary: "#00ffff", // Cyan
      accent: "#f9d71c", // Sun Yellow
    },
  },
  {
    id: "deus_ex",
    name: "Human Rev",
    colors: {
      void: "#050505",
      primary: "#ffb700", // Gold
      secondary: "#daa520", // Goldenrod
      accent: "#fffacd", // Lemon Chiffon
    },
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    colors: {
      void: "#ffc0cb", // Pink
      primary: "#9370db", // Medium Purple
      secondary: "#00ced1", // Dark Turquoise
      accent: "#ff69b4", // Hot Pink
    },
  },
  {
    id: "system_shock",
    name: "Shodan",
    colors: {
      void: "#001100",
      primary: "#00ff00", // Terminal Green
      secondary: "#008080", // Teal
      accent: "#c0c0c0", // Silver
    },
  },
  {
    id: "terminator",
    name: "Skynet",
    colors: {
      void: "#0a0a0a",
      primary: "#ff0000", // Red Eye
      secondary: "#708090", // Slate Gray
      accent: "#c0c0c0", // Silver
    },
  },
  {
    id: "outrun",
    name: "Outrun",
    colors: {
      void: "#140029",
      primary: "#ff0055", // Laser Red
      secondary: "#7a00ff", // Violet
      accent: "#00e5ff", // Bright Cyan
    },
  },
  {
    id: "netrunner",
    name: "Netrunner",
    colors: {
      void: "#000510",
      primary: "#0055ff", // Electric Blue
      secondary: "#ff00aa", // Neon Pink
      accent: "#00ffaa", // Spring Green
    },
  },
  {
    id: "glitch_art",
    name: "Glitch Art",
    colors: {
      void: "#101010",
      primary: "#ff00ff", // Magenta
      secondary: "#00ff00", // Lime
      accent: "#0000ff", // Blue
    },
  },
  {
    id: "radioactive",
    name: "Fallout",
    colors: {
      void: "#0f1a0f",
      primary: "#32cd32", // Lime Green
      secondary: "#ffff00", // Yellow
      accent: "#ff4500", // Orange Red
    },
  },
];

const ALT_THEMES: Theme[] = ALL_THEMES.map((theme) => ({
  id: `${theme.id}_alt`,
  name: `${theme.name} (Alt)`,
  colors: {
    ...theme.colors,
    primary: theme.colors.secondary,
    secondary: theme.colors.primary,
  },
}));

export const themes: Theme[] = [...ALL_THEMES, ...ALT_THEMES];
