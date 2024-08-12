import { configureStore } from '@reduxjs/toolkit';
import tripDurationReducer from './IP-7slice'; //path
export const store = configureStore({
  reducer: {
    tripDuration: tripDurationReducer,
  },
});