import os
from flask import Flask
from flask_migrate import Migrate
from dotenv import load_dotenv

from api.models import db
from api.routes import api

load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes = False

database_url = os.getenv("DATABASE_URL", "sqlite:///database.db")

if database_url.startswith("postgres://"):
    database_url = database_url.replace("postgres://", "postgresql://", 1)

app.config["SQLALCHEMY_DATABASE_URI"] = database_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
Migrate(app, db)

app.register_blueprint(api, url_prefix="/api")


@app.route("/")
def home():
    return "Backend Flask funcionando correctamente"


if __name__ == "__main__":
    port = int(os.getenv("PORT", 3001))
    app.run(host="0.0.0.0", port=port, debug=True)
