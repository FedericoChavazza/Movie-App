import { combineReducers } from 'redux';

import { api } from 'services/api';
import movieSlice from './slices/movieSlice';


const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  movies: movieSlice,
});

export default rootReducer;
