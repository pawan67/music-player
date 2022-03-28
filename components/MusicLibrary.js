import React from "react";
import MusicList from "./MusicList";
import Data from "../data.json";
import { useUserContext } from "../context/userContext";
const MusicLibrary = () => {
  const { isMenu } = useUserContext();
  return (
    <div
      className={` ${
        isMenu ? " blur-sm" : ""
      } absolute  sm:left-60 px-8 w-full md:w-auto sm:px-10 `}
    >
      <h1 className=" text-xl mt-10 sm:text-3xl font-bold">Your Songs</h1>

      <div className=" mt-10 ">
        {Data.map((items) => (
          <MusicList key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default MusicLibrary;
