import pymongo
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/login", methods=["POST","GET"])
def login():
    return jsonify({"name":"abdul"})
    # data = request.get_json()
    # email = data.get("email")
    # password = data.get("pass")

    # user = users_collection.find_one({"email": email, "password": password})
    # if user:
    #     return jsonify(message="Welcome to Python", status="success"), 200
    # else:
    #     return jsonify(message="Invalid credentials", status="failure"), 401

if __name__ == "__main__":
    app.run(debug=True)