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
  const [isLoading, setIsLoading] = useState(false);

  function onChange(e) {
    const { target: { value } } = e;
    setTabAddInputVal(value);
  }

  function addTab() {
    const path = `${ADMIN_COLLECTION}/${adminDocId}/${CHAT_BOARDS_SUBCOLLECTION}`;

    setIsLoading(true);
    addChatBoardTab(path, { name: tabAddInputVal });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTabAddInputVal('');
  }

  const containerProps = () => ({
    tabAddInputVal,
    isLoading,
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
