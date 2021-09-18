import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { login } from 'Store/Admin/Admin.dispatcher';
import AuthPage from './AuthPage.component';

export const mapStateToProps = (state) => ({
  admin: state.AdminReducer.admin,
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = (dispatch) => ({
  login: (loginData) => login(dispatch, loginData),
});

export const AuthPageContainer = (props) => {
  const { login, isLoggedIn } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);

    login({
      email: 'rtgtrgtr@gmail.com',
      password: 'Magento777',
    });
    // signInWithEmailAndPassword(data.get('email'), data.get('password'));
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <AuthPage handleSubmit={handleSubmit} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
