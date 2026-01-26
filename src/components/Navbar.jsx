import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <a
          href="#"
          className="text-xl font-extrabold tracking-wide text-white hover:text-blue-400 transition"
        >
          Vaishnav<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </a>

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-300"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-900 border-t border-slate-800"
        >
          <ul className="flex flex-col gap-6 px-6 py-6 text-gray-300">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
