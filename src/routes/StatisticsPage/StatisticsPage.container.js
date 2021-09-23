import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import StatisticsPage from './StatisticsPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = () => ({});

export const StatisticsPageContainer = () => (
  <StatisticsPage />
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect('/'),
)(StatisticsPageContainer);
