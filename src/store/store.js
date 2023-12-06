import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetingsSlice.js';

const store = configureStore({
  reducer: {
    greetings: greetingsSlice,
  },
});

export default store;