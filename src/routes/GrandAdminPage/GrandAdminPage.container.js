import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import GrandAdminPageComponent from 'Routes/GrandAdminPage/GrandAdminPage.component';
import WithAuthRedirect from 'Hoc/WithAuthRedirect';

export const mapStateToProps = (state) => ({
  isGrandAdmin: state.AdminReducer.isGrandAdmin,
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const GrandAdminPageContainer = (props) => {
  const { isGrandAdmin } = props;

  if (!isGrandAdmin) {
    return <Redirect to="/" />;
  }

  return <GrandAdminPageComponent />;
};
export default compose(
  connect(mapStateToProps, null),
  WithAuthRedirect(),
)(GrandAdminPageContainer);
