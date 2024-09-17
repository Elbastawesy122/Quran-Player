import React, { useState } from 'react';
import { Link, useOutletContext } from "react-router-dom";
import { BsList } from "react-icons/bs";


export default function Reciters() {
  const { users, handlemoshaf , handlename , toggleList} = useOutletContext();
  const [search , setsearch] = useState("")

  if (!users || users.length === 0) {
    return <div>لا توجد قراء متاحة</div>;
  }
  

  const searchuser = users.filter(
    reciter=>
    reciter.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h1 className='quran sticky top-0 w-full font-bold tracking-widest p-3 bg-[#27a3bc] flex justify-center tall:justify-between items-center text-2xl text-[#74e0e7]'>
        القراء
        <BsList
         className='lists text-3xl cursor-pointer hidden tall:inline'
         onClick={toggleList} />
      </h1>
      <input
          type="text"
          placeholder="ابحث عن القارئ..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="p-2 m-2 border border-gray-300 rounded outline-none text-[#27a3bc]"
      />
      <div
        className="box text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15 tall:mr-0"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {searchuser.map(reciter => (
          <Link 
            key={reciter.id} 
            to="/Readers/Moshaf"
            onClick={() =>{
               handlemoshaf(reciter.moshaf);
               handlename(reciter.name);
             }}
          >
            <div className="reader m-2 rounded p-3 bg-[#27a3bc]">
              <h1>{reciter.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
