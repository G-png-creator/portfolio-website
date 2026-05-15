from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Project Table
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(300))

# Home Page
@app.route('/')
def home():

    # Get all projects from database
    projects = Project.query.all()

    return render_template('index.html', projects=projects)

if __name__ == '__main__':

    # Create database tables
    with app.app_context():
        db.create_all()

    app.run(debug=True)