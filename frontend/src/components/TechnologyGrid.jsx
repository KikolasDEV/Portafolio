"use client"
import { motion } from "framer-motion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

const technologies = [
  { name: "Python", icon: "/images/tecnologias/python.svg", description: "Lenguaje principal de desarrollo" },
  { name: "Django", icon: "/images/tecnologias/django.svg", description: "Framework web de Python" },
  { name: "Flask", icon: "/images/tecnologias/flask.svg", description: "Microframework web de Python" },
  { name: "HTML5", icon: "/images/tecnologias/html.svg", description: "Estructura web" },
  { name: "CSS3", icon: "/images/tecnologias/css.svg", description: "Estilos web" },
  { name: "JavaScript", icon: "/images/tecnologias/javascript.svg", description: "Programación frontend" },
  { name: "MySQL", icon: "/images/tecnologias/mysql.svg", description: "Base de datos relacional" },
  { name: "PostgreSQL", icon: "/images/tecnologias/postgresql.svg", description: "Base de datos relacional" },
  { name: "SQLite", icon: "/images/tecnologias/sqlite.svg", description: "Base de datos ligera" },
  { name: "Git", icon: "/images/tecnologias/git.svg", description: "Control de versiones" },
  { name: "GitHub", icon: "/images/tecnologias/github.svg", description: "Plataforma de desarrollo colaborativo" },
  { name: "Bootstrap", icon: "/images/tecnologias/bootstrap.svg", description: "Framework CSS" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function TechnologyGrid() {
  return (
    <motion.div className="flex flex-wrap justify-center gap-8" variants={container} initial="hidden" animate="show">
      {technologies.map((tech) => (
        <HoverCard key={tech.name}>
          <HoverCardTrigger asChild>
            <motion.div
              className="cursor-pointer"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-10 h-10 object-contain" />
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">{tech.name}</h4>
              <p className="text-sm text-gray-500">{tech.description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </motion.div>
  )
}

export default TechnologyGrid

