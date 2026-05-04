import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

const featured = [
  {
    key: "campusos",
    title: "CampusOS",
    subtitle: "SARVO Tech Flagship",
    description: "A comprehensive digital operating system for educational institutions, integrating administration, learning management, and student services into one seamless platform.",
    tech: ["Spring Boot", "React", "React Native", "PostgreSQL"],
    role: "CEO & Lead Architect",
    color: "from-blue-600 to-indigo-600"
  },
  {
    key: "time",
    title: "Time Table Scheduler",
    subtitle: "Logic-Driven Scheduling",
    description: "An automated scheduling engine that eliminates faculty overlaps using custom collision-detection algorithms.",
    tech: ["JSP", "Oracle", "Bootstrap", "JS"],
    role: "Lead Architect",
    color: "from-blue-500 to-cyan-500"
  },
  {
    key: "homies",
    title: "Homies Rental",
    subtitle: "Real Estate Ecosystem",
    description: "A peer-to-peer rental marketplace designed to remove middle-men and streamline tenant-owner contracts.",
    tech: ["PHP", "MySQL", "Tailwind", "JS"],
    role: "Full Stack",
    color: "from-emerald-500 to-teal-500"
  },
  {
    key: "idiscuss",
    title: "iDiscuss Forum",
    subtitle: "Knowledge Sharing",
    description: "A high-performance technical Q&A platform featuring threaded discussions and category-based sorting.",
    tech: ["PHP", "MySQL", "AJAX", "CSS"],
    role: "Backend Dev",
    color: "from-purple-500 to-pink-500"
  },
];

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ItsVaishnav/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = Array.isArray(data) 
          ? data.filter((r) => !r.fork).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          : [];
        setRepos(filtered);
      })
      .catch(() => setRepos([]));
  }, []);

  const findRepo = (key) => repos.find((r) => r.name.toLowerCase().includes(key));

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Featured <span className="text-blue-600">Work</span>
          </motion.h2>
          <div className="h-1.5 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((proj, i) => {
            const repo = findRepo(proj.key);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                {/* 3D Tilt Wrapper */}
                <motion.div 
                  whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="h-full flex flex-col bg-white/5 dark:bg-white/[0.03] backdrop-blur-3xl border border-white/10 dark:border-white/[0.05] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] hover:border-blue-500/30"
                >
                  <div className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
                    
                    {/* Background Glow */}
                    <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${proj.color} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity`} />

                    <div className="flex justify-between items-start mb-8">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 dark:text-blue-400">
                          {proj.role}
                        </span>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                          {proj.title}
                        </h3>
                      </div>
                      {repo && <FaGithub className="text-2xl text-slate-400 dark:text-slate-600 group-hover:text-blue-500 transition-colors" />}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                      {proj.description}
                    </p>

                    {/* Tech Stack - Premium Treatment */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Area */}
                    <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      {repo ? (
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link flex items-center gap-3 text-sm font-bold text-slate-900 dark:text-white"
                        >
                          <span className="relative overflow-hidden h-5">
                            <span className="block group-hover/link:-translate-y-full transition-transform duration-300">View Source</span>
                            <span className="absolute top-full left-0 block group-hover/link:-translate-y-full transition-transform duration-300 text-blue-500">GitHub Repo</span>
                          </span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 italic font-medium tracking-tight">Enterprise Level</span>
                      )}
                      
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl"
                      >
                        <FaExternalLinkAlt size={14} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-10 rounded-[2.5rem] bg-slate-900 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-slate-400 mb-4 relative z-10">Want to see more logic implementations?</p>
          <a
            href="https://github.com/ItsVaishnav"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform relative z-10 shadow-xl"
          >
            <FaGithub size={20} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}