import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          GitHub Repositories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          All public repositories from my GitHub profile, automatically updated.
        </motion.p>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-400">Loading repositories...</p>
        )}

        {/* Repo Grid */}
        {!loading && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                variants={card}
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
          </motion.div>
        )}
      </div>
    </section>
  );
}
