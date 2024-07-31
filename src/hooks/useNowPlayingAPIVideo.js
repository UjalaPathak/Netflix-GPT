import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovieVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingAPIVideo = (movieId) => {
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
  }, []);
};
export default useNowPlayingAPIVideo;
