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

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-[7px] top-7 w-5 h-5 bg-white dark:bg-black border-[4px] border-blue-600 rounded-full z-10" />

                <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-500 group">
                  
                  {/* Card Header */}
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">
                      <Calendar size={14} /> {exp.duration}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>

                    <div className="flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-400 font-semibold">
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} className="text-blue-500" /> {exp.role}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-cyan-500" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Dual Stack Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <Server className="text-blue-500" size={20} />
                      <span className="text-xs font-bold uppercase dark:text-slate-300">Backend: Spring Boot</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <Smartphone className="text-cyan-500" size={20} />
                      <span className="text-xs font-bold uppercase dark:text-slate-300">Mobile: React Native</span>
                    </div>
                  </div>

                  {/* Description List */}
                  <ul className="space-y-4 mb-10">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2.5 pt-8 border-t border-slate-200 dark:border-slate-800">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest"
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