from flask import Flask, jsonify, request
import pymongo
from pymongo import MongoClient
from flask_cors import CORS

client = MongoClient("mongodb://localhost:27017/")
db = client["diagno"]
col = db["dbs"]

app = Flask(__name__)
CORS(app)


@app.route("/api/login/", methods=["POST", "GET"])
def login():
    data = request.json
    email = data["email"]
    password = data["password"]
    print(email, password)

    user = col.find_one({"email": email, "password": password})
    if user:
        return jsonify({"msg": "success"}), 200
    else:
        return jsonify({"msg": "invalid"}), 401

@app.route("/api/signup/", methods=["POST", "GET"])
def signup():
    data = request.json
    fullname = data["fullname"]
    password = data["password"]
    email = data["email"]
    print(fullname, password, email)

    if col.find_one({"email": email}):
        return jsonify({"msg": "Email already exists"}), 400

    col.insert_one({"fullname": fullname, "password": password, "email": email})
    return jsonify({"msg": "User created successfully"}), 201

if __name__ == "__main__":
    app.run(debug=True)