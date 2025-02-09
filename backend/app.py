from flask import Flask, jsonify, request
import pymongo
from pymongo import MongoClient
from flask_cors import CORS

#client = MongoClient("connection string")
#db = client["database_name"]
#col = db["collection_name"]

app = Flask(__name__)
CORS(app)


@app.route("/api/login/", methods=["POST","GET"])
def login():
    data = request.json
    email = data["email"]
    password = data["password"]
    print(email,password)

    if email == "abdul" and password == "admin":
        return jsonify({"msg":"success"}),200
    else:
        return jsonify({"msg":"invalid"}),401

                
@app.route("/api/signup/", methods=["POST","GET"])
def signup():
    data = request.json
    fullname = data["fullname"]
    password = data["password"]
    email = data["email"]
    print(fullname,password,email)
    return jsonify({"msg":"connected"})

if __name__ == "__main__":
    app.run(debug=True)