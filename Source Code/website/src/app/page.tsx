import About from "@/app/About";
import AwardsRadar from "@/app/Awards";
import Blog from "@/app/Blog";
import Contact from "@/app/Contact";
import Projects from "@/app/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
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
  );
}
