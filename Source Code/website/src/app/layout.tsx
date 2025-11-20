import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/context/ThemeContext";
import { JetBrains_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Yug Thapar | Portfolio",
  description: "CS Student & Entrepreneur",
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${orbitron.variable} ${jetbrainsMono.variable} bg-void text-slate-300 selection:bg-neon-primary/30 selection:text-neon-primary font-sans md:cursor-none`}
      >
        <ThemeProvider>
          <CustomCursor />
          <Spotlight />
          <MatrixRain />
          <ScrollProgress />
          <Navbar />
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
