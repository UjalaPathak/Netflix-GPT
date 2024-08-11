import React from "react";
import { CDN_API } from "../utils/constant";

function MovieCard({ posterPath }) {
  console.log("posterPath", posterPath);
  return (
    <div className="w-[200px] bg-slate-500 mr-2.5 ml-3 snap-start">
      <img src={CDN_API + posterPath} />
    </div>
  );
}

export default MovieCard;
