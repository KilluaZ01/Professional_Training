import { createSlice } from "@reduxjs/toolkit";

// Initial Value (What data should be loaded at first)
const initialState = {
  users: [], // List of user
};

// Creating Slice in Store
export const userSlice = createSlice({
  name: "users",
  initialState,

  // reducer: List of actions (add data to list, remove, change)
  reducers: {
    // Inserting/ Adding data into that empty array
    // state: above state (users - empty array)
    // action: we can trigger it from anywhere (Homepage)
    addUser: (state, action) => {
      // State ma user ko data fill garnu paryo
      state.users = action.payload;
    },
  },
});

// exporting the reducer (Actions) to use in other file
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
