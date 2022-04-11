import { useUserContext } from "../context/userContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import SearchTrend from "./SearchTrend";
import SearchResults from "./SearchResults";
const SearchComponent = () => {
  const { page, setPage, isMenu } = useUserContext();
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    if (text == "") {
      alert("Please enter a search term");
    } else {
      setLoading(true);
      axios
        .get(`https://saavn.me/search/songs?query=${text}&page=1`)
        .then((response) => setData(response.data.results))
        .finally(() => setLoading(false));
    }
  };
  return (
    <div>
      <div
        className={` ${
          isMenu ? " blur-sm" : ""
        } absolute mt-5   sm:left-60 px-8 sm:px-10`}
      >
        <div className=" flex sm:space-x-10">
          <div className=" hidden lg:block space-x-3">
            <button onClick={() => setPage("")} className="btn btn-circle">
              <AiOutlineArrowLeft />
            </button>
            <button
              onClick={() => setPage("musiclib")}
              className="btn btn-circle btn-outline"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="form-control">
            <div className="  input-group">
              <form onSubmit={handleSearch}>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="Search songs and artists"
                  className="input w-[70vw]  md:w-[300px] lg:w-[500px]  xl:w-[700px] input-bordered "
                />
                <button type="submit" className=" btn btn-square ">
                  <BiSearchAlt />
                </button>
              </form>
            </div>
          </div>
        </div>

        {data === null ? (
          loading ? (
            <div className=" mt-10 font-semibold alert">
              <button className="btn btn-square loading"></button>
              Hang on buddy your data is loading
            </div>
          ) : (
            <SearchTrend />
          )
        ) : (
          <SearchResults data={data} />
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
