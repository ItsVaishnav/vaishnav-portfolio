import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaGraduationCap, FaLeaf } from "react-icons/fa";
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
  }, []);

  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      
      {/* 1. Dynamic Interactive Background */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />

      {/* 2. Animated Mesh Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[120px]"
        />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md text-xs font-medium text-slate-500 dark:text-slate-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Vaishnav <span className="text-blue-600 dark:text-blue-500">Ghadge</span>
        </motion.h1>

        {/* Roles with Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl md:text-3xl font-light text-slate-600 dark:text-slate-300 h-10"
        >
          I'm a{" "}
          <span className="font-semibold text-slate-900 dark:text-white border-b-2 border-blue-500">
            <Typewriter
              words={["Android Developer", "Java Backend Pro", "React Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Specializing in building robust digital ecosystems for 
          <span className="mx-2 text-blue-600 dark:text-cyan-400 font-medium">Education</span> 
          and 
          <span className="mx-2 text-green-600 dark:text-green-400 font-medium">Agriculture</span>. 
          Currently pursuing MCA in Pune, India.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold transition-all"
          >
            View My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            className="px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold backdrop-blur-sm"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            { icon: <FaGithub />, url: "https://github.com/ItsVaishnav" },
            { icon: <FaLinkedin />, url: "https://linkedin.com/in/vaishnav-ghadge" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}