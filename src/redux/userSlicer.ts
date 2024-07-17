import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: localStorage.getItem("userName") || '',
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  userID: localStorage.getItem("userID") ? Number(localStorage.getItem("userID")) : null,
};

const userSlicer = createSlice({
  name: "userSlicer",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userID = action.payload.userID;
    }
  }
});

export const { setUser } = userSlicer.actions;
export default userSlicer.reducer;
