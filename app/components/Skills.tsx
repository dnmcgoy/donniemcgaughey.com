export default function Skills() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express", "GraphQL",
    "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", "CI/CD", "Agile Methodologies"
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

