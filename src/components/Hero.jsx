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
  }, [mouseX, mouseY]);

  // Magnetic Button Logic
  const MagneticButton = ({ children, href, className, primary = false }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouse = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      x.set(clientX - centerX);
      y.set(clientY - centerY);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.a
        href={href}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ x: springX, y: springY }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {children}
      </motion.a>
    );
  };

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

      {/* 2. Animated Mesh Gradients & Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Decorative Floating Circles */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-blue-500/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-20 w-32 h-32 border border-indigo-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          CEO & Co-Founder @ SARVO Tech
        </motion.div>

        {/* Headline with Staggered Entrance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white"
          >
            Vaishnav
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.9] text-gradient mt-2"
          >
            Ghadge
          </motion.h1>
        </motion.div>

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
              words={["CEO @ SARVO Tech", "Android Developer", "Java Backend Pro"]}
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
          <MagneticButton
            href="#projects"
            className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold transition-all shadow-xl shadow-blue-500/10"
          >
            View My Work
          </MagneticButton>

          <MagneticButton
            href="/resume.pdf"
            className="px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold backdrop-blur-sm shadow-lg"
          >
            Download CV
          </MagneticButton>
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