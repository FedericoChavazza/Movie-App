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
    setStoreMovies(state, { payload }) {
      state.moviesData = { ...state.moviesData, [payload.category]: payload };
    },
  },
});

export const { setStoreMovies } = movieSlice.actions;

export default movieSlice.reducer;
