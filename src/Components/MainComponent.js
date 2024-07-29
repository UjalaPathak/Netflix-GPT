import React, { useEffect } from "react";
import MovieTitle from "./MovieTitle";
import MovieVideo from "./MovieVideo";
import { API_OPTIONS } from "../utils/constant";
import { useSelector } from "react-redux";

function MainComponent() {
  const movieResponse = useSelector((store) => store.movie.nowPlayingMovie);
  if (!movieResponse) return;
  console.log("movieResponse", movieResponse[0]);

  const { original_title, overview } = movieResponse[0];
  return (
    <div>
      <MovieTitle title={original_title} info={overview} />
      <MovieVideo movieId={movieResponse[0].id} />
    </div>
  );
}

export default MainComponent;
