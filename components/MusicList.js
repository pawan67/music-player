import React from "react";
import { useRef } from "react";
import { useUserContext } from "../context/userContext";

const MusicList = ({ data }) => {
  const { setSongNum } = useUserContext();
  function CalculateTime(sec) {
    if (sec >= 0) {
      var h = Math.floor(sec / 3600);
      var m = Math.floor((sec % 3600) / 60);
      var s = Math.floor((sec % 3600) % 60);
    } else {
      var h = Math.ceil(sec / 3600);
      var m = Math.ceil((sec % 3600) / 60);
      var s = Math.ceil((sec % 3600) % 60);
    }

    var hDisplay =
      h !== 0
        ? h + (h == 1 ? " hour, " : " hours") + (m != 0 || s > 0 ? ", " : "")
        : "";
    var mDisplay =
      m !== 0 ? m + (m == 1 ? " , " : " ") + (s != 0 ? " : " : "") : "";
    var sDisplay = s !== 0 ? s + (s == 1 ? " " : "  ") : "";
    return hDisplay + mDisplay + sDisplay + "s";
  }
 

  return (
    <div
      data-aos="flip-down"
      onClick={() => setSongNum(data.id - 1)}
      className=" hover:bg-base-200 transition-all font-semibold flex items-center cursor-pointer rounded-xl w-full h-16 md:px-5   my-2"
    >
      
      <div className=" hidden md:block">{data.id}</div>
      <div className=" flex items-center space-x-7">
        <img
          className=" w-12 rounded-xl ml-2 md:ml-12"
          src={data.imgSrc}
          alt=""
        />
        <div>
          <div className=" w-40">{data.title}</div>
          <div className=" text-sm font-medium md:hidden">{data.artist}</div>
        </div>
      </div>
      <div className=" hidden lg:block lg:10 xl:ml-28 2xl:ml-56 w-56">
        {data.artist}
      </div>
      <div className=" hidden xl:block w-20 ml-32">
        {CalculateTime(data.time)}
      </div>
      <div className=" hidden md:block 2xl:ml-32 hover:bg-base-300 p-3 rounded-lg">
        Play now
      </div>
    </div>
  );
};

export default MusicList;
