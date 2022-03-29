import React from "react";
import { useUserContext } from "../context/userContext";

const Card = ({ data }) => {
  const { songNum, setSongNum } = useUserContext();
  return (
    <>
      <div data-aos="zoom-in">
        <img
          onClick={() => setSongNum(data.id - 1)}
          className=" hover:shadow-2xl transition-all hover:scale-105 shadow-xl w-[150px] md:w-36 active:scale-95 cursor-pointer rounded-xl sm:w-40"
          src={data.imgSrc}
          alt=""
        />
        <h1 className="   drop-shadow-xl font-semibold">{data.title}</h1>
      </div>
    </>
  );
};

export default Card;
