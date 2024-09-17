import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSurah = createAsyncThunk(
  'surah/fetchSurah',
  async () => {
    const response = await fetch('https://mp3quran.net/api/v3/suwar');
    const data = await response.json();
    
    
    return Array.isArray(data.suwar) ? data.suwar : [];
  }
);

export const surahSlice = createSlice({
  name: 'surah',
  initialState: {
    surahList: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurah.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSurah.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.surahList = action.payload;
      })
      .addCase(fetchSurah.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default surahSlice.reducer;
