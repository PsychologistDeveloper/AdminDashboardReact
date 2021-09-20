import BrowserDatabase from 'Utils/BrowserDatabase';

import { ADMIN } from 'Store/Admin/Admin.dispatcher';

export const getAdminPath = () => {
  const adminId = BrowserDatabase.getItem(ADMIN).uid;
  return [`admins/${adminId}`, 'admin'];
};

export const getChatBoardTabPath = () => ['chat-board-tabs/someChatboard', 'chatBoard'];
