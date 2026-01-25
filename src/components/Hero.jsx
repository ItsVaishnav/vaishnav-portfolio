import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight"
      >
        Vaishnav Ghadge
      </motion.h1>

      {/* Typing Roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl md:text-2xl text-gray-300"
      >
        <Typewriter
          words={[
            "Android Developer",
            "Java Backend Developer",
            "React Developer",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.div>

      {/* Value Statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-2xl text-gray-400"
      >
        I build <span className="text-white font-medium">real-world applications</span> using
        Java, Android, and modern web technologies—focused on
        <span className="text-white font-medium"> education & agriculture</span>.
      </motion.p>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 text-gray-500"
      >
        MCA Student • Pune, India 🇮🇳
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-7 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
        >
          View Projects
        </a>

        <a
          href="/Vaishnav_Ghadge_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3 border border-gray-500 rounded-lg hover:bg-slate-800 transition"
        >
          Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 flex gap-6 text-2xl text-gray-400"
      >
        <a href="https://github.com/ItsVaishnav" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        <a href="https://www.linkedin.com/in/vaishnav-ghadge/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
      </motion.div>
    </section>
  );
}
