import { createSlice } from "@reduxjs/toolkit";

const UserLoggedStatus = createSlice({
  name: "APIDataFetch",
  initialState: {
    userState: null,
    navInitialize: true,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userState = action.payload;
    },
    setNavInit: (state, action) => {
      state.navInitialize = action.payload;
    },
  },
});

export const { setUserData, setNavInit } = UserLoggedStatus.actions;
export default UserLoggedStatus.reducer;
