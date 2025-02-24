import { Linkedin, Github, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-dark-darker py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {["Sobre mí", "Proyectos", "Conocimientos", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-primary transition-colors font-russo"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links and Contact */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/kikoamarillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/KikolasDEV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <div className="flex items-center text-gray-300">
                <Mail className="w-6 h-6 mr-2" />
                <span>kikoamarillo94@gmail.com</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} KikolasDEV by José Francisco González Amarillo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

