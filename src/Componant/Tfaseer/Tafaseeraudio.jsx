import React from 'react';
import { useOutletContext } from "react-router-dom";


export default function Tafaseeraudio() {
    const { url  , name} = useOutletContext();

  return (
    <>
      <div className="audi0o absolute -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2 w-full">
          <h1 className='my-10 text-xl italic font-bold text-[#27a3bc]'>{name}</h1>
          <audio controls autoPlay className='aud w-4/5 m-auto'>
              <source src={url} type="audio/mpeg" />
          </audio>
      </div>
    </>
  )
}
