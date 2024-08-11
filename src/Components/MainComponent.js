import React from "react";
import MovieTitle from "./MovieTitle";
import MovieVideo from "./MovieVideo";
import { useSelector } from "react-redux";
import SecondComponent from "./SecondComponent";

function MainComponent() {
  const movieResponse = useSelector((store) => store.movie.nowPlayingMovie);
  if (!movieResponse) return;

  const { original_title, overview } = movieResponse[0];
  return (
    <div>
      <MovieTitle title={original_title} info={overview} />
      <MovieVideo movieId={movieResponse[0].id} />
    </div>
  );
}

export default MainComponent;
