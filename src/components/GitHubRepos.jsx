import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaStar, FaCodeBranch } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

// Helper to get color for languages
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
    <section id="repos" className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-black text-slate-900 dark:text-white"
            >
              Open Source <span className="text-blue-600">Library</span>
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Live synchronization with my GitHub profile</p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
               {repos.length} Repositories
             </span>
          </div>
        </div>

        {/* Repo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="wait">
            {loading ? (
              // Simple Skeleton Loader
              [...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-slate-100 dark:bg-slate-900 animate-pulse rounded-[2rem]" />
              ))
            ) : (
              currentRepos.map((repo) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col p-7 bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-blue-500/40 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600`}>
                      <FaGithub size={20} />
                    </div>
                    <div className="flex gap-3 text-slate-400 text-xs font-bold">
                      <span className="flex items-center gap-1"><FaStar size={12}/> {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><FaCodeBranch size={12}/> {repo.forks_count}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 truncate group-hover:text-blue-600 transition-colors">
                    {repo.name.replace(/-/g, ' ')}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 flex-1">
                    {repo.description || "Experimental project focusing on clean architecture and performance."}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{repo.language || "Engine"}</span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Explore
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Professional Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm disabled:opacity-20 transition-all hover:gap-5"
            >
              <FaArrowLeft /> Previous
            </button>

            <div className="flex gap-2">
               {[...Array(totalPages)].map((_, i) => (
                 <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${currentPage === i + 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'}`}
                 >
                   {i + 1}
                 </button>
               ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm disabled:opacity-20 transition-all hover:gap-5"
            >
              Next <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}