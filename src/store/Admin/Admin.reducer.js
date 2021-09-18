import BrowserDatabase from 'Utils/BrowserDatabase';
import { ADMIN } from './Admin.dispatcher';

import {
  SET_ADMIN_EMAIL,
  SET_IS_LOGGED_IN,
} from './Admin.action';

const getInitialState = () => ({
  admin: BrowserDatabase.getItem(ADMIN) || null,
  isLoggedIn: !!BrowserDatabase.getItem(ADMIN),
});

export const AdminReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case SET_ADMIN_EMAIL:
      const { admin } = action;

      return {
        ...state,
        admin,
      };

    case SET_IS_LOGGED_IN:
      const { isLoggedIn } = action;

      return {
        ...state,
        isLoggedIn,
      };

    default:
      return state;
  }
};

export default AdminReducer;
