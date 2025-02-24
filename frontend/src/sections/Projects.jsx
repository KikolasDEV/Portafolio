import { Github } from "lucide-react"

function Projects() {
  const projects = [
    {
      title: "Password Manager",
      description:
        "Aplicación de gestión de contraseñas desarrollada en Python junto con su GUI Tkinter. Permite almacenar y gestionar de forma segura múltiples contraseñas en un archivo JSON, ofreciendo una interfaz intuitiva para el usuario.",
      image: "/images/proyectos/pwmanager.png",
      github: "https://github.com/KikolasDEV/PasswordManager",
      technologies: [{ name: "Python", icon: "/images/tecnologias/python.svg" }],
    },
    {
      title: "Personal Blog",
      description:
        "Desarrollo de un testing-blog usando Python, Flask y RESTful Routing. Incluye una gestión de bases de datos gracias a la implementación de autenticación, publicación, edición y borrado de entradas (añadiendo permisos específicos de admin y usuarios).",
      image: "/images/proyectos/personalBlog.png",
      github: "https://github.com/KikolasDEV/blog-capstone-project",
      technologies: [
        { name: "Python", icon: "/images/tecnologias/python.svg" },
        { name: "Flask", icon: "/images/tecnologias/flask.svg" },
        { name: "SQLite", icon: "/images/tecnologias/sqlite.svg" },
      ],
    },
    {
      title: "Snake Retro",
      description:
        "El clásico juego retro Snake utilizando Python con la GUI Turtle e implementado mediante OOP. Además cuenta con un archivo y una pequeña BBDD indicándote tu máxima puntuación.",
      image: "/images/proyectos/snake.png",
      github: "https://github.com/KikolasDEV/snake-retro",
      technologies: [{ name: "Python", icon: "/images/tecnologias/python.svg" }],
    },
  ]

  return (
    <section id="projects" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-russo text-center text-primary mb-16">Proyectos Principales</h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
            >
              {/* Project Image */}
              <div className="md:w-1/2 group">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-russo text-primary">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-8 h-8 object-contain hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-transparent text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300 font-russo"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

