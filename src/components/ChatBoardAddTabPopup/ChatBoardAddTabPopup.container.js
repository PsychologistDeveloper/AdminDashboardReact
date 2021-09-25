import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addChatBoardTab } from 'Store/ChatBoard/ChatBoard.dispatcher';
import {
  ADMIN_COLLECTION,
  CHAT_BOARDS_SUBCOLLECTION,
} from 'Utils/Constants/dbPathnames';

import ChatBoardAddTabPopup from './ChatBoardAddTabPopup.component';

export const mapStateToProps = (state) => ({
  adminDocId: state.AdminReducer.admin?.docId,
});

export const mapDispatchToProps = (dispatch) => ({
  addChatBoardTab: (path, tabData) => addChatBoardTab(dispatch, path, tabData),
});

export const ChatBoardAddTabPopupContainer = (props) => {
  const { addChatBoardTab, adminDocId } = props;

  const [tabAddInputVal, setTabAddInputVal] = useState('');

  function onChange(e) {
    const { target: { value } } = e;
    setTabAddInputVal(value);
  }

  function addTab() {
    const path = `${ADMIN_COLLECTION}/${adminDocId}/${CHAT_BOARDS_SUBCOLLECTION}`;

    addChatBoardTab(path, { name: tabAddInputVal });
    setTabAddInputVal('');
  }

  const containerProps = () => ({
    tabAddInputVal,
  });

  const containerFunctions = {
    onChange,
    addTab,
  };

  return (
    <ChatBoardAddTabPopup
      {...props}
      {...containerProps()}
      {...containerFunctions}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardAddTabPopupContainer);
