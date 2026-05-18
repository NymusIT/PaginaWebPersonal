from flask import Blueprint, jsonify
from flask_cors import CORS
from api.models import User

api = Blueprint("api", __name__)
CORS(api)


@api.route("/hello", methods=["GET"])
def hello():
    return jsonify({
        "message": "Hola desde Flask. Backend funcionando correctamente."
    }), 200


@api.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200