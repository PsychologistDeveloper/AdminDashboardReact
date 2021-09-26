/* eslint-disable */
import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ChatBoardSkeleton from 'Components/Skeletons/ChatBoardSkeleton/ChatBoardSkeleton';

import ChatBoardTabItem from 'Components/ChatBoardTabItem';

import './ChatBoardTabs.style.scss';

export const ChatBoardTabs = (props) => {
  const {
    activeTabId,
    setActiveTabId,
    onAddTabClick,
    tabs,
  } = props;

  function renderBoardTabItems() {
    return tabs.map(({ data, id }) => {
      const { name } = data;

      return (
        <ChatBoardTabItem
          key={id}
          tabName={name}
          tabId={id}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
          count="3"
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
        <span>Add Tab</span>
      </IconButton>
    );
  }

  function renderContent() {
    if (!tabs) {
      return <ChatBoardSkeleton />
    }

    return (
      <div className="ChatBoardTabs">
        { renderBoardTabItems() }
        { renderAddBoardItemBtn() }
      </div>
    );
  }

  return renderContent();

};
export default ChatBoardTabs;
