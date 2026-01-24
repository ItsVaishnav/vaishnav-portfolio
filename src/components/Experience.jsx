import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-20 bg-slate-800">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border-l-2 border-blue-500 pl-8 pb-10"
        >
          <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></span>

          <h3 className="text-xl font-semibold">
            SPW Healthcare Innovations Pvt. Ltd.
          </h3>
          <p className="text-gray-400 text-sm">
            Software Developer • Present
          </p>

          <p className="mt-3 text-gray-300">
            Working on backend systems, APIs, and real-world application logic.
            Collaborating with teams to build scalable and maintainable
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
