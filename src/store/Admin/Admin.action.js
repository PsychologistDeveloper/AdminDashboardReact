export const SET_ADMIN_EMAIL = 'SET_ADMIN';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';

export const setAdmin = (email) => ({
  type: SET_ADMIN_EMAIL,
  email,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});
