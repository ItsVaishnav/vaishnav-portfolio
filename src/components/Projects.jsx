import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBuffer } from "react-icons/fa";

const featured = [
  {
    key: "time",
    title: "Time Table Scheduler",
    subtitle: "Algorithm-Driven Logic",
    description: "Automated engine resolving complex faculty scheduling conflicts using genetic algorithms and recursive validation.",
    tech: ["JSP", "Oracle", "Bootstrap"],
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
  },
  {
    key: "homies",
    title: "Homies Rental",
    subtitle: "Real Estate Ecosystem",
    description: "Cloud-native peer-to-peer marketplace that revolutionizes tenant-owner interactions without traditional intermediaries.",
    tech: ["PHP", "MySQL", "Tailwind"],
    role: "Full Stack",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  {
    key: "idiscuss",
    title: "iDiscuss Forum",
    subtitle: "Engineering Hub",
    description: "Scalable Q&A ecosystem with real-time updates and hierarchical discussion trees for technical knowledge sharing.",
    tech: ["PHP", "AJAX", "PostgreSQL"],
    role: "Backend Dev",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
  },
];

function ProjectCard({ proj, i, repo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500"
    >
      {/* Project Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply transition-opacity group-hover:opacity-0 z-10" />
        <motion.img 
          whileHover={{ scale: 1.1 }}
          src={proj.image} 
          alt={proj.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-white/90 dark:bg-slate-900/90 text-blue-600 rounded-full shadow-xl">
             {proj.role}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {proj.title}
        </h3>
        <p className="text-blue-500 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
          {proj.subtitle}
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
          {proj.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {proj.tech.map((t, idx) => (
            <span key={idx} className="text-[10px] font-black px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
          <div className="flex gap-4">
            {repo && (
              <motion.a
                whileHover={{ y: -2 }}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                title="View Source"
              >
                <FaGithub size={18} />
              </motion.a>
            )}
            <motion.a
                whileHover={{ y: -2 }}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
          </div>
          
          <div className="flex items-center gap-2 text-slate-300 dark:text-slate-700">
            <FaBuffer size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter"
            >
              Featured <span className="text-gradient">Creations</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 font-medium max-w-xs text-right hidden md:block"
          >
            A collection of engineering projects focused on scalability and user impact.
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((proj, i) => (
            <ProjectCard key={i} proj={proj} i={i} repo={findRepo(proj.key)} />
          ))}
        </div>

        {/* GitHub Contribution CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3.5rem] bg-slate-900 relative overflow-hidden group border border-blue-500/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-600/20 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                Explore the <span className="text-blue-500 text-4xl italic">Source Code</span>
              </h3>
              <p className="text-slate-400 font-medium max-w-md">
                All my public repositories are built with clean code principles and thorough documentation.
              </p>
            </div>
            
            <motion.a
              href="https://github.com/ItsVaishnav"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black flex items-center gap-3 shadow-2xl hover:shadow-blue-500/20 transition-all"
            >
              <FaGithub size={24} />
              GITHUB PROFILE
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}