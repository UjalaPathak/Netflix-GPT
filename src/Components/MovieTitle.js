import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
function MovieTitle({ title, info }) {
  return (
    <div className=" w-screen aspect-video pt-[20%] absolute bg-gradient-to-r from-black">
      <h1 className="px-20  font-bold text-white text-6xl p-2 tracking-tight">
        {title}
      </h1>
      <p className="px-20 w-2/3  text-white break-words text-lg">{info}</p>
      <div className="px-20 pt-5">
        <button className="bg-white  text-black p-3 px-12  text-xl hover:bg-opacity-30">
          <FontAwesomeIcon
            icon={faPlay}
            style={{ margin: "0 10px", color: "black" }}
          />
          Play
        </button>

        <button className="ml-5 bg-gray-500 p-3 px-12  text-xl">
          <FontAwesomeIcon icon={faCircleInfo} style={{ margin: "0 10px" }} />
          More Info
        </button>
      </div>
    </div>
  );
}

export default MovieTitle;
