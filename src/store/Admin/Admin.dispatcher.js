import { setAdmin, setIsLoggedIn } from 'Store/Admin/Admin.action';
import { signInWithEmailAndPassword, logout as logoutQuery } from 'Queries/Auth.queries';
import BrowserDatabase from 'Utils/BrowserDatabase';

export const ADMIN = 'ADMIN';

export const login = async (dispatch, data) => {
  const {
    email: emailToSend,
    password,
  } = data;

  try {
    const {
      user: { email, uid },
    } = await signInWithEmailAndPassword(emailToSend, password);

    const admin = {
      email,
      uid,
    };

    dispatch(setAdmin(admin));
    dispatch(setIsLoggedIn(true));
    BrowserDatabase.setItem(ADMIN, admin);
  } catch (e) {
    console.log(e);
  }
};

export const logout = (dispatch) => {
  logoutQuery();

  dispatch(setAdmin(null));
  dispatch(setIsLoggedIn(false));
  BrowserDatabase.deleteItem(ADMIN);
};
