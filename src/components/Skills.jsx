import { motion } from "framer-motion";
import { 
  FaJava, FaReact, FaAndroid, FaDatabase, FaGitAlt, 
  FaNodeJs, FaPhp, FaHtml5, FaCss3Alt, FaAws 
} from "react-icons/fa";
import { 
  SiJavascript, SiPostman, SiMongodb, SiMysql, 
  SiSpringboot, SiExpress, SiTailwindcss 
} from "react-icons/si";

// REMOVED: The problematic imports that were causing the SyntaxError

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
    title: "Cloud & Infrastructure",
    description: "Modern deployment and cloud management.",
    skills: [
      // Swapped to FaAws to ensure the code compiles regardless of library version
      { name: "AWS Amplify", icon: <FaAws />, color: "text-orange-400" },
      { name: "AWS App Runner", icon: <FaAws />, color: "text-orange-500" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "MySQL/MongoDB", icon: <SiMysql />, color: "text-blue-500" },
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
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Technical <span className="text-blue-500">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" 
          />
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
              className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-300 group shadow-sm hover:shadow-xl dark:shadow-blue-900/10"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {group.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-all"
                  >
                    <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
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