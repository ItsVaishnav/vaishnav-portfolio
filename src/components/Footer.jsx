import { motion } from "framer-motion";
import { FaCode, FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const techStack = [
    "React", "Node.js", "Java", "Spring Boot", "MySQL", 
    "Android", "Tailwind CSS", "Framer Motion", "AWS", "Git"
  ];

  return (
    <footer className="relative mt-20 border-t-2 border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
      
      {/* Infinite Tech Marquee */}
      <div className="py-6 glass border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap gap-16 items-center"
            animate={{ x: [0, -1500] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600 hover:text-gradient transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 items-center">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 glass rounded-2xl border-2 border-slate-200/50 dark:border-slate-800/50 shadow-xl"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xs">
                V
              </div>
              <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em]">
                VAISHNAV.DEV
              </span>
            </motion.div>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-bold text-center md:text-left leading-relaxed max-w-[200px]">
              Crafting scalable digital solutions with a focus on logic and user impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, url: "https://github.com/ItsVaishnav" },
                { icon: <FaLinkedin />, url: "https://linkedin.com/in/vaishnav-ghadge" },
                { icon: <FaInstagram />, url: "#" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-14 h-14 glass flex items-center justify-center rounded-2xl text-slate-400 hover:text-blue-500 transition-all border-2 border-slate-200/50 dark:border-slate-800/50 shadow-lg"
                >
                  <span className="text-xl">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-slate-900 dark:text-white font-black text-xl tracking-tighter">
              © {currentYear} <span className="text-gradient">VAISHNAV GHADGE</span>
            </p>
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <span>MADE IN PUNE</span>
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaHeart className="text-blue-500" size={10} />
              </motion.span>
              <span>WITH PASSION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600/20 via-cyan-400 to-blue-600/20" />
    </footer>
  );
}