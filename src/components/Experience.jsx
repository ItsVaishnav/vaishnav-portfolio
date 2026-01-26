import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-20 text-slate-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8">

          {/* Vertical Line */}
          <span className="absolute left-3 top-0 h-full w-[2px] bg-blue-500/40"></span>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 mb-10"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[22px] top-10 w-5 h-5 bg-blue-500 rounded-full ring-4 ring-blue-500/30"></span>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                SPW Healthcare Innovations Pvt. Ltd.
              </h3>

              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400">
                <Calendar size={16} />
                Present
              </div>
            </div>

            <p className="flex items-center gap-2 text-blue-500 font-medium mb-4">
              <Briefcase size={18} />
              Software Developer
            </p>

            {/* Responsibilities */}
            <ul className="space-y-3 text-slate-600 dark:text-gray-300 leading-relaxed">
              <li>• Developed and maintained backend APIs using Java</li>
              <li>• Designed and optimized database-driven application logic</li>
              <li>• Collaborated with cross-functional teams on real-world projects</li>
              <li>• Focused on scalability, performance, and clean code practices</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
