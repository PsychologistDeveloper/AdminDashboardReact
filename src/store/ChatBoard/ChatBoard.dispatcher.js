import { queryChatBoardTabs } from 'Queries/ChatBoard.queries';
import { updateActivePopupId } from 'Store/Popup/Popup.action';

import { setChatBoard, removeChatBoardTab } from './ChatBoard.action';

export const getChatBoardTabs = () => {
  queryChatBoardTabs();
};

export const addChatBoardTab = (dispatch, tabData) => {
  dispatch(setChatBoard(tabData));
  dispatch(updateActivePopupId(''));
};

export const deleteChatBoardTab = (dispatch, tabId) => {
  dispatch(removeChatBoardTab(tabId));
};
