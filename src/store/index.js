import {
  combineReducers,
  createStore,
} from 'redux';

import AdminReducer from 'Store/Admin/Admin.reducer';
import TestReducer from './Test/Test.reducer';
import PopupReducer from './Popup/Popup.reducer';
import ChatBoardReducer from './ChatBoard/ChatBoard.reducer';
import NotificationReducer from './Notification/Notification.reducer';

const reducers = {
  TestReducer,
  AdminReducer,
  PopupReducer,
  ChatBoardReducer,
  NotificationReducer,
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
