import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
      const response = await fetch('https://mp3quran.net/api/v3/reciters');
      const data = await response.json();
      
      return Array.isArray(data.reciters) ? data.reciters : [];
    }
  );
  

export const usersSlice = createSlice({
  name: 'counter',
  initialState: {
    users: [],
    status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
})



export default usersSlice.reducer


// const [fetchDatas, setFetchData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://mp3quran.net/api/v3/reciters');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setFetchData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

{/* {fetchDatas && fetchDatas.reciters ? (
    fetchDatas.reciters.map(reciter => (
        <div key={reciter.id}>
        <p>{reciter.name}</p>
        {reciter.moshaf ? (
            reciter.moshaf.map(moshaf => (
            <p key={moshaf.id}>{moshaf.name}</p>
            ))
        ) : (
            <p>Moshaf loading...</p>
        )}
        </div>
    ))
    ) : (
    <p>Loading...</p>
    )} */}