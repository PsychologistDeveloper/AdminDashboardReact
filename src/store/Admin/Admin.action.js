export const SET_ADMIN_EMAIL = 'SET_ADMIN';

export const setAdmin = (email) => ({
  type: SET_ADMIN_EMAIL,
  email,
});
