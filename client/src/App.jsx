import { useEffect, useState } from "react";
import "./styles/global.css";

import Preloader from "./components/Preloader";
import CursorFX from "./components/CursorFX";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import { useTheme } from "./hooks/useTheme";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { progress, scrolled, navHidden } = useScrollProgress();
  const [cmdkOpen, setCmdkOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen(true);
      }
      if (e.key === "Escape") setCmdkOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Preloader />
      <CursorFX />
      <div id="progress" style={{ width: `${progress}%` }} />
      <Navbar navHidden={navHidden} theme={theme} toggleTheme={toggleTheme} openCmdk={() => setCmdkOpen(true)} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      <BackToTop visible={scrolled > 600} />
      <CommandPalette open={cmdkOpen} onClose={() => setCmdkOpen(false)} toggleTheme={toggleTheme} />
    </>
  );
}
