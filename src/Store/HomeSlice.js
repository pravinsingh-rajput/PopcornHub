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
    getgeneres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { APIConfiguartion, getgeneres } = homeSlice.actions;

export default homeSlice.reducer;
