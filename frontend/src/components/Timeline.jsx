function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-primary font-bold mb-16">Conocimientos</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

          {/* Experience */}
          <div className="mb-16 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-primary mb-2">Experiencia 🪙</h3>
                  <h4 className="text-lg font-semibold text-gray-200">Software Developer - Abaco Developments</h4>
                  <p className="text-gray-400 mb-4">Abril 2024 - Junio 2024</p>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Desarrollo de aplicaciones utilizando Python y FlySpeed SQL</li>
                    <li>Optimización de bases de datos y análisis de datos</li>
                    <li>Desarrollo de soluciones para mejorar la organización</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:ml-auto md:pl-8 mb-8 md:mb-0">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-primary mb-2">Certificaciones 📜</h3>
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <img src="/images/tecnologias/udemy.svg" alt="Udemy" className="w-8 h-8 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-200">
                        Python and Django FullStack Developer Bootcamp
                      </h4>
                    </div>
                    <p className="text-gray-400">Jose Portilla | Octubre 2024 - Noviembre 2024</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <img src="/images/tecnologias/udemy.svg" alt="Udemy" className="w-8 h-8 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-200">The Complete Python Pro Bootcamp</h4>
                    </div>
                    <p className="text-gray-400">Angela Yu | Junio 2024 - Septiembre 2024</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-primary mb-2">Formación 📚</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-200">
                      C.F.G.S. Desarrollo de Aplicaciones Multiplataforma
                    </h4>
                    <p className="text-gray-400">IES Vista Alegre | Septiembre 2022 - Junio 2024</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Grado en Arte Dramático</h4>
                    <p className="text-gray-400">E.S.A.D. de Sevilla | Septiembre 2015 - Junio 2019</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Learning */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:ml-auto md:pl-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-primary mb-4">Aprendiendo 💡</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <img
                      src="/images/tecnologias/csharp.svg"
                      alt="C#"
                      className="w-16 h-16 hover:scale-110 transition-transform"
                    />
                    <img
                      src="/images/tecnologias/fastapi.svg"
                      alt="FastAPI"
                      className="w-16 h-16 hover:scale-110 transition-transform"
                    />
                    <img
                      src="/images/tecnologias/svelte.svg"
                      alt="Svelte"
                      className="w-16 h-16 hover:scale-110 transition-transform"
                    />
                    <img
                      src="/images/tecnologias/aws.svg"
                      alt="AWS"
                      className="w-16 h-16 hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

