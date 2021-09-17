import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = () => ({});

export const ChatBoardPageContainer = () => (
  <ChatBoardPage />
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect,
)(ChatBoardPageContainer);
