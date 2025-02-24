# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Configurar CORS para permitir peticiones desde cualquier origen (ajusta en producción)
CORS(app, resources={r"/*": {"origins": os.getenv('ALLOWED_HOSTS')}})

# Configuración de la aplicación
app.config['SECRET_KEY'] = os.getenv('BACKEND_SECRET_KEY', 'default_secret_key')

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'False') == 'True'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

@app.route("/")
def home():
    return jsonify({"message": "Bienvenido a mi API de portfolio en Flask"})

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    nombre = data.get("nombre", "Sin nombre")
    email = data.get("email", "Sin email")
    asunto = data.get("asunto", "Sin asunto")
    mensaje = data.get("mensaje", "Sin mensaje")
    
    # Construir el contenido del correo
    subject = f'Nuevo mensaje de tu portafolio -> {asunto}'
    body = f'Nombre: {nombre}\nCorreo: {email}\nAsunto: {asunto}\nMensaje: {mensaje}'

    try:
        msg = Message(subject, recipients=[os.getenv('MAIL_RECIPIENT')])
        msg.body = body
        mail.send(msg)
        return jsonify({"status": "Mensaje enviado", "data": data}), 200
    except Exception as e:
        print("Error al enviar correo:", e)
        return jsonify({"status": "Error al enviar mensaje", "error": str(e)}), 500

@app.route("/projects", methods=["GET"])
def projects():
    # Datos de ejemplo; en producción se podrían obtener de una base de datos
    proyectos = {
        "backend": [
            {
                "title": "Password Manager",
                "description": "Gestión segura de contraseñas en Python con GUI Tkinter.",
                "github": "https://github.com/KikolasDEV/PasswordManager",
                "image": "/static/images/proyectos/pwmanager.png"
            }
        ],
        "websites": [
            {
                "title": "Personal Blog",
                "description": "Blog desarrollado con Flask, RESTful Routing y SQLite.",
                "github": "https://github.com/KikolasDEV/blog-capstone-project",
                "image": "/static/images/proyectos/personalBlog.png"
            }
        ],
        "games": [
            {
                "title": "Snake Retro",
                "description": "Juego clásico Snake implementado en Python con la GUI Turtle.",
                "github": "https://github.com/KikolasDEV/snake-retro",
                "image": "/static/images/proyectos/snake.png"
            }
        ]
    }
    return jsonify(proyectos)

if __name__ == '__main__':
    app.run(debug=True)
