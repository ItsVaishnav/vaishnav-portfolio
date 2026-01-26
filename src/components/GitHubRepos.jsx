import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://api.github.com/users/ItsVaishnav/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
          );
        setRepos(filtered);
      });
  }, []);

  const totalPages = Math.ceil(repos.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRepos = repos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          GitHub Repositories
        </motion.h2>

        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          A paginated view of my public GitHub repositories, automatically updated.
        </p>

        {/* Repo Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentRepos.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ y: -6 }}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">
                {repo.name}
              </h3>

              <p className="text-sm text-gray-400 mb-4 flex-1">
                {repo.description || "No description provided."}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{repo.language || "Code"}</span>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <FaGithub /> View
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg disabled:opacity-40"
            >
              <FaArrowLeft /> Prev
            </button>

            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg disabled:opacity-40"
            >
              Next <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
