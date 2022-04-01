import React, { useRef, useState, useEffect } from "react";
import { useUserContext } from "../context/userContext";
//BsFillPlayFill
import { BsPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Head from "next/head";
const AudioPlayer = () => {
  const {
    audioSrc,
    setAudioSrc,
    audioName,
    setAudioName,
    audioImg,
    setAudioImg,
    artist,
    setArtist,
    year,
    setYear,
  } = useUserContext();

  const audioRef = useRef(new Audio(audioSrc));
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { duration } = audioRef.current;
  console.log(duration);
  //useEffect
  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
    setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 500);
    return () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };
  }, [audioSrc]);
  const onScrub = (value) => {
    // Clear any timers already running
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  return (
    <div data-aos="fade-down">
      <Head>
        <title> Playing {audioName} </title>
      </Head>
      <div className=" xl:ml-24 2xl:ml-40 mt-10 2xl:mt-32 card lg:card-side bg-base-100 ">
        <figure>
          <img className=" w-[480px] rounded-lg" src={audioImg} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{audioName}</h2>
          <div className=" flex justify-between">
            <h1 className="  font-semibold">By {artist}</h1>
            <div className=" badge">{year}</div>
          </div>

          <div className=" mt-10 flex space-x-5 items-center">
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              onChange={(e) => onScrub(e.target.value)}
              className=" md:w-72 range range-sm"
              //   onMouseUp={onScrubEnd}
              //   onKeyUp={onScrubEnd}
            />
            {isPlaying ? (
              <BsFillPauseCircleFill
                onClick={() => {
                  setIsPlaying(false);
                  audioRef.current.pause();
                }}
                className=" text-3xl"
              />
            ) : (
              <BsPlayCircleFill
                onClick={() => {
                  setIsPlaying(true);
                  audioRef.current.play();
                }}
                className=" text-3xl"
              />
            )}
          </div>

          <div className="card-actions mt-10 justify-end">
            <a download href={audioSrc} className="btn btn-primary">
              <HiDownload className=" text-xl mr-2" /> Download song
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
