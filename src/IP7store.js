import { configureStore } from '@reduxjs/toolkit';
import stayReducer from './IP7slice';

export const IP7store = configureStore({
  reducer: {
    stay: stayReducer
  }
});
