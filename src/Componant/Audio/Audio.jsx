import React from 'react';
import { useLocation , useOutletContext } from "react-router-dom";
import { BsList } from "react-icons/bs";

export default function Audio() {
  const { toggleList } = useOutletContext();
  const location = useLocation();
  const { src, surahName, makkia, readername, moshafname} = location.state || {}; 

  return (
    <>
      <h1 className='quran sticky top-0 w-full font-bold tracking-widest p-3 bg-[#27a3bc] flex justify-center tall:justify-between items-center text-2xl text-[#74e0e7]'>
        البيانات
        <BsList
         className='lists text-3xl cursor-pointer hidden tall:inline'
         onClick={toggleList} />
      </h1>
      <div className="boxs py-15 w-full tall:mr-0 absolute -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2">
        <div className="data text-[#27a3bc]">
          <div className="dataone flex flex-col gap-5 w-fit text-start mx-auto my-8">
            <h3>القارئ: {readername}</h3>
            <h3>المصحف: {moshafname}</h3>
            <h3>السورة: {surahName}</h3>
            <h3>البيان: {makkia === 1 ? 'مكية' : 'مدنية'}</h3>
          </div>
        </div>
        <audio controls autoPlay className='aud w-4/5 m-auto'>
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
}
