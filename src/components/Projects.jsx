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
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((proj, i) => {
            const repo = findRepo(proj.key);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col h-full bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Decorative Top Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${proj.color}`} />

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-100 dark:bg-blue-500/10 text-blue-600 rounded-lg">
                      {proj.role}
                    </span>
                    {repo && <FaCodeBranch className="text-slate-300 dark:text-slate-600" />}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-blue-500 dark:text-blue-400 font-medium text-sm mb-4">
                    {proj.subtitle}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-bold px-2 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links Area */}
                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    {repo ? (
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        <FaGithub /> Source
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 italic font-medium tracking-tight">Private Repo</span>
                    )}
                    
                    <button className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                      <FaExternalLinkAlt size={12} />
                    </button>
                  </div>
                </div>
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