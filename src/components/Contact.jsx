import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, MapPin } from "lucide-react";

const InteractiveMascot = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-12 -right-12 w-24 h-24 z-20 pointer-events-none drop-shadow-2xl"
    >
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="28" fill="#3b82f6" />
        <circle cx="22" cy="28" r="4" fill="white" />
        <circle cx="42" cy="28" r="4" fill="white" />
        <circle cx="22" cy="28" r="2" fill="#0f172a" />
        <circle cx="42" cy="28" r="2" fill="#0f172a" />
        <path d="M22 42 Q32 48 42 42" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_30n56qi",
        "template_07hq93m",
        form.current,
        "LpTLTS7rcc32T6gvJ"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Connection
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter text-center"
          >
            Let's <span className="text-gradient">Collaborate</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                Have a vision? <br />
                <span className="text-blue-600 italic">I can build it.</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
                I specialize in high-performance Full Stack development. Whether it's a mobile app or a complex web system, I'm ready to ship it.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Email Me", value: "vaishnavghadge99@gmail.com", icon: <Mail size={20} /> },
                { label: "Location", value: "Pune, MH, INDIA", icon: <MapPin size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 glass border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl">
                  <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-600/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 relative"
          >
            <InteractiveMascot />

            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="p-10 md:p-14 glass dark:bg-slate-900/40 border-2 border-slate-200/50 dark:border-slate-800/50 rounded-[3.5rem] shadow-2xl relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input 
                    type="text" name="name" placeholder="Full Name" required
                    className="w-full pl-16 pr-8 py-5 rounded-2xl bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none transition-all dark:text-white font-bold"
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input 
                    type="email" name="email" placeholder="Email Address" required
                    className="w-full pl-16 pr-8 py-5 rounded-2xl bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none transition-all dark:text-white font-bold"
                  />
                </div>
              </div>

              <div className="relative group mb-10">
                <MessageSquare className="absolute left-6 top-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <textarea 
                  name="message" rows="5" placeholder="Tell me about your project..." required
                  className="w-full pl-16 pr-8 py-6 rounded-2xl bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 focus:border-blue-500 outline-none transition-all dark:text-white font-bold resize-none"
                ></textarea>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 text-green-500 font-black text-xs uppercase tracking-widest rounded-2xl mb-8">
                    <CheckCircle size={18} /> Message transmitted successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-500 font-black text-xs uppercase tracking-widest rounded-2xl mb-8">
                    <AlertCircle size={18} /> Transmission failed. Retry?
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] disabled:opacity-50"
              >
                {status === "sending" ? "Encrypting..." : "Send Pulse"}
                <Send size={20} className={status === "sending" ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}