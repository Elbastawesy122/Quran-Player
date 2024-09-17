import React, { useState } from 'react';
import { Link, useOutletContext } from "react-router-dom";


export default function Doaa() {
    const { doaaList, getcategory } = useOutletContext();
    const [search , setsearch] = useState("")


    const searchdoaa= doaaList.filter(
      doaa=>
        doaa.category.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <>
    <div className="tfaseer w-full">
      <input
          type="text"
          id="search-surah"  
          name="search-surah"
          placeholder="ابحث عن الدعاء او الذكر..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="p-2 m-2 border w-11/12 rounded outline-none text-[#27a3bc]"
      />
      <div
      className="map text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15  mb-16 tall:mr-0"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {searchdoaa.map(doaa => (
          <Link to='/Azkar/Doaadata' key={doaa.id} onClick={() => getcategory(doaa.category , doaa.array)}> 
            <div className="reader m-2 rounded p-3 bg-[#27a3bc]" >
              <h1> {doaa.category} </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}
