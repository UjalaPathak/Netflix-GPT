import React from "react";

function GptSearchBar() {
  return (
    <div className="pt-[20%]">
      <form className="">
        <input className="p-4 m-4" type="text" placeholder="Search MOvies " />
        <button className="py-2 px-4 bg-red-700 text-white">Search</button>
      </form>
    </div>
  );
}

export default GptSearchBar;
