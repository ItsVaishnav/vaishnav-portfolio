import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function ResumeTimeline() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Savitribai Phule Pune University",
      duration: "2024 — 2026",
      details: "Focusing on Mobile App Development, Cloud Computing, and Enterprise Java.",
      status: "Currently Pursuing"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Shivaji University",
      duration: "2021 — 2024",
      details: "Foundation in Data Structures, Algorithms, and Web Technologies.",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-[#080808] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
            >
              Academic <span className="text-blue-600">Path</span>
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Formal education and certifications</p>
          </div>
          <div className="h-1 bg-blue-600 w-24 rounded-full hidden md:block mb-3" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education List */}
          <div className="lg:col-span-8 space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex gap-5">
                    <div className="mt-1 p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded">
                        {item.status}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-blue-600 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-medium flex items-center gap-2 mt-1">
                        <BookOpen size={16} className="text-slate-400" /> {item.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl h-fit">
                    <Calendar size={16} /> {item.duration}
                  </div>
                </div>
                <p className="mt-6 text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Quick Stats / Certs */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20"
            >
              <Award size={40} className="mb-4 text-blue-100" />
              <h4 className="text-xl font-bold mb-2">Continuous Learning</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Beyond my MCA, I actively pursue certifications in Java Full Stack and Android Jetpack Compose to stay ahead of industry standards.
              </p>
            </motion.div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Core Focus</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "DBMS", "Software Eng.", "Mobile UI"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold uppercase tracking-tight">
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