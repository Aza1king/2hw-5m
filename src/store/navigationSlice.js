// src/store/navigationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: "",
  previousComponent: "",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.previousComponent = state.path;
      state.path = action.payload;
    },
  },
});

export const { setPath } = navigationSlice.actions;

export const selectPath = (state) => state.navigation.path;
export const selectPreviousComponent = (state) =>
  state.navigation.previousComponent;

export default navigationSlice.reducer;
