import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchvideo= createAsyncThunk(
  'video/fetchvideo',
  async () => {
    const response = await fetch('https://mp3quran.net/api/v3/video_types');
    const data = await response.json();
    
    return data.video_types || [];
  }
);

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoList: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchvideo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchvideo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videoList = action.payload;
      })
      .addCase(fetchvideo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default videoSlice.reducer;
