import { createSlice } from "@reduxjs/toolkit";

const FirebaseSlice = createSlice({
  name: "FirebaseUser",
  initialState: {
    Name: "",
    PhotoUrl: "",
    UID: "",
  },

  reducers: {
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setPhotoUrl: (state, action) => {
      state.PhotoUrl = action.payload;
    },
    setUID: (state, action) => {
      state.UID = action.payload;
    },
    clearState: (state) => {
      state.Name = "";
      state.PhotoUrl = "";
    },
  },
});

export const { setName, setPhotoUrl, clearState, setUID } =
  FirebaseSlice.actions;

export default FirebaseSlice.reducer;
