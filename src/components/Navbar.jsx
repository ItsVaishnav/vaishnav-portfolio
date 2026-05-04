import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("theme") !== "light");

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 150;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] w-full px-6 py-4 transition-all duration-500 ${
        isScrolled 
          ? "glass shadow-xl py-3 border-b" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 no-underline"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-blue-500/20">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
              Vaishnav
            </span>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mt-1">
              Portfolio
            </span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-900/50 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
            {sections.map((id) => (
              <li key={id}>
                <motion.a
                  href={`#${id}`}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    active === id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {id}
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 mx-4" />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-yellow-400 shadow-sm"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="p-3 rounded-2xl glass text-slate-700 dark:text-yellow-400"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <button
            onClick={() => setOpen(!open)}
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-2xl text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 glass border-b md:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between p-5 rounded-2xl font-black uppercase tracking-widest transition-all ${
                      active === id
                        ? "bg-blue-600 text-white"
                        : "bg-white/50 dark:bg-slate-900/50 text-slate-500"
                    }`}
                  >
                    {id}
                    <div className="w-2 h-2 rounded-full bg-current opacity-20" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}