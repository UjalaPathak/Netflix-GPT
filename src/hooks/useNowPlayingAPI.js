import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";

function useNowPlayingAPI() {
  const dispatch = useDispatch();
  const getNoWPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNoWPlaying();
  }, []);
  return null;
}

export default useNowPlayingAPI;
