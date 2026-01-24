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

export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <ResumeTimeline />
      <Experience />
      <Skills />
      <Projects />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
