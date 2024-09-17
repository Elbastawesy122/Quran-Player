import React from 'react';
import { useOutletContext } from "react-router-dom";



export default function Doaadata() {
    const { category  , array} = useOutletContext();


  return (
    <>
        <div className="category p-10 ">
            <h1 className='mb-10 text-xl italic font-bold text-[#27a3bc]'>{category}</h1>
            {array.map(data => (
                 <div className="text flex justify-center items-center" key={data.id}>
                    <h1 className='mb-10 text-xl italic leading-9  text-[#27a3bc]'>{data.text}</h1>
                 </div>
            ))}
        </div>
    </>
  )
}
