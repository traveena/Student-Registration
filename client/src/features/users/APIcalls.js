import {
    addUserStart,
    addUserFailure,
    addUserSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    getUserStart,getUserFailure,getUserSuccess,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure
} from "./userSlice"
import{
  getCourseStart,getCourseFailure,getCourseSuccess,
  addCoursesStart,addCoursesSuccess,addCoursesFailure,
  updateCoursesStart,updateCoursesSuccess,updateCoursesFailure,
  deleteCourseStart,deleteCourseSuccess,deleteCourseFailure
} from "./courseSlice"
import { publicRequest } from "../../requestMethods"


//users

//Add student
export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
    console.log("user...............")
    console.log(user) 
     const res = await publicRequest.post(`/student?`, user);
     console.log("response")
     console.log(res);
      dispatch(addUserSuccess(res.data.data));
    } catch (err) {
      dispatch(addUserFailure());
    }
  };
//update users
export const updateUser = async (id, user, dispatch) => {
  console.log("user")
  console.log(user)
  console.log("id")
  console.log(id)
  dispatch(updateUserStart());
  try {
    // update
    const res = await publicRequest.put(`/student/${id}`,user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
//get users
export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/students");
    console.log(res.data.data);
    dispatch(getUserSuccess(res.data.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

//Delete Users
export const deleteUser = async (id, dispatch) => {
  console.log("id....")
  console.log(id)
  dispatch(deleteUserStart());
  try {
     const res = await publicRequest.delete(`student?sid=${id}`);
     console.log(res)
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};


//courses

//get corses
export const getCourse = async (dispatch) => {
  dispatch(getCourseStart());
  try {
    const res = await publicRequest.get("/courses");
    console.log(res.data.data);
    dispatch(getCourseSuccess(res.data.data));
  } catch (err) {
    dispatch(getCourseFailure());
  }
};
// add courses
export const addCourses = async (course, dispatch) => {
  dispatch(addCoursesStart());
  try {
  console.log("courses...............")
  console.log(course) 
   const res = await publicRequest.post(`/course?`, course);
   console.log("response")
   console.log(res);
    dispatch(addCoursesSuccess(res.data.data));
  } catch (err) {
    dispatch(addCoursesFailure());
  }
};
//update courses
export const updateCourse = async (id, course, dispatch) => {
  console.log("course")
  console.log(course)
  dispatch(updateCoursesStart());
  try {
    // update
    const res = await publicRequest.put(`/course/${id}`,course);
    dispatch(updateCoursesSuccess({ id, course }));
  } catch (err) {
    dispatch(updateCoursesFailure());
  }
};


//Delete courses
export const deleteCourse = async (id, dispatch) => {
  console.log("id....")
  console.log(id)
  dispatch(deleteCourseStart());
  try {
     const res = await publicRequest.delete(`course?cid=${id}`);
     console.log(res)
    dispatch(deleteCourseSuccess(id));
  } catch (err) {
    dispatch(deleteCourseFailure());
  }
};