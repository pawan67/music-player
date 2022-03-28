import React from "react";
import { useUserContext } from "../context/userContext";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "./AudioPlayer";
const PlayingNow = () => {
  const { isMenu } = useUserContext();
  const {
    audioSrc,
    setAudioSrc,
    audioName,
    setAudioName,
    audioImg,
    setAudioImg,
  } = useUserContext();
  console.log(audioName);
  return (
    <div
      className={` ${
        isMenu ? " blur-sm" : ""
      } absolute  flex justify-center  sm:left-60 px-8 sm:px-10`}
    >
      <AudioPlayer />
    </div>
  );
};

export default PlayingNow;
