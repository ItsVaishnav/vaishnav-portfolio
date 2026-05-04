import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  FaJava, FaReact, FaAndroid, FaDatabase, FaGitAlt, 
  FaNodeJs, FaPhp, FaHtml5, FaAws 
} from "react-icons/fa";
import { 
  SiJavascript, SiPostman, SiMongodb, SiMysql, 
  SiSpringboot, SiExpress, SiTailwindcss 
} from "react-icons/si";

const skillGroups = [
  {
    title: "Core & Languages",
    description: "The mathematical and logical foundation.",
    className: "md:col-span-1 md:row-span-2",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
    ],
  },
  {
    title: "Modern Frontend",
    description: "Building immersive interfaces.",
    className: "md:col-span-2 md:row-span-1",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "HTML5/CSS3", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "Android", icon: <FaAndroid />, color: "text-green-500" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Scalable server-side architecture.",
    className: "md:col-span-1 md:row-span-1",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-emerald-500" },
      { name: "Express", icon: <SiExpress />, color: "text-slate-400" },
    ],
  },
  {
    title: "Cloud & Ops",
    description: "Deployment and automation.",
    className: "md:col-span-1 md:row-span-1",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    ],
  },
];

function SkillCard({ group, idx }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative p-8 rounded-[2rem] glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/50 transition-colors duration-500 ${group.className}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-gradient transition-all duration-300">
            {group.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold italic">
            {group.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {group.skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm transition-all"
            >
              <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
              <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
        </div>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {skillGroups.map((group, idx) => (
            <SkillCard key={idx} group={group} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}