import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin, Smartphone, Server } from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const scrollRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const experiences = [
    {
      company: "SPW Healthcare Innovations Pvt. Ltd.",
      role: "Software Developer",
      location: "Pune, India",
      duration: "Feb 2024 — Present",
      description: [
        "Architecting and maintaining robust backend microservices using Java and Spring Boot to handle sensitive healthcare data.",
        "Developing cross-platform mobile applications with React Native, ensuring high performance across iOS and Android.",
        "Building interactive and responsive web dashboards using React.js and Tailwind CSS for real-time data visualization.",
        "Optimizing PostgreSQL/MySQL database schemas and RESTful APIs to ensure seamless data flow between mobile and web clients.",
        "Implementing secure authentication and clean code practices in an Agile environment."
      ],
      skills: ["Java", "Spring Boot", "React Native", "React.js", "MySQL", "REST APIs", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={scrollRef}>
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Evolution
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter text-center"
          >
            Professional <span className="text-gradient">Timeline</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Progress Line - Shifted Left */}
          <div className="absolute left-6 top-0 h-full w-1 bg-slate-200 dark:bg-slate-800 rounded-full">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            />
          </div>

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Dot - Positioned on the line */}
                <div className="absolute left-[1.1rem] top-12 w-8 h-8 bg-white dark:bg-black border-4 border-blue-600 rounded-full z-10 shadow-2xl flex items-center justify-center">
                   <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                </div>

                <div className="w-full">
                   <div className="p-12 md:p-16 glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 rounded-[4rem] hover:border-blue-500/50 transition-all duration-700 shadow-2xl relative group overflow-hidden">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] group-hover:bg-blue-600/10 transition-all" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                          <div className="space-y-4">
                            <span className="inline-block px-5 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] rounded-full">
                              {exp.duration}
                            </span>
                            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                              {exp.company}
                            </h3>
                          </div>
                          
                          <div className="flex flex-col md:items-end gap-3 text-slate-500 dark:text-slate-400 font-black text-sm uppercase tracking-widest">
                            <div className="flex items-center gap-3">
                               <Briefcase size={20} className="text-blue-600" /> 
                               <span className="text-slate-900 dark:text-white">{exp.role}</span>
                            </div>
                            <div className="flex items-center gap-3">
                               <MapPin size={20} className="text-indigo-500" /> 
                               <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-12">
                          <div className="md:col-span-8">
                            <ul className="space-y-6">
                              {exp.description.map((point, i) => (
                                <li key={i} className="flex gap-6 text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed group/item">
                                  <div className="mt-2 shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                                    <CheckCircle2 size={14} />
                                  </div>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="md:col-span-4">
                            <div className="p-8 rounded-[2.5rem] glass border border-slate-200/50 dark:border-slate-800/50">
                              <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-slate-400">Tech Ecosystem</h4>
                              <div className="flex flex-wrap gap-3">
                                {exp.skills.map((skill, i) => (
                                  <span key={i} className="px-4 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest hover:border-blue-500 transition-colors">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}