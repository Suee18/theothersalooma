// src/features/IP7slice.js
import { createSlice } from '@reduxjs/toolkit';

export const IP7slice = createSlice({
  name: 'stay',
  initialState: {
    lengthOfStay: 1
  },
  reducers: {
    setLengthOfStay: (state, action) => {
      state.lengthOfStay = action.payload;
    }
  }
});

export const { setLengthOfStay } = IP7slice.actions;

export const selectLengthOfStay = (state) => state.stay.lengthOfStay;

export default IP7slice.reducer;
