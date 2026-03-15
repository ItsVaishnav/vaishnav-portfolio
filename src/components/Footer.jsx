import { motion } from "framer-motion";
import { FaCode, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Subtle Logo/Icon */}
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
            <FaCode className="text-blue-600" size={14} />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Dev Portfolio
            </span>
          </div>

          {/* Main Footer Text */}
          <div className="text-center space-y-2">
            <p className="text-slate-900 dark:text-white font-bold text-sm tracking-tight">
              © {currentYear} Vaishnav Ghadge. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-500 text-xs font-medium">
              Designed & Built with <FaHeart className="text-red-500 animate-pulse" size={10} /> in Pune
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["React", "Tailwind", "Framer Motion"].map((tech) => (
              <span 
                key={tech} 
                className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}