import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeTimeline from "./components/ResumeTimeline";
import CallToAction from "./components/CallToAction";
import GitHubRepos from "./components/GitHubRepos";
import CustomCursor from "./components/CustomCursor";
import InteractiveBackground from "./components/InteractiveBackground";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  // Reading scroll progress for the top bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optional: Force scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white text-slate-900 dark:bg-[#050505] dark:text-white transition-colors duration-500 font-sans antialiased">
      
      {/* Professional Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      <CustomCursor />
      
      <main>
        <Hero />
        <About />
        <ResumeTimeline />
        <Experience />
        <Skills />
        <Projects />
        <GitHubRepos /> 
        <CallToAction />
        <Contact />
      </main>

      <Footer />

      <InteractiveBackground />
    </div>
  );
}