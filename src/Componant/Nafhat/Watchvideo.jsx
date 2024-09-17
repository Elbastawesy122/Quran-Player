import React from 'react';
import { Link, useOutletContext } from "react-router-dom";


export default function Watchvideo() {
    const { videourl } = useOutletContext(); 
  return (
    <>
      <div className="watch absolute -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2 w-full">
        <video width="320" height="240" controls className='m-auto'>
            <source src={videourl} type="video/mp4"/>
        </video>
      </div>
    </>
  )
}
