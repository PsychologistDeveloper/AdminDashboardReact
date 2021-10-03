/* eslint-disable */
import React from 'react';
import ChatBoardSkeleton from 'Components/Skeletons/ChatBoardSkeleton/ChatBoardSkeleton';
import WithChatBoardRenders from 'Hoc/WithChatBoardRenders';

import ChatBoardTabItem from 'Components/ChatBoardTabItem';

import './ChatBoardTabs.style.scss';

export const ChatBoardTabs = (props) => {
  const {
    activeTabId,
    setActiveTabId,
    onAddTabClick,
    renderAddItemBtn,
    tabs,
  } = props;

  function renderBoardTabItems() {
    return tabs.map(renderBoardTabItem);
  }

  function renderBoardTabItem({ data, id }) {
    const { name } = data;

    return (
      <ChatBoardTabItem
        key={id}
        tabName={name}
        tabId={id}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
    );
  }

  function renderTabsSection() {
    if (!tabs) {
      return <ChatBoardSkeleton />
    }

    return (
      <div className="ChatBoardTabs-TabsSection">
        { renderBoardTabItems() }
      </div>
    );
  }

  function renderContent() {
    return (
      <>
        { renderAddItemBtn('Add Tab', onAddTabClick) }
        { renderTabsSection() }
      </>
    );
  }

  return (
    <div className="ChatBoardTabs">
      { renderContent() }
    </div>
  );
};

export default WithChatBoardRenders(ChatBoardTabs);
