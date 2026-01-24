import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaAndroid,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Android", icon: <FaAndroid /> },
  { name: "React", icon: <FaReact /> },
  { name: "Spring Boot", icon: <FaDatabase /> },
  { name: "Oracle / MySQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-slate-900 rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg"
          >
            <div className="text-4xl text-blue-500">{skill.icon}</div>
            <p className="text-gray-200 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
