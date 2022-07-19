import json
from flask import Flask, jsonify, request
from models import Base, engine
from db_conn import DBConn
from  flask_cors import CORS



app = Flask(__name__)
CORS(app)

# Student CRUD
@app.route('/students', methods=['GET'])
def students():
    data = db.student_view()
    return {"data": data}


@app.route('/student', methods=['POST', 'DELETE'])
def student():
    if request.method == 'POST':
        db.student_insert(request.form)

    elif request.method == 'DELETE':
        db.student_delete(request.args)

    return jsonify({'data': "student success"})

@app.route('/student/<sid>', methods=['PUT'])
def stu(sid):
    db.student_update(request.json, sid)

    # elif request.method == 'DELETE':
    #     db.student_delete(sid)

    return jsonify({'data': "student success"})


# Course CRUD
@app.route('/courses', methods=['GET'])
def courses():
    data = db.course_view()
    return {"data": data}


# @app.route('/course', methods=['PUT', 'POST', 'DELETE'])
# def course():
#     if request.method == 'POST':
#         db.course_insert(request.form)

#     elif request.method == 'PUT':
#         db.course_update(request.args)

#     elif request.method == 'DELETE':
#         db.course_delete(request.args)

#     return jsonify({'data': "course success"})

@app.route('/course', methods=['POST', 'DELETE'])
def course():
    if request.method == 'POST':
        db.course_insert(request.form)

    elif request.method == 'DELETE':
        db.course_delete(request.args)

    return jsonify({'data': "course success"})


@app.route('/course/<cid>', methods=['PUT'])
def cours(cid):
    db.course_update(request.json, cid)

    # elif request.method == 'DELETE':
    #     db.course_delete(cid)

    return jsonify({'data': "course success"})

if __name__ == '__main__':
    Base.metadata.create_all(engine)
    db = DBConn(engine)
    app.run(debug=True)
