const skills = [
  "Java",
  "Android",
  "Spring Boot",
  "React",
  "JSP",
  "Servlets",
  "Oracle",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="py-20 bg-slate-800">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-slate-900 p-4 rounded text-center hover:scale-110 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
