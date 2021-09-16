import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setAdmin } from 'Store/Admin/Admin.action';
import { auth } from 'Utils/Firebase';
import { signInWithEmailAndPassword } from 'Queries/Auth.queries';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';
import AuthPage from './AuthPage.component';

export const mapStateToProps = (state) => ({
  email: state.AdminReducer.email,
});

export const mapDispatchToProps = (dispatch) => ({
  setAdmin: (data) => dispatch(setAdmin(data)),
});

export const AuthPageContainer = (props) => {
  const { setAdmin, email } = props;
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword('rtgtrgtr@gmail.com', 'Magento777');
  };

  useEffect(() => {
    if (loading) {
      return false;
    }

    console.log(user);

    if (user) {
      setAdmin(user.email);

      history.replace('/');
    }
  }, [user, loading]);

  return (
    <AuthPage
      handleSubmit={handleSubmit}
      email={email}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
