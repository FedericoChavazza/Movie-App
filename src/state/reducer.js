import { combineReducers } from 'redux';

import { api } from 'services/endpoints/reduxEndpoints';
import slice from './slices/slice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  reducer: slice,
});

export default rootReducer;
