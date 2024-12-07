export default function Experience() {
  const experiences = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Software Engineer",
      period: "2018 - Present",
      responsibilities: [
        "Lead a team of 5 developers in building and maintaining large-scale web applications",
        "Implemented microservices architecture, improving system scalability by 40%",
        "Mentored junior developers and conducted code reviews to ensure high-quality deliverables"
      ]
    },
    {
      company: "WebSolutions Co.",
      position: "Software Engineer",
      period: "2014 - 2018",
      responsibilities: [
        "Developed and maintained multiple client-facing web applications using React and Node.js",
        "Optimized database queries, reducing load times by 30%",
        "Collaborated with UX designers to implement responsive and accessible user interfaces"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
            <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
            <ul className="list-disc list-inside text-gray-600">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

