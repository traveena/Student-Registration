import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: "1", fname: "Younus",lname:"Mowlana", email: "Younus@gmail.com",contact_no:"0771234567", age:"2001-10-09" },
//   { id: "2", fname: "Zaid",lname:"Ahamed", email: "Zaid@gmail.com",contact_no:"0411234567", age:"1999-05-22"  },
//   { id: "3", fname: "Alex",lname:"Fernando", email: "alex@gmail.com",contact_no:"0741234567", age:"2004-06-12"  },
//   { id: "4", fname: "Traveena",lname:"chandrasegar", email: "Traveena@gmail.com",contact_no:"0751234567", age:"2000-11-03"  },
// ];

const userSlice = createSlice({
  name: "user",
  initialState:{
    users: [],
    isFetching: false,
    error: false, 
  },
  reducers: {
  //Add users
  addUserStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  addUserSuccess: (state, action) => {
    state.isFetching = false;
    state.users.push(action.payload);
  },
  addUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },

  //updateUser
  updateUserStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  updateUserSuccess: (state, action) => {
    state.isFetching = false;
    state.users[
      state.users.findIndex((item) => item._id === action.payload.id)
    ] = action.payload.user;
  },
  updateUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
    //Get all users
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
//delete user
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  },
});

export const { addUserStart,addUserSuccess,addUserFailure,getUserSuccess,getUserFailure,getUserStart,  updateUserStart,updateUserSuccess,updateUserFailure, deleteUserStart,deleteUserFailure,deleteUserSuccess } = userSlice.actions;
export default userSlice.reducer;
