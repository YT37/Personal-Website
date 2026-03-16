import About from "@/app/About";
import AwardsRadar from "@/app/Awards";
import Blog from "@/app/Blog";
import Contact from "@/app/Contact";
import Projects from "@/app/Projects";
import CustomCursor from "@/components/CustomCursor";
import DevToolsTrap from "@/components/DevToolsTrap";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mascot from "@/components/Mascot";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <DevToolsTrap />
      <CustomCursor />
      <Spotlight />
      <MatrixRain />
      <Navbar />
      <ThemeSwitcher />
      <Mascot />
      <main className="bg-void min-h-screen text-slate-300 selection:bg-neon-accent/30 selection:text-neon-accent overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AwardsRadar />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
