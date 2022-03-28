import React from "react";
import SearchCard from "./SearchCard";

const SearchResults = ({ data }) => {
  console.log(data);
  if (data.length === 0) {
    return (
      <div>
        <div className=" text-xl  text-center mt-20 alert alert-error">
          Aww.. Sorry no results found
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className=" justify-center md:justify-start transition-all mt-5  flex gap-5 flex-wrap">
        {data.map((data) => (
          <SearchCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
