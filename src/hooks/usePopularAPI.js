import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addpopularMovie } from "../utils/movieSlice";

const usePopularAPI = () => {
  const dispatch = useDispatch();
  const popular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addpopularMovie(data.results));
  };

  useEffect(() => {
    popular();
  }, []);
};

export default usePopularAPI;
