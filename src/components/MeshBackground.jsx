import { motion, useScroll, useTransform } from "framer-motion";

export default function MeshBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {/* Dynamic Gradients */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-600/10 dark:bg-indigo-600/20 blur-[120px] rounded-full"
      />
      <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] bg-cyan-600/5 dark:bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise opacity-20 dark:opacity-30 mix-blend-overlay" />
    </div>
  );
}
