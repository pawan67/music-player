import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div>
        <img
          className=" w-36 active:scale-95 cursor-pointer rounded-lg sm:w-40"
          src={data.imgSrc}
          alt=""
        />
        <h1 className=" font-semibold">{data.title}</h1>
      </div>
    </>
  );
};

export default Card;
