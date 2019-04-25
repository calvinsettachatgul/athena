from flask import Flask, render_template
from flask import jsonify
from data import users

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/users')
def get_all_users():
  return render_template('index.html', users=users)

@app.route('/users/<int:user_id>')
def profile(user_id):
  user = users[user_id]
  return render_template('user_show.html', user=user)

if __name__ == '__main__':
  app.run(debug=True,host='0.0.0.0')
