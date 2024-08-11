import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

function MovieList({ heading, movies }) {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{heading}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex snap-x">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
