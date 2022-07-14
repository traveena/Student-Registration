import sqlalchemy as s
from sqlalchemy.ext.declarative import declarative_base

engine = s.create_engine("postgresql://postgres:070899@localhost:5432/student_registration")
Base = declarative_base()


class Student(Base):
    __tablename__ = 'student'

    sid = s.Column(s.Integer, primary_key=True)
    fname = s.Column(s.String())
    lname = s.Column(s.String())
    email = s.Column(s.String())
    coursename = s.Column(s.String())
    contactno = s.Column(s.String())
    dob = s.Column(s.Date())


class Course(Base):
    __tablename__ = 'course'

    cid = s.Column(s.Integer, primary_key=True)
    coursename = s.Column(s.String())
    description = s.Column(s.String())
    duration = s.Column(s.String())
