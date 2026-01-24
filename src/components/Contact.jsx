import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_30n56qi",
        "template_07hq93m",
        form.current,
        "LpTLTS7rcc32T6gvJ"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto px-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-slate-800 border border-slate-700 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-slate-800 border border-slate-700 text-white"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded bg-slate-800 border border-slate-700 text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
