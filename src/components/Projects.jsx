import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

/**
 * Featured projects based on your RESUME
 * Repo names should match (or partially match) your GitHub repo names
 */
const featured = [
  {
    key: "time",
    title: "Time Table Scheduler",
    subtitle: "Zeal Institute",
    description:
      "Web-based scheduler that reduces faculty and lecture conflicts using collision-free logic.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "JSP", "Oracle"],
    role: "Lead Developer",
  },
  {
    key: "homies",
    title: "Homies – Rental Platform",
    description:
      "Platform enabling direct communication between flat owners and tenants, reducing broker dependency.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    role: "Full Stack Developer",
  },
  {
    key: "idiscuss",
    title: "iDiscuss – Tech Q&A Forum",
    description:
      "Community forum for developers to ask and resolve technical queries collaboratively.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    role: "Full Stack Developer",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ItsVaishnav/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
      });
  }, []);

  const findRepo = (key) =>
    repos.find((r) => r.name.toLowerCase().includes(key));

  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          A selection of academic and live projects focused on solving real-world problems.
        </motion.p>

        {/* Featured Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {featured.map((proj, i) => {
            const repo = findRepo(proj.key);
            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -6 }}
                className="bg-slate-800 rounded-2xl p-6 shadow-lg flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                {proj.subtitle && (
                  <p className="text-sm text-gray-400 mb-3">
                    {proj.subtitle}
                  </p>
                )}

                <p className="text-gray-300 text-sm mb-4">
                  {proj.description}
                </p>

                <p className="text-xs text-gray-400 mb-3">
                  <span className="text-gray-200 font-medium">Role:</span>{" "}
                  {proj.role}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-700 text-gray-200 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {repo && (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* More on GitHub */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/ItsVaishnav"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <FaGithub className="text-xl" />
            View more projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
