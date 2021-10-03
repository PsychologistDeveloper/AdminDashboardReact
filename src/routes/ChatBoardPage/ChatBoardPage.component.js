import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { updateActivePopupId } from 'Store/Popup/Popup.action';

import ChatBoardAddTabPopup from 'Components/ChatBoardAddTabPopup';
import ChatBoardTabs from 'Components/ChatBoardTabs';
import ChatBoardQuestions from 'Components/ChatBoardQuestions';

import './ChatBoardPage.style.scss';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  updateActivePopupId: (activePopupId) => dispatch(updateActivePopupId(activePopupId)),
});

export const ChatBoardPage = (props) => {
  const { activeTabId, setActiveTabId } = props;

  return (

    <main
      className="ChatBoardPage"
      aria-label="chat-board-page"
    >
      <ChatBoardAddTabPopup />
      <ChatBoardTabs
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
      <ChatBoardQuestions
        activeTabId={activeTabId}
      />
    </main>
  );
};

export default compose(
  memo,
  connect(mapStateToProps, mapDispatchToProps),
)(ChatBoardPage);
