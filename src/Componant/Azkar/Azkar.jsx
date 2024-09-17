import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAhadith } from '../Data/Fetchahsdith';
import { fetchtfaseer } from '../Data/Fetchtfaseer';
import { fetchSurah } from '../Data/FetchSourah';
import { fetchdoaa } from '../Data/Fetchdoaa';
import { fetchvideo } from '../Data/Fetchvideo';
import { fetchnafhat } from '../Data/Fetchnafhat';

export default function Azkar() {
  const [data, setdata] = useState("");
  const [suwar, setsuwar] = useState("");
  const [url, seturl] = useState("");
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [array, setarray] = useState([]);
  const [video, setvideo] = useState([]);
  const [type, settype] = useState("");
  const [videourl, setvideourl] = useState("");
  

  const dispatch = useDispatch();
  const ahadith = useSelector((state) => state.ahadith.ahadithList);
  const ahadithstatus = useSelector((state) => state.ahadith.status);
  const error = useSelector((state) => state.ahadith.error);

  const tfaseer = useSelector((state) => state.tfaseer.tfaseerList);
  const tfaseerstatus = useSelector((state) => state.tfaseer.status);
  const tfaseererror = useSelector((state) => state.tfaseer.error);

  const surahList = useSelector((state) => state.surah.surahList);
  const surahStatus = useSelector((state) => state.surah.status);
  const surahError = useSelector((state) => state.surah.error);

  const doaaList = useSelector((state) => state.doaa.doaaList);
  const doaaStatus = useSelector((state) => state.doaa.status);
  const doaaError = useSelector((state) => state.doaa.error);

  const videoList = useSelector((state) => state.video.videoList);
  const videoStatus = useSelector((state) => state.video.status);
  const videoError = useSelector((state) => state.video.error);

  const nafhatList = useSelector((state) => state.nafhat.nafhatList);
  const nafhatStatus = useSelector((state) => state.nafhat.status);
  const nafhatError = useSelector((state) => state.nafhat.error);

  useEffect(() => {
    const suwars = JSON.parse(localStorage.getItem('suwars')) || "";
    const urls = JSON.parse(localStorage.getItem('urls')) || { url: "", name: "" };
    const category = JSON.parse(localStorage.getItem('category')) || { category: "", array: [] };
    const arab = localStorage.getItem('arab') || "";
    const type = localStorage.getItem('type') || "";
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const videourl = localStorage.getItem('videourl') || "";

    setsuwar(suwars);
    seturl(urls.url);
    setname(urls.name);
    setcategory(category.category);
    setarray(category.array);
    setdata(arab);
    setvideo(videos);
    settype(type);
    setvideourl(videourl);
  }, []);

  useEffect(() => {
    if (ahadithstatus === 'idle') {
      dispatch(fetchAhadith());
    }

    if (tfaseerstatus === 'idle') {
      dispatch(fetchtfaseer());
    }

    if (surahStatus === 'idle') {
      dispatch(fetchSurah());
    }

    if (doaaStatus === 'idle') {
      dispatch(fetchdoaa());
    }

    if (videoStatus === 'idle') {
      dispatch(fetchvideo());
    }

    if (nafhatStatus === 'idle') {
      dispatch(fetchnafhat());
    }
  }, [dispatch, ahadithstatus, tfaseerstatus, surahStatus, doaaStatus, videoStatus, nafhatStatus]);

  if (ahadithstatus === 'loading' || tfaseerstatus === 'loading') {
    return <> <div className='loading'></div> <div className='loading sconed'></div></>;
  }

  if (ahadithstatus === 'failed' || tfaseerstatus === 'failed') {
    return <div>خطأ: {error}</div>;
  }

  const getdata = (arab) => {
    setdata(arab);
    localStorage.setItem('arab', arab);
  };

  const getsuwar = (suwar) => {
    setsuwar(suwar);
    localStorage.setItem('suwars', JSON.stringify(suwar));
  };

  const geturl = (url, name) => {
    seturl(url);
    setname(name);
    localStorage.setItem('urls', JSON.stringify({ url: url, name: name }));
  };

  const getcategory = (category, array) => {
    setcategory(category);
    setarray(array);
    localStorage.setItem('category', JSON.stringify({ category: category, array: array }));
  };

  const getvideo = (videos) => {
    setvideo(videos);
    localStorage.setItem('videos', JSON.stringify(videos));
  };

  const gettype = (type) => {
    settype(type);
    localStorage.setItem('type', type);
  };

  const getvideourl = (videourl) => {
    setvideourl(videourl);
    localStorage.setItem('videourl', videourl);
  };

  return (
    <>
      <Outlet context={{ ahadith, getdata, data, surahList, getsuwar, tfaseer, suwar, geturl, url, name, doaaList, getcategory, category, array, videoList, nafhatList, getvideo, video, gettype, type, getvideourl, videourl }} />
      <div className="lists fixed bottom-0 w-full flex justify-around items-center bg-[#27a3bc] py-2">
        <Link to="/" className='rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc] w-3/12'>
          <h1>الرَّئِيسِيَّة</h1>
        </Link>
        <Link to="/Readers" className='rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc] w-3/12'>
          <h1>قُرْآنٌ كَرِيمٌ</h1>
        </Link>
        <Link to="/Azkar" className='rounded p-3 bg-[#74e0e7] text-center text-[#27a3bc] w-3/12'>
          <h1>مُنَوَّعات</h1>
        </Link>
      </div>
    </>
  );
}
