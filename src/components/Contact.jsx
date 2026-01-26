import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Have a project, internship opportunity, or just want to connect?
          Feel free to drop a message — I’ll get back to you.
        </motion.p>

        {/* Form Card */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white/80 dark:bg-slate-900/80
                     backdrop-blur rounded-3xl p-8 shadow-xl
                     border border-slate-200 dark:border-slate-800
                     flex flex-col gap-5"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl
                         bg-slate-100 dark:bg-slate-800
                         border border-slate-300 dark:border-slate-700
                         text-slate-900 dark:text-white
                         placeholder-slate-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl
                         bg-slate-100 dark:bg-slate-800
                         border border-slate-300 dark:border-slate-700
                         text-slate-900 dark:text-white
                         placeholder-slate-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-slate-400" size={18} />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl
                         bg-slate-100 dark:bg-slate-800
                         border border-slate-300 dark:border-slate-700
                         text-slate-900 dark:text-white
                         placeholder-slate-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400 text-sm">
              ✅ Message sent successfully. I’ll get back to you soon!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 dark:text-red-400 text-sm">
              ❌ Failed to send message. Please try again later.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center gap-2
                       px-6 py-3 rounded-xl bg-blue-600 text-white
                       hover:bg-blue-700 transition
                       shadow-lg shadow-blue-600/30
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
