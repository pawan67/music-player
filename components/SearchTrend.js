import React from "react";

const SearchTrend = () => {
  return (
    <div>
      <div className=" mt-10 text-xl font-semibold">
        The search results mostly will be Indian songs
      </div>
      <div  className=" flex flex-wrap mt-10 gap-5">
        <div data-aos="zoom-in" className=" relative shadow-md hover:brightness-110 transition-all bg-[#8d67ab] w-80 h-40 rounded-lg">
          <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
            Top Songs
          </h1>
          <img
            className="hover:rotate-6 transition-all absolute bottom-5 right-5  w-28 rotate-12 "
            src="/images/search1.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className=" relative shadow-md hover:brightness-110 transition-all bg-[#f037a5] w-80 h-40 rounded-lg">
          <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
            Pop Mix
          </h1>
          <img
            className="hover:rotate-6 transition-all absolute bottom-5 right-5  w-28 rotate-12 "
            src="/images/search3.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className=" relative shadow-md hover:brightness-110 transition-all bg-[#148a08] w-80 h-40 rounded-lg">
          <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
            Rockeras
          </h1>
          <img
            className=" absolute bottom-5 right-5 hover:rotate-6 transition-all  w-28 rotate-12 "
            src="/images/search2.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className=" relative shadow-md hover:brightness-110 transition-all bg-[#19e68c] w-80 h-40 rounded-lg">
          <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
            K-Pop
          </h1>
          <img
            className="hover:rotate-6 transition-all absolute bottom-5 right-5  w-28 rotate-12 "
            src="/images/search4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchTrend;
