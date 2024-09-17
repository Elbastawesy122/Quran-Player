import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from "react-router-dom";
import { BsList } from "react-icons/bs";

export default function Surah() {
  const { surahList, cartitems , name , namemoshaf , toggleList} = useOutletContext();
  
  const [list, setList] = useState([]);
  const [servers, setServers] = useState([]);
  const [search , setsearch] = useState("")


  useEffect(() => {
    if (cartitems && cartitems.length > 0) {
      const suwarList = cartitems.flatMap(item => item.surah_list.split(','));
      const serverList = cartitems.map(item => item.server);
      setList(suwarList);
      setServers(serverList);
    }
  }, [cartitems]);

  const searchsurahList= surahList.filter(
    suwar=>
      suwar.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="text w-full flex flex-col">
      <h1 className='quran sticky top-0 w-full font-bold tracking-widest p-3 bg-[#27a3bc] flex justify-center tall:justify-between items-center text-2xl text-[#74e0e7]'>
        السور
        <BsList
         className='lists text-3xl cursor-pointer hidden tall:inline'
         onClick={toggleList} />
      </h1>
      <input
          type="text"
          placeholder="ابحث عن السورة..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="p-2 m-2 border border-gray-300 rounded outline-none text-[#27a3bc]"
      />
      <div
        className="box text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15   tall:mr-0"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {searchsurahList.map( suwar => (
          list.includes(suwar.id.toString()) && (
            <Link 
            key={suwar.id}
            to="/Readers/Audio"
            state={{ 
              src: `${servers[0]}${suwar.id.toString().padStart(3, '0')}.mp3`,
              surahName: suwar.name,
              makkia: suwar.makkia,
              readername: name,
              moshafname: namemoshaf
            }}
          >
            <div className="reader m-2 rounded p-3 bg-[#27a3bc]">
              {suwar.name}
            </div>
          </Link>          
          )
        ))}
      </div>
    </div>
  );
}
