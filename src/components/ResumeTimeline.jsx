import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function ResumeTimeline() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Savitribai Phule Pune University",
      duration: "2024 — 2026",
      details: "Focusing on Mobile App Development, Cloud Computing, and Enterprise Java.",
      status: "Current"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Shivaji University",
      duration: "2021 — 2024",
      details: "Foundation in Data Structures, Algorithms, and Web Technologies.",
      status: "Graduate"
    }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              Academics
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter"
            >
              Educational <span className="text-gradient">Journey</span>
            </motion.h2>
          </div>
          <div className="text-slate-500 dark:text-slate-500 font-bold max-w-xs md:text-right">
             The theoretical foundation powering my practical implementations.
          </div>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 rounded-[3rem] glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 shadow-xl flex flex-col h-full"
              >
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-indigo-600/10 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      <GraduationCap size={32} />
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                      {item.status}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-gradient transition-all mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
                      <BookOpen size={16} className="text-indigo-500" /> {item.institution}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed border-t-2 border-slate-100 dark:border-slate-800/50 pt-6">
                    {item.details}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 text-slate-900 dark:text-white font-black text-sm bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-2xl w-fit border border-slate-200 dark:border-slate-700">
                  <Calendar size={18} className="text-indigo-500" /> {item.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights & Focus */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group border-2 border-blue-600 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
              <Award size={64} className="shrink-0 text-blue-500 animate-bounce" />
              <div>
                <h4 className="text-3xl font-black mb-4 tracking-tighter">Lifelong <span className="text-blue-500 italic">Learning</span></h4>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Deeply invested in mastering Java Full Stack and Modern Android patterns like Jetpack Compose.
                </p>
              </div>
            </motion.div>

            <div className="p-10 rounded-[3rem] glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-center">
              <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Core Focus Areas</h4>
              <div className="flex flex-wrap gap-4">
                {["Data Structures", "DBMS", "Software Eng.", "Mobile Systems", "Android UI", "API Design"].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 rounded-2xl text-[11px] font-black uppercase tracking-tight shadow-sm hover:border-blue-500 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}