import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondComponent() {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black w-screen -mt-70 relative z-10">
      {movies.nowPlayingMovie && (
        <MovieList heading={"Now Playing"} movies={movies.nowPlayingMovie} />
      )}
      {movies.popularMovie && (
        <MovieList heading={"Popular Movies"} movies={movies.popularMovie} />
      )}
    </div>
  );
}

export default SecondComponent;
