from flask import Flask, jsonify, render_template
import pandas as pd
import numpy as np
import os

import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, Date
import json


#Connecting to sqlite database




app = Flask(__name__)



@app.route("/")
def index():
    return render_template('chart.html')

@app.route('/data.json')
def showjson():
    with open('data.json') as f:
        data = json.load(f)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
