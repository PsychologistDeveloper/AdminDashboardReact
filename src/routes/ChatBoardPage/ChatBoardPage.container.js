/* eslint-disable */
import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  WithUseDocData,
  WithUseCollectionData,
} from 'Hoc/Firebase';
import WithAuthRedirect from 'Hoc/WithAuthRedirect';
import {
  getAdminPath,
  getChatBoardTabPath,
  getChatBoardTabsPath,
} from 'Utils/FirebaseGetters';

import ChatBoardPage from './ChatBoardPage.component';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = () => ({});

export const ChatBoardPageContainer = (props) => {
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
  WithUseDocData([
    getAdminPath(),
    getChatBoardTabPath(),
  ]),
  WithUseCollectionData([
    getChatBoardTabsPath(),
  ]),
  WithAuthRedirect('/'),
)(ChatBoardPageContainer);
