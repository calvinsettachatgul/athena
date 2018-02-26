# imports statements to create the db connection and define Flask app

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# from model import Todo

# config config for the SQLAlchemy connection URI is contained within config.py
app = Flask(__name__)
app.config.from_pyfile('config.py')

# instantiate a db connection with app 
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)
