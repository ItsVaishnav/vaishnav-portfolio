import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
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
        "Developing robust backend APIs and microservices architecture using Java.",
        "Optimizing complex SQL queries and database schemas for healthcare data.",
        "Collaborating in an Agile environment to deliver high-availability features.",
        "Implementing clean code principles and unit testing to ensure 99% uptime."
      ],
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"]
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative py-24 bg-white dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6" ref={scrollRef}>
        
        {/* Section Header */}
        <div className="mb-16 text-left md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Work <span className="text-blue-600">History</span>
          </motion.h2>
          <div className="h-1.5 w-12 bg-blue-600 mt-4 md:mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Line - Locked to Left */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-100 dark:bg-slate-800">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-7 w-4 h-4 bg-white dark:bg-black border-[3px] border-blue-600 rounded-full z-10 shadow-[0_0_10px_rgba(37,99,235,0.3)]" />

                {/* Experience Card */}
                <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
                  
                  {/* Card Header */}
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-tighter">
                      <Calendar size={14} /> {exp.duration}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {exp.company}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-slate-400" /> {exp.role}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description List */}
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Skills Section */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-slate-800">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
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