import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
function MovieTitle({ title, info }) {
  return (
    <div className="pt-20">
      <h1>{title}</h1>
      <p>{info}</p>
      <div className="px-20">
        <button className="bg-black  text-white p-2 m-3 rounded-lg">
          <FontAwesomeIcon icon={faPlay} style={{ margin: "0 10px" }} />
          Play
        </button>

        <button className="bg-gray-500 p-2 rounded-lg">
          <FontAwesomeIcon icon={faCircleInfo} style={{ margin: "0 10px" }} />
          More Info
        </button>
      </div>
    </div>
  );
}

export default MovieTitle;
