import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-blue-500 pl-10">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="absolute -left-[9px] w-4 h-4 bg-blue-500 rounded-full"></span>

            <h3 className="text-xl font-semibold">
              SPW Healthcare Innovations Pvt. Ltd.
            </h3>
            <p className="text-gray-400 text-sm">
              Software Developer • Present
            </p>

            <p className="mt-3 text-gray-300 leading-relaxed">
              Working on backend development, APIs, and real-world business
              logic. Collaborating with teams to build scalable and maintainable
              software solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
