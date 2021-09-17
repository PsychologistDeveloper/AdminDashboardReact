import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';
import { getChatBoardTabs } from 'Store/ChatBoard/ChatBoard.dispatcher';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = () => ({
  getChatBoardTabs: () => getChatBoardTabs(),
});

export const ChatBoardPageContainer = (props) => {
  const { getChatBoardTabs } = props;

  const [activeTabId, setActiveTabId] = useState(0);

  useEffect(() => {
    getChatBoardTabs();
  });

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
  WithAuthRedirect,
)(ChatBoardPageContainer);
