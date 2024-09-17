import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Video() {
  const { videoList, video, gettype } = useOutletContext(); 
  const [videoTypes, setVideoTypes] = useState([]);

  useEffect(() => {
    if (Array.isArray(video)) {
      // تأكد من أن video هي مصفوفة وصحيحة
      const types = video.map(v => v.video_type);
      setVideoTypes(types);
    } else {
      setVideoTypes([]); // تعيين قيمة افتراضية إذا لم تكن video مصفوفة
    }
  }, [video]);

  return (
    <>
      <div
        className="map text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15 mb-16 tall:mr-0"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
      >
        {Array.isArray(videoList) && videoList.map(filteredVideo => (
          videoTypes.includes(filteredVideo.id) && (
            <Link to='/Azkar/Videotype' key={filteredVideo.id} onClick={() => gettype(filteredVideo.id)}>
              <div className="reader m-2 rounded p-3 bg-[#27a3bc]">
                <h1>{filteredVideo.video_type}</h1>
              </div>
            </Link>
          )
        ))}
      </div>
    </>
  );
}
