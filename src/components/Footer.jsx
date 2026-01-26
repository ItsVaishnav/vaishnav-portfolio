import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 py-8"
      >
        <p className="text-center text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
          © {new Date().getFullYear()} Vaishnav Ghadge.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          Built with React, Tailwind CSS, and modern web technologies.
        </p>
      </motion.div>
    </footer>
  );
}
