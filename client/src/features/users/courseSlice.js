import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: "1", cname: "Management MBA",desc:"Highly acclaimed masters programmes available now in Master of Business Administration. "},
//   { id: "2", cname: "Computer Application-BCA",desc:"The BCA course is a full time three years (six semesters) Bachelor's Degree in Computer Application." },
// ]

const courseSlice = createSlice({
  name: "courses",
  initialState:{
    courses: [],
    isFetching: false,
    error: false, 
  },
  reducers: {
       //Get all users
       getCourseStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      getCourseSuccess: (state, action) => {
        state.isFetching = false;
        state.courses = action.payload;
      },
      getCourseFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
       //Add Courses
    addCoursesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCoursesSuccess: (state, action) => {
      state.isFetching = false;
      state.courses.push(action.payload);
    },
    addCoursesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Update courses
    updateCoursesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCoursesSuccess: (state, action) => {
      state.isFetching = false;
      state.courses[
        state.courses.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.course;
    },
    updateCoursesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //delete Course
    deleteCourseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.courses.splice(
        state.courses.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCourseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  },
});

export const {deleteCourseStart,deleteCourseFailure,deleteCourseSuccess, updateCoursesStart,updateCoursesSuccess,updateCoursesFailure, addCoursesStart,addCoursesSuccess,addCoursesFailure, getCourseStart,getCourseFailure,getCourseSuccess } = courseSlice.actions;
export default courseSlice.reducer;
