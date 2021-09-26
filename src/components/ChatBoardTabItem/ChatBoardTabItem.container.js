import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteChatBoardTab, updateChatBoard } from 'Store/ChatBoard/ChatBoard.dispatcher';

import {
  ADMIN_COLLECTION,
  CHAT_BOARDS_SUBCOLLECTION,
} from 'Utils/Constants/dbPathnames';

import ChatBoardTabItem from './ChatBoardTabItem.component';

export const mapStateToProps = (state) => ({
  adminDocId: state.AdminReducer.admin?.docId,
});

export const mapDispatchToProps = (dispatch) => ({
  removeChatBoardTab: (path, tabId) => deleteChatBoardTab(dispatch, path, tabId),
  updateChatBoardTitle: (path, tabId, tabData) => updateChatBoard(dispatch, path, tabId, tabData),
});

export const ChatBoardTabItemContainer = (props) => {
  const {
    tabName,
    adminDocId,
    updateChatBoardTitle,
    removeChatBoardTab,
  } = props;

  const [isEditting, setIsEditting] = useState(false);
  const [editValue, setEditValue] = useState(tabName);

  function getPath(tabId) {
    return `${ADMIN_COLLECTION}/${adminDocId}/${CHAT_BOARDS_SUBCOLLECTION}/${tabId}`;
  }

  function removeTab(tabId) {
    removeChatBoardTab(getPath(tabId), tabId);
  }

  async function editTab(tabId, tabData) {
    try {
      await updateChatBoardTitle(getPath(tabId), tabId, tabData);
      setIsEditting(false);
    } catch (e) {
      alert(e);
    }
  }

  function onEditChange(e) {
    setEditValue(e.target.value);
  }

  const containerFunctions = {
    removeTab,
    editTab,
    setIsEditting,
    onEditChange,
  };

  const containerProps = {
    ...props,
    isEditting,
    editValue,
  };

  return (
    <ChatBoardTabItem
      {...containerProps}
      {...containerFunctions}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardTabItemContainer);
