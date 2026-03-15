import { FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#080808] border-t border-slate-100 dark:border-slate-900 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Brand/Location */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              VAISHNAV<span className="text-blue-600">.</span>
            </h2>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile" },
              { icon: <FaGithub />, link: "https://github.com/ItsVaishnav" },
              { icon: <FaTwitter />, link: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Vaishnav. Built with Passion.
          </p>
          <div className="flex gap-8 text-[11px] font-black text-slate-400 uppercase tracking-tighter">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}