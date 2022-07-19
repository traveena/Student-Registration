from flask import Flask, jsonify, request
from models import Base, engine
from db_conn import DBConn
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

# Student CRUD
@app.route('/students', methods=['GET'])
def students():
    data = db.student_view()
    return {"data": data}


@app.route('/student', methods=['POST','GET','PUT', 'DELETE'])
def student():
    if request.method == 'POST':
        db.student_insert(request.form)

    elif request.method == 'PUT':
        db.student_update(request.args)

    elif request.method == 'DELETE':
        db.student_delete(request.args)
        

    return jsonify({'data': "student success"})


# Course CRUD
@app.route('/courses', methods=['GET'])
def courses():
    data = db.course_view()
    return {"data": data}


@app.route('/course', methods=['PUT', 'POST', 'DELETE'])
def course():
    if request.method == 'POST':
        db.course_insert(request.form)

    elif request.method == 'PUT':
        db.course_update(request.args)

    elif request.method == 'DELETE':
        db.course_delete(request.args)

    return jsonify({'data': "course success"})


if __name__ == '__main__':
    Base.metadata.create_all(engine)
    db = DBConn(engine)
    app.run(debug=True)
