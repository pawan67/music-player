import React from "react";
import BottomPlayer from "./BottomPlayer";
import Data from "../data.json";
import Card from "./Card";
import MusicList from "./MusicList";
import { useUserContext } from "../context/userContext";

const Container = () => {
  const { isMenu } = useUserContext();

  return (
    <div
      className={` ${
        isMenu ? " blur-sm" : ""
      } absolute  sm:left-60 px-8 sm:px-10`}
    >
      <h1 className=" text-xl mt-5 sm:text-3xl font-bold">Home</h1>
      <div className=" justify-center md:justify-start transition-all mt-5  flex gap-5 flex-wrap">
        {Data.slice(5, 23).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div>
        <h1 className=" text-xl mt-10 sm:text-3xl font-bold">All Songs</h1>

        <div className=" mt-10 ">
          {Data.map((items) => (
            <MusicList key={items.id} data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
