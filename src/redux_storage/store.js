import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Make a store
export const store = configureStore({
  // List of slice
  reducer: {
    users: userReducer,
  },
});
