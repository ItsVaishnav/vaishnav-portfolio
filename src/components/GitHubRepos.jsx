import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaStar, FaCodeBranch } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const getLanguageColor = (lang) => {
  const colors = {
    Java: "bg-red-500",
    JavaScript: "bg-yellow-400",
    PHP: "bg-indigo-400",
    HTML: "bg-orange-500",
    CSS: "bg-blue-500",
    Python: "bg-blue-600",
  };
  return colors[lang] || "bg-slate-400";
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/ItsVaishnav/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data
            .filter((repo) => !repo.fork)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(repos.length / ITEMS_PER_PAGE);
  const currentRepos = repos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="repos" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              Open Source
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter"
            >
              Live <span className="text-gradient">Library</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-4 px-6 py-3 glass rounded-2xl border-2 border-slate-200/50 dark:border-slate-800/50 shadow-xl">
             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
             <span className="text-sm font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">
               {repos.length} Repositories
             </span>
          </div>
        </div>

        {/* Repo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="h-64 glass animate-pulse rounded-[2.5rem]" />
              ))
            ) : (
              currentRepos.map((repo) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group relative flex flex-col p-8 glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 shadow-xl overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl glass border border-slate-200/50 dark:border-slate-800/50 text-blue-600 shadow-inner">
                      <FaGithub size={24} />
                    </div>
                    <div className="flex gap-4 text-slate-500 font-black text-[10px] uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><FaStar size={14} className="text-yellow-500"/> {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1.5"><FaCodeBranch size={14} className="text-blue-500"/> {repo.forks_count}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 truncate group-hover:text-gradient transition-all">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed line-clamp-2 mb-8 flex-1">
                    {repo.description || "Experimental project focusing on logic, scalability and clean architecture."}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t-2 border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)} shadow-sm`} />
                      <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{repo.language || "Engine"}</span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                    >
                      View Source
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-24">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="group flex items-center gap-4 px-8 py-4 glass dark:bg-slate-900 border-2 border-slate-200/50 dark:border-slate-800/50 text-slate-900 dark:text-white rounded-full font-black text-xs uppercase tracking-widest disabled:opacity-20 transition-all hover:border-blue-500/50 shadow-2xl"
            >
              <FaArrowLeft /> Back
            </motion.button>

            <div className="flex gap-3">
               {[...Array(totalPages)].map((_, i) => (
                 <motion.button 
                  key={i}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-2xl font-black text-xs transition-all border-2 ${currentPage === i + 1 ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/30' : 'glass border-slate-200/50 dark:border-slate-800/50 text-slate-400'}`}
                 >
                   {i + 1}
                 </motion.button>
               ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="group flex items-center gap-4 px-8 py-4 glass dark:bg-slate-900 border-2 border-slate-200/50 dark:border-slate-800/50 text-slate-900 dark:text-white rounded-full font-black text-xs uppercase tracking-widest disabled:opacity-20 transition-all hover:border-blue-500/50 shadow-2xl"
            >
              Next <FaArrowRight />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}