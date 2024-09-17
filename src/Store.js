import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../src/Componant/Data/FetchData';
import surahReducer from '../src/Componant/Data/FetchSourah';
import ahadithReduser from '../src/Componant/Data/Fetchahsdith';
import tfaseerReduser from '../src/Componant/Data/Fetchtfaseer';
import doaaReduser from '../src/Componant/Data/Fetchdoaa';
import videoReduser from '../src/Componant/Data/Fetchvideo';
import nafhatReduser from '../src/Componant/Data/Fetchnafhat';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    surah: surahReducer,
    ahadith: ahadithReduser,
    tfaseer: tfaseerReduser,
    doaa: doaaReduser,
    video: videoReduser,
    nafhat: nafhatReduser,
  },
})