import React, { useState, useRef, useEffect } from "react";

import { HiPlay } from "react-icons/hi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { BsPauseCircleFill } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import Data from "../data.json";
import { useUserContext } from "../context/userContext";
const BottomPlayer = () => {
  const {
    audioSrc,
    setAudioSrc,
    audioName,
    setAudioName,
    audioImg,
    setAudioImg,
    setPage,

    artist,
    setArtist,
    year,
    setYear,
  } = useUserContext();

  const RandomNumber = Math.floor(Math.random() * 10);
  const { songNum, setSongNum } = useUserContext();
  console.log(songNum);

  const [trackProgress, setTrackProgress] = useState(0);

  const [play, setPlay] = useState(false);
  const [currentSong, setCurrentSong] = useState(Data[songNum]);

  useEffect(() => {
    setCurrentSong(Data[songNum]);
    // setInterval(() => {
    //   setTrackProgress(audioRef.current.currentTime);
    // }, 500);
    audioRef.current.play();
    setPlay(true);
  }, [currentSong, songNum]);
  useEffect(() => {
    audioRef.current.pause();
    setPlay(false);
  }, []);
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (play) {
      audioRef.current.pause();

      setPlay(false);
    } else {
      audioRef.current.play();

      setPlay(true);
    }
  };

  const handlePrev = () => {
    if (songNum === 0) {
      setSongNum(Data.length - 1);
    } else {
      setSongNum(songNum - 1);
    }
  };
  const handleNext = () => {
    if (songNum === Data.length - 1) {
      setSongNum(0);
    } else {
      setSongNum(songNum + 1);
    }
  };
  // const audioRef = useRef(new Audio(currentSong.src));
  // const duration = audioRef.current.duration;

  const onScrub = (value) => {
    // Clear any timers already running
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };
  const handleClick = () => {
    setAudioImg(currentSong.imgSrc);
    setAudioSrc(currentSong.src);
    setAudioName(currentSong.title);
    setArtist(currentSong.artist);
    // setYear(data.year);
    setPage("playingnow");
  };
  
    useEffect(()=> {

      setInterval(() => {
        setTrackProgress(audioRef.current.currentTime);
      }, 10);
    },[audioRef.current])
  
  return (
    <div className="  z-50 drop-shadow-lg bg-base-200  fixed bottom-0 right-0 left-0 sm:left-60 backdrop-blur-md  h-[70px] sm:h-20 p-2 flex items-center justify-between px-5  lg:px-10 space-x-10 ">
      <div
        onClick={handleClick}
        className=" cursor-pointer hover:bg-base-300 p-1 rounded-lg w-80 items-center flex space-x-2"
      >
        <img
          className=" rounded-xl shadow-md h-10 sm:h-14"
          src={currentSong.imgSrc}
          alt=""
        />
        <div>
          <p className=" line-clamp-1 font-semibold sm:text-xl">
            {currentSong.title}
          </p>
          <p className=" line-clamp-1 text-xs sm:text-sm">
            {currentSong.artist}
          </p>
        </div>
      </div>
      {audioRef.current && (
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={
            audioRef.current.duration
              ? audioRef.current.duration
              : `${audioRef.current.duration}`
          }
          onChange={(e) => onScrub(e.target.value)}
          className=" hidden md:block xl:w-[600px] 2xl:w-[1500px] range range-sm"
          //   onMouseUp={onScrubEnd}
          //   onKeyUp={onScrubEnd}
        />
      )}

      <div className=" flex space-x-5 text-2xl">
        <IoPlaySkipBack
          className=" hover:scale-110  active:scale-95"
          onClick={handlePrev}
        />
        {play ? (
          <BsPauseCircleFill
            className=" hover:scale-110 active:scale-95"
            onClick={handlePlay}
          />
        ) : (
          <HiPlay
            className=" hover:scale-110  active:scale-95"
            onClick={handlePlay}
          />
        )}

        <IoPlaySkipForward
          className=" hover:scale-110   active:scale-95"
          onClick={handleNext}
        />
      </div>
      <div className=" text-2xl">
        <CgHeart />
      </div>
      <audio ref={audioRef} src={currentSong.src}></audio>
    </div>
  );
};

export default BottomPlayer;
