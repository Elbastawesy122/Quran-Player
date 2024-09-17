import './App.css';
import React, { createContext , useState } from 'react';
import { Home } from './Componant/Home/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Readers from './Componant/Readers/Readers';
import Reciters from './Componant/Reciters/Reciters';
import Moshaf from './Componant/Moshaf/Moshaf';
import Surah from './Componant/Surah/Surah';
import Audio from './Componant/Audio/Audio';
import Azkar from './Componant/Azkar/Azkar';
import Azkarhome from './Componant/Azkar/Azkarhome';
import Ahadith from './Componant/Ahadith/Ahadith';
import Hadithdata from './Componant/Ahadith/Hadithdata';
import Tfaseer from './Componant/Tfaseer/Tfaseer';
import Tfaseerdata from './Componant/Tfaseer/Tfaseerdata';
import Tafaseeraudio from './Componant/Tfaseer/Tafaseeraudio';
import Doaa from './Componant/Doaa/Doaa';
import Doaadata from './Componant/Doaa/Doaadata';
import Video from './Componant/Nafhat/Video';
import Nafhat from './Componant/Nafhat/Nafhat';
import Videotype from './Componant/Nafhat/Videotype';
import Watchvideo from './Componant/Nafhat/Watchvideo';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Readers"
            element={<Readers/>}
            children={<Route index element={<Reciters />} />}/>
            <Route path="/Readers" element={<Readers/>}
            children={<Route path="/Readers/Moshaf" element={<Moshaf />} />}/>
            <Route path="/Readers" element={<Readers/>}
            children={<Route path="/Readers/Surah" element={<Surah />} />}/>
            <Route path="/Readers" element={<Readers/>}
            children={<Route path="/Readers/Audio" element={<Audio/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route index element={<Azkarhome />} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Ahadith' element={<Ahadith/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Hadithdata' element={<Hadithdata/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Tfaseer' element={<Tfaseer/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Tfaseerdata' element={<Tfaseerdata/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Tafaseeraudio' element={<Tafaseeraudio/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Doaa' element={<Doaa/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Doaadata' element={<Doaadata/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Video' element={<Video/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Nafhat' element={<Nafhat/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Videotype' element={<Videotype/>} />}/>
            <Route path="/Azkar" element={<Azkar/>} 
            children={<Route path='/Azkar/Watchvideo' element={<Watchvideo/>} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
