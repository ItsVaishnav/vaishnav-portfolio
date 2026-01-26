import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(true);
  const [progress, setProgress] = useState(0);

  /* 🔹 Active section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* 🔹 Scroll progress */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);
      setProgress(scrolled * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔹 Dark / Light toggle */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-blue-500 z-[60]"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Brand */}
          <a
            href="#"
            className="text-xl font-extrabold text-slate-900 dark:text-white"
          >
            Vaishnav<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-slate-600 dark:text-gray-300">
            {sections.map((id) => (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  className={`capitalize transition ${
                    active === id
                      ? "text-blue-500 font-semibold"
                      : "hover:text-black dark:hover:text-white"
                  }`}
                >
                  {id}
                </a>

                {active === id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="text-xl text-slate-700 dark:text-gray-300"
            >
              {dark ? <FiSun /> : <FiMoon />}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl text-slate-700 dark:text-gray-300"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          >
            <ul className="flex flex-col gap-6 px-6 py-6">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`capitalize ${
                      active === id
                        ? "text-blue-500 font-semibold"
                        : "text-slate-700 dark:text-gray-300"
                    }`}
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
