import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        Let’s Build Something Together
      </motion.h2>

      <p className="text-white mb-6">
        Open to internships, projects, and full-time opportunities
      </p>

      <a
        href="#contact"
        className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition"
      >
        Hire Me / Let’s Talk
      </a>
    </section>
  );
}
