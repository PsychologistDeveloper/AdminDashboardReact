import {
  SET_CHAT_BOARD,
  REMOVE_CHAT_BOARD_TAB,
} from './ChatBoard.action';

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

    default:
      return state;
  }
};

export default ChatBoardReducer;
