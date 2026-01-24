import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* Top Layout: Image + Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Profile / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="Vaishnav Ghadge"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </motion.div>

          {/* Main About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-slate-900 rounded-2xl p-8 shadow-lg"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I come from a{" "}
              <span className="text-blue-400 font-semibold">
                farming background
              </span>{" "}
              and strongly believe technology should solve{" "}
              <span className="text-blue-400 font-semibold">
                real-world problems
              </span>
              .
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              I am currently pursuing my{" "}
              <span className="text-white font-semibold">
                MCA (Master of Computer Applications)
              </span>{" "}
              and actively building applications using{" "}
              <span className="text-blue-400 font-semibold">
                Java, Android, and Backend technologies
              </span>
              , with a focus on{" "}
              <span className="text-blue-400 font-semibold">
                education and agriculture
              </span>
              .
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-blue-400">15+</p>
            <p className="text-gray-400 mt-1">Projects</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-blue-400">1+</p>
            <p className="text-gray-400 mt-1">Years Experience</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-blue-400">10+</p>
            <p className="text-gray-400 mt-1">Core Skills</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl text-center">
            <p className="text-3xl font-bold text-blue-400">2</p>
            <p className="text-gray-400 mt-1">Domains</p>
          </div>
        </motion.div>

        {/* Why Hire Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-slate-900 rounded-2xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Why Hire Me?
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="bg-slate-800 p-6 rounded-xl">
              🌱{" "}
              <span className="font-semibold text-white">Problem Thinker</span>
              <p className="mt-2 text-sm">
                I focus on understanding real problems before writing code.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              ⚙️{" "}
              <span className="font-semibold text-white">
                Strong Backend Base
              </span>
              <p className="mt-2 text-sm">
                Solid foundation in Java, databases, and API logic.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              🚀 <span className="font-semibold text-white">Fast Learner</span>
              <p className="mt-2 text-sm">
                Quickly adapts to new tools, frameworks, and environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
