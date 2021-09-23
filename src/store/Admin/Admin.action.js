export const SET_ADMIN_EMAIL = 'SET_ADMIN';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const SET_IS_GRAND_ADMIN = 'SET_IS_GRAND_ADMIN';

export const setAdmin = (admin) => ({
  type: SET_ADMIN_EMAIL,
  admin,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});

export const setIsGrandAdmin = (isGrandAdmin) => ({
  type: SET_IS_GRAND_ADMIN,
  isGrandAdmin,
});
