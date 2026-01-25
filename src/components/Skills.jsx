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
import { SiJavascript, SiPostman, SiMongodb, SiMysql, SiOracle } from "react-icons/si";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Technologies and tools I have used in academic, personal, and live projects.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-10"
        >
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 10px 25px rgba(59,130,246,0.25)",
                    }}
                    className="bg-slate-800 rounded-xl p-5 flex flex-col items-center justify-center gap-3 cursor-default"
                  >
                    <div className="text-4xl text-blue-500">
                      {skill.icon}
                    </div>
                    <p className="text-gray-200 font-medium text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
