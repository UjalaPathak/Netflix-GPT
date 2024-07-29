import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import useNowPlayingAPI from "../hooks/useNowPlayingAPI";
import MainComponent from "./MainComponent";

const Browser = () => {
  useNowPlayingAPI();

  return (
    <div>
      <Header />
      <MainComponent />
    </div>
  );
};

export default Browser;
