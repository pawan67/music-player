import React from "react";
import { useUserContext } from "../context/userContext";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "./AudioPlayer";
import { BsSearch } from "react-icons/bs";
const PlayingNow = () => {
  const { isMenu } = useUserContext();
  const {
    audioSrc,
    setAudioSrc,
    audioName,
    setAudioName,
    audioImg,
    setAudioImg,
    setPage,
  } = useUserContext();
  console.log(audioName);
  if (audioName == "") {
    return (
      <div
        className={` ${
          isMenu ? " blur-sm" : ""
        } absolute  flex justify-center  sm:left-60 px-8 sm:px-10`}
      >
        <div data-aos="fade-right" className=" mt-10 alert alert-info shadow-lg">
          <div>
            <span>This Player only plays songs from online search</span>
            <button onClick={() => setPage("search")} className="btn gap-2">
              <BsSearch /> Search Now
            </button>
          </div>
        </div>
      </div>
    );
  }
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
