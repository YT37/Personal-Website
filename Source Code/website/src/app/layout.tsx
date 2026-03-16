import CustomCursor from "@/components/CustomCursor";
import DevToolsTrap from "@/components/DevToolsTrap";
import Mascot from "@/components/Mascot";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
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
  title: "Yug Thapar | CS Student & Engineer",
  description:
    "Portfolio of Yug Thapar — Computer Science student at Arizona State University specializing in AI, Embedded Systems, and Full-Stack Development. Co-founder of Solvrz Inc.",
  keywords: [
    "Yug Thapar",
    "Software Engineer",
    "ASU",
    "Arizona State University",
    "AI",
    "Embedded Systems",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Yug Thapar" }],
  creator: "Yug Thapar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yugthapar.com",
    title: "Yug Thapar | CS Student & Engineer",
    description:
      "Portfolio of Yug Thapar — Computer Science student at Arizona State University specializing in AI, Embedded Systems, and Full-Stack Development.",
    siteName: "Yug Thapar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yug Thapar | CS Student & Engineer",
    description:
      "Portfolio of Yug Thapar — CS student at ASU specializing in AI, Embedded Systems, and Full-Stack Development.",
    creator: "@yugt37",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

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
          <DevToolsTrap />
          <CustomCursor />
          <Spotlight />
          <MatrixRain />
          <Navbar />
          <ThemeSwitcher />
          <Mascot />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
