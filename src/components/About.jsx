import { motion } from "framer-motion";
import { FiTarget, FiSmartphone, FiDatabase, FiZap, FiAward } from "react-icons/fi";
import profile from "../assets/profile.jpg";

export default function About() {
  const stats = [
    { label: "Android & Java", value: "15+", icon: <FiSmartphone /> },
    { label: "Backend Systems", value: "08+", icon: <FiDatabase /> },
    { label: "Core Tech Stack", value: "10+", icon: <FiZap /> },
    { label: "Exp. in Dev", value: "1+", icon: <FiAward /> },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Discovery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter text-center"
          >
            Behind the <span className="text-gradient">Logic</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Profile Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="relative group max-w-[350px] mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10 p-2 glass rounded-[3rem] border-2 border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
                <img
                  src={profile}
                  alt="Vaishnav"
                  className="w-full aspect-[4/5] object-cover rounded-[2.5rem] transition-all duration-700"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 glass p-6 rounded-3xl border-2 border-slate-200/50 dark:border-slate-800/50 shadow-2xl">
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Based in</p>
                 <p className="text-lg font-black text-slate-900 dark:text-white">PUNE, IN</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="md:col-span-7 space-y-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
            >
              Rooted in Agriculture, <br />
              <span className="text-gradient">Driven by Innovation.</span>
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6 text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed"
            >
              <p>
                Coming from a <span className="text-slate-900 dark:text-white font-black italic">farming background</span>, 
                I’ve seen firsthand how the right tools can change lives. My mission is to bridge the gap between complex technology and real-world utility.
              </p>
              <p>
                As an <span className="text-blue-500 font-black italic underline decoration-blue-500/30 underline-offset-8 text-2xl">MCA Aspirant</span>, 
                I specialize in Java and Android development, focusing on scalable solutions for the education and agri-tech sectors.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 glass rounded-2xl border border-slate-200/50 dark:border-slate-800/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-blue-600">{stat.icon}</span>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</h4>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
           {[
             { title: "Problem Thinker", desc: "Understanding the 'Why' before the 'What'.", icon: "🌱" },
             { title: "Robust Backend", desc: "Java & DB architecture at the core.", icon: "⚙️", active: true },
             { title: "Agile Learner", desc: "Mastering new tools in weeks, not months.", icon: "🚀" }
           ].map((card, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -10 }}
               className={`p-10 rounded-[2.5rem] border-2 transition-all duration-500 ${
                 card.active 
                 ? "bg-slate-900 border-blue-600 text-white shadow-2xl shadow-blue-500/20" 
                 : "glass border-slate-200/50 dark:border-slate-800/50"
               }`}
             >
               <span className="text-4xl mb-6 block">{card.icon}</span>
               <h4 className={`text-2xl font-black mb-4 ${card.active ? "text-white" : "text-slate-900 dark:text-white text-gradient"}`}>
                 {card.title}
               </h4>
               <p className={card.active ? "text-slate-400 font-medium" : "text-slate-500 font-medium"}>
                 {card.desc}
               </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}