import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ItsVaishnav/repos")
      .then((res) => res.json())
      .then((data) => {
        // sort by recently updated & remove forks
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
          );
        setRepos(filtered);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {repos.slice(0, 6).map((repo) => (
          <motion.div
            key={repo.id}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-xl p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {repo.description || "No description provided."}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                {repo.language || "Code"}
              </span>

              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                View →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
