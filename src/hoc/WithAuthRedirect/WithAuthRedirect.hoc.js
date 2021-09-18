import React from 'react';
import { Redirect } from 'react-router-dom';

export const WithAuthRedirect = (Component) => (props) => {
  const { isLoggedIn } = props;

  if (!isLoggedIn) {
    return <Redirect to="/auth" />;
  }

  return <Component {...props} />;
};

export default WithAuthRedirect;
