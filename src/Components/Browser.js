import React from "react";
import Header from "./Header";
import useNowPlayingAPI from "../hooks/useNowPlayingAPI";
import MainComponent from "./MainComponent";
import SecondComponent from "./SecondComponent";
import usePopularAPI from "../hooks/usePopularAPI";
import ShowGPTSearch from "./Search";
import { useSelector } from "react-redux";
import Search from "./Search";

const Browser = () => {
  useNowPlayingAPI();
  usePopularAPI();

  const showGPT = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div>
      <Header />
      {showGPT ? (
        <Search />
      ) : (
        <>
          <MainComponent />
          <SecondComponent />
        </>
      )}
    </div>
  );
};

export default Browser;
