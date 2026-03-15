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

      {/* Optional: Floating Background Gradient for depth */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}