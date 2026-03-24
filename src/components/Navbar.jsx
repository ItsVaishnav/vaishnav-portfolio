import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [progress, setProgress] = useState(0);

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
      setIsScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);

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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 z-[70]"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-2 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800" 
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* UPDATED: Brand Logo with Image */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 no-underline"
          >
            <img 
              src="/logo.png" // Ensure you save the logo as logo.png in your 'public' folder
              alt="Vaishnav Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="hidden sm:block text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
              Vaishnav
            </span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {sections.map((id) => (
              <li key={id} className="relative group">
                <a
                  href={`#${id}`}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                    active === id
                      ? "text-blue-500"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {id}
                </a>
                {active === id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ rotate: 45, scale: 0.9 }}
              onClick={() => setDark(!dark)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </motion.button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-2xl text-slate-700 dark:text-slate-200"
            >
              {open ? <FiX /> : <FiMenu />}
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
              className="absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-slate-800 shadow-xl md:hidden"
            >
              <ul className="flex flex-col p-6 gap-4">
                {sections.map((id) => (
                  <motion.li 
                    whileTap={{ scale: 0.95 }}
                    key={id}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-lg capitalize ${
                        active === id
                          ? "text-blue-500 font-bold"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {id}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}