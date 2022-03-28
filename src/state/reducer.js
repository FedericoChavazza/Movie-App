import { combineReducers } from 'redux';

import { api } from 'services/endpoints/movieEndpoints';
import movieReducer from './slices/movieSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  movie: movieReducer,
});

export default rootReducer;
