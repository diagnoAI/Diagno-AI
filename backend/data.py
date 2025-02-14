from flask import Flask, jsonify, request
import pymongo
from pymongo import MongoClient
from flask_cors import CORS

client = MongoClient("mongodb://localhost:27017/")
db = client["diagno"]
col = db["dbs"]

# app = Flask(__name__)
# CORS(app)

try:
    col.insert_one({"password":"123456788", "email": "afreedmohamed60@gmail.com"})
# col.insert_one({"password":"1234566788", "email": "afreedmohamed620@gmail.com"})
    print("data added")
except Exception as e:
    print(e)
