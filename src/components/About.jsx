import { motion } from "framer-motion";
import { FiTarget, FiCode, FiZap, FiAward } from "react-icons/fi";
import profile from "../assets/profile.jpg";

export default function About() {
  const stats = [
    { label: "Projects Done", value: "15+", icon: <FiCode /> },
    { label: "Years Exp.", value: "1+", icon: <FiAward /> },
    { label: "Tech Stack", value: "10+", icon: <FiZap /> },
    { label: "Domains", value: "02", icon: <FiTarget /> },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50 dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Behind the <span className="text-blue-600">Code</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Top Layout: Image + Content */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Profile Side - Professional Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative group"
          >
            <div className="relative w-full max-w-[350px] mx-auto aspect-square">
              {/* 1. Background Decorative Element (The "Offset" Square) */}
              <div className="absolute inset-0 border-2 border-blue-600 rounded-[2.5rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

              {/* 2. The Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 z-10">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
                  src={profile}
                  alt="Vaishnav Ghadge"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* 3. Glassmorphism Bottom Label (Optional but Pro) */}
                <div className="absolute bottom-4 left-4 right-4 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                    Pune, India
                  </p>
                </div>
              </div>

              {/* 4. Tech Accents (Corner Brackets) */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-500 z-20 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-cyan-400 z-20 rounded-br-xl" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Rooted in Agriculture, <br />
              <span className="text-blue-600">Driven by Innovation.</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Coming from a{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                farming background
              </span>
              , I’ve seen firsthand how the right tools can change lives. My
              mission is to bridge the gap between complex technology and
              real-world utility.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              As an{" "}
              <span className="text-blue-600 font-medium">
                MCA student in Pune
              </span>
              , I specialize in Java and Android development, focusing on
              scalable solutions for the education and agri-tech sectors.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 text-xl">{stat.icon}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </h4>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* "Why Me" Bento Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-6">
          <Card
            emoji="🌱"
            title="Problem Thinker"
            desc="I don't just write code; I design solutions by understanding the 'Why' behind every feature."
          />
          <Card
            emoji="⚙️"
            title="Robust Backend"
            desc="Deep focus on Java and DB architecture ensuring your apps are fast, secure, and scalable."
            active
          />
          <Card
            emoji="🚀"
            title="Agile Learner"
            desc="In the fast-moving tech world, my greatest skill is the ability to master new tools in weeks, not months."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Helper Component for the bottom grid
function Card({ emoji, title, desc, active = false }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-8 rounded-3xl border transition-all duration-300 ${
        active
          ? "bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20"
          : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
      }`}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h4 className={`text-xl font-bold mb-2 ${active ? "text-white" : ""}`}>
        {title}
      </h4>
      <p
        className={
          active ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
        }
      >
        {desc}
      </p>
    </motion.div>
  );
}
