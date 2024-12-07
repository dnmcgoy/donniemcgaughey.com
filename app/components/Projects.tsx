export default function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features such as user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"]
    },
    {
      name: "Task Management System",
      description: "Built a scalable task management system for enterprise clients. Utilized microservices architecture and implemented real-time updates using WebSockets.",
      technologies: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "Docker"]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

