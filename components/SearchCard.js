import React from "react";
import { useUserContext } from "../context/userContext";

const SearchCard = ({ data }) => {
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
  const handleClick = () => {
    setAudioImg(data.image[2].link);
    setAudioSrc(data.downloadUrl[2].link);
    setAudioName(data.name);
    setArtist(data.artist);
    setYear(data.year);
    setPage("playingnow");
  };
  return (
    <div>
      <div data-aos="zoom-in" onClick={handleClick}>
        <img
          className=" hover:shadow-2xl transition-all hover:scale-105 shadow-xl w-[150px] md:w-36 active:scale-95 cursor-pointer rounded-xl sm:w-40"
          src={data.image[1].link}
          alt=""
        />
        <h1 className=" line-clamp-1 w-36   drop-shadow-xl font-semibold">
          {data.name}
        </h1>
      </div>
    </div>
  );
};

export default SearchCard;
