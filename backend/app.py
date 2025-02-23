from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# Configura CORS para permitir peticiones del frontend (ajusta el origin según necesites)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SECRET_KEY'] = os.getenv('BACKEND_SECRET_KEY', 'default_secret_key')

@app.route("/")
def home():
    return jsonify({"message": "Bienvenido a mi API de portfolio en Flask"})

@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    # Aquí procesarías el envío del correo, validaciones, etc.
    return jsonify({"status": "Mensaje recibido", "data": data}), 200

if __name__ == '__main__':
    app.run(debug=True)
