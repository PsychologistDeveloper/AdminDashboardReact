/* eslint-disable */
import React from 'react';
import { Redirect } from 'react-router-dom';

export const WithAuthRedirect = (path = '/auth') => (Component) => (props) => {
  const { isLoggedIn, isGrandAdmin } = props;

  // if (!isGrandAdmin) {
  //   return <Redirect to={path} />;
  // }

  if (!isLoggedIn) {
    return <Redirect to={path} />;
  }

  return <Component {...props} />;
};

export default WithAuthRedirect;
