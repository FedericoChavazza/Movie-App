import { combineReducers } from 'redux';

import { api } from 'services/api';
import movieSlice from './slices/movieSlice';
import { ImdbApi } from 'services/ImdbApi';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [ImdbApi.reducerPath]: ImdbApi.reducer,
  movies: movieSlice,
});

export default rootReducer;
