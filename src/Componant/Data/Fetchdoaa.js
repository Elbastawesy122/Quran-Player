import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchdoaa= createAsyncThunk(
  'doaa/fetchdoaa',
  async () => {
    const response = await fetch('https://raw.githubusercontent.com/rn0x/Adhkar-json/main/adhkar.json');
    const data = await response.json();
    
    return data || [];
  }
);

export const doaaSlice = createSlice({
  name: 'doaa',
  initialState: {
    doaaList: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdoaa.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchdoaa.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doaaList = action.payload;
      })
      .addCase(fetchdoaa.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default doaaSlice.reducer;
