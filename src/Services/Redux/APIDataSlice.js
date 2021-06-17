import { createSlice } from "@reduxjs/toolkit";

const APIDataSlice = createSlice({
  name: "APIDataFetch",
  initialState: {
    apiData: [],
  },
  reducers: {
    setAPIData: (state, action) => {
      state.apiData = action.payload;
    },
  },
});

export const { setAPIData } = APIDataSlice.actions;
export default APIDataSlice.reducer;
