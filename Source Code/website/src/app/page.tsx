"use client";

import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-void min-h-screen text-slate-300 selection:bg-neon-accent/30 selection:text-neon-accent overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
