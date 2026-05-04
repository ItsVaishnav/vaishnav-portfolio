import { useEffect, useState } from "react";
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
import MeshBackground from "./components/MeshBackground";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-blue-500/30 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-500">
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-[#050505]"
          >
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-4xl font-black text-blue-600"
            >
              V.G.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <MeshBackground />

      {/* Professional Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
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
    </div>
  );
}