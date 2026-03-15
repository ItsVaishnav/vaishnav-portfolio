import { motion } from "framer-motion";
import { 
  FaJava, FaReact, FaAndroid, FaDatabase, FaGitAlt, 
  FaServer, FaNodeJs, FaPhp, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiJavascript, SiPostman, SiMongodb, SiMysql, 
  SiOracle, SiSpringboot, SiExpress, SiTailwindcss 
} from "react-icons/si";

const skillGroups = [
  {
    title: "Core & Languages",
    description: "The foundation of my development logic.",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
    ],
  },
  {
    title: "Frontend & Mobile",
    description: "Building intuitive user interfaces.",
    skills: [
      { name: "Android", icon: <FaAndroid />, color: "text-green-500" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "HTML5/CSS3", icon: <FaHtml5 />, color: "text-orange-500" },
    ],
  },
  {
    title: "Backend & Servers",
    description: "Architecting scalable server-side systems.",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-emerald-500" },
      { name: "Express", icon: <SiExpress />, color: "text-slate-400" },
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
    ],
  },
  {
    title: "Data & DevOps",
    description: "Database management and cloud tools.",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Technical <span className="text-blue-600">Expertise</span>
          </motion.h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {group.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}