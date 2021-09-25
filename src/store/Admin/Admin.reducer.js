import BrowserDatabase from 'Utils/BrowserDatabase';
import { ADMIN } from './Admin.dispatcher';

import {
  SET_ADMIN_EMAIL,
  SET_IS_LOGGED_IN,
  SET_IS_GRAND_ADMIN,
} from './Admin.action';

const getInitialState = () => ({
  admin: BrowserDatabase.getItem(ADMIN) || null,
  isLoggedIn: !!BrowserDatabase.getItem(ADMIN),
  isGrandAdmin: false,
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

    case SET_IS_GRAND_ADMIN:
      const { isGrandAdmin } = action;

      return {
        ...state,
        isGrandAdmin,
      };

    default:
      return state;
  }
};

export default AdminReducer;
