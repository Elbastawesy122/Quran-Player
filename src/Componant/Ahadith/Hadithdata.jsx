import React from 'react';
import { useOutletContext } from "react-router-dom";


export default function Hadithdata() {
    const { data } = useOutletContext();

  return (
    <>
    <div className="ashi">
      <div className="data p-10 w-full">
         <h1 className=' bg-[#27a3bc] rounded-xl leading-9	 p-5 text-[white]'>{data}</h1>
      </div>
    </div>
    </>
  )
}
