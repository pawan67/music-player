import React, { useState, useRef, useEffect } from "react";

import { HiPlay } from "react-icons/hi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { BsPauseCircleFill } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import Data from "../data.json";
const BottomPlayer = () => {
  const RandomNumber = Math.floor(Math.random() * 10);

  const [play, setPlay] = useState(false);
  const [currentSong, setCurrentSong] = useState(Data[1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentIndex]);
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
    if (currentIndex === 0) {
      setCurrentIndex(Data.length - 1);
      setCurrentSong(Data[Data.length - 1]);
      
    } else {
      setCurrentIndex(currentIndex - 1);
      setCurrentSong(Data[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex === Data.length - 1) {
      setCurrentIndex(0);
      setCurrentSong(Data[0]);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrentSong(Data[currentIndex + 1]);
    }
  };

  return (
    <div className="  drop-shadow-lg   glass fixed bottom-0 right-0 left-0 sm:left-60 backdrop-blur-md  h-16 sm:h-20 p-2 flex items-center justify-between lg:px-10 space-x-10 ">
      <div className=" w-80 items-center flex space-x-2">
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
      <div>
        <input
          className=" hidden md:w-[300px] lg:block xl:w-[800px] range range-xs"
          type="range"
        />
      </div>
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
