import { motion } from "framer-motion";
import { FiTarget, FiSmartphone, FiDatabase, FiZap, FiAward } from "react-icons/fi";
import profile from "../assets/profile.jpg";

export default function About() {
  const stats = [
    { label: "Android & Java Projects", value: "15+", icon: <FiSmartphone /> },
    { label: "Backend DBs Built", value: "08+", icon: <FiDatabase /> },
    { label: "Core Tech Stack", value: "10+", icon: <FiZap /> },
    { label: "Years in Dev", value: "1+", icon: <FiAward /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative py-28 bg-slate-50 dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500"
    >
      {/* Background Decoration - Enhanced Blurs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Behind the <span className="text-blue-500">Code</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Top Layout: Image + Content */}
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Profile Side - Refined Full Color Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="md:col-span-5 relative group"
          >
            <div className="relative w-full max-w-[320px] mx-auto aspect-square">
              {/* 1. Stacked Background Offset Borders (Enhanced) */}
              <div className="absolute inset-0 border-2 border-blue-500 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 opacity-80" />
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-3xl translate-x-6 translate-y-6 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 delay-75 opacity-60" />

              {/* 2. The Image Container (Color fixed) */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-700 z-10 shadow-lg">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
                  src={profile}
                  alt="Vaishnav Ghadge"
                  // REMOVED: grayscale grayscale-0 transitions
                  className="h-full w-full object-cover transition-all duration-700"
                />

                {/* 3. Refined Location Label */}
                <div className="absolute bottom-3 left-3 right-3 py-2 bg-slate-900/60 dark:bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xs font-bold tracking-[0.25em] uppercase">
                    Pune, MH • INDIA
                  </p>
                </div>
              </div>

              {/* 4. Brand Specific Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-blue-500 z-20 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-cyan-400 z-20 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text Side - Enhanced Typography & Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="md:col-span-7 space-y-7"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
              Rooted in Agriculture, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Driven by Innovation.</span>
            </motion.h3>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Coming from a{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                farming background
              </span>
              , I’ve seen firsthand how the right tools can change lives. My
              mission is to bridge the gap between complex technology and
              real-world utility. This passion led me to co-found{" "}
              <span className="text-blue-500 font-bold">SARVO Tech</span>.
            </motion.p>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              As the{" "}
              <span className="text-blue-500 font-semibold">
                CEO & Co-Founder
              </span>
              , I lead the development of ambitious projects like **CampusOS**,
              while simultaneously pursuing my MCA in Pune. I specialize in 
              Java and Android development, building scalable solutions for 
              the education and agri-tech sectors.
            </motion.p>

            {/* Quick Stats Grid - Glassmorphism Style */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-5 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="p-3 rounded-xl bg-blue-500/10 text-blue-500 text-2xl">{stat.icon}</span>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                        {stat.value}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* "Why Me" Bento Grid - Re-styled for consistency */}
        <div className="mt-28 grid md:grid-cols-3 gap-6">
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

// Reusable Helper Component for the bottom grid - Refined Styles
function Card({ emoji, title, desc, active = false }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`p-9 rounded-3xl border-2 transition-all duration-300 shadow-lg ${
        active
          ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 text-white shadow-blue-500/30"
          : "bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white backdrop-blur-sm"
      }`}
    >
      <div className={`text-5xl mb-6 p-2 inline-block rounded-2xl ${active ? "bg-white/10" : "bg-slate-100 dark:bg-slate-800"}`}>{emoji}</div>
      <h4 className={`text-2xl font-extrabold mb-3 ${active ? "text-white" : ""}`}>
        {title}
      </h4>
      <p
        className={
          active ? "text-blue-50" : "text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
        }
      >
        {desc}
      </p>
    </motion.div>
  );
}