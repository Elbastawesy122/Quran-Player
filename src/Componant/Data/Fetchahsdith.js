import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAhadith = createAsyncThunk(
  'ahadith/fetchAhadith',
  async () => {
    const response = await fetch('https://api.hadith.gading.dev/books/muslim?range=1-150');
    const data = await response.json();
    
    return data.data.hadiths || [];
  }
);

export const ahadithSlice = createSlice({
  name: 'ahadith',
  initialState: {
    ahadithList: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAhadith.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAhadith.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ahadithList = action.payload;
      })
      .addCase(fetchAhadith.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default ahadithSlice.reducer;
