import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
  uid: state.AdminReducer.admin?.uid,
  admin: state.AdminReducer.admin,
});

export const mapDispatchToProps = () => ({
  someDispatch: (data) => console.log('from some dispatch', data),
});

export const ChatBoardPageContainer = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const containerProps = () => ({
    activeTabId,
    setActiveTabId,
  });

  return (
    <ChatBoardPage {...containerProps()} />
  );
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect(),
)(ChatBoardPageContainer);
