import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse tracking for the spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [5, -5]);
  const rotateY = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-5, 5]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Skewed Background Element */}
      <div className="absolute top-0 left-0 w-full h-[120%] -z-10 bg-slate-50 dark:bg-transparent -skew-y-6 origin-top-left" />

      {/* Main Content */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Open to collaboration
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]"
        >
          Vaishnav <br /> <span className="text-gradient">Ghadge</span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xl md:text-4xl font-light text-slate-600 dark:text-slate-300 min-h-[1.5em]"
        >
          Architecting{" "}
          <span className="font-black text-slate-900 dark:text-white italic">
            <Typewriter
              words={["Full Stack Apps", "Scalable Backends", "Android Solutions"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
        >
          Building robust digital ecosystems for 
          <span className="mx-2 text-blue-600 dark:text-blue-400">Education</span> 
          and 
          <span className="mx-2 text-cyan-600 dark:text-cyan-400">Agriculture</span>. 
          MCA Aspirant & Full-Stack Crafter.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="group relative px-10 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black transition-all overflow-hidden"
          >
            <span className="relative z-10">EXPLORE WORK</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            className="px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black hover:border-blue-500 transition-colors backdrop-blur-sm"
          >
            GET RESUME
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center gap-8"
        >
          {[
            { icon: <FaGithub />, url: "https://github.com/ItsVaishnav", label: "GitHub" },
            { icon: <FaLinkedin />, url: "https://linkedin.com/in/vaishnav-ghadge", label: "LinkedIn" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              whileHover={{ y: -5, scale: 1.2, color: "#3b82f6" }}
              className="text-3xl text-slate-400 dark:text-slate-600 transition-all"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 dark:text-slate-700 text-xs font-black tracking-[0.2em] flex flex-col items-center gap-4"
      >
        <span className="inline-block [writing-mode:vertical-lr]">SCROLL</span>
        <FaArrowDown />
      </motion.div>
    </section>
  );
}