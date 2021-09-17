import React from 'react';
import Loader from 'Components/Loader';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import ChatBoardTabItem from 'Components/ChatBoardTabItem';

import './ChatBoardTabs.style.scss';

export const ChatBoardTabs = (props) => {
  const {
    activeTabId,
    setActiveTabId,
    onAddTabClick,
    chatBoard,
  } = props;

  function renderBoardTabItems() {
    if (!chatBoard) {
      // need to return placeholder
      return null;
    }

    return chatBoard.map((
      chatBoardItem,
    ) => {
      const { tab_name } = chatBoardItem;

      return (
        <ChatBoardTabItem
          key={tab_name}
          chatBoardItem={chatBoardItem}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
      );
    });
  }

  function renderAddBoardItemBtn() {
    return (
      <IconButton
        className="ChatBoardTabs-AddBtn"
        onClick={onAddTabClick}
      >
        <AddIcon />
      </IconButton>
    );
  }

  return (
    <div className="ChatBoardTabs">
      <Loader isLoading={!chatBoard} />
      { renderBoardTabItems() }
      { renderAddBoardItemBtn() }
    </div>
  );
};
export default ChatBoardTabs;
