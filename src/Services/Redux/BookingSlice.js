import { createSlice } from "@reduxjs/toolkit";

const BookingSection = createSlice({
  name: "Booking Handler",
  initialState: {
    movieDetails: [],
  },
  reducers: {
    selectedMovie: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export default BookingSection.reducer;
export const { selectedMovie } = BookingSection.actions;
