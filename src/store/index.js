import {
  combineReducers,
  createStore,
} from 'redux';

import AdminReducer from 'Store/Admin/Admin.reducer';
import TestReducer from './Test/Test.reducer';
import PopupReducer from './Popup/Popup.reducer';

const reducers = {
  TestReducer,
  AdminReducer,
  PopupReducer,
};

export const store = createStore(
  combineReducers(reducers),
  ( // enable Redux dev-tools only in development
    process.env.NODE_ENV === 'development'
        && window.__REDUX_DEVTOOLS_EXTENSION__
  ) && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true,
  }),
);

export default store;
