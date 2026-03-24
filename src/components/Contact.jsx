import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

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
    <section id="contact" className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
          >
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>
          <div className="h-1.5 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Context */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Let's collaborate on your next project.
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              I am currently open to <span className="text-blue-600 font-bold">internships</span> and <span className="text-blue-600 font-bold">full-stack roles</span>. 
              If you have a project in mind, reach out!
            </p>
            
            <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Me</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">vaishnavghadge99@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" name="name" placeholder="Name" required
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" name="email" placeholder="Email" required
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="relative mb-8">
                <MessageSquare className="absolute left-4 top-5 text-slate-400" size={18} />
                <textarea 
                  name="message" rows="5" placeholder="Your Message..." required
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all dark:text-white resize-none"
                ></textarea>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-500 font-bold mb-6 text-sm">
                    <CheckCircle size={18} /> Message delivered!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-red-500 font-bold mb-6 text-sm">
                    <AlertCircle size={18} /> Error sending message.
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/20 active:scale-95 disabled:opacity-50"
              >
                {status === "sending" ? "Processing..." : "Send Message"}
                <Send size={18} className={status === "sending" ? "animate-pulse" : ""} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}