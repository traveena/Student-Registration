import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/users/courseSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    courses: courseReducer
  },
});
