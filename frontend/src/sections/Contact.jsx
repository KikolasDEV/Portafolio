import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { Mail } from "lucide-react"

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Mensaje enviado correctamente")
        reset()
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.")
      console.error("Error:", error)
    }
  }

  return (
    <section id="contact" className="py-16 bg-dark-darker">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-russo text-center text-primary mb-8">Contacto</h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-300">
            Rellena este formulario o escribe a mi correo{" "}
            <span className="inline-flex items-center text-primary">
              <Mail className="w-5 h-5 mr-2" />
              kikoamarillo94@gmail.com
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                {...register("nombre", { required: true })}
                className="w-full p-3 bg-dark border border-gray-700 rounded-md text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Tu nombre"
              />
              {errors.nombre && <span className="text-red-500 text-sm">Este campo es requerido</span>}
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full p-3 bg-dark border border-gray-700 rounded-md text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.type === "required" ? "Este campo es requerido" : "Email inválido"}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Asunto</label>
            <input
              type="text"
              {...register("asunto", { required: true })}
              className="w-full p-3 bg-dark border border-gray-700 rounded-md text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="Asunto del mensaje"
            />
            {errors.asunto && <span className="text-red-500 text-sm">Este campo es requerido</span>}
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Mensaje</label>
            <textarea
              {...register("mensaje", { required: true })}
              rows={6}
              className="w-full p-3 bg-dark border border-gray-700 rounded-md text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
              placeholder="Escribe tu mensaje..."
            />
            {errors.mensaje && <span className="text-red-500 text-sm">Este campo es requerido</span>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-red-700 transition-colors font-russo text-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

