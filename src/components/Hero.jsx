import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 overflow-hidden transition-colors duration-300">

      {/* Animated background glows */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-cyan-400/20 dark:bg-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-blue-500 to-cyan-400"
      >
        Vaishnav Ghadge
      </motion.h1>

      {/* Typing Roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 text-xl md:text-2xl text-slate-600 dark:text-gray-300"
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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 max-w-2xl text-slate-600 dark:text-gray-400 leading-relaxed"
      >
        I build{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          real-world applications
        </span>{" "}
        using Java, Android, and modern web technologies — with a strong focus on{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          education & agriculture
        </span>
        .
      </motion.p>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-3 text-slate-500 dark:text-gray-500"
      >
        MCA Student • Pune, India 🇮🇳
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-10 flex flex-wrap justify-center gap-5"
      >
        <a
          href="#projects"
          className="px-8 py-3 rounded-xl bg-blue-600 text-white
                     hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
        >
          View Projects
        </a>

        <a
          href="/Vaishnav_Ghadge_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 rounded-xl border border-slate-300 dark:border-gray-600
                     text-slate-900 dark:text-white
                     hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-8 flex gap-7 text-2xl text-slate-500 dark:text-gray-400"
      >
        <a
          href="https://github.com/ItsVaishnav"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-900 dark:hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vaishnav-ghadge/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-900 dark:hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 text-slate-400 dark:text-gray-500"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}
