import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchCard from "./GptSearchCard";

function Search() {
  return (
    <div className="w-screen bg-black">
      <GptSearchBar />
      <GptSearchCard />
    </div>
  );
}

export default Search;
