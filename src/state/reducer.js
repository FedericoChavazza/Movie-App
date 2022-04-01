import { combineReducers } from 'redux';

import { api } from 'services/endpoints/reduxEndpoints';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
