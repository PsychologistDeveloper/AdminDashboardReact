import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import CustomersPage from './CustomersPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = () => ({});

export const CustomersPageContainer = () => (
  <CustomersPage />
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect('/'),
)(CustomersPageContainer);
