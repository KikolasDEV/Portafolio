function About() {
  return (
    <section id="about" className="py-16 bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/images/Kiko_Sobre_Mi.jpg"
              alt="About Me"
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Sobre mí</h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p>
                ¡Muy buenas! Soy un desarrollador de software con experiencia en{" "}
                <strong className="text-primary">Python</strong> y frameworks como{" "}
                <strong className="text-primary">Django</strong> y <strong className="text-primary">Flask</strong>, en
                proceso de aprendizaje de <strong className="text-primary">FastAPI</strong>. Aunque mi intención inicial
                era especializarme en backend, poco a poco me he enamorado del frontend, aspirando a ser{" "}
                <strong className="text-primary">FullStack</strong>.
              </p>
              <p>
                Mi enfoque actual es mejorar continuamente, programando proyectos y enfrentando nuevos retos para
                consolidar mis conocimientos y aportar valor en cada equipo.
              </p>
              <p>
                Estoy motivado por la innovación y la búsqueda de soluciones creativas, y espero poder demostrar mis
                habilidades en nuestro primer encuentro.
              </p>
            </div>
          </div>
        </div>

        <blockquote className="text-center text-xl italic mt-16 text-gray-400">
          "Somos individuos únicos y auténticos que nos conformamos con respuestas programadas. Bastaría con alterar los
          parámetros."
        </blockquote>
      </div>
    </section>
  )
}

export default About

