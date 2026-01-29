import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with Next.js and Tailwind CSS, featuring glassmorphism UI and smooth animations.",
    tech: ["Next.js", "Tailwind", "React"],
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting app using API integration with clean and responsive UI.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage daily tasks with CRUD functionality and local storage.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/yourusername/task-manager"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 mb-3 text-xl">PROJECTS</p>
        <h2 className="text-3xl font-bold mb-14">Selected Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition"
              >
                <FaGithub /> View Code
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
