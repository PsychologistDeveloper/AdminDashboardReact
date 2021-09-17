import {
  SET_ADMIN_EMAIL,
  SET_IS_LOGGED_IN,
} from './Admin.action';

const getInitialState = () => ({
  email: null,
  isLoggedIn: false,
});

export const AdminReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case SET_ADMIN_EMAIL:
      const { email } = action;

      return {
        ...state,
        email,
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
