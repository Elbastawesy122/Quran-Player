import React from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Videotype() {
  const { type, video, getvideourl } = useOutletContext();

  return (
    <>
      <div
        className="map text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15 mb-16 tall:mr-0"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {video
          .filter(filteredVideo => filteredVideo.video_type === type)   
          .map(filteredVideo => (
            <Link to='/Azkar/Watchvideo' key={filteredVideo.id} onClick={ () => getvideourl(filteredVideo.video_url)}>
              <div className="reader p-2">
                <img src={filteredVideo.video_thumb_url} alt="thumbnail" className='img rounded m-auto' />
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );
}
