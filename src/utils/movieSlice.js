import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    nowPlayingMovieVideo: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addNowPlayingMovieVideo: (state, action) => {
      state.nowPlayingMovieVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addNowPlayingMovieVideo } =
  movieSlice.actions;
export default movieSlice.reducer;
