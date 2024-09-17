import React from 'react';
import { Link, useOutletContext } from "react-router-dom";

export default function Tfaseerdata() {
    const { tfaseer, suwar , geturl} = useOutletContext();
    

    return (
        <div
            className="map text-[#74e0e7] h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15 mb-16 tall:mr-0"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
        >
            {tfaseer
                .filter(tfaseerdata => suwar === tfaseerdata.sura_id)
                .map(tfaseerdata => (
                    <Link to='/Azkar/Tafaseeraudio' key={tfaseerdata.id} onClick={() => geturl(tfaseerdata.url , tfaseerdata.name)}>
                        <div className="reader m-2 rounded p-3 bg-[#27a3bc]">
                            <h1>{tfaseerdata.name}</h1>
                        </div>
                    </Link>
                ))}
        </div>
    );
}
