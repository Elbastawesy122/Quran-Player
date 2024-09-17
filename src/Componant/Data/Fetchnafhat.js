import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchnafhat= createAsyncThunk(
  'nafhat/fetchnafhat',
  async () => {
    const response = await fetch('https://mp3quran.net/api/v3/videos');
    const data = await response.json();
    
    return data.videos || [];
  }
);

export const nafhatSlice = createSlice({
  name: 'nafhat',
  initialState: {
    nafhatList: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchnafhat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchnafhat.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nafhatList = action.payload;
      })
      .addCase(fetchnafhat.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default nafhatSlice.reducer;
