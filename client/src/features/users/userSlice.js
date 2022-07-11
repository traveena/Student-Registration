import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", fname: "Younus",lname:"Mowlana", email: "Younus@gmail.com",contact_no:"0771234567", age:"2001-10-09" },
  { id: "2", fname: "Zaid",lname:"Ahamed", email: "Zaid@gmail.com",contact_no:"0411234567", age:"1999-05-22"  },
  { id: "3", fname: "Alex",lname:"Fernando", email: "alex@gmail.com",contact_no:"0741234567", age:"2004-06-12"  },
  { id: "4", fname: "Traveena",lname:"chandrasegar", email: "Traveena@gmail.com",contact_no:"0751234567", age:"2000-11-03"  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("====================================");
      console.log(action);
      console.log("====================================");
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, fname, lname, email, contact_no ,age } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.fname = fname;
        existingUser.lname = lname;
        existingUser.email = email;
        existingUser.contact_no = contact_no;
        existingUser.age = age;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
