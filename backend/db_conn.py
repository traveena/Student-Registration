from models import Student, Course
from flask import request
import sqlalchemy


class DBConn:
    def __init__(self, engine):
        session_maker = sqlalchemy.orm.sessionmaker()
        session_maker.configure(bind=engine)
        self.session = session_maker()

# Student table connection
    def student_view(self):
        students = self.session.query(Student).all()
        studs = [
            {
                "sid":student.sid,
                "fname": student.fname,
                "lname": student.lname,
                "email": student.email,
                "coursename": student.coursename,
                "contactno": student.contactno,
                "dob": student.dob
            } for student in students]
        return studs

    def student_insert(self, data):
  
        new_student = Student(
            fname=request.json['fname'],
            lname=request.json['lname'],
            email=request.json['email'],
            coursename=request.json['coursename'],
            contactno=request.json['contactno'],
            dob=request.json['dob']

        )
        self.session.add(new_student)
        self.session.commit()
        return

    def student_update(self, argus, id):
            data = {
                "fname": argus['fname'],
                "lname": argus['lname'],
                "contactno": argus['contactno'],
                "email": argus['email'],
                "dob": argus['dob'],
                "coursename": argus['coursename']
            }
            self.session.query(Student).filter(Student.sid == id).update(data)
            self.session.commit()
            return

    def student_delete(self, args):
        id = args['sid']

        self.session.query(Student).filter(Student.sid == id).delete()
        self.session.commit()
        return

# Course table connection
    def course_view(self):
        courses = self.session.query(Course).all()
        cour = [
            {
                "cid":course.cid,
                "coursename": course.coursename,
                "description": course.description,
                "duration": course.duration
            } for course in courses]
        return cour

    def course_insert(self, data):

        new_course = Course(
            coursename=request.json['coursename'],
            description=request.json['description'],
            duration=request.json['duration']

        )
        self.session.add(new_course)
        self.session.commit()
        return

    def course_update(self, argus, id):
    
        data = {
            "coursename": argus['coursename'],
            "description": argus['description'],
            "duration": argus['duration']
        }

        self.session.query(Course).filter(Course.cid == id).update(data)
        self.session.commit()
        return

    def course_delete(self, args):
        id = args['cid']

        self.session.query(Course).filter(Course.cid == id).delete()
        self.session.commit()
        return
