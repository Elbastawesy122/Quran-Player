import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchtfaseer= createAsyncThunk(
  'tfaseer/fetchtfaseer',
  async () => {
    const response = await fetch('https://www.mp3quran.net/api/v3/tafsir?tafsir=1&language=ar');
    const data = await response.json();
    
    return data.tafasir.soar || [];
  }
);

export const tfaseerSlice = createSlice({
  name: 'tfaseer',
  initialState: {
    tfaseerList: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtfaseer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchtfaseer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tfaseerList = action.payload;
      })
      .addCase(fetchtfaseer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default tfaseerSlice.reducer;
