import React from 'react';
import logo from '../../image/eslamyat.png';
import { MdOutlineNotStarted } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { Link } from "react-router-dom";


export const Home = () => {


  return (
    <>
      <div className="home top-2/4 left-2/4 absolute -translate-y-2/4 -translate-x-2/4 w-11/12">
        <img src={logo} alt="" className='image m-auto w-52' />
        <h1 className='quran font-bold tracking-widest m-4 text-2xl text-[#0f1743]'>ٱسْلَامِيَّات</h1>
        <p className='my-5'>  إنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلى النَّبِيِّ يَا أَيُّهَاالَّذِينَ آَمَنُوا صَلُّوا عَلَيْهِ وسَلِّمُوا تَسْليمًا </p>
        <div className="click flex justify-center items-center">
          <Link to="/Readers">
            <div className="audio text-[#74e0e7] bg-[#27a3bc] h-9 cursor-pointer py-1 px-2 tracking-widest flex justify-between items-center w-36 mx-4 rounded">
              <h3 >قُرْآنٌ كَرِيمٌ</h3>
              <MdOutlineNotStarted  className='text-xl'/> 
            </div>
          </Link >
          <Link to="/Azkar">
            <div className="fav text-[#74e0e7] bg-[#27a3bc] h-9 cursor-pointer py-1 px-2 tracking-widest flex justify-between items-center w-36 mx-4 rounded">
              <h3 >مُنَوَّعات</h3>
              <IoBook className='text-xl'/>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
