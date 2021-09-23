import React from 'react';
import GrandAdminPageComponent from 'Routes/GrandAdminPage/GrandAdminPage.component';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithAuthRedirect from 'Hoc/WithAuthRedirect';

export const mapStateToProps = (state) => ({
  isGrandAdmin: state.AdminReducer.isGrandAdmin,
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const GrandAdminPageContainer = () => (
  <GrandAdminPageComponent />
);
export default compose(
  connect(mapStateToProps, null),
  WithAuthRedirect('/'),
)(GrandAdminPageContainer);
