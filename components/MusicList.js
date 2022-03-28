import React from "react";

const MusicList = ({ data }) => {
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
      m !== 0
        ? m + (m == 1 ? " , " : " ") + (s != 0 ? " : " : "")
        : "";
    var sDisplay = s !== 0 ? s + (s == 1 ? " " : "  ") : "";
    return hDisplay + mDisplay + sDisplay;
  }
  return (
    <div>
      <div className=" active:scale-95 w-full pr-20 justify-between bg-base-300 p-2 rounded-lg mt-2 flex items-center ">
        <div className=" flex space-x-3 items-center ">
          <img className=" rounded-full  w-12  " src={data.imgSrc} alt="" />
          <div className=" font-semibold">{data.title}</div>
        </div>
        <div className=" hidden md:block font-semibold">{data.artist}</div>
        <div className=" hidden md:block font-semibold">
          {CalculateTime(data.time)}
        </div>
      </div>
    </div>
  );
};

export default MusicList;
