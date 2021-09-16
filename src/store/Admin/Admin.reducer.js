import {
  SET_ADMIN_EMAIL,
} from './Admin.action';

const getInitialState = () => ({
  email: null,
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

    default:
      return state;
  }
};

export default AdminReducer;
