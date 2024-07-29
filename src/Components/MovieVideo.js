import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovieVideo } from "../utils/movieSlice";

function MovieVideo({ movieId }) {
  const dispatch = useDispatch();
  const getNoWPlayingVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovieVideo(json.results));
  };

  useEffect(() => {
    getNoWPlayingVideo();
  }, [movieId]);
  return <div>MovieVideo</div>;
}

export default MovieVideo;
