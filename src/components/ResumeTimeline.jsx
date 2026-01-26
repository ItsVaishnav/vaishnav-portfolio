import { motion } from "framer-motion";

export default function ResumeTimeline() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Resume Timeline
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Education */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">🎓 Education</h3>

            <p className="text-white font-medium">
              MCA (Master of Computer Applications)
            </p>
            <p className="text-gray-400 text-sm">
              Zeal College, Pune
            </p>
          </div>

          {/* Experience */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">💼 Experience</h3>

            <p className="text-white font-medium">
              Software Developer
            </p>
            <p className="text-gray-400 text-sm">
              SPW Healthcare Innovations Pvt. Ltd.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
