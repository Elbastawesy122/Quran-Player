import React from 'react'
import { Link, useOutletContext } from "react-router-dom";
import { BsList } from "react-icons/bs";

export default function Moshaf() {
  const { cartitems , handlemoshaf, handlenamemoshaf , toggleList} = useOutletContext();
  // console.log(cartitems);
  
  return (
    <div className="text w-full flex flex-col">
      <h1 className='quran sticky top-0 w-full font-bold tracking-widest p-3 bg-[#27a3bc] flex justify-center tall:justify-between items-center text-2xl text-[#74e0e7]'>
        المصحف
        <BsList
         className='lists text-3xl cursor-pointer hidden tall:inline'
         onClick={toggleList} />
        </h1>
      <div
        className="box text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15 tall:mr-0"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >

        {cartitems.map(moshaf => (
          <Link key={moshaf.id} to="/Readers/Surah" onClick={() => {
            handlenamemoshaf(moshaf.name)
            }}>
            <div className="reader m-2 rounded p-3 bg-[#27a3bc]">
              <h1>{moshaf.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
