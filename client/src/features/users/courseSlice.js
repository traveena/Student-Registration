import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", cname: "Management MBA",desc:"Highly acclaimed masters programmes available now in Master of Business Administration. "},
  { id: "2", cname: "Computer Application-BCA",desc:"The BCA course is a full time three years (six semesters) Bachelor's Degree in Computer Application." },
]

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    add_Course: (state, action) => {
      console.log("====================================");
      console.log(action);
      console.log("====================================");
      state.push(action.payload);
    },
    updateCourse: (state, action) => {
      const { id, cname, desc } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (existingCourse) {
        existingCourse.cname = cname;
        existingCourse.desc = desc;
      }
    },
    deleteCourse: (state, action) => {
      const { id } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (existingCourse) {
        return state.filter((course) => course.id !== id);
      }
    },
  },
});

export const { add_Course, updateCourse, deleteCourse } = courseSlice.actions;
export default courseSlice.reducer;
