import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateActivePopupId } from 'Store/Popup/Popup.action';
import { CHATBOARD_ADD_TAB_POPUP } from 'Components/ChatBoardAddTabPopup/ChatBoardAddTabPopup.config';

import ChatBoardTabItem from './ChatBoardTabs.component';

export const mapStateToProps = (state) => ({
  chatBoards: state.AdminReducer.chatBoards,
});

export const mapDispatchToProps = (dispatch) => ({
  openPopup: (popupId) => dispatch(updateActivePopupId(popupId)),
});

export const ChatBoardTabItemContainer = (props) => {
  const { openPopup, chatBoards } = props;

  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setTabs(chatBoards);
    }, 1000);
  });

  function onAddTabClick() {
    openPopup(CHATBOARD_ADD_TAB_POPUP);
  }

  const containerFunctions = {
    onAddTabClick,
  };

  const containerProps = {
    ...props,
    tabs,
  };

  return (
    <ChatBoardTabItem
      {...containerProps}
      {...containerFunctions}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardTabItemContainer);
