from app import app, db, Project

with app.app_context():

    # Project 1
    project1 = Project(
        title="LPG Gas Leakage Detection",
        description="Arduino based gas leakage alert system using MQ6 sensor."
    )

    # Project 2
    project2 = Project(
        title="Restaurant Management System",
        description="Python Tkinter application for restaurant billing and management."
    )

    # Save to database
    db.session.add(project1)
    db.session.add(project2)

    db.session.commit()

    print("Projects Added Successfully!")