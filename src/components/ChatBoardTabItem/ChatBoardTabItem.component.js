import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteButton from '@mui/icons-material/DeleteOutline';

import './ChatBoardTabItem.style.scss';

export const ChatBoardTabItem = (props) => {
  const {
    chatBoardItem: {
      tab_id,
      tab_name,
    },
    activeTabId,
    setActiveTabId,
    removeTab,
  } = props;

  return (
    <div
      role="button"
      className={`ChatBoardTabItem ${activeTabId === tab_id && 'ChatBoardTabItem_isActive'}`}
      onClick={() => setActiveTabId(tab_id)}
      tabIndex={0}
    >
      <p className="ChatBoardTabItem-TabName">
        { tab_name }
      </p>
      <IconButton onClick={() => removeTab(tab_id)} size="small">
        <DeleteButton />
      </IconButton>
    </div>
  );
};

export default ChatBoardTabItem;
