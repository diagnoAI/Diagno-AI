import pymongo
from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/api/login",methods = ["POST","GET"])
def login():
    return jsonify(message = "welcome to python")

if __name__ == "__main__":
    app.run(debug=True)