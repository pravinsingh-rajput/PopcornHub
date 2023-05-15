import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    APIConfiguartion: (state, action) => {
      state.url = action.payload;
    },
    getgenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { APIConfiguartion, getgenres } = homeSlice.actions;

export default homeSlice.reducer;
