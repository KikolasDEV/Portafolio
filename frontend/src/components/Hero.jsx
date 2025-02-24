"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import TechnologyGrid from "./TechnologyGrid"

function Hero() {
  const names = ["José Francisco", "Kiko"]
  const [displayName, setDisplayName] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentName = names[currentIndex]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === currentName.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % names.length)
      } else {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1))
      }
    }, speed)

    setDisplayName(currentName.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex])

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-dark-darker to-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.img
                src="/images/Kiko_Amarillo_CARA.jpg"
                alt="Profile"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full mx-auto mb-6 object-cover object-center shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="flex items-center justify-center mb-6 text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-lg">Jerez de la Frontera, España</span>
              </div>
              <Button variant="neon" size="lg" asChild>
                <a href="/CV_Jose_Francisco_Gonzalez_Amarillo.pdf" download>
                  Descargar CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="md:w-2/3 text-center md:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-russo mb-4">
              <span className="text-white">{displayName}</span>
              <span className="animate-blink">|</span>
              <br />
              <span className="text-primary">González Amarillo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">FullStack Developer Jr.</h2>

            <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/kikoamarillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img src="/images/logos/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://github.com/KikolasDEV"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img src="/images/tecnologias/github.svg" alt="GitHub" className="w-8 h-8" />
              </motion.a>
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                <img src="/images/logos/gmail.svg" alt="Email" className="w-8 h-8 mr-2" />
                <span className="text-gray-300">kikoamarillo94@gmail.com</span>
              </motion.div>
            </div>

            <Button variant="neon" size="lg" className="text-lg font-russo">
              Disponible para trabajar
            </Button>
          </motion.div>
        </div>

        {/* Technology Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TechnologyGrid />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

