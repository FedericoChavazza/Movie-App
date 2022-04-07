import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesData: {
    discover: {
      loaded: false,
      data: [],
    },
    trending: {
      loaded: false,
      data: [],
    },
    top_rated: {
      loaded: false,
      data: [],
    },
  },
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setDiscover(state, { payload }) {
      state.moviesData = { ...state.moviesData, discover: payload };
    },
    setTrending(state, { payload }) {
      state.moviesData = { ...state.moviesData, trending: payload };
    },
    setTopRated(state, { payload }) {
      state.moviesData = { ...state.moviesData, top_rated: payload };
    },
  },
});

export const { setDiscover, setTopRated, setTrending } = movieSlice.actions;

export default movieSlice.reducer;
