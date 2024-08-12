import { createSlice } from '@reduxjs/toolkit';

const tripDurationSlice = createSlice({
  name: 'tripDuration',
  initialState: {
    value: 1,
    error: '',
  },
  reducers: {
    setTripDuration: (state, action) => {
      state.value = action.payload;
    },
    setTripDurationError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTripDuration, setTripDurationError } = tripDurationSlice.actions;
export default tripDurationSlice.reducer;
