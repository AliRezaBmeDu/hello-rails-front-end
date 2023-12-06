import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: '', // Change this to an empty string
  status: 'idle',
};

export const createGreetings = createAsyncThunk(
  'greetings/createGreetings',
  async () => {
    try {
      const response = await axios('http://localhost:3000/api/random_greetings');
      if (!response) {
        throw new Error('Network response was not ok');
      }
      const data = response.data; // Corrected: Use response.data instead of response.greeting

      return data.greeting;
    } catch (error) {
      throw new Error('Something went wrong with fetching quote');
    }
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGreetings.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(createGreetings.fulfilled, (state, action) => ({
        ...state,
        status: 'done',
        value: action.payload,
      }))
      .addCase(createGreetings.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default greetingsSlice.reducer;