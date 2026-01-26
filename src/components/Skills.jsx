import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaAndroid,
  FaDatabase,
  FaGitAlt,
  FaServer,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiOracle,
} from "react-icons/si";

/* Skill Groups */
const skillGroups = [
  {
    title: "Languages & Core",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Android", icon: <FaAndroid /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaServer /> },
      { name: "Spring Boot", icon: <FaServer /> },
      { name: "JSP", icon: <FaServer /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Oracle", icon: <SiOracle /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

/* Animations */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white"
        >
          Technical Skills
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-600 dark:text-gray-400 mb-20 max-w-2xl mx-auto"
        >
          A snapshot of the technologies and tools I actively use to design,
          build, and deploy real-world applications.
        </motion.p>

        {/* Skill Groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative bg-white/70 dark:bg-slate-900/80
                         backdrop-blur rounded-3xl p-8 shadow-xl
                         border border-slate-200 dark:border-slate-800"
            >
              {/* Group title */}
              <h3 className="text-xl font-semibold mb-8 text-blue-500">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-6">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 12px 30px rgba(59,130,246,0.25)",
                    }}
                    className="group bg-slate-100 dark:bg-slate-800
                               rounded-2xl p-5 flex flex-col
                               items-center justify-center gap-3
                               transition-all"
                  >
                    <div
                      className="text-4xl text-blue-500
                                 group-hover:scale-110
                                 transition-transform"
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-slate-700 dark:text-gray-200">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
