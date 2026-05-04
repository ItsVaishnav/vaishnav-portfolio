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
      company: "SARVO Tech",
      role: "CEO & Co-Founder",
      location: "Pune, India",
      duration: "Apr 2024 — Present",
      description: [
        "Leading the vision and strategic direction of SARVO Tech, focusing on innovative software solutions.",
        "Overseeing the development of 'CampusOS', an integrated campus management ecosystem.",
        "Managing cross-functional teams to deliver high-quality, scalable digital products.",
        "Defining product roadmaps and establishing key partnerships within the education and tech industries."
      ],
      skills: ["Leadership", "Strategic Planning", "Product Management", "Software Architecture", "Team Building"]
    },
    {
      company: "SPW Healthcare Innovations Pvt. Ltd.",
      role: "Software Developer",
      location: "Pune, India",
      duration: "Feb 2024 — Present",
      // Integrated descriptions for Spring Boot, React, and React Native
      description: [
        "Architecting and maintaining robust backend microservices using Java and Spring Boot to handle sensitive healthcare data.",
        "Developing cross-platform mobile applications with React Native, ensuring high performance across iOS and Android.",
        "Building interactive and responsive web dashboards using React.js and Tailwind CSS for real-time data visualization.",
        "Optimizing PostgreSQL/MySQL database schemas and RESTful APIs to ensure seamless data flow between mobile and web clients.",
        "Implementing secure authentication and clean code practices in an Agile environment to maintain 99.9% system uptime."
      ],
      skills: ["Java", "Spring Boot", "React Native", "React.js", "MySQL", "REST APIs", "Git"]
    }
  ];

  return (
    <section 
      id="experience" 
      className="relative py-28 bg-white dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6" ref={scrollRef}>
        
        {/* Section Header */}
        <div className="mb-20 text-left md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Work <span className="text-blue-600">History</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mt-4 md:mx-auto rounded-full" 
          />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-100 dark:bg-slate-800">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            />
          </div>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative pl-16 md:pl-24"
              >
                {/* Glowing Node */}
                <div className="absolute left-[3px] top-8 flex items-center justify-center z-10">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="absolute left-[-2px] top-12 w-10 h-[2px] bg-slate-200 dark:bg-slate-800" />

                <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/[0.05] hover:border-blue-500/30 transition-all duration-500 group shadow-2xl">
                  
                  {/* Card Header */}
                  <div className="flex flex-col gap-4 mb-10">
                    <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.25em]">
                      <Calendar size={14} className="animate-pulse" /> {exp.duration}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-blue-500 transition-colors">
                      {exp.company}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-base text-slate-500 dark:text-slate-400 font-bold">
                      <span className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                          <Briefcase size={18} />
                        </div>
                        {exp.role}
                      </span>
                      <span className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                          <MapPin size={18} />
                        </div>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                    {exp.skills.slice(0, 2).map((skill, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                        {i === 0 ? <Server className="text-blue-500" size={24} /> : <Smartphone className="text-cyan-500" size={24} />}
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Area</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-200">{skill} Architecture</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Description List */}
                  <ul className="space-y-5 mb-12">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-5 text-slate-600 dark:text-slate-400 text-lg leading-relaxed group/item">
                        <CheckCircle2 size={24} className="text-blue-500 shrink-0 mt-1 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                        <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Detailed Skills Chips */}
                  <div className="flex flex-wrap gap-3 pt-10 border-t border-slate-100 dark:border-white/5">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
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