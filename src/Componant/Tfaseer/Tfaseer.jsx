import React, { useState } from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Tfaseer() {
    const { surahList , getsuwar} = useOutletContext();
    const [search , setsearch] = useState("")


    const searchsurahList= surahList.filter(
      suwar=>
        suwar.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <>
    <div className="tfaseer w-full">
      <input
          type="text"
          id="search-surah"  
          name="search-surah"
          placeholder="ابحث عن السورة..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="p-2 m-2 border w-11/12 rounded outline-none text-[#27a3bc]"
      />
      <div
      className="map text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15  mb-16 tall:mr-0"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {searchsurahList.map(suwar => (
          <Link to='/Azkar/Tfaseerdata' key={suwar.id} onClick={() => getsuwar(suwar.id)}> 
            <div className="reader m-2 rounded p-3 bg-[#27a3bc]" >
              <h1> {suwar.name} </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}
