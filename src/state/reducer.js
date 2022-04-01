import { combineReducers } from 'redux';

import { api } from 'services/api';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,

});

export default rootReducer;
