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

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Context */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
                Let's Build Something <span className="text-gradient">Legendary.</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                Currently looking for high-impact <span className="text-blue-500 font-bold underline decoration-blue-500/30">Internships</span> and <span className="text-blue-500 font-bold underline decoration-blue-500/30">Full-Stack Roles</span>. 
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-6 p-8 rounded-[2rem] bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/[0.05] shadow-2xl transition-all"
            >
              <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Direct Line</p>
                <p className="text-lg font-black text-slate-900 dark:text-white">vaishnavghadge99@gmail.com</p>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <div className="w-12 h-1 bg-blue-500 rounded-full" />
              <div className="w-4 h-1 bg-blue-500/30 rounded-full" />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="p-10 md:p-14 rounded-[3.5rem] bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/[0.05] shadow-2xl relative group/form overflow-hidden"
            >
              {/* Form Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/5 blur-[80px] group-hover/form:bg-blue-600/10 transition-colors" />

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                  <div className="relative group/input">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors" size={20} />
                    <input 
                      type="text" name="name" placeholder="John Doe" required
                      className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 focus:border-blue-500 outline-none transition-all dark:text-white font-bold placeholder:font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <div className="relative group/input">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors" size={20} />
                    <input 
                      type="email" name="email" placeholder="john@example.com" required
                      className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 focus:border-blue-500 outline-none transition-all dark:text-white font-bold placeholder:font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <div className="relative group/input">
                  <MessageSquare className="absolute left-5 top-6 text-slate-400 group-focus-within/input:text-blue-500 transition-colors" size={20} />
                  <textarea 
                    name="message" rows="5" placeholder="Let's talk about..." required
                    className="w-full pl-14 pr-6 py-6 rounded-[2rem] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 focus:border-blue-500 outline-none transition-all dark:text-white font-bold resize-none placeholder:font-medium placeholder:text-slate-400"
                  ></textarea>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 text-green-500 font-black mb-8 text-sm bg-green-500/10 p-4 rounded-2xl">
                    <CheckCircle size={20} /> MISSION ACCOMPLISHED: Message delivered!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 text-red-500 font-black mb-8 text-sm bg-red-500/10 p-4 rounded-2xl">
                    <AlertCircle size={20} /> SYSTEM ERROR: Failed to transmit message.
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-[1.8rem] flex items-center justify-center gap-4 transition-all shadow-[0_15px_30px_rgba(37,99,235,0.4)] disabled:opacity-50 text-lg uppercase tracking-widest"
              >
                {status === "sending" ? "Transmitting..." : "Send Transmission"}
                <Send size={22} className={status === "sending" ? "animate-bounce" : "group-hover/form:translate-x-1 group-hover/form:-translate-y-1 transition-transform"} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}