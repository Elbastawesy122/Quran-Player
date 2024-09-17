import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Azkarhome() {
    const [calc, setCalc] = useState(0);

  const evencalc = () => {
    setCalc(prevCalc => prevCalc + 1);
  }
   const calczero = () => {
    setCalc(0);
   }

  return (
    <div className="azkar p-4 absolute -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2 w-full">
      <div className="toop flex justify-around">
        <Link to='/Azkar/Doaa'>
          <div className="counter w-32 h-32 rounded-bl-3xl bg-[#10aee2] flex items-center justify-center">
            <h1 className='text-3xl italic text-[white]'>ادعيه واذكار </h1>
          </div>
        </Link>
        <Link to='/Azkar/Tfaseer'>
          <div className="counter w-32 h-32 rounded-br-3xl bg-[#6768ced4] flex items-center justify-center">
            <h1 className='text-3xl italic text-[white]'>تفسير الطبري</h1>
          </div>
        </Link>
      </div>
      <div className="center flex justify-center my-8 relative mx-auto w-fit">
        <div className="counter w-40 h-40 rounded-full bg-[#27a3bc] flex items-center justify-center cursor-pointer" onClick={evencalc}>
          <h1 className='text-3xl italic text-[white]'>{calc}</h1>
        </div>
        <div className="zero absolute -bottom-4 -right-9 w-11 h-11 rounded-full bg-[#27a3bc] flex items-center justify-center cursor-pointer" onClick={calczero}>
          <h1 className='text-sm italic text-[white]'>zero</h1>
        </div>
      </div>
      <div className="bootom flex justify-around">
        <Link to='/Azkar/Ahadith'>
            <div className="counter w-32 h-32 rounded-tl-3xl bg-[#6768ced4] flex items-center justify-center cursor-pointer">
              <h1 className='text-3xl italic text-[white]'>احاديث</h1>
            </div>
        </Link>
        <Link to='/Azkar/Nafhat'>
          <div className="counter w-32 h-32 rounded-tr-3xl bg-[#10aee2] flex items-center justify-center">
            <h1 className='text-3xl italic text-[white]'>نفحات</h1>
          </div>
        </Link>
      </div>
     </div>
  )
}
