import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setActiveNavigationTab } from 'Store/ChatBoard/ChatBoard.action';

import { getQuestionsForTab } from 'Store/ChatBoard/ChatBoard.dispatcher';

import WithAuthRedirect from 'Hoc/WithAuthRedirect';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
  uid: state.AdminReducer.admin?.uid,
  admin: state.AdminReducer.admin,
});

export const mapDispatchToProps = (dispatch) => ({
  getQuestionsForTab: (tabId) => getQuestionsForTab(dispatch, tabId),
  setActiveNavigationTab: (tabId) => dispatch(setActiveNavigationTab(tabId)),
});

export const ChatBoardPageContainer = (props) => {
  const { getQuestionsForTab, setActiveNavigationTab } = props;

  const [activeTabId, setActiveTabId] = useState(null);

  function onTabClick(tabId) {
    setActiveTabId(tabId);
    setActiveNavigationTab(tabId);
    getQuestionsForTab(tabId);
  }

  const containerProps = () => ({
    activeTabId,
    setActiveTabId: onTabClick,
  });

  return (
    <ChatBoardPage {...containerProps()} />
  );
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect(),
)(ChatBoardPageContainer);
