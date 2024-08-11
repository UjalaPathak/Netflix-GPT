import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    nowPlayingMovieVideo: null,
    popularMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addNowPlayingMovieVideo: (state, action) => {
      state.nowPlayingMovieVideo = action.payload;
    },
    addpopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addNowPlayingMovieVideo, addpopularMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
