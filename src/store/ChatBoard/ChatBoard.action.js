export const SET_CHAT_BOARD = 'SET_CHAT_BOARD';
export const REMOVE_CHAT_BOARD_TAB = 'REMOVE_CHAT_BOARD_TAB';

export const setChatBoard = (chatBoard) => ({
  type: SET_CHAT_BOARD,
  chatBoard,
});

export const removeChatBoardTab = (tabId) => ({
  type: REMOVE_CHAT_BOARD_TAB,
  tabId,
});
