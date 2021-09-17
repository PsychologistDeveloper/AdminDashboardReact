import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { logout } from 'Store/Admin/Admin.dispatcher';
import WithAuthRedirect from 'Hoc/WithAuthRedirect';
import MainPage from './MainPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout(dispatch)),
});

export const MainPageContainer = (props) => {
  const { logout } = props;

  function signOut() {
    logout();
  }

  return (
    <MainPage
      logout={signOut}
    />
  );
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect,
)(MainPageContainer);
