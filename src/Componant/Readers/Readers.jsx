import React, { useEffect, useState , useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Data/FetchData';
import { fetchSurah } from '../Data/FetchSourah';
import './Readers.css';


export default function Readers() {
  const [cartitems, setCartItems] = useState([]);
  const [name, setname] = useState("");
  const [namemoshaf, setnamemoshaf] = useState([]);
  const [showList, setShowList] = useState(false);
  console.log(cartitems);
  
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  
  
  const surahList = useSelector((state) => state.surah.surahList);
  const surahStatus = useSelector((state) => state.surah.status);
  const surahError = useSelector((state) => state.surah.error);

  
  useEffect(() => {
    const readername = localStorage.getItem('readername') || "";
    const moshaf = JSON.parse(localStorage.getItem('moshaf')) || [];
    

    setname(readername);
    setCartItems(moshaf)
    
  }, []);
  
  useEffect(() => {
    if (surahStatus === 'idle') {
      dispatch(fetchSurah());
    }

    if (status === 'idle') {
      dispatch(fetchUsers());
    }

  }, [dispatch, surahStatus, status]);

  if (status === 'loading') {
    return <> <div className='loading'></div> <div className='loading sconed'></div></>;
  }

  if (status === 'failed') {
    return <div>خطأ: {error}</div>;
  }
  
  const handlenamemoshaf = (moshaname) => {
    setnamemoshaf(moshaname);
  };

  const handlename = (readername) => {
    setname(readername);
    localStorage.setItem('readername', readername);
  };

  const handlemoshaf = (moshaf) => {
    setCartItems(moshaf);
    localStorage.setItem('moshaf', JSON.stringify(moshaf));
  };

  const toggleList = () => {
    setShowList(!showList); 
  };
  
  const funclose = () => {
    setShowList(!showList); 
  }
  return (
    <div className="readers flex justify-center">
      <div className={`parent block ${showList ? 'block' : 'tall:hidden'} tall:z-10 tall:fixed tall:w-full tall:m-12 sticky top-0 w-60 text-[#74e0e7] bg-[#27a3bc] py-9 text-start px-4 h-screen`}>
        <div className="box flex justify-between flex-col h-full">
          <div className="list">
            <Link to="/">
              <h1 className='m-4 rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc]'>الرَّئِيسِيَّة</h1>
            </Link>
            <Link to="/Readers">
              <h1 className='m-4 rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc]'>قُرْآنٌ كَرِيمٌ</h1>
            </Link>
            <Link to="/Azkar">
              <h1 className='m-4 rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc]'>مُنَوَّعات</h1>
            </Link>
          </div>
          <div className="close mb-4 maxsc:hidden cursor-pointer" onClick={() => funclose()}>
            <h1 className='m-4 rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc]'>إِغْلَاق</h1>
          </div>
        </div>
        </div>
      <div className="text w-calc relative tall:static left-0 tall:w-full flex flex-col">
        <Outlet context={{ users, surahList, handlemoshaf, cartitems, handlename, name, handlenamemoshaf, namemoshaf, toggleList }} />
      </div>
    </div>
  );
}
