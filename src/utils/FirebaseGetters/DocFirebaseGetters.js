import BrowserDatabase from 'Utils/BrowserDatabase';

import { ADMIN } from 'Store/Admin/Admin.dispatcher';

export const getAdminPath = () => {
  const { uid } = BrowserDatabase.getItem(ADMIN) || {};
  return [`admins/${uid}`, 'admin'];
};

export const getChatBoardTabPath = () => ['chat-board-tabs/someChatboard', 'chatBoard'];
