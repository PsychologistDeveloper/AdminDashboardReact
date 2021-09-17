import React from 'react';
import { connect } from 'react-redux';

import { deleteChatBoardTab } from 'Store/ChatBoard/ChatBoard.dispatcher';

import ChatBoardTabItem from './ChatBoardTabItem.component';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  removeChatBoardTab: (tabId) => deleteChatBoardTab(dispatch, tabId),
});

export const ChatBoardTabItemContainer = (props) => {
  const { removeChatBoardTab } = props;

  function removeTab(tabId) {
    removeChatBoardTab(tabId);
  }

  const containerFunctions = {
    removeTab,
  };

  return (
    <ChatBoardTabItem
      {...props}
      {...containerFunctions}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardTabItemContainer);
