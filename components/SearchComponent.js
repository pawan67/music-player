import { useUserContext } from "../context/userContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

const SearchComponent = () => {
  const { page, setPage, isMenu } = useUserContext();

  return (
    <div>
      <div
        className={` ${
          isMenu ? " blur-sm" : ""
        } absolute mt-5   sm:left-60 px-8 sm:px-10`}
      >
        <div className=" flex sm:space-x-10">
          <div className=" hidden lg:block space-x-3">
            <button className="btn btn-circle">
              <AiOutlineArrowLeft />
            </button>
            <button className="btn btn-circle btn-outline">
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search songs and artists"
                className="input w-[70vw]  md:w-[300px] lg:w-[500px]  xl:w-[700px] input-bordered"
              />
              <button className="btn btn-square">
                <BiSearchAlt />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-10 gap-5">
          <div className=" relative shadow-md hover:brightness-110 transition-all bg-[#8d67ab] w-80 h-40 rounded-lg">
            <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
              Top Songs
            </h1>
            <img
              className="hover:rotate-6 transition-all absolute bottom-5 right-5  w-28 rotate-12 "
              src="/images/search1.jpg"
              alt=""
            />
          </div>
          <div className=" relative shadow-md hover:brightness-110 transition-all bg-[#f037a5] w-80 h-40 rounded-lg">
            <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
              Pop Mix
            </h1>
            <img
              className="hover:rotate-6 transition-all absolute bottom-5 right-5  w-28 rotate-12 "
              src="/images/search3.jpg"
              alt=""
            />
          </div>
          <div className=" relative shadow-md hover:brightness-110 transition-all bg-[#148a08] w-80 h-40 rounded-lg">
            <h1 className=" absolute top-5 left-5 text-white font-bold text-2xl ">
              Rockeras
            </h1>
            <img
              className=" absolute bottom-5 right-5 hover:rotate-6 transition-all  w-28 rotate-12 "
              src="/images/search2.jpg"
              alt=""
            />
          </div>
          <div className=" relative shadow-md hover:brightness-110 transition-all bg-[#19e68c] w-80 h-40 rounded-lg">
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
    </div>
  );
};

export default SearchComponent;
