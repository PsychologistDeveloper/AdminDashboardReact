import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addChatBoardTab } from 'Store/ChatBoard/ChatBoard.dispatcher';

import ChatBoardAddTabPopup from './ChatBoardAddTabPopup.component';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  addChatBoardTab: (tabData) => addChatBoardTab(dispatch, tabData),
});

export const ChatBoardAddTabPopupContainer = (props) => {
  const { addChatBoardTab } = props;

  const [tabAddInputVal, setTabAddInputVal] = useState('');

  function onChange(e) {
    const { target: { value } } = e;
    setTabAddInputVal(value);
  }

  function addTab() {
    addChatBoardTab({ tab_name: tabAddInputVal });
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
