import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

/* Featured projects (resume-aligned) */
const featured = [
  {
    key: "time",
    title: "Time Table Scheduler",
    subtitle: "Academic Scheduling System",
    description:
      "A web-based timetable scheduler that minimizes faculty and lecture conflicts using collision-free allocation logic.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "JSP", "Oracle"],
    role: "Lead Developer",
  },
  {
    key: "homies",
    title: "Homies – Rental Platform",
    subtitle: "Property & Tenant Platform",
    description:
      "A rental platform enabling direct communication between flat owners and tenants, reducing broker dependency.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    role: "Full Stack Developer",
  },
  {
    key: "idiscuss",
    title: "iDiscuss – Tech Q&A Forum",
    subtitle: "Developer Community Platform",
    description:
      "A discussion forum where developers can ask questions and collaboratively solve technical problems.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    role: "Full Stack Developer",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
    <section
      id="projects"
      className="py-28 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-600 dark:text-gray-400 mb-20 max-w-2xl mx-auto"
        >
          A curated selection of academic and live projects demonstrating my
          ability to build practical, scalable software solutions.
        </motion.p>

        {/* Project Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-10"
        >
          {featured.map((proj, i) => {
            const repo = findRepo(proj.key);

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-900
                           border border-slate-200 dark:border-slate-800
                           rounded-3xl p-7 shadow-lg
                           flex flex-col transition-all"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                  {proj.title}
                </h3>

                <p className="text-sm text-blue-500 mb-3">
                  {proj.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {proj.description}
                </p>

                <p className="text-xs text-slate-500 dark:text-gray-400 mb-4">
                  <span className="font-medium text-slate-700 dark:text-gray-200">
                    Role:
                  </span>{" "}
                  {proj.role}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full
                                 bg-slate-100 dark:bg-slate-800
                                 text-slate-600 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {repo && (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2
                               text-sm text-blue-600 dark:text-blue-400
                               hover:underline"
                  >
                    <FaGithub />
                    View Source Code
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub CTA */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/ItsVaishnav"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2
                       text-slate-700 dark:text-gray-300
                       hover:text-blue-600 dark:hover:text-blue-400
                       transition text-sm font-medium"
          >
            <FaGithub className="text-lg" />
            Explore more projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
