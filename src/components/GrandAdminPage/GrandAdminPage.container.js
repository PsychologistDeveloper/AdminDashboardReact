import React from 'react';
import GrandAdminPageComponent from 'Components/GrandAdminPage/GrandAdminPage.component';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithAuthRedirect from 'Hoc/WithAuthRedirect';

export const mapStateToProps = (state) => ({
  isGrandAdmin: state.AdminReducer.isGrandAdmin,
});

export const GrandAdminPageContainer = (props) => {
  return (
    <GrandAdminPageComponent />
  );
};
export default compose(
  connect(mapStateToProps, null),
  WithAuthRedirect('/'),
)(GrandAdminPageContainer);
