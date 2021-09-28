import BrowserDatabase from 'Utils/BrowserDatabase/BrowserDatabase';
import {
  SET_ACTIVE_TAB,
} from './ChatBoard.action';

const SET_CHAT_BOARD = 'SET_CHAT_BOARD';
const REMOVE_CHAT_BOARD_TAB = 'REMOVE_CHAT_BOARD_TAB';

export const setChatBoard = (state, action) => {
  const { chatBoard: prevChatBoard } = state;
  const { chatBoard } = action;

  const newChatBoard = [
    ...prevChatBoard,
    {
      tab_id: prevChatBoard.length + 1,
      ...chatBoard,
    },
  ];

  return {
    ...state,
    chatBoard: newChatBoard,
  };
};

export const removeTabById = (state, action) => {
  const { tabId } = action;
  const { chatBoard } = state;

  const newChatBoard = chatBoard.filter(({ tab_id }) => tab_id !== tabId);

  return {
    ...state,
    chatBoard: newChatBoard,
  };
};

const getInitialState = () => ({
  chatBoard: [],
  activeTab: BrowserDatabase.getItem('activeTabId') || null,
});

export const ChatBoardReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case SET_CHAT_BOARD:
      return setChatBoard(state, action);

    case REMOVE_CHAT_BOARD_TAB:
      return removeTabById(state, action);

    case SET_ACTIVE_TAB:
      const { tabId } = action;

      return {
        ...state,
        activeTab: tabId,
      };

    default:
      return state;
  }
};

export default ChatBoardReducer;
