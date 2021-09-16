import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setAdmin } from 'Store/Admin/Admin.action';
import { auth } from 'Utils/Firebase';
import { logout } from 'Queries/Auth.queries';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';
import MainPage from './MainPage.component';

export const mapStateToProps = (state) => ({
  email: state.AdminReducer.email,
});

export const mapDispatchToProps = (dispatch) => ({
  setAdmin: (data) => dispatch(setAdmin(data)),
});

export const MainPageContainer = (props) => {
  const { setAdmin } = props;
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return false;
    }

    console.log(user);

    if (user) {
      setAdmin(user.email);
      history.replace('/');
    } else {
      setAdmin(null);
      history.replace('/auth');
    }
  }, [user, loading]);

  function signOut() {
    logout();

    setAdmin(null);

    history.replace('/auth');
  }

  return (
    <MainPage
      logout={signOut}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
