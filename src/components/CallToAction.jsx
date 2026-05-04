import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-16 md:p-24 glass dark:bg-slate-900/60 border-2 border-slate-200/50 dark:border-slate-800/50 rounded-[4rem] flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/10 blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 mb-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.4em]"
          >
            Partnership
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-10 leading-[0.9]"
          >
            Ready to <span className="text-gradient">Build</span> <br /> Something <span className="italic">Great?</span>
          </motion.h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl font-medium max-w-2xl mb-16 leading-relaxed">
            I'm currently available for internships and full-stack collaborations. 
            Let's turn your ideas into high-performance digital reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-blue-600 text-white font-black rounded-3xl flex items-center gap-3 shadow-xl shadow-blue-500/20 active:shadow-none"
            >
              Start a Project <FiArrowUpRight size={20} />
            </motion.a>
            <motion.a
              href="mailto:vaishnavghadge99@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass border-2 border-slate-200/50 dark:border-slate-800/50 text-slate-900 dark:text-white font-black rounded-3xl flex items-center gap-3"
            >
              Email Me <FiMail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}