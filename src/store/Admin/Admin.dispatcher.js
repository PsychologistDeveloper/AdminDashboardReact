import { setAdmin, setIsLoggedIn } from 'Store/Admin/Admin.action';
import { signInWithEmailAndPassword, logout as logoutQuery } from 'Queries/Auth.queries';

export const login = (dispatch, data) => {
  const {
    email,
    password,
  } = data;

  signInWithEmailAndPassword(email, password);

  dispatch(setAdmin(email));
  dispatch(setIsLoggedIn(true));
};

export const logout = (dispatch) => {
  logoutQuery();

  dispatch(setAdmin(null));
  dispatch(setIsLoggedIn(false));
};
