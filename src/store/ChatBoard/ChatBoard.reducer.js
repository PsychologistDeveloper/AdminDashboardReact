import BrowserDatabase from 'Utils/BrowserDatabase/BrowserDatabase';
import { ACTIVE_TAB_ID } from 'Components/Nav/Nav.config';
import {
  SET_ACTIVE_TAB,
} from './ChatBoard.action';

const getInitialState = () => ({
  chatBoard: [],
  activeTab: BrowserDatabase.getItem(ACTIVE_TAB_ID) || null,
});

export const ChatBoardReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
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
